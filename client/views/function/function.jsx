import React from 'react';
import './function.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
import AskModal from '../common/askModal.jsx';
class Function extends React.Component {
	render() {
		console.log(this.props);
		return <div id="function">
			{/* <Common bgCls="service" {...this.props} /> */}
			{/* 内容 */}
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
					<h3>陆风汽车</h3>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 style={{ paddingTop: 3 }}>案例介绍</h5>
					</div>
					<p className='flex'>由陆风汽车倾力打造的-“陆风之家APP” 于今日正式上线。陆风之家APP的成功推出，标志着陆风汽车线上服务出了更为长远，作为一款一站式出行应用程序，旨在<br></br>
						提供更便捷地车主服务，为确保的车主的“陆风家”APP优质体验</p>
					<ul className='flex-hcenter'>
						<li><a href="javascript:void(0);"><img src={require('img/wei1.jpg')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/wei2.jpg')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/wei3.jpg')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/wei4.jpg')} alt="" /></a></li>
					</ul>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 style={{ paddingTop: 3 }}>现状问题</h5>
					</div>
					<p className='flex centerOne'>测试人员、测试设备的不足，无法满足深入的广度和深度。产品上线后用户反馈存在兼容性问题。
					</p>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 style={{ paddingTop: 3 }}>解决方案</h5>
					</div>
					<p className='flex'>注重APP在不同网络、地域、机型、功能模块、性能指标、真实操作路径下的稳定性及安全性凭借强有力的专家团队，进行真人真机执行测试，通过BUG探索与用例设计，发现应用中的各<br></br>
						等级功能缺陷和UI问题，并在测试报告中提供BUG详细截图及复现过程。
					</p>
					{/* <span className='bottomp'>立即申请</span> */}
					<AskModal></AskModal>
				</div>

			</div>
		</div>;
	}
}

export default Function;
