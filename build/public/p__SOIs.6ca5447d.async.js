(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"0VuZ":function(e,t,a){"use strict";var s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a("Hx5s"),r=s(a("q1tI")),n=s(a("ASzm")),o=function(){return r.default.createElement(l.PageHeaderWrapper,null,r.default.createElement(n.default,null))};t.default=o},ASzm:function(e,t,a){"use strict";var s=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SoisNew=void 0,a("g9YV");var r=l(a("wCAj"));a("14J3");var n=l(a("BMrR"));a("Pwec");var o=l(a("CtXQ"));a("jCWc");var i=l(a("kPKH"));a("R9oj");var d=l(a("ECub"));a("P2fV");var u=l(a("NJEC"));a("+L6B");var c=l(a("2/Rp"));a("miYZ");var p=l(a("tsqr")),f=l(a("2Taf")),m=l(a("vZ4D")),g=l(a("l4Ni")),S=l(a("ujKo")),h=l(a("MhPg")),E=l(a("fFZ8"));a("lv4E");var v=a("Y2fQ"),M=s(a("q1tI")),I=(l(a("17x9")),l(a("LlRK"))),y=a("MuoO"),b=(l(a("Wgwc")),l(a("vOnD"))),O=l(a("KP/F")),w=l(a("WYIA")),D=a("sovp"),P=a("uSbk");function k(){var e=(0,E.default)(["\n  padding: 100px 0;\n"]);return k=function(){return e},e}var C=b.default.div(k()),R={margin:"0 10px 0 0"},x=function(e){function t(e){var a;return(0,f.default)(this,t),a=(0,g.default)(this,(0,S.default)(t).call(this,e)),a.state={loadingData:!0,selectedRowKeys:[],drawerVisiable:!1,selectedSOI:void 0},a}return(0,h.default)(t,e),(0,m.default)(t,[{key:"onRegisterSOI",value:function(){this.setState({drawerVisiable:!0,selectedSOI:void 0})}},{key:"onShowDrawer",value:function(e){this.setState({drawerVisiable:!0,selectedSOI:e})}},{key:"onCloseDrawer",value:function(){this.setState({drawerVisiable:!1,selectedSOI:void 0})}},{key:"onPreventShowDrawer",value:function(e){e.preventDefault(),e.stopPropagation()}},{key:"onDeleteASOI",value:function(e,t){var a=this;t.preventDefault(),t.stopPropagation(),(0,P.deleteASOIAPI)(e.globalId).then(function(){a.props.dispatch((0,D.refreshSOIs)());var e=(0,v.formatMessage)({id:"app.containers.Sois.deleteSOISuccessful"});p.default.success(e)},function(e){p.default.error(e)})}},{key:"onPingSOI",value:function(e,t){var a=this;t.preventDefault(),t.stopPropagation(),(0,P.pingSOIAPI)(e.globalId).then(function(){a.props.dispatch((0,D.refreshSOIs)());var e=(0,v.formatMessage)({id:"app.containers.Sois.pingSuccessful"});p.default.success(e)},function(e){p.default.error(e)})}},{key:"onClickCancel",value:function(e,t){t.preventDefault(),t.stopPropagation(),console.log("onClickCancel: ",e)}},{key:"onClickDelete",value:function(e,t){t.preventDefault(),t.stopPropagation(),console.log(e)}},{key:"initSoisData",value:function(){var e=this;this.setState({loadingData:!0}),(0,P.getSOIs)().then(function(t){e.setState({loadingData:!0}),e.props.dispatch((0,D.refreshSOIsSuccess)(t))},function(t){e.setState({loadingData:!0}),e.props.dispatch((0,D.refreshSOIsFail)(t))})}},{key:"componentDidMount",value:function(){this.initSoisData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.loadingData,s=t.drawerVisiable,l=t.selectedSOI,p=t.selectedRowKeys,f=this.props.soisData.data,m=this.props.soisData.modifiedAt,g=M.default.createElement(O.default,null),S=[{title:(0,v.formatMessage)({id:"app.containers.Sois.soiName"}),dataIndex:"name"},{title:(0,v.formatMessage)({id:"app.containers.Sois.baseURL"}),dataIndex:"baseURL"},{title:(0,v.formatMessage)({id:"app.containers.Sois.status"}),dataIndex:"system.state"},{title:"Action",dataIndex:"",key:"x",render:function(t,a){return M.default.createElement("div",{onClick:function(t){e.onPreventShowDrawer(t)}},M.default.createElement(c.default,{size:"small",style:R,title:(0,v.formatMessage)({id:"app.containers.Sois.pingDescription"}),onClick:function(t){e.onPingSOI(a,t)}},(0,v.formatMessage)({id:"app.containers.Sois.ping"})),M.default.createElement(u.default,{style:{maxWidth:"300px"},title:(0,v.formatMessage)({id:"app.containers.Sois.deleteSOIDescription"}),onConfirm:function(t){e.onDeleteASOI(a,t)},onCancel:function(t){e.onClickCancel(a,t)},okText:(0,v.formatMessage)({id:"app.common.messages.yes"}),cancelText:(0,v.formatMessage)({id:"app.common.messages.no"})},M.default.createElement(c.default,{size:"small",style:R,onClick:function(t){e.onClickDelete(a,t)}},(0,v.formatMessage)({id:"app.common.messages.delete"}))))}}];return a&&(g=f&&f.length?M.default.createElement("div",{className:"sois-table-container"},M.default.createElement("div",{style:{padding:"0 24px"}},M.default.createElement("div",{style:{paddingBottom:"15px"}},M.default.createElement(n.default,null,M.default.createElement(i.default,{span:14},M.default.createElement(c.default,{onClick:function(){e.onRegisterSOI()},type:"primary"},(0,v.formatMessage)({id:"app.containers.Sois.registerNow"}))),M.default.createElement(i.default,{span:10,style:{textAlign:"right"}},M.default.createElement(c.default,{type:"link",onClick:function(){return e.initSoisData()}},M.default.createElement(I.default,{date:m}),M.default.createElement(o.default,{type:"sync",style:{verticalAlign:"middle",marginLeft:"5px"}}))))),M.default.createElement("div",{style:{backgroundColor:"white"}},M.default.createElement(r.default,{bordered:!0,pagination:!1,rowClassName:function(e){var t=!1;return p.forEach(function(a){a===e._id&&(t=!0)}),t?"selected-row":""},columns:S,rowSelection:{selectedRowKeys:p,type:"radio",onSelect:function(t){e.setState({selectedRowKeys:[t._id]}),e.onShowDrawer(t)}},dataSource:f,rowKey:function(e){return e._id},onRow:function(t){return{onClick:function(){e.setState({selectedRowKeys:[t._id]}),e.onShowDrawer(t)}}}})))):M.default.createElement(C,null,M.default.createElement(d.default,{description:M.default.createElement("span",null,M.default.createElement(v.FormattedHTMLMessage,{id:"app.containers.Sois.emptySOIs"}))},M.default.createElement(c.default,{type:"primary",onClick:function(){e.onRegisterSOI()}},(0,v.formatMessage)({id:"app.containers.Sois.registerNow"}))))),M.default.createElement("div",null,g,M.default.createElement(w.default,{visiable:s,onCloseDrawer:function(){e.onCloseDrawer()},soi:l,dispatch:this.props.dispatch}))}}]),t}(M.default.Component);t.SoisNew=x;var T=(0,y.connect)(function(e){var t=e.sois;return{soisData:t}})(x);t.default=T},"DGh+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.REFRESH_SOIS_FAIL=t.REFRESH_SOIS_SUCCESS=t.REFRESH_SOIS=void 0;var s="sois/refreshSois";t.REFRESH_SOIS=s;var l="sois/refreshSoisSuccess";t.REFRESH_SOIS_SUCCESS=l;var r="sois/refreshSoisFail";t.REFRESH_SOIS_FAIL=r},"KP/F":function(e,t,a){"use strict";var s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,a("cWXX");var l=s(a("/ezw")),r=s(a("q1tI"));function n(){return r.default.createElement("div",{style:{padding:"0 24px"}},r.default.createElement(l.default,{title:!1,active:!0,paragraph:{width:"100%",rows:6}}))}},WYIA:function(e,t,a){"use strict";var s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var l=s(a("/wGt"));a("+L6B");var r=s(a("2/Rp"));a("14J3");var n=s(a("BMrR"));a("jCWc");var o=s(a("kPKH"));a("OaEy");var i=s(a("2fM7"));a("y8nQ");var d=s(a("Vl3Y"));a("5NDa");var u=s(a("5rEg")),c=s(a("p0pE")),p=s(a("d6i3"));a("miYZ");var f=s(a("tsqr")),m=s(a("1l/V")),g=s(a("2Taf")),S=s(a("vZ4D")),h=s(a("l4Ni")),E=s(a("ujKo")),v=s(a("MhPg")),M=s(a("fFZ8"));a("tU7J");var I=s(a("wFql")),y=a("Y2fQ"),b=(s(a("17x9")),s(a("q1tI"))),O=s(a("LvDl")),w=s(a("vOnD")),D=a("+n12"),P=a("sovp"),k=a("uSbk");function C(){var e=(0,M.default)(["\n  padding: 5px 0;\n  margin-bottom: 0 !important;\n"]);return C=function(){return e},e}var R=I.default.Paragraph,x=(0,w.default)(R)(C()),T={marginBottom:0},F=function(e){function t(){var e,a;(0,g.default)(this,t);for(var s=arguments.length,l=new Array(s),r=0;r<s;r++)l[r]=arguments[r];return a=(0,h.default)(this,(e=(0,E.default)(t)).call.apply(e,[this].concat(l))),a.state={sending:!1},a.registerSOI=function(e){e.preventDefault(),a.setState({sending:!0}),a.props.form.validateFieldsAndScroll(function(){var e=(0,m.default)(p.default.mark(function e(t,s){var l;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=23;break}if(e.prev=1,!a.props.soi){e.next=9;break}return s.globalId=a.props.soi.globalId,e.next=6,(0,k.updateSOI)(s);case 6:a.props.dispatch((0,P.refreshSOIs)()),e.next=12;break;case 9:return e.next=11,(0,k.registerASOI)(s);case 11:a.props.dispatch((0,P.refreshSOIs)());case 12:l=(0,y.formatMessage)({id:"app.containers.Sois.registerSOISuccessful"}),f.default.success(l),a.setState({sending:!1}),a.props.onCloseDrawer(),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](1),a.setState({sending:!1});case 21:e.next=24;break;case 23:a.setState({sending:!1});case 24:case"end":return e.stop()}},e,null,[[1,18]])}));return function(t,a){return e.apply(this,arguments)}}())},a}return(0,v.default)(t,e),(0,S.default)(t,[{key:"render",value:function(){var e=this.props.form,t=e.getFieldsValue,a=e.getFieldDecorator,s=e.isFieldsTouched,p=this.props.soi,f=!0,m=(0,y.formatMessage)({id:"app.containers.Sois.drawerTitle"}),g=(0,y.formatMessage)({id:"app.containers.Sois.registerNow"});if(this.props.soi&&this.props.soi.globalId&&(m=(0,y.formatMessage)({id:"app.containers.Sois.drawerTitleUpdate"}),g=(0,y.formatMessage)({id:"app.common.messages.save"})),s()){var S=t();S.globalId=p&&p.globalId,S=(0,c.default)({},p,S),S=(0,D.filterOutEmptyValue)(S),p=(0,D.filterOutEmptyValue)(p),f=!!O.default.isEqual(S,p)}return b.default.createElement("div",null,b.default.createElement(l.default,{destroyOnClose:!0,title:m,width:720,onClose:this.props.onCloseDrawer,visible:this.props.visiable},b.default.createElement("p",null,(0,y.formatMessage)({id:"app.containers.Sois.registerSOIDescription"})),b.default.createElement(d.default,{layout:"vertical",style:{paddingBottom:"35px"}},b.default.createElement(d.default.Item,{label:(0,y.formatMessage)({id:"app.containers.Sois.soiName"}),style:T},a("name",{initialValue:this.props.soi&&this.props.soi.name,rules:[{required:!0,message:(0,y.formatMessage)({id:"app.containers.Sois.soiNamePlaceholder"})},{min:3,max:20,message:(0,y.formatMessage)({id:"app.containers.Sois.soiNameInvalid"})}]})(b.default.createElement(u.default,{placeholder:(0,y.formatMessage)({id:"app.containers.Sois.soiNameExample"})})),b.default.createElement(x,null,(0,y.formatMessage)({id:"app.containers.Sois.soiNameDescription"}))),this.props.soi?b.default.createElement(d.default.Item,{label:(0,y.formatMessage)({id:"app.containers.Sois.globalId"}),style:T},a("globalId",{rules:[]})(b.default.createElement(R,{copyable:!0},this.props.soi.globalId)),b.default.createElement(x,null,b.default.createElement(y.FormattedHTMLMessage,{id:"app.containers.Sois.globalIdDescription"}))):"",b.default.createElement(d.default.Item,{label:(0,y.formatMessage)({id:"app.containers.Sois.baseURL"}),style:T},a("baseURL",{initialValue:this.props.soi&&this.props.soi.baseURL,rules:[{required:!0,message:(0,y.formatMessage)({id:"app.containers.Sois.baseURLEmptyError"})},{pattern:/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)([a-z0-9\.])*(:[0-9]{1,5})?(\/.*)?$/i,message:(0,y.formatMessage)({id:"app.containers.Sois.baseURLEmptyError"})}]})(b.default.createElement(u.default,{placeholder:(0,y.formatMessage)({id:"app.containers.Sois.baseURLExample"})})),b.default.createElement(x,null,b.default.createElement(y.FormattedHTMLMessage,{id:"app.containers.Sois.baseURLDescription"}))),b.default.createElement("h3",null,b.default.createElement(y.FormattedMessage,{id:"app.containers.Sois.callbackSectionTitle"})),b.default.createElement("p",null,b.default.createElement(y.FormattedHTMLMessage,{id:"app.containers.Sois.callbackDescription"})),b.default.createElement(n.default,{gutter:16},b.default.createElement(o.default,{span:8},b.default.createElement(d.default.Item,{label:(0,y.formatMessage)({id:"app.containers.Sois.httpMethod"}),style:T},a("callback.method",{initialValue:O.default.get(this,"props.soi.callback.method","POST"),rules:[{required:!0,message:(0,y.formatMessage)({id:"app.containers.Sois.httpMethodPlaceHolder"})}]})(b.default.createElement(i.default,{placeholder:(0,y.formatMessage)({id:"app.containers.Sois.httpMethodPlaceHolder"})},b.default.createElement(i.default.Option,{value:"GET"},"GET"),b.default.createElement(i.default.Option,{value:"POST"},"POST"),b.default.createElement(i.default.Option,{value:"PUT"},"PUT"),b.default.createElement(i.default.Option,{value:"DELETE"},"DELETE"))),b.default.createElement(x,null,b.default.createElement(y.FormattedHTMLMessage,{id:"app.containers.Sois.httpMethodDescription"})))),b.default.createElement(o.default,{span:16},b.default.createElement(d.default.Item,{label:(0,y.formatMessage)({id:"app.common.messages.urlPath"}),style:T},a("callback.path",{initialValue:O.default.get(this,"props.soi.callback.path","/apis/intelligences"),rules:[{required:!0,message:(0,y.formatMessage)({id:"app.common.messages.urlPathPlaceHolder"})}]})(b.default.createElement(u.default,{placeholder:(0,y.formatMessage)({id:"app.common.messages.urlPathPlaceHolder"})})),b.default.createElement(x,null,b.default.createElement(y.FormattedHTMLMessage,{id:"app.common.messages.urlPathDescription"}))))),b.default.createElement("h3",null,b.default.createElement(y.FormattedMessage,{id:"app.common.messages.healthTitle"})),b.default.createElement("p",null,b.default.createElement(y.FormattedHTMLMessage,{id:"app.containers.Sois.healthDescription"})),b.default.createElement(n.default,{gutter:16},b.default.createElement(o.default,{span:8},b.default.createElement(d.default.Item,{label:(0,y.formatMessage)({id:"app.containers.Sois.httpMethod"}),style:T},a("health.method",{initialValue:O.default.get(this,"props.soi.health.method","GET"),rules:[{required:!0,message:(0,y.formatMessage)({id:"app.containers.Sois.httpMethodPlaceHolder"})}]})(b.default.createElement(i.default,{placeholder:(0,y.formatMessage)({id:"app.containers.Sois.httpMethodPlaceHolder"})},b.default.createElement(i.default.Option,{value:"GET"},"GET"),b.default.createElement(i.default.Option,{value:"POST"},"POST"),b.default.createElement(i.default.Option,{value:"PUT"},"PUT"),b.default.createElement(i.default.Option,{value:"DELETE"},"DELETE"))),b.default.createElement(x,null,b.default.createElement(y.FormattedHTMLMessage,{id:"app.containers.Sois.httpMethodDescription"})))),b.default.createElement(o.default,{span:16},b.default.createElement(d.default.Item,{label:(0,y.formatMessage)({id:"app.common.messages.urlPath"}),style:T},a("health.path",{initialValue:O.default.get(this,"props.soi.health.path","/health"),rules:[{required:!0,message:(0,y.formatMessage)({id:"app.common.messages.urlPathPlaceHolder"})}]})(b.default.createElement(u.default,{placeholder:(0,y.formatMessage)({id:"app.common.messages.urlPathPlaceHolder"})})),b.default.createElement(x,null,b.default.createElement(y.FormattedHTMLMessage,{id:"app.common.messages.urlPathDescription"})))))),b.default.createElement("div",{style:{position:"absolute",left:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},b.default.createElement(r.default,{onClick:this.props.onCloseDrawer,style:{marginRight:8}},b.default.createElement(y.FormattedMessage,{id:"app.common.messages.cancel"})),b.default.createElement(r.default,{disabled:f,loading:this.state.sending,onClick:this.registerSOI,type:"primary"},g))))}}]),t}(b.default.Component),_=d.default.create()(F);t.default=_},lv4E:function(e,t,a){e.exports={"selected-row":"antd-pro-containers-sois-style.css-selected-row"}},sovp:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.refreshSOIs=l,t.refreshSOIsSuccess=r,t.refreshSOIsFail=n;var s=a("DGh+");function l(){return{type:s.REFRESH_SOIS}}function r(e){return{type:s.REFRESH_SOIS_SUCCESS,payload:e}}function n(e){return{type:s.REFRESH_SOIS_FAIL,error:e}}}}]);