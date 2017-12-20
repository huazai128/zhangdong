import React from 'react';
import './property.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
class Function extends React.Component {
	render() {
		return <div id="function">
			{/* <Common bgCls="service" {...this.props}/> */}
			<div className='content'>
				<div className="box">
					<div className="boxcontent">
						<h3>我们的优势</h3>

						<div className="flex-center jc-between soft" >
							<a href="javascript:void(0);">
								<div className="itemApp" >
									<img src={require('img/gong1.jpg')} alt="" />
									<h5 className='commonOne'>标准化测试流程</h5>
									<p>国际标准规范针对检测国际标准规范针对检测<br></br>
										覆盖全面，重现测试轨迹<br></br>
										深入识别APP隐藏的功能缺陷
									</p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="itemApp" >
									<img src={require('img/gong2.jpg')} alt="" />
									<h5 className='zhuanOne'>专家真机测试</h5>
									<p>国内领先技术<br></br>
										十年测试经验专家团队<br></br>
										真人真机全方位测试
									</p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="itemApp" >
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
					<div className='flex-vcenter' style={{ height: 46 }}>
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
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 className="">现状问题</h5>
					</div>
					<p className='flex centerOne'>大型政府行业信息化建设项目。完成系统开发之后需要权威的第三方独立测试机构提供全面的测试服务，并出具有公信力的测试报告。
					</p>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 className="">解决方案</h5>
					</div>
					<p className='flex'>科学的分析系统特点，根据性能指标和主要流程和功能，设计性能测试典型场景。在线上环境进行压力测试，提出合理完善的测试计划和测试方案，保证系统使用不受影响，并能获取到<br></br>
						真实的性能数据。提供权威的性能测试结果和调优建议。
					</p>
					<span className='bottomp'>立即申请</span>
				</div>

			</div>
		</div>;
	}
}

export default Function;
