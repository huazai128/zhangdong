webpackJsonp([28],{1189:function(n,e,t){"use strict";var o=t(174),a=t.n(o),i=t(169),c=t.n(i),r=t(172),l=t.n(r),p=t(171),m=t.n(p),s=t(170),x=t.n(s),f=t(77),g=t.n(f),u=t(1192),h=(t.n(u),t(175)),d=(t.n(h),t(1190)),b=function(n){function e(){return c()(this,e),m()(this,(e.__proto__||a()(e)).call(this))}return x()(e,n),l()(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return g.a.createElement("div",{id:"common"},g.a.createElement("div",{className:this.props.bgCls+" topBox"},g.a.createElement("div",{className:"content"},g.a.createElement("div",{id:"navTop",className:"flex common-top"},g.a.createElement("ul",{className:"flex-vcenter flex-g-1"},g.a.createElement("li",{className:"liTwo"},g.a.createElement(h.Link,{to:"/"},g.a.createElement("img",{src:t(584),alt:""}))),g.a.createElement(d.a,{url:this.props.location.pathname,to:"/service"},"产品与服务"),g.a.createElement(d.a,{url:this.props.location.pathname,to:"/solve"},"解决方案"),g.a.createElement(d.a,{url:this.props.location.pathname,to:"/new"},"新闻动态"),g.a.createElement(d.a,{url:this.props.location.pathname,to:"/our"},"关于我们")),g.a.createElement("ul",{className:"topBoxright flex-vcenter"},g.a.createElement("li",{className:"blueBtn"},g.a.createElement(h.Link,{to:"/creative"},"测试者社区")))),g.a.createElement("div",{className:"bottomContent"},"solve"===this.props.bgCls||"main"===this.props.bgCls||"new"===this.props.bgCls||"our"===this.props.bgCls?null:g.a.createElement("p",{className:"pTow"},"立即申请")),g.a.createElement("div",{className:"count"},"main"===this.props.bgCls?g.a.createElement("div",{id:"count"}):null))))}}]),e}(g.a.Component),E=b;e.a=E;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"Common","C:/Users/pc/Desktop/zhangdong/client/views/common/comonOur.jsx"),__REACT_HOT_LOADER__.register(E,"default","C:/Users/pc/Desktop/zhangdong/client/views/common/comonOur.jsx"))}()},1190:function(n,e,t){"use strict";var o=t(77),a=t.n(o),i=t(175),c=(t.n(i),function(n){var e=n.children,t=n.to,o=n.url,c=o.split("/")[1],r=t==="/"+c,l=r?{borderBottom:"2px solid #3FA3FB",paddingBottom:"2px"}:{};return a.a.createElement("li",{style:l,className:"item"},a.a.createElement(i.Link,{to:t},e))});e.a=c;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(c,"default","C:/Users/pc/Desktop/zhangdong/client/views/component/navLink.jsx")}()},1191:function(n,e,t){e=n.exports=t(429)(void 0),e.push([n.i,"#common {\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  min-width: 1380px;\n  margin: 0 auto;\n  background-color: #fff;\n  letter-spacing: 1px; }\n  #common a {\n    display: inline-block;\n    text-decoration: none; }\n  #common .common-top {\n    width: 1380px;\n    margin: 0 auto; }\n  #common .box {\n    width: 100%;\n    text-align: center;\n    margin-top: 110px; }\n  #common .topBox {\n    height: 500px;\n    color: #fff;\n    background-size: cover; }\n    #common .topBox.service {\n      background: url("+t(1193)+") no-repeat center top; }\n    #common .topBox.solve {\n      height: 100%;\n      background: url("+t(1195)+") no-repeat center top;\n      background-size: cover; }\n    #common .topBox.main {\n      height: 1000px;\n      background: url("+t(1194)+") no-repeat center top; }\n    #common .topBox.new {\n      height: 100%;\n      background: url("+t(1196)+") no-repeat center top; }\n    #common .topBox.our {\n      height: 100%;\n      background: url("+t(1197)+") no-repeat center top; }\n    #common .topBox.cloud {\n      background: url("+t(1198)+") no-repeat center top; }\n    #common .topBox li {\n      font-size: 15px;\n      list-style: none;\n      margin-left: 40px; }\n      #common .topBox li.liTwo {\n        margin-left: 0px;\n        margin-top: 8px;\n        margin-right: 23px; }\n      #common .topBox li a {\n        color: #fff; }\n      #common .topBox li img {\n        width: 172px;\n        height: 28px;\n        display: block; }\n      #common .topBox li.item {\n        width: 110px;\n        text-align: center; }\n    #common .topBox .topBoxleft li {\n      width: 100px; }\n    #common .topBox .topBoxright li {\n      width: 60px; }\n    #common .topBox .topBoxright .blueBtn {\n      margin-left: 10px;\n      width: 135px;\n      height: 46px;\n      line-height: 46px;\n      text-align: center;\n      background-color: #3FA3FB; }\n    #common .topBox .content {\n      margin: 0 auto;\n      width: 1380px;\n      height: 100%;\n      position: relative; }\n      #common .topBox .content .bottomContent {\n        margin-top: 292px;\n        margin-left: 40px; }\n        #common .topBox .content .bottomContent p.pTow {\n          width: 174px;\n          height: 42px;\n          text-align: center;\n          line-height: 42px;\n          font-size: 14px;\n          background: #3ea2fa;\n          background: linear-gradient(45deg, #3ea2fa 0%, #0ac8ff 100%);\n          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3ea2fa', endColorstr='#0ac8ff', GradientType=1);\n          color: #fff; }\n",""])},1192:function(n,e,t){var o=t(1191);"string"==typeof o&&(o=[[n.i,o,""]]);var a={};a.transform=void 0;t(430)(o,a);o.locals&&(n.exports=o.locals)},1193:function(n,e,t){n.exports=t.p+"img/bg.6bfb9.png"},1194:function(n,e,t){n.exports=t.p+"img/nub.2ecb0.png"},1195:function(n,e,t){n.exports=t.p+"img/server1.76494.jpg"},1196:function(n,e,t){n.exports=t.p+"img/world1.57fe6.png"},1197:function(n,e,t){n.exports=t.p+"img/world2.37b82.png"},1198:function(n,e,t){n.exports=t.p+"img/zhibeijing.96d22.jpg"},1199:function(n,e,t){n.exports=t.p+"img/banner.35653.jpg"},1200:function(n,e,t){n.exports=t.p+"img/gong1.bc75c.jpg"},1201:function(n,e,t){n.exports=t.p+"img/gong2.d6eeb.jpg"},1202:function(n,e,t){n.exports=t.p+"img/gong3.bea47.jpg"},1295:function(n,e,t){n.exports=t.p+"img/gelan3.6b171.png"},1296:function(n,e,t){n.exports=t.p+"img/gelan4.f8093.png"},1297:function(n,e,t){n.exports=t.p+"img/gelan5.9b6e8.png"},1365:function(n,e,t){e=n.exports=t(429)(void 0),e.push([n.i,"#function {\n  width: 100%;\n  min-width: 1380px;\n  margin: 0 auto;\n  background-color: #fff;\n  letter-spacing: 1px; }\n  #function a {\n    text-decoration: none;\n    color: inherit; }\n  #function .box {\n    width: 100%;\n    text-align: center;\n    margin-top: 110px !important; }\n    #function .box .centerOne {\n      margin-bottom: 85px; }\n  #function .topBox {\n    height: 500px;\n    color: #fff;\n    background: url("+t(1199)+") no-repeat center top;\n    background-size: cover; }\n    #function .topBox ul {\n      margin-top: 10px; }\n    #function .topBox li {\n      list-style: none;\n      margin-left: 40px; }\n      #function .topBox li.liOne {\n        margin: 0; }\n      #function .topBox li.item {\n        width: 110px;\n        text-align: center; }\n    #function .topBox .topBoxleft li {\n      width: 100px; }\n    #function .topBox .topBoxright li {\n      width: 60px; }\n    #function .topBox .topBoxright .blueBtn {\n      margin-left: 10px;\n      width: 135px;\n      height: 46px;\n      line-height: 46px;\n      text-align: center;\n      background-color: #3FA3FB; }\n    #function .topBox .content {\n      position: relative; }\n    #function .topBox .count {\n      position: absolute;\n      top: 160px;\n      left: 92px; }\n      #function .topBox .count h2 {\n        font-size: 46px;\n        font-weight: 400;\n        line-height: 20px;\n        color: #fff;\n        margin: 0.83em 0; }\n      #function .topBox .count span {\n        display: block;\n        line-height: 40px;\n        font-size: 20px; }\n      #function .topBox .count p {\n        height: 46px;\n        width: 174px;\n        text-align: center;\n        line-height: 46px;\n        margin-top: 20px; }\n      #function .topBox .count p:hover {\n        background-color: #3ea3fa; }\n      #function .topBox .count .number {\n        font-size: 110px;\n        border: 2px solid #5AA6DA;\n        border-radius: 10px;\n        margin-left: 15px;\n        height: 136px;\n        display: inline-block;\n        line-height: 136px;\n        width: 80px;\n        text-align: center; }\n      #function .topBox .count .comma {\n        font-size: 110px;\n        display: inline-block;\n        width: 35px;\n        text-align: center; }\n  #function .content {\n    margin: 0 auto;\n    width: 1380px;\n    height: 100%; }\n  #function .boxcontent h3 {\n    font-size: 30px; }\n  #function .boxcontent .soft {\n    margin-top: 50px; }\n    #function .boxcontent .soft .itemTwo {\n      border-top: 10px solid #43b5fb;\n      border-bottom: 2px solid #f7f7f7;\n      border-left: 2px solid #f7f7f7;\n      border-right: 2px solid #f7f7f7;\n      width: 418px;\n      height: 456px; }\n      #function .boxcontent .soft .itemTwo img {\n        margin-top: 55px; }\n      #function .boxcontent .soft .itemTwo img:first-child {\n        margin-top: 60px; }\n      #function .boxcontent .soft .itemTwo img:last-child {\n        margin-top: 74px; }\n      #function .boxcontent .soft .itemTwo h5 {\n        font-size: 20px;\n        color: #333333; }\n        #function .boxcontent .soft .itemTwo h5.commonOne {\n          margin: 40px 0 31px 0; }\n        #function .boxcontent .soft .itemTwo h5.zhuanOne {\n          margin: 26px 0 26px 0; }\n        #function .boxcontent .soft .itemTwo h5.haiOne {\n          margin: 39px 0 28px 0; }\n      #function .boxcontent .soft .itemTwo p {\n        font-size: 14px;\n        color: #737373;\n        line-height: 26px; }\n    #function .boxcontent .soft .item:last-child {\n      margin-right: 0px; }\n  #function .contentcar {\n    width: 1380px;\n    margin: 0 auto; }\n    #function .contentcar .box h3 {\n      font-size: 30px;\n      font-weight: 400; }\n    #function .contentcar .box .blue {\n      width: 20px;\n      height: 22px;\n      background-color: #14c1fe; }\n    #function .contentcar .box h5 {\n      margin-left: 25px;\n      font-size: 20px;\n      font-weight: 400;\n      color: #343434; }\n    #function .contentcar .box p {\n      text-align: left;\n      padding-left: 45px;\n      color: #666666;\n      font-size: 16px;\n      line-height: 30px;\n      width: 1598px; }\n    #function .contentcar .box ul li {\n      margin-right: 38px;\n      list-style: none;\n      padding-bottom: 80px;\n      padding-top: 60px; }\n      #function .contentcar .box ul li img {\n        width: 320px;\n        height: 500px; }\n    #function .contentcar .box .bottomp {\n      margin: 108px auto;\n      display: block;\n      width: 224px;\n      height: 50px;\n      line-height: 50px;\n      background: #3ea2fa;\n      background: linear-gradient(45deg, #3ea2fa 0%, #0ac8ff 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3ea2fa', endColorstr='#0ac8ff', GradientType=1);\n      color: #fff;\n      border-radius: 5px;\n      font-size: 20px; }\n",""])},1411:function(n,e,t){var o=t(1365);"string"==typeof o&&(o=[[n.i,o,""]]);var a={};a.transform=void 0;t(430)(o,a);o.locals&&(n.exports=o.locals)},458:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(174),a=t.n(o),i=t(169),c=t.n(i),r=t(172),l=t.n(r),p=t(171),m=t.n(p),s=t(170),x=t.n(s),f=t(77),g=t.n(f),u=t(1411),h=(t.n(u),t(175)),d=(t.n(h),t(1189),function(n){function e(){return c()(this,e),m()(this,(e.__proto__||a()(e)).apply(this,arguments))}return x()(e,n),l()(e,[{key:"render",value:function(){return g.a.createElement("div",{id:"function"},g.a.createElement("div",{className:"content"},g.a.createElement("div",{className:"box"},g.a.createElement("div",{className:"boxcontent"},g.a.createElement("h3",null,"我们的优势"),g.a.createElement("div",{className:"flex-center jc-between soft"},g.a.createElement("a",{href:"javascript:void(0);"},g.a.createElement("div",{className:"itemTwo"},g.a.createElement("img",{src:t(1200),alt:""}),g.a.createElement("h5",{className:"commonOne"},"标准化测试流程"),g.a.createElement("p",null,"国际标准规范针对检测国际标准规范针对检测",g.a.createElement("br",null),"覆盖全面，重现测试轨迹",g.a.createElement("br",null),"深入识别APP隐藏的功能缺陷"))),g.a.createElement("a",{href:"javascript:void(0);"},g.a.createElement("div",{className:"itemTwo"},g.a.createElement("img",{src:t(1201),alt:""}),g.a.createElement("h5",{className:"zhuanOne"},"专家真机测试"),g.a.createElement("p",null,"国内领先技术",g.a.createElement("br",null),"十年测试经验专家团队",g.a.createElement("br",null),"真人真机全方位测试"))),g.a.createElement("a",{href:"javascript:void(0);"},g.a.createElement("div",{className:"itemTwo"},g.a.createElement("img",{src:t(1202),alt:""}),g.a.createElement("h5",{className:"haiOne"},"海量用例数据库"),g.a.createElement("p",null,"十年累计千万用例",g.a.createElement("br",null),"为产品提供全面测试用例",g.a.createElement("br",null),"大数据为产品测试达到全面化"))))))),g.a.createElement("div",{className:"contentcar"},g.a.createElement("div",{className:"box"},g.a.createElement("h3",null,"格兰仕智能冰箱"),g.a.createElement("div",{className:"flex-vcenter",style:{height:46}},g.a.createElement("div",{className:"blue"}),g.a.createElement("h5",{className:""},"案例介绍")),g.a.createElement("p",{className:"flex"},"格兰仕冰箱定位于“全球最大空调专业化制造中心”，高起点快速切入市场。在中国悄然上市的21.5寸大屏款ICE WORLD，硬件和软件配置都超国际一流水准，为中国的高端消费群体 ",g.a.createElement("br",null),"带来了不一样的冰箱新体验"),g.a.createElement("ul",{className:"flex-hcenter"},g.a.createElement("li",null,g.a.createElement("a",{href:"javascript:void(0);"},g.a.createElement("img",{src:t(1297),alt:""}))),g.a.createElement("li",null,g.a.createElement("a",{href:"javascript:void(0);"},g.a.createElement("img",{src:t(1295),alt:""}))),g.a.createElement("li",null,g.a.createElement("a",{href:"javascript:void(0);"},g.a.createElement("img",{src:t(1296),alt:""})))),g.a.createElement("div",{className:"flex-vcenter",style:{height:46}},g.a.createElement("div",{className:"blue"}),g.a.createElement("h5",{className:""},"现状问题")),g.a.createElement("p",{className:"flex centerOne"},"智能硬件产品与软件产品功能繁杂，专业测试人员不足，测试工作量巨大。 "),g.a.createElement("div",{className:"flex-vcenter",style:{height:46}},g.a.createElement("div",{className:"blue"}),g.a.createElement("h5",{className:""},"解决方案")),g.a.createElement("p",{className:"flex"},"按照国家智能家电质量测试标准对硬件样品进行制定智能家电性能测试、互联测试、多手机用户测试、安全性测试、复杂测试场景、可靠性的测试。",g.a.createElement("br",null),"硬件测试是针对大型智能家电的测试需求进行分析评估，对大型智能冰箱提出具体测试方案。其目的是解决大型智能冰箱在使用过程中出现的异常和问题，并通过相关测试去发现潜在问题，消除可能的风险。",g.a.createElement("br",null),"针对各类家用和类似用途电器，依据相关标准及技术规范，从自学习、自适应、自协调、自诊断、自推理、自组织、自校正和安全易用八个方面对各类家电的智能功能进行系统、科学的评价。"),g.a.createElement("a",{href:"javascript:void(0);"},g.a.createElement("span",{className:"bottomp"},"立即申请")))))}}]),e}(g.a.Component)),b=d;e.default=b;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"Function","C:/Users/pc/Desktop/zhangdong/client/views/reliability/reliability.jsx"),__REACT_HOT_LOADER__.register(b,"default","C:/Users/pc/Desktop/zhangdong/client/views/reliability/reliability.jsx"))}()},584:function(n,e,t){n.exports=t.p+"img/logo.8f4a5.png"}});