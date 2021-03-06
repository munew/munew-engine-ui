const _ = require("lodash");
const Ajv = require("ajv");
const uuidv4 = require('uuid/v4');

const retailerSchema = require("../schemas/retailer.json");
const producerSchema = require("../schemas/producer.json");
const taskSchema = require("../schemas/task.json");
const UnknownData = require("../data_models/UnknownData");
const { logUnknownDataToDB } = require("./db");
const logger = require("./logger");
const { PRODUCER_STATE, RETAILER_STATE } = require("./constants");
const { CustomError } = require('./error');
/**
 * Get a number value. If it doesn't contain valid number value, then return NaN
 * @param {*} val
 * @returns {number|NaN}
 */
function getNumber(val) {
  // ignore following error
  if (val === "—" || !val) {
    // In some property they don't have Bathrooms information, and it set to -
    return NaN;
  }
  // if it is string, then try to get number value from string
  if (typeof val === "string") {
    let num = val.match(/([+-]?[\s]*[\d]+[\d,\.\s]*)/) || [];
    num = num[0];
    if (!num) {
      logAnUnKnownData(`[getNumber][Cannot Convert String to Number][${val}]`, {
        val
      });
      return NaN;
    } else {
      // remove , and \s
      num = num.replace(/[,\s]/g, "");
      return parseFloat(num);
    }
  } else if (typeof val === "number") {
    return val;
  } else if (typeof val === "boolean") {
    if (val) {
      return 1;
    }
    return 0;
  } else {
    logger.error(`[getNumber] fail. Val: %s`, val);
    return NaN;
  }
}

/**
 *  Encode a string to base64
 *
 * @param {*} str - string want to encode, if it isn't a string, will automatically convert to a string
 * @return {string} - base64 string
 */
function btoa(str) {
  // if it is undefined or null, direct return back
  if (str === undefined || str === null) {
    return str;
  }

  // if it is object, then json stringify
  if (typeof str === "object") {
    str = JSON.stringify(str);
  } else {
    str = str.toString();
  }
  return Buffer.from(str).toString("base64");
}

/**
 *  Decode a base64 to a string
 *
 * @param {*} str - base64 string want to decode
 * @return {string} - string
 */
function atob(str) {
  return Buffer.from(str, "base64").toString("ascii");
}

/**
 * Warning: We will not log same message to DB, for same message, latest one will overwrite old one. So if you want to keep both, make message is different.
 * @param {String} message - Description message for this unknown data
 * @param {Object} [metadata] - Additional Data want log to DB.
 * @param {Error Stack} [errorStack] - Error stack.
 */
async function logAnUnKnownData(message, metadata, errorStack) {
  try {
    let unknownData = new UnknownData();
    unknownData.globalId = btoa(message);
    unknownData.message = message;
    unknownData.metadata = metadata || {};
    if (!errorStack) {
      unknownData.stack = new Error().stack;
    } else {
      unknownData.stack = errorStack;
    }
    return await logUnknownDataToDB(unknownData.serialize());
  } catch (err) {
    // since this isn't effect function, so don't need to block code flow
    console.error(`logAnUnKnownData fail. `, err);
    return false;
  }
}

/**
 * Get UTC timestamp of a specific time in today. Default return "00:01:00"
 * @param {string} [timeString] - Specific time in today you want to get UTC timestamp. Format should looks like "00:10:11"
 * @returns {number} - UTC timestamp
 */
function getTodaySpecificTimeUTCTimestamp(timeString) {
  if (!timeString) {
    timeString = "00:01:00";
  }
  let date = new Date();
  return Date.parse(
    `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}, ${timeString} UTC`
  );
}

/**
 * Deeply omit keys.
 * @example
  let obj = {
  	stack: 'stack1',
  	message: 'message1',
  	pro1: {
		stack:'stack2',
		message: 'message2',
		pro1: {
			stack:'stack3',
			message: 'message3',
			pro1: {
				stack:'stack4',
				message: 'message4',
				pro2: {
					name: 'name1'
				}
			}
		}
	  },
	  pro2: {
		stack:'stack2',
		message: 'message2',
		pro1: {
			stack:'stack3',
			message: 'message3',
			pro1: {
				stack:'stack4',
				message: 'message4',
			}
		}
  	}
  }

  omit(obj, ['stack', 'name'], ['pro1', 'pro2'])

  result 
  {
	"message": "message1",
	"pro1": {
		"message": "message2",
		"pro1": {
		"message": "message3",
		"pro1": {
			"message": "message4",
			"pro2": {}
			}
		}
	},
	"pro2": {
		"message": "message2",
		"pro1": {
			"message": "message3",
			"pro1": {
				"message": "message4"
			}
		}
	}
  }
 * @param {object} obj - obj need to be omitted, after omit it will return a new object 
 * @param {array} omitKeys - Array of keys that need to be omitted
 * @param {array} iterateKeys - Array of keys for property need to search
 * 
 * @returns{object}
 */
function omit(obj, omitKeys, iterateKeys) {
  if (typeof obj != "object" || !omitKeys || !iterateKeys) {
    return obj;
  }
  obj = _.omit(obj, omitKeys);
  iterateKeys.forEach(key => {
    if (obj[key]) {
      obj[key] = omit(obj[key], omitKeys, iterateKeys);
    }
  });
  return obj;
}

