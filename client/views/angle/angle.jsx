import React from 'react';
import './angle.scss';
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
					<h3>安吉尔净水器</h3>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 className="">案例介绍</h5>
					</div>
					<p className='flex'>安吉尔是由深圳安吉尔饮水产业集团有限公司自创的品牌，二十多年来，深圳安吉尔饮水产业集团有限公司始终坚持科技创新，自主研发。安吉尔智能净水器，水龙头上选配创新“数控水<br></br>
						龙头”与主机同步显示，轻松实现人机信息交流。最大亮点拥有滤芯寿命显示功能，滤芯使用剩余小时数显示。</p>
					<ul className='flex-hcenter'>
						<li><a href="javascript:void(0);"><img src={require('img/angle1.jpg')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/angle2.jpg')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/angle3.jpg')} alt="" /></a></li>
					</ul>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 className="">现状问题</h5>
					</div>
					<p className='flex centerOne'>测试手机端不足，需要一个专业的测试团队对硬件与软件进行测试。 </p>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 className="">解决方案</h5>
					</div>
					<p className='flex'>采用专家走查的方式，进行用户体验测试，目的是站在用户角度思考解决方案，提高智能净水器这一产品的用户体验，改善产品，提高产品的竞争力。此外，还将进行深度兼容测试和蓝牙<br></br></p>
					<a href="javascript:void(0);"><span className='bottomp'>立即申请</span></a>
				</div>
			</div>

		</div>;
	}
}

export default Function;
