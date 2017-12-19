import React from 'react';
import './reliability.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
class Function extends React.Component {
	render() {
		return <div id="function">
			{/* <Common bgCls="service" /> */}
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
										深入识别APP隐藏的功能缺陷</p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require('img/gong2.jpg')} alt="" />
									<h5 className='zhuanOne'>专家真机测试</h5>
									<p>国内领先技术<br></br>
										十年测试经验专家团队<br></br>
										真人真机全方位测试</p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require('img/gong3.jpg')} alt="" />
									<h5 className='haiOne'>海量用例数据库</h5>
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
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 className="">案例介绍</h5>
					</div>
					<p className='flex'>格兰仕冰箱定位于“全球最大空调专业化制造中心”，高起点快速切入市场。在中国悄然上市的21.5寸大屏款ICE WORLD，硬件和软件配置都超国际一流水准，为中国的高端消费群体 <br></br>
						带来了不一样的冰箱新体验</p>
					<ul className='flex-hcenter'>
						<li><a href="javascript:void(0);"><img src={require('img/gelan5.png')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/gelan3.png')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/gelan4.png')} alt="" /></a></li>
					</ul>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 className="">现状问题</h5>
					</div>
					<p className='flex centerOne'>智能硬件产品与软件产品功能繁杂，专业测试人员不足，测试工作量巨大。 </p>
					<div className='flex-vcenter' style={{ height: 46 }}>
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


		</div>;
	}
}

export default Function;