/**
 * Validate Result
 * @typedef {Object} ValidateResult
 * @property {boolean} valid - true: valid, false: invalid
 * @property {array} errors - Ajv validation errors. Read more detail in [Validation Errors](https://github.com/epoberezkin/ajv#validation-errors)
 */

/**
 * Based on Producer Schema to validate an producer
 * @param {object} producerData - producer data want to be validate
 * @returns {ValidateResult}
 */
function validateProducer(producerData) {
  var ajv = new Ajv();
  let valid = ajv.validate(producerSchema, producerData);
  return {
	  valid,
	  errors: ajv.errors
  };
}

/**
 * Based on Task Schema to validate an task
 * @param {object} taskData - task data want to be validated
 * @returns {ValidateResult}
 */
function validateTask(taskData) {
  var ajv = new Ajv();
  let valid = ajv.validate(taskSchema, taskData);
  return {
	  valid,
	  errors: ajv.errors
  };
}

/**
 * Based on Retailer Schema to validate a Retailer
 * @param {object} retailerData - producer data want to be validate
 * @returns {ValidateResult}
 */
function validateRetailer(retailerData) {
  var ajv = new Ajv();
  let valid = ajv.validate(retailerSchema, retailerData);
  return {
	  valid,
	  errors: ajv.errors
  };
}

/**
 * Based on Producer Schema to validate producer and update producer state.
 * If producer state is active, then 
 * @param {object} producerData - producer data want to validate
 * @returns {object} - return validate producer with state be updated to correct
 */
function validateProducerAndUpdateState(producerData) {
  // Default to set producer state to draft, since producer state is required.
  // It is useful for new producer that need to be registered
  if (!producerData.system.state) {
    producerData.system.state = PRODUCER_STATE.draft;
  }
  // for **deleted** status don't need to validate
  // TODO: maybe need to retrun warning, when need then can change
  if( _.toUpper(producerData.system.state) === _.toUpper(PRODUCER_STATE.deleted)){
    return producerData;
  }
  let validateResult = validateProducer(producerData);
  // for active state, don't change its state
  if(_.toUpper(producerData.system.state) === _.toUpper(PRODUCER_STATE.active)){
    if (!validateResult.valid) {
      // for active state, but it isn't valid, then this means something wrong, throw error
      throw new CustomError(null, {producerData}, '00004000001', producerData.globalId);
    }
    // if it is valid, then don't need to change state
  }else{
    if (validateResult.valid) {
      producerData.system.state = _.toUpper(PRODUCER_STATE.configured);
    } else {
      producerData.system.state = _.toUpper(PRODUCER_STATE.draft);
    }
  }
  return producerData;
}

/**
 * Based on Retailer Schema to validate Retailer and update Retailer state.

 * @param {object} retailerData - Retailer data want to validate
 * @returns {object} - return validate retailer with state be updated to correct
 */
function validateRetailerAndUpdateState(retailerData) {
  // Default to set Retailer state to draft, since Retailer state is required.
  // It is useful for new Retailer that need to be registered
  if (!retailerData.system.state) {
    retailerData.system.state = RETAILER_STATE.draft;
  }
  // for **deleted** status don't need to validate
  // TODO: maybe need to retrun warning, when need then can change
  if( _.toUpper(retailerData.system.state) === _.toUpper(retailerData.deleted)){
    return retailerData;
  }
  let validateResult = validateRetailer(retailerData);
  console.log("validateRetailerAndUpdateState->retailerData: ", JSON.stringify(retailerData));
  console.log("validateRetailerAndUpdateState->validateResult: ", JSON.stringify(validateResult));
  // for active state, don't change its state
  if(_.toUpper(retailerData.system.state) === _.toUpper(RETAILER_STATE.active)){
    if (!validateResult.valid) {
      // for active state, but it isn't valid, then this means something wrong, throw error
      // throw new CustomError(null, {retailerData}, '00004000001', retailerData.globalId);
      retailerData.system.state = _.toUpper(RETAILER_STATE.draft);
    }
    // if it is valid, then don't need to change state
  }else{
    if (validateResult.valid) {
      retailerData.system.state = _.toUpper(RETAILER_STATE.configured);
    } else {
      retailerData.system.state = _.toUpper(RETAILER_STATE.draft);
    }
  }
  return retailerData;
}

function generateGlobalId(entityType){
  let id = uuidv4();
  // if(!entityType){
  //   entityType = "bitsky-bitsky";
  // }
  // id = `${entityType}::${Date.now()}::${id}`;
  // id = btoa(id);
  return id;
}

function convertStringToRegExp(inputstring){
  var regParts = inputstring.match(/^\/(.*?)\/([gim]*)$/);
  if (regParts) {
      // the parsed pattern had delimiters and modifiers. handle them. 
      var regex = new RegExp(regParts[1], regParts[2]);
  } else {
      // we got pattern string without delimiters
      var regex = new RegExp(inputstring);
  }
  return regex;
}

module.exports = {
  getNumber,
  btoa,
  atob,
  generateGlobalId,
  logAnUnKnownData,
  getTodaySpecificTimeUTCTimestamp,
  omit,
  validateProducer,
  validateProducerAndUpdateState,
  validateTask,
  validateRetailer,
  validateRetailerAndUpdateState,
  convertStringToRegExp
};
