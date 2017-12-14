import React from 'react';
import './CNAS.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
class Function extends React.Component {
	render() {
		return <div id="function">
			<Common bgCls="service" />
			{/* 内容 */}
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
										深入识别APP隐藏的功能缺陷 </p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require('img/gong2.jpg')} alt="" />
									<h5 className='zhuanOne'>专家真机测试</h5>
									<p>国内领先技术<br></br>
										十年测试经验专家团队<br></br>
										真人真机全方位测试 </p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require('img/gong3.jpg')} alt="" />
									<h5 className='haiOne'>海量用例数据库</h5>
									<p>十年累计千万用例<br></br>
										为产品提供全面测试用例<br></br>
										大数据为产品测试达到全面化 </p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* 客服案例 */}
			<div className="contentcar">
				<div className='box'>
					<h3>联通“一起沃”平台</h3>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 className="">案例介绍</h5>
					</div>
					<p className='flex'>公司主要承担广东联通通信网络建设、网络维护，以及新业务项目开发与支撑等工作，为广东联通发展提供了优质的服务，逐步成为了广东联通网络价值链上的重要一环，工程项目质量和<br></br>
						维护质量均达到同行较高水平，屡次受到广东联通表扬。</p>
					<ul className='flex-hcenter'>
						<li><a href="javascript:void(0);"><img src={require('img/liangtong1.jpg')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/liangtong3.jpg')} alt="" /></a></li>
					</ul>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 className="">现状问题</h5>
					</div>
					<p className='flex centerOne'>准备申请国家税收优惠；申请系统集成资质；申请高新企业认定；需要软件自律评估；软件产品准备入市。 </p>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 className="">解决方案</h5>
					</div>
					<p className='flex'>
						为IT企业提供双软企业认定中必备的软件产品登记测试，并出具国家认可的测试报告。</p>
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
