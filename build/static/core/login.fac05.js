webpackJsonp([42],{381:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(131),r=t.n(a),o=t(132),l=t.n(o),i=t(135),s=t.n(i),c=t(134),m=t.n(c),u=t(133),_=t.n(u),d=t(64),g=t.n(d),f=t(708),p=(t.n(f),t(609)),E=t(411),h=t(130),b=(t.n(h),E.Form.Item),v=function(e){function n(){return l()(this,n),m()(this,(n.__proto__||r()(n)).apply(this,arguments))}return _()(n,e),s()(n,[{key:"render",value:function(){this.props.form.getFieldDecorator;return g.a.createElement("div",{id:"login",className:"flex-center"},g.a.createElement("div",{className:"login-form "},g.a.createElement("div",{className:"flex-henter flexImg"},g.a.createElement("img",{src:t(595)})),g.a.createElement(p.a,null)))}}]),n}(g.a.Component),T=E.Form.create()(v);n.default=T;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"FormItem","C:/code/zhangdong/client/views/login/login.jsx"),__REACT_HOT_LOADER__.register(v,"Login","C:/code/zhangdong/client/views/login/login.jsx"),__REACT_HOT_LOADER__.register(T,"default","C:/code/zhangdong/client/views/login/login.jsx"))}()},410:function(e,n){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},411:function(e,n,t){e.exports=t(11)(512)},447:function(e,n,t){e.exports=t.p+"img/19990.c4121.jpg"},587:function(e,n,t){e.exports={default:t(588),__esModule:!0}},588:function(e,n,t){var a=t(93),r=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},594:function(e,n,t){e.exports=t.p+"img/login1.741bc.jpg"},595:function(e,n,t){e.exports=t.p+"img/logo2.f258f.jpg"},607:function(e,n,t){"use strict";var a=t(131),r=t.n(a),o=t(132),l=t.n(o),i=t(135),s=t.n(i),c=t(134),m=t.n(c),u=t(133),_=t.n(u),d=t(64),g=t.n(d),f=t(608),p=t(130),E=(t.n(p),t(411)),h=E.Form.Item,b=function(e){function n(){var e,t,a,o;l()(this,n);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return t=a=m()(this,(e=n.__proto__||r()(n)).call.apply(e,[this].concat(s))),a.handleSubmit=function(){var e;return(e=a).__handleSubmit__REACT_HOT_LOADER__.apply(e,arguments)},o=t,m()(a,o)}return _()(n,e),s()(n,[{key:"__handleSubmit__REACT_HOT_LOADER__",value:function(){return this.__handleSubmit__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleSubmit__REACT_HOT_LOADER__",value:function(e){e.preventDefault(),this.props.form.validateFieldsAndScroll(function(e,n){e||(t.i(f.a)("mail",n.mail),console.log(t.i(f.b)("mail")),"test"===n.mail&&123456==n.password&&123456==n.confirm?p.hashHistory.push("/creative"):alert("登录失败"))})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return g.a.createElement("div",{className:"tabForm",style:{marginTop:30}},g.a.createElement(E.Form,{className:"from-container"},g.a.createElement("div",{className:"item"},g.a.createElement(h,null,e("mail",{rules:[{required:!0,message:"不能为空"}]})(g.a.createElement(E.Input,{className:"use flex-center",placeholder:"邮箱"})))),g.a.createElement("div",{className:"item"},g.a.createElement(h,null,e("password",{rules:[{required:!0,message:"不能为空"},{validator:this.checkConfirm}]})(g.a.createElement(E.Input,{type:"password",placeholder:"请输入密码"})))),g.a.createElement("div",{className:"item"},g.a.createElement(h,null,e("confirm",{rules:[{required:!0,message:"不能为空"},{validator:this.checkPassword}]})(g.a.createElement(E.Input,{type:"password",onBlur:this.handleConfirmBlur,placeholder:"请再次输入密码"})))),g.a.createElement(h,null,g.a.createElement(E.Button,{type:"primary",onClick:this.handleSubmit,className:"login-form-button loginOne"},"注册"))))}}]),n}(g.a.Component),v=E.Form.create()(b);n.a=v;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"FormItem","C:/code/zhangdong/client/views/common/loginForm.jsx"),__REACT_HOT_LOADER__.register(b,"LoginOne","C:/code/zhangdong/client/views/common/loginForm.jsx"),__REACT_HOT_LOADER__.register(v,"default","C:/code/zhangdong/client/views/common/loginForm.jsx"))}()},608:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return l});var a=t(587),r=t.n(a),o=function(e,n){e&&("string"!=typeof n&&(n=r()(n)),window.localStorage.setItem(e,n))},l=function(e){if(e)return window.localStorage.getItem(e)},i=function(e){e&&window.localStorage.removeItem(e)};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"setStore","C:/code/zhangdong/client/views/common/loginLocal.js"),__REACT_HOT_LOADER__.register(l,"getStore","C:/code/zhangdong/client/views/common/loginLocal.js"),__REACT_HOT_LOADER__.register(i,"removeStore","C:/code/zhangdong/client/views/common/loginLocal.js"))}()},609:function(e,n,t){"use strict";var a=t(131),r=t.n(a),o=t(132),l=t.n(o),i=t(135),s=t.n(i),c=t(134),m=t.n(c),u=t(133),_=t.n(u),d=t(64),g=t.n(d),f=t(692),p=(t.n(f),t(607)),E=t(411),h=E.Tabs.TabPane,b=E.Form.Item,v=function(e){function n(){return l()(this,n),m()(this,(n.__proto__||r()(n)).apply(this,arguments))}return _()(n,e),s()(n,[{key:"render",value:function(){return g.a.createElement("div",{className:"flex"},g.a.createElement(E.Input,{placeholder:"验证码"}),g.a.createElement("div",{className:"comfirImg"},g.a.createElement("img",{className:"comfiYzheng",src:t(447)})))}}]),n}(g.a.Component),T=function(e){function n(){l()(this,n);var e=m()(this,(n.__proto__||r()(n)).call(this));return e.handleSubmitUser=function(){return e.__handleSubmitUser__REACT_HOT_LOADER__.apply(e,arguments)},e.state={},e}return _()(n,e),s()(n,[{key:"__handleSubmitUser__REACT_HOT_LOADER__",value:function(){return this.__handleSubmitUser__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleSubmitUser__REACT_HOT_LOADER__",value:function(e){e.preventDefault(),this.props.form.validateFieldsAndScroll(function(e,n){console.log(n,898989),e||console.log("Received values of form: ",n)})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return g.a.createElement("div",{className:"logintab"},g.a.createElement(E.Tabs,{defaultActiveKey:"1",renderTabBar:function(){return g.a.createElement(ScrollableInkTabBar,null)},renderTabContent:function(){return g.a.createElement(TabContent,null)},animated:!1},g.a.createElement(h,{tab:"普通用户",key:"1"},g.a.createElement(p.a,null)),g.a.createElement(h,{tab:"测试开发用户",key:"2"},g.a.createElement(E.Form,null,g.a.createElement("div",{className:"itemContent"},g.a.createElement(b,null,e("nikiName",{rules:[{required:!0,message:"不能为空",whitespace:!0}]})(g.a.createElement(E.Input,{placeholder:"用户名"})))),g.a.createElement("div",{className:"itemContent"},g.a.createElement(b,null,e("mail",{rules:[{required:!0,message:"不能为空"}]})(g.a.createElement(E.Input,{className:"use flex-center",placeholder:"邮箱"})))),g.a.createElement("div",{className:"itemContent"},g.a.createElement(b,null,e("userPassword",{rules:[{required:!0,message:"不能为空"},{validator:this.checkConfirm}]})(g.a.createElement(E.Input,{type:"password",placeholder:"设置密码"})))),g.a.createElement("div",{className:"itemContent"},g.a.createElement(b,null,e("userConfirm",{rules:[{required:!0,message:"不能为空"},{validator:this.checkPassword}]})(g.a.createElement(E.Input,{type:"password",onBlur:this.handleConfirmBlur,placeholder:"确认密码"})))),g.a.createElement("div",{className:"flex"},"其他信息"),g.a.createElement("div",{className:"itemContent"},g.a.createElement(b,null,e("userName",{rules:[{required:!0,message:"不能为空",whitespace:!0}]})(g.a.createElement(E.Input,{placeholder:"真实姓名"})))),g.a.createElement("div",{className:"itemContent"},g.a.createElement(b,null,e("company",{rules:[{required:!0,message:"不能为空",whitespace:!0}]})(g.a.createElement(E.Input,{placeholder:"公司名称"})))),g.a.createElement("div",{className:"itemContent"},g.a.createElement(b,null,e("phone",{rules:[{required:!0,message:"不能为空"}]})(g.a.createElement(E.Input,{placeholder:"联系电话"})))),g.a.createElement("div",{className:"itemContent"},g.a.createElement(b,null,e("job",{rules:[{required:!0,message:"不能为空"}]})(g.a.createElement(E.Input,{placeholder:"职位"})))),g.a.createElement("div",{className:"itemContent"},g.a.createElement(b,null,e("record",{rules:[{required:!0,message:"不能为空"}]})(g.a.createElement(E.Input,{placeholder:"测试资历"})))),g.a.createElement("div",{className:"itemContent"},g.a.createElement(b,null,e("record",{rules:[{required:!0,message:"不能为空"}]})(g.a.createElement(v,null)))),g.a.createElement(b,null,g.a.createElement(E.Button,{type:"primary",onClick:this.handleSubmitUser,className:"login-form-button loginTwo"},"注册"))))))}}]),n}(g.a.Component),C=E.Form.create()(T);n.a=C;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"TabPane","C:/code/zhangdong/client/views/common/loginTab.jsx"),__REACT_HOT_LOADER__.register(b,"FormItem","C:/code/zhangdong/client/views/common/loginTab.jsx"),__REACT_HOT_LOADER__.register(v,"ConfirmImg","C:/code/zhangdong/client/views/common/loginTab.jsx"),__REACT_HOT_LOADER__.register(T,"LoginTab","C:/code/zhangdong/client/views/common/loginTab.jsx"),__REACT_HOT_LOADER__.register(C,"default","C:/code/zhangdong/client/views/common/loginTab.jsx"))}()},631:function(e,n,t){n=e.exports=t(358)(!1),n.push([e.i,".logintab {\n  padding: 0 30px; }\n  .logintab .ant-tabs-nav .ant-tabs-tab {\n    margin: 0 0 0 46px !important; }\n  .logintab .ant-tabs-bar {\n    border: none !important; }\n  .logintab .ant-tabs-nav .ant-tabs-tab-active {\n    color: #666666; }\n  .logintab .ant-tabs-nav .ant-tabs-tab:hover {\n    color: inherit; }\n  .logintab .ant-form-item-control {\n    height: 60px; }\n  .logintab .has-error .ant-form-explain, .logintab .has-error .ant-form-split {\n    font-size: 12px;\n    padding-left: 12px; }\n  .logintab Input {\n    height: 32px;\n    line-height: 32px;\n    background-color: #eeeeee;\n    border: 2px solid #fbfbfb;\n    font-size: 12px;\n    outline: none; }\n  .logintab .has-error .ant-input, .logintab .has-error .ant-input:hover {\n    border-color: #eeeeee; }\n",""])},647:function(e,n,t){var a=t(410);n=e.exports=t(358)(!1),n.push([e.i,"#login {\n  margin: 0 auto;\n  height: 100%;\n  min-width: 1000px;\n  background: url("+a(t(594))+") no-repeat center center; }\n  #login .login-form {\n    width: 418px;\n    background-color: #fff;\n    padding-top: 35px;\n    border-radius: 5px;\n    padding-bottom: 30px; }\n    #login .login-form .flexImg {\n      margin-left: 50px;\n      margin-bottom: 30px; }\n    #login .login-form .login-form-button.loginOne {\n      width: 100%;\n      height: 46px;\n      background: #3ea2fa;\n      background: linear-gradient(45deg, #3ea2fa 0%, #0ac8ff 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3ea2fa', endColorstr='#0ac8ff', GradientType=1);\n      color: #fff;\n      font-size: 14px;\n      border: none; }\n    #login .login-form .login-form-button.loginTwo {\n      width: 100%;\n      height: 46px;\n      background: #3ea2fa;\n      background: linear-gradient(45deg, #3ea2fa 0%, #0ac8ff 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3ea2fa', endColorstr='#0ac8ff', GradientType=1);\n      color: #fff;\n      font-size: 14px;\n      border: none; }\n  #login .ant-form-item {\n    margin-bottom: 0 !important; }\n  #login .comfirImg {\n    margin-left: 30px; }\n    #login .comfirImg .comfiYzheng {\n      height: 32px;\n      width: 125px;\n      display: block; }\n",""])},692:function(e,n,t){var a=t(631);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;t(359)(a,r);a.locals&&(e.exports=a.locals)},708:function(e,n,t){var a=t(647);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;t(359)(a,r);a.locals&&(e.exports=a.locals)}});