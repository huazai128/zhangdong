webpackJsonp([49],{403:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(48),c=r(u);n(739);var s=n(638),f=r(s),d=n(49),m=(n(141),d.Form.Item),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){this.props.form.getFieldDecorator;return c.default.createElement("div",{id:"login",className:"flex-center"},c.default.createElement("div",{className:"login-form "},c.default.createElement("div",{className:"flex-henter flexImg"},c.default.createElement("img",{src:n(619)})),c.default.createElement(f.default,null)))}}]),t}(c.default.Component),_=d.Form.create()(p);t.default=_;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(m,"FormItem","D:/code/zhangdong/client/views/login/login.jsx"),__REACT_HOT_LOADER__.register(p,"Login","D:/code/zhangdong/client/views/login/login.jsx"),__REACT_HOT_LOADER__.register(_,"default","D:/code/zhangdong/client/views/login/login.jsx"))}()},431:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},474:function(e,t,n){e.exports=n.p+"img/19990.c4121.jpg"},618:function(e,t,n){e.exports=n.p+"img/login1.741bc.jpg"},619:function(e,t,n){e.exports=n.p+"img/logo2.f258f.jpg"},636:function(e,t,n){function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var l=t[o](a),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(48),c=function(e){return e&&e.__esModule?e:{default:e}}(u),s=(n(637),n(141),n(49)),f=n(68),d=s.Form.Item,m=function(e){function t(){var e,n,l,i,u=this;o(this,t);for(var c=arguments.length,s=Array(c),d=0;d<c;d++)s[d]=arguments[d];return n=l=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),l.handleSubmit=function(){var e;return(e=l).__handleSubmit__REACT_HOT_LOADER__.apply(e,arguments)},l.postLogin=function(){var e=r(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.post)("/user",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,u)}));return function(t){return e.apply(this,arguments)}}(),i=n,a(l,i)}return l(t,e),i(t,[{key:"__handleSubmit__REACT_HOT_LOADER__",value:function(){return this.__handleSubmit__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleSubmit__REACT_HOT_LOADER__",value:function(e){var t=this;e.preventDefault(),this.props.form.validateFieldsAndScroll(function(e,n){if(!e){t.postLogin(n)}})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return c.default.createElement("div",{className:"tabForm",style:{marginTop:30}},c.default.createElement(s.Form,{className:"from-container"},c.default.createElement("div",{className:"item"},c.default.createElement(d,null,e("email",{rules:[{required:!0,message:"不能为空"}]})(c.default.createElement(s.Input,{className:"use flex-center",placeholder:"邮箱"})))),c.default.createElement("div",{className:"item"},c.default.createElement(d,null,e("password",{rules:[{required:!0,message:"不能为空"},{validator:this.checkConfirm}]})(c.default.createElement(s.Input,{type:"password",placeholder:"请输入密码"})))),c.default.createElement("div",{className:"item"},c.default.createElement(d,null,e("confirm",{rules:[{required:!0,message:"不能为空"},{validator:this.checkPassword}]})(c.default.createElement(s.Input,{type:"password",onBlur:this.handleConfirmBlur,placeholder:"请再次输入密码"})))),c.default.createElement(d,null,c.default.createElement(s.Button,{type:"primary",onClick:this.handleSubmit,className:"login-form-button loginOne"},"注册"))))}}]),t}(c.default.Component),p=s.Form.create()(m);t.default=p;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"FormItem","D:/code/zhangdong/client/views/common/loginForm.jsx"),__REACT_HOT_LOADER__.register(m,"LoginOne","D:/code/zhangdong/client/views/common/loginForm.jsx"),__REACT_HOT_LOADER__.register(p,"default","D:/code/zhangdong/client/views/common/loginForm.jsx"))}()},637:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=t.setStore=function(e,t){e&&("string"!=typeof t&&(t=JSON.stringify(t)),window.localStorage.setItem(e,t))},r=t.getStore=function(e){if(e)return window.localStorage.getItem(e)},o=t.removeStore=function(e){e&&window.localStorage.removeItem(e)};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"setStore","D:/code/zhangdong/client/views/common/loginLocal.js"),__REACT_HOT_LOADER__.register(r,"getStore","D:/code/zhangdong/client/views/common/loginLocal.js"),__REACT_HOT_LOADER__.register(o,"removeStore","D:/code/zhangdong/client/views/common/loginLocal.js"))}()},638:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var l=t[o](a),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(48),s=r(c);n(723);var f=n(636),d=r(f),m=n(49),p=n(68),_=m.Tabs.TabPane,g=m.Form.Item,h=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return console.log(this.props),s.default.createElement("div",{className:"flex"},s.default.createElement("div",{className:"comfirImg"},s.default.createElement("img",{className:"comfiYzheng",src:n(474)})))}}]),t}(s.default.Component),b=function(e){function t(){var e=this;a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.handleSubmitUser=function(){return n.__handleSubmitUser__REACT_HOT_LOADER__.apply(n,arguments)},n.postLogin=function(){var t=o(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.post)("/user",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),n.state={},n}return i(t,e),u(t,[{key:"__handleSubmitUser__REACT_HOT_LOADER__",value:function(){return this.__handleSubmitUser__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleSubmitUser__REACT_HOT_LOADER__",value:function(e){var t=this;e.preventDefault(),this.props.form.validateFieldsAndScroll(function(e,n){if(console.log(e,n),!e){var r={type:1},o=t.postLogin(Object.assign(n,r));console.log("Received values of form: ",o)}})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return s.default.createElement("div",{className:"logintab"},s.default.createElement(m.Tabs,{defaultActiveKey:"1",renderTabBar:function(){return s.default.createElement(ScrollableInkTabBar,null)},renderTabContent:function(){return s.default.createElement(TabContent,null)},animated:!1},s.default.createElement(_,{tab:"普通用户",key:"1"},s.default.createElement(d.default,null)),s.default.createElement(_,{tab:"测试开发用户",key:"2"},s.default.createElement(m.Form,null,s.default.createElement("div",{className:"itemContent"},s.default.createElement(g,null,e("username",{rules:[{required:!0,message:"不能为空",whitespace:!0}]})(s.default.createElement(m.Input,{placeholder:"用户名"})))),s.default.createElement("div",{className:"itemContent"},s.default.createElement(g,null,e("email",{rules:[{required:!0,message:"不能为空"}]})(s.default.createElement(m.Input,{className:"use flex-center",placeholder:"邮箱"})))),s.default.createElement("div",{className:"itemContent"},s.default.createElement(g,null,e("password",{rules:[{required:!0,message:"不能为空"},{validator:this.checkConfirm}]})(s.default.createElement(m.Input,{type:"password",placeholder:"设置密码"})))),s.default.createElement("div",{className:"itemContent"},s.default.createElement(g,null,e("confirm",{rules:[{required:!0,message:"不能为空"},{validator:this.checkPassword}]})(s.default.createElement(m.Input,{type:"password",onBlur:this.handleConfirmBlur,placeholder:"确认密码"})))),s.default.createElement("div",{className:"flex"},"其他信息"),s.default.createElement("div",{className:"itemContent"},s.default.createElement(g,null,e("name",{rules:[{required:!0,message:"不能为空",whitespace:!0}]})(s.default.createElement(m.Input,{placeholder:"真实姓名"})))),s.default.createElement("div",{className:"itemContent"},s.default.createElement(g,null,e("company",{rules:[{required:!0,message:"不能为空",whitespace:!0}]})(s.default.createElement(m.Input,{placeholder:"公司名称"})))),s.default.createElement("div",{className:"itemContent"},s.default.createElement(g,null,e("iphone",{rules:[{required:!0,message:"不能为空"}]})(s.default.createElement(m.Input,{placeholder:"联系电话"})))),s.default.createElement("div",{className:"itemContent"},s.default.createElement(g,null,e("job",{rules:[{required:!0,message:"不能为空"}]})(s.default.createElement(m.Input,{placeholder:"职位"})))),s.default.createElement("div",{className:"itemContent"},s.default.createElement(g,null,e("record",{rules:[{required:!0,message:"不能为空"}]})(s.default.createElement(m.Input,{placeholder:"测试资历"})))),s.default.createElement("div",{className:"itemContent"},s.default.createElement(g,null,s.default.createElement("div",{className:"flex"},e("vcode",{rules:[{required:!0,message:"不能为空"}]})(s.default.createElement(m.Input,{placeholder:"验证码"})),s.default.createElement("div",{className:"comfirImg"},s.default.createElement("img",{className:"comfiYzheng",src:n(474)}))))),s.default.createElement(g,null,s.default.createElement(m.Button,{type:"primary",onClick:this.handleSubmitUser,className:"login-form-button loginTwo"},"注册"))))))}}]),t}(s.default.Component),E=m.Form.create()(b);t.default=E;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"TabPane","D:/code/zhangdong/client/views/common/loginTab.jsx"),__REACT_HOT_LOADER__.register(g,"FormItem","D:/code/zhangdong/client/views/common/loginTab.jsx"),__REACT_HOT_LOADER__.register(h,"ConfirmImg","D:/code/zhangdong/client/views/common/loginTab.jsx"),__REACT_HOT_LOADER__.register(b,"LoginTab","D:/code/zhangdong/client/views/common/loginTab.jsx"),__REACT_HOT_LOADER__.register(E,"default","D:/code/zhangdong/client/views/common/loginTab.jsx"))}()},662:function(e,t,n){t=e.exports=n(380)(!1),t.push([e.i,".logintab {\n  padding: 0 30px; }\n  .logintab .ant-tabs-nav .ant-tabs-tab {\n    margin: 0 0 0 46px !important; }\n  .logintab .ant-tabs-bar {\n    border: none !important; }\n  .logintab .ant-tabs-nav .ant-tabs-tab-active {\n    color: #666666; }\n  .logintab .ant-tabs-nav .ant-tabs-tab:hover {\n    color: inherit; }\n  .logintab .ant-form-item-control {\n    height: 60px; }\n  .logintab .has-error .ant-form-explain, .logintab .has-error .ant-form-split {\n    font-size: 12px;\n    padding-left: 12px; }\n  .logintab Input {\n    height: 32px;\n    line-height: 32px;\n    background-color: #eeeeee;\n    border: 2px solid #fbfbfb;\n    font-size: 12px;\n    outline: none; }\n  .logintab .has-error .ant-input, .logintab .has-error .ant-input:hover {\n    border-color: #eeeeee; }\n",""])},678:function(e,t,n){var r=n(431);t=e.exports=n(380)(!1),t.push([e.i,"#login {\n  margin: 0 auto;\n  height: 100%;\n  min-width: 1000px;\n  background: url("+r(n(618))+") no-repeat center center;\n  background-size: cover; }\n  #login .login-form {\n    width: 418px;\n    background-color: #fff;\n    padding-top: 35px;\n    border-radius: 5px;\n    padding-bottom: 30px; }\n    #login .login-form .flexImg {\n      margin-left: 50px;\n      margin-bottom: 30px; }\n    #login .login-form .login-form-button.loginOne {\n      width: 100%;\n      height: 46px;\n      background: #3ea2fa;\n      background: linear-gradient(45deg, #3ea2fa 0%, #0ac8ff 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3ea2fa', endColorstr='#0ac8ff', GradientType=1);\n      color: #fff;\n      font-size: 14px;\n      border: none; }\n    #login .login-form .login-form-button.loginTwo {\n      width: 100%;\n      height: 46px;\n      background: #3ea2fa;\n      background: linear-gradient(45deg, #3ea2fa 0%, #0ac8ff 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3ea2fa', endColorstr='#0ac8ff', GradientType=1);\n      color: #fff;\n      font-size: 14px;\n      border: none; }\n  #login .ant-form-item {\n    margin-bottom: 0 !important; }\n  #login .comfirImg {\n    margin-left: 30px; }\n    #login .comfirImg .comfiYzheng {\n      height: 32px;\n      width: 125px;\n      display: block; }\n",""])},723:function(e,t,n){var r=n(662);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(381)(r,o);r.locals&&(e.exports=r.locals)},739:function(e,t,n){var r=n(678);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(381)(r,o);r.locals&&(e.exports=r.locals)}});