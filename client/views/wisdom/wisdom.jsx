import React from 'react';
import './wisdom.scss';

class Function extends React.Component {
    render() {
        return <div id="function"> 
            <div className="topBox"> 
                <div className="content">
                    <div className="flex">
                        <ul className="flex-vcenter flex-g-1">
                            <li><a href="#"><img src={require("img/logo.png")} alt="" /></a></li>
                            <li className="item"><a href="#">产品与服务</a></li>
                            <li className="item"><a href="#">解决方案</a></li>
                            <li className="item"><a href="#">关于我们</a></li></ul>
                        <ul className="topBoxright flex-vcenter">
                            <li><a href="#">注册</a></li><li><a href="#">登陆</a></li><li className="blueBtn"><a href="#">测试者社区</a></li>
                        </ul>
                    </div>
                    <div className="count">
                        <h2>功能测试</h2>
                        <span>专家啊分析走查+自动化功能测试</span>
                        <span>
                            测试团队通过专家结合工具的测试方法进行功能测试服务
                        </span>
                        <a href="#"><p>立即申请</p></a>
                    </div>
                </div>
            </div>
            {/* 内容 */}
            <div className='content'>
                <div className="box">
                    <div className="boxcontent">
                        <h3>我们的优势</h3>
                       
                        <div className="flex-center jc-between soft" >
                            <a href="#">
                                <div className="item" >
                                    <img src={require("img/gong1.jpg")} alt="" />
                                    <h5>标准化测试流程</h5>
                                    <p>国际标准规范针对检测国际标准规范针对检测<br></br>
                                        覆盖全面，重现测试轨迹<br></br>
                                        深入识别APP隐藏的功能缺陷
                          </p>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item" >
                                    <img src={require("img/gong2.jpg")} alt="" />
                                    <h5>专家真机测试</h5>
                                    <p>国内领先技术<br></br>
                                      十年测试经验专家团队<br></br>
                                      真人真机全方位测试
                          </p>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item" >
                                    <img src={require("img/gong3.jpg")} alt="" />
                                    <h5>海量用例数据库</h5>
                                    <p>十年累计千万用例<br></br>
                                        为产品提供全面测试用例<br></br>
                                        大数据为产品测试达到全面化
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
                  <h3>智慧灯光</h3>
                 <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">案例介绍</h5>
                 </div>
                  <p className='flex'>广州市弘宇科技有限公司研发的智慧灯光，响应国家关于建立智慧、节能型城市的要求，现有的城市照明监控管理系统缺乏灵活的智能化控制手段，难于及时、准确掌握路灯设备的安全工<br></br>
                  作状态，更难实现路灯的精细化节能管理，为了应对更高的节能要求，提升城市形象与管理水平，对城市路灯监控管理系统的升级改造势在必行。</p>
                  <ul className='flex-hcenter'>
                      <li><a href="#"><img src={require("img/zhihui1.jpg")} alt=""/></a></li>
                      <li><a href="#"><img src={require("img/zhihui2.jpg")} alt=""/></a></li>
                      {/* <li><a href="#"><img src={require("img/wei3.jpg")} alt=""/></a></li>
                      <li><a href="#"><img src={require("img/wei4.jpg")} alt=""/></a></li> */}
                  </ul>
                  <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">现状问题</h5>
                 </div>
                  <p className='flex'>研发型企业缺少专业测试团队，投放市场前无法全面评估产品的性能，没有科学系统的方法查找产品在正式使用环境中还存在的潜在隐患。 
                  </p>
                  <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">解决方案</h5>
                 </div>
                  <p className='flex'>根据客户需求和产品使用场景，制定测试方案，搭建测试环境，全面系统地评测产品的性能。      
                  </p>
                  <p className='flex'>提供的测试包括节点性能、网络性能。      
                  </p>
                  <p className='flex'>节点性能：      
                  </p>
                  <p className='flex'>射频性能、功耗、电源适应性、环境适应性、通信距离等      
                  </p>
                  <p className='flex'>网络性能：      
                  </p>
                  <p className='flex'>1.多跳mesh组网路由设计      
                  </p>
                  <p className='flex'>2.规模节点（200个节点）组网网络风暴的避免机制      
                  </p>
                  <p className='flex'>3.通信可靠性技术（抗干扰技术、确认机制）      
                  </p>
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

export default Function;