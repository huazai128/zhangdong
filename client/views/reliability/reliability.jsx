import React from 'react';
import './reliability.scss';
import { Link, hashHistory } from 'react-router';
class Function extends React.Component {
	render() {
		return <div id="function">
			<div className="topBox">
				<div className="content">
					<div className="flex">
						<ul className="flex-vcenter flex-g-1">
							<li><a href="javascript:void(0);"><img src={require('img/logo.png')} alt="" /></a></li>
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
			{/* 内容 */}
			<div className='content'>
				<div className="box">
					<div className="boxcontent">
						<h3>我们的优势</h3>

						<div className="flex-center jc-between soft" >
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require("img/gong1.jpg")} alt="" />
									<h5>标准化测试流程</h5>
									<p>国际标准规范针对检测国际标准规范针对检测<br></br>
										覆盖全面，重现测试轨迹<br></br>
										深入识别APP隐藏的功能缺陷</p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require("img/gong2.jpg")} alt="" />
									<h5>专家真机测试</h5>
									<p>国内领先技术<br></br>
										十年测试经验专家团队<br></br>
										真人真机全方位测试</p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require("img/gong3.jpg")} alt="" />
									<h5>海量用例数据库</h5>
									<p>十年累计千万用例<br></br>
										为产品提供全面测试用例<br></br>
										大数据为产品测试达到全面化</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* 客服案例 */}
			<div className="contentcar">
				<div className='box'>
					<h3>格兰仕智能冰箱</h3>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">案例介绍</h5>
					</div>
					<p className='flex'>格兰仕冰箱定位于“全球最大空调专业化制造中心”，高起点快速切入市场。在中国悄然上市的21.5寸大屏款ICE WORLD，硬件和软件配置都超国际一流水准，为中国的高端消费群体 <br></br>
						带来了不一样的冰箱新体验</p>
					<ul className='flex-hcenter'>
						<li><a href="javascript:void(0);"><img src={require("img/gelan5.png")} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require("img/gelan3.png")} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require("img/gelan4.png")} alt="" /></a></li>
					</ul>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">现状问题</h5>
					</div>
					<p className='flex'>智能硬件产品与软件产品功能繁杂，专业测试人员不足，测试工作量巨大。 </p>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">解决方案</h5>
					</div>
					<p className='flex'>
						按照国家智能家电质量测试标准对硬件样品进行制定智能家电性能测试、互联测试、多手机用户测试、安全性测试、复杂测试场景、可靠性的测试。<br></br>
						硬件测试是针对大型智能家电的测试需求进行分析评估，对大型智能冰箱提出具体测试方案。其目的是解决大型智能冰箱在使用过程中出现的异常和问题，并通过相关测试去发现潜在问题，消除可能的风险。<br></br>

						针对各类家用和类似用途电器，依据相关标准及技术规范，从自学习、自适应、自协调、自诊断、自推理、自组织、自校正和安全易用八个方面对各类家电的智能功能进行系统、科学的评价。</p>
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

		</div>;
	}
}

export default Function;
