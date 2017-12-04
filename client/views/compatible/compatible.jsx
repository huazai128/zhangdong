import React from 'react';
import './compatible.scss';

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
                  <h3>药渡头条</h3>
                 <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">案例介绍</h5>
                 </div>
                  <p className='flex'>药渡头条app是一款药物资讯应用，药渡头条app为用户提供最新的全球药物研发资讯，让用户可以随时了解医药研发数据，为医药发展提供帮助。药渡致力于建设全球专业的药物信息数据 <br></br>
                  中心，为医药研发专业人士提供实用的药物信息移动检索服务，让医药研发数据触手可得。</p>
                  <ul className='flex-hcenter'>
                      <li><a href="#"><img src={require("img/图1.jpg")} alt=""/></a></li>
                      <li><a href="#"><img src={require("img/图2.jpg")} alt=""/></a></li>
                      <li><a href="#"><img src={require("img/图3.jpg")} alt=""/></a></li>
                      <li><a href="#"><img src={require("img/图4.jpg")} alt=""/></a></li>
                  </ul>
                  <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">现状问题</h5>
                 </div>
                  <p className='flex'>测试人员较少，只能集中于验证功能和业务的实现。缺少测试设备和完善深入的测试方法找到隐藏的问题。产品上线后用户反馈存在兼容性问题。 
                  </p>
                  <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">解决方案</h5>
                 </div>
                  <p className='flex'>针对药渡头条APP进行兼容性测试，验证该产品对于智能手机品牌和机型的兼容性。通过正式环境下的兼容性测试，检查APP在各Android终端的适配率，主要检查APP能否正常进行安<br></br>
                  装、基本功能运行、卸载和升级，并且检查APP在运行过程中是否存在运行问题及UI展示问题。
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