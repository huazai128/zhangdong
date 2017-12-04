import React from "react";
import "./education.scss"
// 对应的组件
class App extends React.Component{
    render(){ 
        return <div id='app'> 
              <div className="topBox">
                <div className="content">
                    <div className="flex">
                        <ul className="flex-vcenter flex-g-1">
                            {/* <li><a href="#"><img src={require("img/logo.png")} alt="" /></a></li> */}
                            <li className="item"><a href="#">产品与服务</a></li>
                            <li className="item"><a href="#">解决方案</a></li>
                            <li className="item"><a href="#">关于我们</a></li></ul>
                        <ul className="topBoxright flex-vcenter">
                            <li><a href="#">注册</a></li><li><a href="#">登陆</a></li><li className="blueBtn"><a href="#">测试者社区</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 内容 */}
            <div className='content'>
                <div className="box">
                    <div className="boxcontent">
                        <h3>我们将面临的挑战</h3>
                       
                        <div className="flex-center jc-between soft" >
                            <a href="#">
                                <div className="item" >
                                    <img src={require("img/500489173.jpg")} alt="" />                             
                                   <i className='one'></i>
                                    <h5>测试手机端的不足</h5>
                                    <p>测试手机端的不足，一直是困扰着以APP软件企业的<br></br>
                                        头大问题，而购买真机终端的巨大成本，往往使企业<br></br>
                                        望而止步
                           </p>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item" >
                                    <img src={require("img/微信图片_20171011113913.jpg")} alt="" />
                                    <i className='two'></i>
                                    <h5>专业测试人员不足</h5>
                                    <p>很多软件项目的开发还停留在“作坊式”阶段，项目的<br></br>
                                      成功往往靠个别程序员决定，但随着市场对软件质量<br></br>
                                      的要求不断提高，软件测试将变得越来越重要
                          </p>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item" >
                                    <img src={require("img/微信图片_20171011114614.jpg")} alt="" />
                                    <i className='three'></i>
                                    <h5>测试深度和广度不足</h5>
                                    <p>产品功能复杂，往往需要耗费众多的人员投入，大<br></br>
                                        大增加企业成本负担，而功能、性能、兼容性、压<br></br>
                                        打性、安全性等方面的深度和广度也无法得到满足
                          </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div> 

               {/* 客服案例 */}
               <div className="contentcar">
                  <div className='box'>
                  <h3>云积百灵智能终端 </h3>
                 <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">案例介绍</h5>
                 </div>
                  <p className='flex'>
                  应用于教育领域的APP，结合移动终端与投影仪，植入云盘与批注功能，实现移动教学。具有丰富的接口，可以连接大部分教室设备。学校老师就不需要接入任何视频线便可将电脑信号一键投射到投影机，方便老师上课素材、PPT展示。
                  </p>
                 
                  <ul className='flex-hcenter'>
                      <li><a href="#"><img src={require("img/edu1.png")} alt=""/></a></li>
                      <li><a href="#"><img src={require("img/edu2.png")} alt=""/></a></li>
                      {/* <li><a href="#"><img src={require("img/edu3.png")} alt=""/></a></li> */}
                      <li><a href="#"><img src={require("img/edu4.png")} alt=""/></a></li>
                  </ul>
                  <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">现状问题</h5>
                 </div>
                  <p className='flex'>无专门的测试人员，缺少系统测试方法。<br></br>
                  无法确保APP与硬件迭代过程中功能可用性和覆盖度，缺少测试手机。 
                  </p>
                  <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">解决方案</h5>
                 </div>
                  <p className='flex'>运用UI自动化测试技术，覆盖多款安卓系统与ios系统手机终端测试，实现了Android、iOS移动设备的无线镜像投屏技术，支持微信远程管控投影仪设备。
                   </p>
                  <p>
                  搭建覆盖多种网络场景，接口测试，并提供意见进行优化。通过可用微信远程控制投影机工作，目前支持Wi-Fi Display、Miracast、AirPlay连接，轻松分享PC、iOS、Android等终端无线投屏。</p>
                 
                    <a href="#"><span className='bottomp'>立即申请</span></a>
                  </div>

              </div>
              <div className="bottomBox">
          <div className="content flex">
            <div className="item">
              <div className="itemHead">产品与服务</div>
              <ul className='jc-start '>
                <li>功能测试</li>
                <li>数据</li>
                <li>认证</li>
              </ul>
            </div>
            <div className="item">
              <div className="itemHead">解决方案</div>
              <ul>
                <li>教育行业应用测试</li>
                <li>智能穿戴设备整体测试</li>
                <li>应用开发质量提升</li>
              </ul>
            </div>
            <div className="item">
              <div className="itemHead">关于我们</div>
              <ul>
                <li>公司简介</li>
                <li>企业资质</li>
                <li>企业动态</li>
                <li>招纳贤士</li>
              </ul>
            </div>
            <div className="item">
              <div className="itemHead">测试者社区</div>
              <ul>
                <li>测试中心</li>
                <li>质量测试</li>
                <li>质量认证</li>
                <li>质量变现</li>
              </ul>
            </div>
            <div className="item">
              <div className="itemHead">新闻动态</div>
              <ul>
                <li>公司动态</li>
                <li>科技资讯</li>
                <li>行业新闻</li>
              </ul>
            </div>
            <div className="bottomRight flex-g-1">
              <img src={require("img/logo.png")} />
              <div className="text">关注我们</div>
              <img src={require("img/share.png")} />
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="content">
            <div>商务洽谈:&nbsp;&nbsp;020-38555340&nbsp;&nbsp;020-89289423&nbsp;&nbsp;&nbsp;&nbsp;CS邮箱:&nbsp;&nbsp;businesss@appstest.cn&nbsp;&nbsp;cs@appstest.cn&nbsp;&nbsp;&nbsp;&nbsp;地址:广州中山大道西8号天河商贸大厦14楼</div>
            <div>2009-2017&nbsp;Appstest.com版权所有ICP证:&nbsp;粤A1-20040604&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;粤公网安备&nbsp;33566758445789号</div>
          </div>
        </div>

        </div>
    }
}

export default App;