webpackJsonp([30],{407:function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function o(a,r){try{var i=t[a](r),l=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(l).then(function(e){o("next",e)},function(e){o("throw",e)});e(l)}return o("next")})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=n(48),f=o(p),m=n(440),d=o(m);n(612);var h=n(141),g=n(445),_=o(g),x=n(68),b=n(591),v=n(49),E=n(608),w=o(E),y=function(e){function t(e){i(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.loadMore=function(){return n.__loadMore__REACT_HOT_LOADER__.apply(n,arguments)},n.state={data:[],title:"公司动态",page:1,total:0,flag:!1,column:1},n}return c(t,e),u(t,[{key:"shouldComponentUpdate",value:function(){function e(){return t.apply(this,arguments)}var t=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","PUSH"===this.props.location.action);case 1:case"end":return e.stop()}},e,this)}));return e}()},{key:"componentDidMount",value:function(){function e(){return t.apply(this,arguments)}var t=r(regeneratorRuntime.mark(function e(){var t,n,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.scrollTo(0,0),document.body.scrollTop=0,!(t=this.props.params.id)){e.next=20;break}n="",e.t0=Number(t),e.next=1===e.t0?8:2===e.t0?10:3===e.t0?12:14;break;case 8:return n="公司动态",e.abrupt("break",14);case 10:return n="行业新闻",e.abrupt("break",14);case 12:return n="科技资讯",e.abrupt("break",14);case 14:return this.setState({title:n}),e.next=17,(0,x.get)("/news",{column:t,public:1,page:1});case 17:o=e.sent,a=o.result,this.setState({data:a.data,total:a.pagination.total_page});case 20:case"end":return e.stop()}},e,this)}));return e}()},{key:"componentWillReceiveProps",value:function(){function e(){return t.apply(this,arguments)}var t=r(regeneratorRuntime.mark(function e(){var t,n,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.scrollTo(0,0),document.body.scrollTop=0,!(t=window.location.href.split("=")[1].split("&")[0])){e.next=20;break}n="",e.t0=Number(t),e.next=1===e.t0?8:2===e.t0?10:3===e.t0?12:14;break;case 8:return n="公司动态",e.abrupt("break",14);case 10:return n="行业新闻",e.abrupt("break",14);case 12:return n="科技资讯",e.abrupt("break",14);case 14:return this.setState({title:n}),e.next=17,(0,x.get)("/news",{column:t,public:1,page:1});case 17:o=e.sent,a=o.result,this.setState({data:a.data,total:a.pagination.total_page});case 20:case"end":return e.stop()}},e,this)}));return e}()},{key:"__loadMore__REACT_HOT_LOADER__",value:function(){return this.__loadMore__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__loadMore__REACT_HOT_LOADER__",value:function(){var e=this,t=this.state,n=t.total,o=t.column,r=t.data,i=t.flag,l=t.page;if(i)return!1;if(l===n)return v.message.info("没有更多数据加载"),!1;this.setState({flag:!0});var c={column:o,public:1,page:l+1};(0,x.get)("/news",c).then(function(t){var n=t.result;e.setState({data:[].concat(a(r),a(n.data)),flag:!1,page:l+1,total:n.pagination.total_page})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,o=t.title,a=t.total;t.page;return f.default.createElement("div",{id:"new"},f.default.createElement(_.default,s({bgCls:"new"},this.props)),f.default.createElement("div",{className:"company"},f.default.createElement("div",null,n.length>0?f.default.createElement("div",{className:"new-top flex-center jc-between"},f.default.createElement("h2",{className:"new-message flex-vcenter"},f.default.createElement("i",{className:"lefttop"}),o)):f.default.createElement("div",{className:"no-data"},"暂无数据"),n.length>0&&n.map(function(e,t){return f.default.createElement("div",{className:"new-item"},f.default.createElement("div",{className:"leftcompahy"},f.default.createElement("img",{src:""+b.imgRoot+e.url,onClick:function(){return h.hashHistory.push("/alliance/"+e.id+"?page="+e.id)}})),f.default.createElement("div",{className:"rightcompany"},f.default.createElement("h3",{className:"lianTop",onClick:function(){return h.hashHistory.push("/alliance/"+e.id)}},e.title),f.default.createElement("div",{className:"time"},e.origin,".",(0,w.default)(e.update_at).format("YYYY-MM-DD"),".",e.origin),f.default.createElement("div",{className:"contentone"},e.summary)))}),a>=1&&f.default.createElement("div",{className:"lord-more",onClick:function(){e.loadMore()}},"加载更多"))),f.default.createElement(d.default,null))}}]),t}(f.default.Component),k=y;t.default=k;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(y,"NewMore","D:/code/zhangdong/client/views/new/newsMore.jsx"),__REACT_HOT_LOADER__.register(k,"default","D:/code/zhangdong/client/views/new/newsMore.jsx"))}()},431:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},432:function(e,t,n){e.exports=n.p+"img/logo.8f4a5.png"},433:function(e,t,n){e.exports=n.p+"img/banner333.486ae.png"},434:function(e,t,n){function o(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(48),i=function(e){return e&&e.__esModule?e:{default:e}}(r),l=n(141),c=function(e){var t=e.children,n=e.to,r=e.url,c=o(e,["children","to","url"]),s=r.split("/")[1],u=n==="/"+s,p=u?{borderBottom:"2px solid #3ea2fa",height:"48px !important"}:{};return i.default.createElement("li",a({},c,{style:p,className:"item"}),i.default.createElement(l.Link,{to:n},t))};t.default=c;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(c,"default","D:/code/zhangdong/client/views/component/navLink.jsx")}()},435:function(e,t,n){e.exports=n.p+"img/login01.4aade.png"},436:function(e,t,n){e.exports=n.p+"img/login02.c942f.png"},437:function(e,t,n){e.exports=n.p+"img/login03.6f522.jpg"},438:function(e,t,n){e.exports=n.p+"img/index03.d421c.png"},439:function(e,t,n){e.exports=n.p+"img/index04.db1cc.png"},440:function(e,t,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(48),c=function(e){return e&&e.__esModule?e:{default:e}}(l);n(442);var s=n(141),u=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{id:"lastFooter"},c.default.createElement("div",{className:"bottomBox"},c.default.createElement("div",{className:"content flex"},c.default.createElement("div",{className:"item itemOne"},c.default.createElement("div",{className:"itemHead",onClick:function(){return s.hashHistory.push("/service")}},"产品与服务"),c.default.createElement("ul",{className:"jc-start "},c.default.createElement("li",{onClick:function(){return s.hashHistory.push("/service?one=one")}},"软件测试"),c.default.createElement("li",{onClick:function(){return s.hashHistory.push("/service?one=two")}},"硬件测试"),c.default.createElement("li",{onClick:function(){return s.hashHistory.push("/service?one=three")}},"认证"))),c.default.createElement("div",{className:"item itemOne"},c.default.createElement("div",{className:"itemHead",onClick:function(){return s.hashHistory.push("/solve")}},"解决方案"),c.default.createElement("ul",null,c.default.createElement("li",{onClick:function(){return s.hashHistory.push("/app")}},"APP软件测试解决方案"),c.default.createElement("li",{onClick:function(){return s.hashHistory.push("/hardware")}},"智能硬件测试解决方案"),c.default.createElement("li",{onClick:function(){return s.hashHistory.push("/education")}},"教育行业测试解决方案"),c.default.createElement("li",{onClick:function(){return s.hashHistory.push("/lab")}},"运营商测试解决方案"))),c.default.createElement("div",{className:"item itemOne"},c.default.createElement("div",{className:"itemHead",onClick:function(){return s.hashHistory.push("/new")}},"新闻动态"),c.default.createElement("ul",null,c.default.createElement("li",{onClick:function(){return s.hashHistory.push("/newsMore/1?page=1")}},"公司动态"),c.default.createElement("li",{onClick:function(){return s.hashHistory.push("/newsMore/3?page=3")}},"科技资讯"),c.default.createElement("li",{onClick:function(){return s.hashHistory.push("/newsMore/2?page=2")}},"行业新闻"))),c.default.createElement("div",{className:"item"},c.default.createElement("div",{className:"itemHead",onClick:function(){return s.hashHistory.push("/our")}},"关于我们"),c.default.createElement("ul",null,c.default.createElement("li",{onClick:function(){return s.hashHistory.push("/our?page=1")}},"公司简介"),c.default.createElement("li",{onClick:function(){return s.hashHistory.push("/our?page=2")}},"招贤纳士"))),c.default.createElement("div",{className:"bottomRight flex-g-1 itemOne"},c.default.createElement(s.Link,{to:"/"},c.default.createElement("img",{src:n(432)})),c.default.createElement("div",{className:"text"},"关注我们"),c.default.createElement("div",{className:"btm-login flex-center"},c.default.createElement("div",{className:"btn-img"},c.default.createElement("img",{src:n(436),onClick:function(){window.open("http://wpa.qq.com/msgrd?v=3&uin=2146594489&site=qq&menu=yes","_blank","height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no")},alt:""})),c.default.createElement("div",{className:"btn-img"},c.default.createElement("img",{src:n(435),alt:""}),c.default.createElement("div",{className:"btn-er"},c.default.createElement("img",{src:n(437),alt:""}))))))),c.default.createElement("div",{className:"footer"},c.default.createElement("div",{className:"content"},c.default.createElement("div",null,"商务洽谈:  020-38555340  020-89289423    CS邮箱:  businesss@appstest.cn  cs@appstest.cn    地址:广州中山大道西8号天河商贸大厦14楼"),c.default.createElement("div",null,"2009-2017 Appstest.cn版权所有ICP证: 粤A1-20040604      粤公网安备 33566758445789号"))))}}]),t}(c.default.Component);t.default=u;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(u,"LastFooter","D:/code/zhangdong/client/views/common/lastFooter.jsx")}()},441:function(e,t,n){t=e.exports=n(380)(!1),t.push([e.i,"#lastFooter {\n  width: 100%;\n  min-width: 1380px;\n  margin: 0 auto;\n  background-color: #202528;\n  letter-spacing: 1px; }\n  #lastFooter .bottomBox {\n    width: 1380px;\n    margin: 0 auto;\n    margin-top: 88px;\n    height: 280px;\n    background-color: #202528; }\n    #lastFooter .bottomBox .content {\n      padding-left: 30px; }\n    #lastFooter .bottomBox .item {\n      text-align: left;\n      width: 260px;\n      color: #fff;\n      padding-top: 54px; }\n      #lastFooter .bottomBox .item .itemHead {\n        font-size: 18px;\n        margin-bottom: 17px;\n        cursor: pointer; }\n      #lastFooter .bottomBox .item ul {\n        padding-left: 0; }\n        #lastFooter .bottomBox .item ul li {\n          color: #A6A7A9;\n          line-height: 40px;\n          font-size: 14px;\n          list-style: none;\n          cursor: pointer; }\n    #lastFooter .bottomBox .bottomRight {\n      padding-top: 54px;\n      width: 310px; }\n      #lastFooter .bottomBox .bottomRight .text {\n        margin-top: 36px;\n        color: #fff;\n        font-size: 18px;\n        text-align: center; }\n  #lastFooter .footer {\n    background-color: #2D3236;\n    height: 80px;\n    color: #ACADAF;\n    line-height: 28px;\n    font-size: 14px; }\n    #lastFooter .footer .content {\n      width: 1380px;\n      margin: 0 auto;\n      padding-left: 25px;\n      padding-top: 10px; }\n",""])},442:function(e,t,n){var o=n(441);"string"==typeof o&&(o=[[e.i,o,""]]);var a={};a.transform=void 0;n(381)(o,a);o.locals&&(e.exports=o.locals)},443:function(e,t,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(48),c=function(e){return e&&e.__esModule?e:{default:e}}(l),s=n(49);n(451);var u=s.Form.Item,p=s.Select.Option,f=s.AutoComplete.Option,m=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.showModal=function(){return e.__showModal__REACT_HOT_LOADER__.apply(e,arguments)},e.handleCancel=function(){return e.__handleCancel__REACT_HOT_LOADER__.apply(e,arguments)},e.handleOk=function(){return e.__handleOk__REACT_HOT_LOADER__.apply(e,arguments)},e.handleSubmit=function(){return e.__handleSubmit__REACT_HOT_LOADER__.apply(e,arguments)},e.state={visible:!1},e}return r(t,e),i(t,[{key:"__showModal__REACT_HOT_LOADER__",value:function(){return this.__showModal__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__showModal__REACT_HOT_LOADER__",value:function(){window.open("http://wpa.qq.com/msgrd?v=3&uin=2146594489&site=qq&menu=yes","_blank","height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no")}},{key:"__handleCancel__REACT_HOT_LOADER__",value:function(){return this.__handleCancel__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleCancel__REACT_HOT_LOADER__",value:function(e){this.setState({visible:!1})}},{key:"__handleOk__REACT_HOT_LOADER__",value:function(){return this.__handleOk__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleOk__REACT_HOT_LOADER__",value:function(e){this.setState({visible:!1})}},{key:"__handleSubmit__REACT_HOT_LOADER__",value:function(){return this.__handleSubmit__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleSubmit__REACT_HOT_LOADER__",value:function(e){e.preventDefault(),this.props.form.validateFieldsAndScroll(function(e,t){e||console.log("Received values of form: ",t)})}},{key:"render",value:function(){this.props.form.getFieldDecorator;return c.default.createElement("div",{id:"form"},c.default.createElement(s.Button,{ghost:!0,onClick:this.showModal,className:"pTow"},"立即申请"))}}]),t}(l.Component),d=s.Form.create()(m);t.default=d;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"FormItem","D:/code/zhangdong/client/views/common/form.jsx"),__REACT_HOT_LOADER__.register(p,"Option","D:/code/zhangdong/client/views/common/form.jsx"),__REACT_HOT_LOADER__.register(f,"AutoCompleteOption","D:/code/zhangdong/client/views/common/form.jsx"),__REACT_HOT_LOADER__.register(m,"FormComponent","D:/code/zhangdong/client/views/common/form.jsx"),__REACT_HOT_LOADER__.register(d,"default","D:/code/zhangdong/client/views/common/form.jsx"))}()},444:function(e,t,n){e.exports=n.p+"img/bg.92750.png"},445:function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(48),s=o(c);n(450);var u=n(141),p=n(434),f=o(p),m=n(446),d=o(m),h=(n(68),n(443)),g=o(h),_=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"soleTop"},s.default.createElement("div",{className:"tokenContent flex"},s.default.createElement("div",{className:"tokenLeft"},s.default.createElement("div",{className:"tokenImg"},s.default.createElement("img",{src:n(456)}))),s.default.createElement("div",{className:"flex-col-3"}),s.default.createElement("div",{className:"tokenRight"},s.default.createElement("div",{className:"tokenRightContent"},s.default.createElement("div",{className:"tokenHeader"},"APP软件测试解决方案"),s.default.createElement("div",{className:"tokenContentImg"},s.default.createElement("div",null,s.default.createElement("ul",{className:"tokenContentUl flex"},s.default.createElement("li",{className:"flex-col-5"},s.default.createElement("img",{src:n(457)}),s.default.createElement("p",null,"功能测试")),s.default.createElement("li",{className:"flex-col-5"},s.default.createElement("img",{src:n(458)}),s.default.createElement("p",null,"兼容测试")),s.default.createElement("li",{className:"flex-col-5"},s.default.createElement("img",{src:n(459)}),s.default.createElement("p",null,"性能测试")))),s.default.createElement("div",null,s.default.createElement("ul",{className:"tokenContentUl flex tokenTwo"},s.default.createElement("li",{className:"flex-col-7"},s.default.createElement("img",{src:n(460)}),s.default.createElement("p",null,"压力测试")),s.default.createElement("li",{className:"flex-col-7"},s.default.createElement("img",{src:n(461)}),s.default.createElement("p",null,"安全测试"))))),s.default.createElement("div",{className:"tokenButton",onClick:function(){return u.hashHistory.push("/app")}},"查看案例")))))}}]),t}(s.default.Component),x=[{title:"产品与服务",path:"/service",data:[{icon:n(439),title:"软件测试",path:"/service?one=one"},{icon:n(438),title:"硬件测试",path:"/service?one=two"},{icon:n(454),title:"认证",path:"/service?one=three"}]},{title:"解决方案",path:"/solve",data:[{icon:n(439),title:"APP软件测试解决方案",path:"/solve?four=0"},{icon:n(438),title:"智能硬件测试解决方案",path:"/solve?four=1"},{icon:n(453),title:"教育行业测试解决方案",path:"/solve?four=2"},{icon:n(455),title:"运营商测试解决方案",path:"/solve?four=3"}]},{title:"新闻动态",path:"/new"},{title:"关于我们",path:"/our"}],b=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChange=function(){return n.__onChange__REACT_HOT_LOADER__.apply(n,arguments)},n.state={show:!1,curNavs:[],title:"",bgUrl:""},n}return i(t,e),l(t,[{key:"__onChange__REACT_HOT_LOADER__",value:function(){return this.__onChange__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__onChange__REACT_HOT_LOADER__",value:function(e,t){this.setState({curNavs:[],show:!1,title:""})}},{key:"render",value:function(){var e=this,t=this.state,o=t.curNavs,a=t.show,r=t.title,i=(t.bgUrl,"solve"===this.props.bgCls),l="service"==this.props.bgCls;return s.default.createElement("div",{id:"common"},s.default.createElement("div",{className:this.props.bgCls+" topBox"},s.default.createElement("div",{className:"common-nav"},s.default.createElement("div",{id:"navTop",className:"flex common-top"},s.default.createElement("ul",{className:"ulBox"},s.default.createElement("li",{className:"liTwo flex-vcenter"},s.default.createElement(u.Link,{to:"/"},s.default.createElement("img",{src:n(432),alt:""})))),s.default.createElement("ul",{className:"flex-g-1 flex-vcenter"},x&&x.map(function(t,n){return s.default.createElement(f.default,{key:n,url:e.props.location.pathname,onMouseEnter:function(n){e.setState({curNavs:t.data?t.data:[],show:!0,title:t.title})},to:t.path},t.title)})),s.default.createElement("ul",{className:"topBoxright flex-vcenter"},s.default.createElement("li",{className:"blueBtn flex-center"},s.default.createElement(u.Link,{to:"/creative"},"测试者社区"))))),o.length>0&&s.default.createElement(d.default,{data:o,classStyle:a?"navs-action":"navs-hide",title:r,change:this.onChange}),"main"!==this.props.bgCls?s.default.createElement("div",{className:"content"},l?s.default.createElement("div",{className:"bottomContent"},"solve"===this.props.bgCls||"main"===this.props.bgCls||"new"===this.props.bgCls||"our"===this.props.bgCls||"app"===this.props.bgCls||"hardware"===this.props.bgCls||"education"===this.props.bgCls||"lab"===this.props.bgCls||"female"===this.props.bgCls||"alliance"===this.props.bgCls||"provides"===this.props.bgCls||"watch"===this.props.bgCls||"newdetail"===this.props.bgCls||"newdetailTwo"===this.props.bgCls?null:s.default.createElement(g.default,null)):"",s.default.createElement("div",{className:"count"}),s.default.createElement("div",{className:"blockContent"},i?s.default.createElement(_,null):"")):null))}}]),t}(s.default.Component),v=b;t.default=v;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"SolveTop","D:/code/zhangdong/client/views/common/comonOur.jsx"),__REACT_HOT_LOADER__.register(x,"navs","D:/code/zhangdong/client/views/common/comonOur.jsx"),__REACT_HOT_LOADER__.register(b,"Common","D:/code/zhangdong/client/views/common/comonOur.jsx"),__REACT_HOT_LOADER__.register(v,"default","D:/code/zhangdong/client/views/common/comonOur.jsx"))}()},446:function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(48),s=o(c),u=n(434),p=(o(u),n(141));n(452);var f=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,o=t.title,a=t.classStyle;return s.default.createElement("div",{className:"navs-box "+a,onMouseLeave:function(t){e.props.change(t)}},s.default.createElement("div",{className:"navs-content"},s.default.createElement("h4",null,o),s.default.createElement("ul",{className:"flex flex-vcenter"},n.map(function(t,n){return s.default.createElement("li",{key:n,onClick:function(t){e.props.change(t)}},s.default.createElement(p.Link,{to:t.path},s.default.createElement("img",{src:t.icon}),t.title))}))))}}]),t}(c.Component);t.default=f;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(f,"NavBox","D:/code/zhangdong/client/views/common/nav.jsx")}()},447:function(e,t,n){var o=n(431);t=e.exports=n(380)(!1),t.push([e.i,"#common {\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  min-width: 1380px;\n  margin: 0 auto;\n  background-color: #eeeeee;\n  letter-spacing: 1px; }\n  #common a {\n    display: block;\n    text-decoration: none;\n    height: 40px; }\n  #common .ant-menu {\n    background-color: inherit !important;\n    border-bottom: none !important; }\n  #common .ant-menu-submenu > .ant-menu {\n    background-color: inherit !important; }\n  #common .common-nav {\n    background: rgba(0, 0, 0, 0.8); }\n    #common .common-nav:hover {\n      -webkit-transition: all 0.3s linear;\n      transition: all 0.3s linear;\n      background: #353b41; }\n  #common .common-top {\n    margin: 0 auto;\n    width: 1380px;\n    min-width: 1380px; }\n    #common .common-top > ul {\n      margin-bottom: 0; }\n  #common .box {\n    width: 100%;\n    text-align: center;\n    margin-top: 110px; }\n  #common .topBox {\n    height: 500px;\n    color: #fff;\n    background-size: cover; }\n    #common .topBox .blockContent .tokenRight {\n      padding-top: 70px; }\n      #common .topBox .blockContent .tokenRight .tokenRightContent .tokenHeader {\n        width: 400px;\n        font-size: 30px;\n        color: #333333;\n        text-align: center; }\n      #common .topBox .blockContent .tokenRight .tokenRightContent .tokenContentImg {\n        width: 400px;\n        margin-top: 90px; }\n        #common .topBox .blockContent .tokenRight .tokenRightContent .tokenContentImg .tokenContentUl li {\n          height: 110px; }\n          #common .topBox .blockContent .tokenRight .tokenRightContent .tokenContentImg .tokenContentUl li > img {\n            width: 72px;\n            height: 72px; }\n          #common .topBox .blockContent .tokenRight .tokenRightContent .tokenContentImg .tokenContentUl li > p {\n            margin-top: 20px;\n            font-size: 16px;\n            color: #666666; }\n        #common .topBox .blockContent .tokenRight .tokenRightContent .tokenContentImg .tokenContentUl.tokenTwo {\n          padding-left: 82px;\n          margin-top: 40px; }\n      #common .topBox .blockContent .tokenRight .tokenRightContent .tokenButton {\n        width: 210px;\n        height: 54px;\n        border-radius: 5px;\n        text-align: center;\n        line-height: 54px;\n        font-size: 18px;\n        border: none;\n        background: #3ea2fa;\n        background: linear-gradient(45deg, #3ea2fa 0%, #0ac8ff 100%);\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3ea2fa', endColorstr='#0ac8ff', GradientType=1);\n        color: #fff;\n        cursor: pointer;\n        margin: 70px auto; }\n    #common .topBox.service {\n      background: url("+o(n(444))+") no-repeat center top;\n      background-size: cover; }\n    #common .topBox.solve {\n      height: 100%; }\n    #common .topBox.main {\n      height: 54px;\n      overflow: hidden; }\n    #common .topBox.new {\n      background: url("+o(n(462))+") no-repeat center top;\n      background-size: cover; }\n    #common .topBox.our {\n      background: url("+o(n(463))+") no-repeat center top;\n      background-size: cover; }\n    #common .topBox.cloud {\n      background: url("+o(n(464))+") no-repeat center top;\n      background-size: cover; }\n    #common .topBox.app {\n      background: url("+o(n(433))+") no-repeat center top;\n      background-size: cover; }\n    #common .topBox.hardware {\n      background: url("+o(n(433))+") no-repeat center top;\n      background-size: cover; }\n    #common .topBox.education {\n      background: url("+o(n(433))+") no-repeat center top;\n      background-size: cover; }\n    #common .topBox.lab {\n      background: url("+o(n(433))+") no-repeat center top;\n      background-size: cover; }\n    #common .topBox.female, #common .topBox.alliance, #common .topBox.provides, #common .topBox.watch, #common .topBox.newdetail, #common .topBox.newdetailTwo {\n      height: 54px;\n      background-color: #000000;\n      overflow: hidden; }\n      #common .topBox.female .content, #common .topBox.alliance .content, #common .topBox.provides .content, #common .topBox.watch .content, #common .topBox.newdetail .content, #common .topBox.newdetailTwo .content {\n        display: block; }\n    #common .topBox .ulBox {\n      position: relative;\n      top: 5px; }\n    #common .topBox li {\n      height: 38px;\n      font-size: 16px;\n      list-style: none; }\n      #common .topBox li.liTwo {\n        margin-left: 0px !important;\n        height: 54px;\n        margin-right: 50px; }\n      #common .topBox li a {\n        color: #fff; }\n      #common .topBox li img {\n        width: 150px; }\n      #common .topBox li.item {\n        width: 110px;\n        text-align: center;\n        line-height: 38px; }\n        #common .topBox li.item:hover {\n          border-bottom: 2px solid #3ea2fa; }\n          #common .topBox li.item:hover > a {\n            color: #1890ff;\n            -webkit-transition: color 0.1s linear;\n            transition: color 0.1s linear; }\n    #common .topBox .topBoxright li {\n      width: 60px;\n      height: 40px !important; }\n    #common .topBox .topBoxright .blueBtn {\n      margin-left: 10px;\n      width: 135px;\n      height: 46px;\n      line-height: 40px !important;\n      text-align: center;\n      background-color: #3FA3FB; }\n    #common .topBox .content {\n      width: 1380px;\n      margin: 0 auto;\n      height: 100%;\n      position: relative; }\n      #common .topBox .content .bottomContent {\n        margin-top: 322px;\n        margin-left: 40px; }\n        #common .topBox .content .bottomContent p.pTow {\n          width: 224px;\n          height: 50px;\n          line-height: 50px;\n          text-align: center;\n          font-size: 18px;\n          background: #3ea2fa;\n          background: linear-gradient(45deg, #3ea2fa 0%, #0ac8ff 100%);\n          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3ea2fa', endColorstr='#0ac8ff', GradientType=1);\n          color: #fff;\n          border-radius: 5px; }\n      #common .topBox .content .blockContent {\n        margin-top: 180px; }\n",""])},448:function(e,t,n){t=e.exports=n(380)(!1),t.push([e.i,"#form .ant-btn:hover {\n  color: #fff;\n  background-color: #fff;\n  border-color: #fff; }\n\n#form .pTow {\n  width: 224px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  font-size: 18px;\n  background: #3ea2fa !important;\n  background: linear-gradient(45deg, #3ea2fa 0%, #0ac8ff 100%) !important;\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3ea2fa', endColorstr='#0ac8ff', GradientType=1) !important;\n  color: #fff;\n  border-radius: 5px;\n  border-color: transparent !important; }\n",""])},449:function(e,t,n){t=e.exports=n(380)(!1),t.push([e.i,".navs-box {\n  position: absolute;\n  top: 54px;\n  left: 0;\n  z-index: 10;\n  height: 0;\n  right: 17px;\n  background: #1c1e22;\n  overflow: hidden;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n  opacity: 0; }\n  .navs-box.navs-action {\n    height: auto !important;\n    opacity: 1;\n    transition: height 1s linear;\n    -webkit-transition: height 1s linear; }\n  .navs-box.navs-hide {\n    opacity: 0;\n    height: 0 !important;\n    transition: height 0.5s linear;\n    -webkit-transition: height 0.5s linear; }\n  .navs-box .navs-content {\n    width: 1380px;\n    padding-bottom: 20px;\n    margin: 0 auto; }\n    .navs-box .navs-content > h4 {\n      margin: 0;\n      margin-top: 35px;\n      font-size: 24px;\n      height: 24px;\n      line-height: 24px;\n      padding-left: 10px;\n      border-left: 3px solid #1081de;\n      color: #fff;\n      position: relative;\n      margin-bottom: 20px; }\n    .navs-box .navs-content li {\n      margin: 0;\n      padding: 0;\n      margin-right: 30px; }\n      .navs-box .navs-content li > a {\n        font-size: 14px;\n        color: #fff;\n        padding: 4px 20px;\n        height: 30px !important;\n        border-radius: 4px; }\n        .navs-box .navs-content li > a:hover {\n          color: #1081de !important;\n          -webkit-transition: all 0.3s linear;\n          transition: all 0.3s linear; }\n        .navs-box .navs-content li > a > img {\n          width: 22px !important;\n          height: auto !important; }\n",""])},450:function(e,t,n){var o=n(447);"string"==typeof o&&(o=[[e.i,o,""]]);var a={};a.transform=void 0;n(381)(o,a);o.locals&&(e.exports=o.locals)},451:function(e,t,n){var o=n(448);"string"==typeof o&&(o=[[e.i,o,""]]);var a={};a.transform=void 0;n(381)(o,a);o.locals&&(e.exports=o.locals)},452:function(e,t,n){var o=n(449);"string"==typeof o&&(o=[[e.i,o,""]]);var a={};a.transform=void 0;n(381)(o,a);o.locals&&(e.exports=o.locals)},453:function(e,t,n){e.exports=n.p+"img/index01.864d5.png"},454:function(e,t,n){e.exports=n.p+"img/index02.f819e.png"},455:function(e,t,n){e.exports=n.p+"img/index05.502db.png"},456:function(e,t,n){e.exports=n.p+"img/token1.6528b.png"},457:function(e,t,n){e.exports=n.p+"img/token2.7cb7a.png"},458:function(e,t,n){e.exports=n.p+"img/token3.d239b.png"},459:function(e,t,n){e.exports=n.p+"img/token4.431eb.png"},460:function(e,t,n){e.exports=n.p+"img/token5.19a26.png"},461:function(e,t,n){e.exports=n.p+"img/token6.9fadc.png"},462:function(e,t,n){e.exports=n.p+"img/world1.d90d8.jpg"},463:function(e,t,n){e.exports=n.p+"img/world2.69940.jpg"},464:function(e,t,n){e.exports=n.p+"img/zhibeijing.96d22.jpg"},591:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=t.imgRoot="http://zhangdong.api.fongwell.com";!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"imgRoot","D:/code/zhangdong/client/js/api/config.js")}()},608:function(e,t,n){e.exports=n(43)(6)},611:function(e,t,n){var o=n(431);t=e.exports=n(380)(!1),t.push([e.i,"#new {\n  width: 100%;\n  min-width: 1380px;\n  margin: 0 auto;\n  background-color: #fff;\n  letter-spacing: 1px; }\n  #new .company {\n    width: 1380px;\n    margin: 0 auto;\n    position: relative;\n    z-index: 100000; }\n    #new .company h1 {\n      padding: 100px 0 50px;\n      text-align: center;\n      font-weight: normal;\n      font-size: 24px;\n      color: #666; }\n    #new .company .new-top {\n      margin: 0 auto;\n      width: 1380px;\n      height: 98px; }\n      #new .company .new-top .new-message {\n        width: 1380px;\n        font-size: 20px;\n        color: #333333; }\n        #new .company .new-top .new-message .lefttop {\n          display: inline-block;\n          width: 12px;\n          height: 25px;\n          background-color: #11c3fe;\n          margin-right: 20px; }\n      #new .company .new-top .more {\n        width: 130px;\n        font-size: 15px;\n        color: #333333;\n        cursor: pointer; }\n      #new .company .new-top .youIcon {\n        display: inline-block;\n        width: 20px;\n        height: 40px;\n        margin-left: 20px;\n        background: url("+o(n(623))+") no-repeat center; }\n    #new .company .new-item {\n      height: 260px;\n      width: 1380px;\n      margin: 0 auto;\n      padding: 15px 0;\n      border-bottom: 1px solid #ddd;\n      overflow: hidden; }\n    #new .company .leftcompahy {\n      float: left;\n      width: 302px;\n      cursor: pointer; }\n      #new .company .leftcompahy img {\n        width: 302px;\n        height: 204px;\n        cursor: pointer; }\n    #new .company .rightcompany {\n      margin-left: 340px; }\n      #new .company .rightcompany .lianTop {\n        display: inline-block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        white-space: normal;\n        margin: 0;\n        font-size: 20px;\n        color: #333333;\n        padding-bottom: 27px;\n        cursor: pointer; }\n      #new .company .rightcompany .time {\n        font-size: 14px;\n        color: #8a8a8a;\n        padding-bottom: 56px; }\n      #new .company .rightcompany .contentone {\n        height: 48px;\n        overflow: hidden;\n        font-size: 14px;\n        color: #7f7f7f;\n        line-height: 24px; }\n  #new .no-data {\n    text-align: center;\n    font-size: 18px;\n    padding-top: 70px; }\n  #new .lord-more {\n    width: 140px;\n    height: 32px;\n    line-height: 32px;\n    margin: 30px auto;\n    border: 1px solid #999;\n    border-radius: 5px;\n    text-align: center; }\n",""])},612:function(e,t,n){var o=n(611);"string"==typeof o&&(o=[[e.i,o,""]]);var a={};a.transform=void 0;n(381)(o,a);o.locals&&(e.exports=o.locals)},623:function(e,t,n){e.exports=n.p+"img/you2.da77c.png"}});