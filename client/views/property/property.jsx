import React from 'react';
import './property.scss';
import { Link, hashHistory } from 'react-router';
class Function extends React.Component {

	render() {
		return <div id="function">
			<div className="topBox">
				<div className="content">
					<div className="flex">
						<ul className="flex-vcenter flex-g-1">
							<li className='liOne'><a href="javascript:void(0);"><img src={require('img/logo.png')} alt="" /></a></li>
							<li className="item"><Link to="/service">产品与服务</Link></li>
							<li className="item"><Link to="/solve">解决方案</Link></li>
							<li className="item"><Link to="/new">新闻动态</Link></li>
							<li className="item"><Link to="/our">关于我们</Link></li></ul>
						<ul className="topBoxright flex-vcenter">
							<li><Link to='/main'>注册</Link></li><li><Link to='/login'>登陆</Link></li><li className="blueBtn"><Link to='/creative'>测试者社区</Link></li>
						</ul>
					</div>
					<div className="count">
						<h2>功能测试</h2>
						<span>专家啊分析走查+自动化功能测试</span>
						<span>
							测试团队通过专家结合工具的测试方法进行功能测试服务</span>
						<a href="javascript:void(0);"><p>立即申请</p></a>
					</div>
				</div>
			</div>
			<div className='content'>
				<div className="box">
					<div className="boxcontent">
						<h3>我们的优势</h3>

						<div className="flex-center jc-between soft" >
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require('img/gong1.jpg')} alt="" />
									<h5 className='commonOne'>标准化测试流程</h5>
									<p>国际标准规范针对检测国际标准规范针对检测<br></br>
										覆盖全面，重现测试轨迹<br></br>
										深入识别APP隐藏的功能缺陷
									</p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require('img/gong2.jpg')} alt="" />
									<h5 className='zhuanOne'>专家真机测试</h5>
									<p>国内领先技术<br></br>
										十年测试经验专家团队<br></br>
										真人真机全方位测试
									</p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require('img/gong3.jpg')} alt="" />
									<h5 className='haiOne'>海量用例数据库</h5>
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
					<h3>广东省“智慧食药监”基础平台</h3>
					<div className='flex-vcenter' style={{ height: 46}}>
						<div className='blue'></div>
						<h5 className="">案例介绍</h5>
					</div>
					<p className='flex'>智慧食药监基础平台由广东省食品药品监管局研发，主要目的是大力推动“互联网+”新技术、新模式、新理念与监管工作深度融合广泛应用移动互联网、物联网、云计算、大数据、智<br></br>
						能终端等新一代互联网技术，建成省级食品药品监管数据中心统一信息网络。</p>
					<ul className='flex-hcenter'>
						<li><a href="javascript:void(0);"><img src={require('img/property1.jpg')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/property2.jpg')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/property3.jpg')} alt="" /></a></li>
					</ul>
					<div className='flex-vcenter' style={{ height: 46}}>
						<div className='blue'></div>
						<h5 className="">现状问题</h5>
					</div>
					<p className='flex centerOne'>大型政府行业信息化建设项目。完成系统开发之后需要权威的第三方独立测试机构提供全面的测试服务，并出具有公信力的测试报告。
					</p>
					<div className='flex-vcenter' style={{ height: 46}}>
						<div className='blue'></div>
						<h5 className="">解决方案</h5>
					</div>
					<p className='flex'>科学的分析系统特点，根据性能指标和主要流程和功能，设计性能测试典型场景。在线上环境进行压力测试，提出合理完善的测试计划和测试方案，保证系统使用不受影响，并能获取到<br></br>
						真实的性能数据。提供权威的性能测试结果和调优建议。
					</p>
					<a href="javascript:void(0);"><span className='bottomp'>立即申请</span></a>
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
						<img src={require('img/logo.png')} />
						<div className="text">关注我们</div>
						<img src={require('img/share.png')} />
					</div>
				</div>
			</div>

			<div className="footer">
				<div className="content">
					<div>商务洽谈:&nbsp;&nbsp;020-38555340&nbsp;&nbsp;020-89289423&nbsp;&nbsp;&nbsp;&nbsp;CS邮箱:&nbsp;&nbsp;businesss@appstest.cn&nbsp;&nbsp;cs@appstest.cn&nbsp;&nbsp;&nbsp;&nbsp;地址:广州中山大道西8号天河商贸大厦14楼</div>
					<div>2009-2017&nbsp;Appstest.com版权所有ICP证:&nbsp;粤A1-20040604&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;粤公网安备&nbsp;33566758445789号</div>
				</div>
			</div>

		</div>;
	}
}

export default Function;
