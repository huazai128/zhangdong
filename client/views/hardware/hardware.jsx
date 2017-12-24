import React from 'react';
import './hardware.scss';
import { Link, hashHistory } from 'react-router';
// 对应的组件
class App extends React.Component {
	componentDidMount() {
		this.node.scrollIntoView();
	}
	render() {
		return <div id='app' ref={node => this.node = node}>
			<div className="topBox">
				<div className="content">
					<div className="flex">
						<ul className="flex-vcenter flex-g-1">
							<li className='liTwo'><Link to="/"><img src={require('img/logo.png')} alt="" /></Link></li>
							<li className="item"><Link to="/service">产品与服务</Link></li>
							<li className="item"><Link to="/solve">解决方案</Link></li>
							<li className="item"><Link to="/new">新闻动态</Link></li>
							<li className="item"><Link to="/our">关于我们</Link></li></ul>
						<ul className="topBoxright flex-vcenter">
							<li className="blueBtn"><Link to='/creative'>测试者社区</Link></li>
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
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require('img/500489173.jpg')} alt="" />
									<i className='one'></i>
									<h5>质量问题</h5>
									<p>随着各种产品爆炸事故频发，消费者对智能硬件的质量问题越来越重视，而一个好的产品质量往往最能给消费者留下好印象，重视硬件产品质量，打造品牌形象的第一步。</p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require('img/微信图片_20171011113913.jpg')} alt="" />
									<i className='two'></i>
									<h5>用户体验差</h5>
									<p>智能硬件市场的成功很大取决于用户的积极体验。如果产品在用户想象中有大差距时，体验感差。那么这种状况将会对设备制造商承诺的高质量服务形成打击，影响后期的销路。 </p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require('img/微信图片_20171011114614.jpg')} alt="" />
									<i className='three'></i>
									<h5>APP与硬件结合使用问题多</h5>
									<p>一款设计精良的产品仍不足以创建大规模的忠诚用户。消费者使用这些设备主要就是想看看相应的数据结果，而这些功能则需要通过APP来展现，APP与硬件结合的产生bug问题，往往影响着用户对产品的体验感。</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* 客服案例 */}
			<div className="contentcar">
				<div className='box'>
					<h3>
						格兰仕智能冰箱</h3>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">案例介绍</h5>
					</div>
					<p className='flex'>
						格兰仕冰箱定位于“全球最大空调专业化制造中心”，高起点快速切入市场，在第一个冷冻年度（2001年度）就实现产销50万台。2002年预计产销180万台，其中内销60万台，外销120万台。</p>
					<ul className='flex-hcenter'>
						<li><a href="javascript:void(0);"><img src={require('img/gelan5.png')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/gelan3.png')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/gelan4.png')} alt="" /></a></li>
					</ul>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">现状问题</h5>
					</div>
					<p className='flex'>智能硬件产品与软件产品功能繁杂，专业测试人员不足，测试工作量巨大。</p>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">解决方案</h5>
					</div>
					<p className='flex'>按照国家智能家电质量测试标准对硬件样品进行制定智能家电性能测试、互联测试、多手机用户测试、安全性测试、复杂测试场景、可靠性的测试。</p>
					<p>硬件测试是针对大型智能家电的测试需求进行分析评估，对大型智能冰箱提出具体测试方案。其目的是解决大型智能冰箱在使用过程中出现的异常和问题，并通过相关测试去发现潜在问题，消除可能的风险。 </p>
					<p>针对各类家用和类似用途电器，依据相关标准及技术规范，从自学习、自适应、自协调、自诊断、自推理、自组织、自校正和安全易用八个方面对各类家电的智能功能进行系统、科学的评价。</p>
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

export default App;
