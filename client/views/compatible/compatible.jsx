import React from 'react';
import './compatible.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
class Function extends React.Component {
	render() {
		return <div id="function">
			{/* <Common bgCls="service" {...this.props}/> */}
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
					<h3>药渡头条</h3>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 style={{paddingTop:3}}>案例介绍</h5>
					</div>
					<p className='flex'>药渡头条app是一款药物资讯应用，药渡头条app为用户提供最新的全球药物研发资讯，让用户可以随时了解医药研发数据，为医药发展提供帮助。药渡致力于建设全球专业的药物信息数据 <br></br>
						中心，为医药研发专业人士提供实用的药物信息移动检索服务，让医药研发数据触手可得。</p>
					<ul className='flex-hcenter'>
						<li><a href="javascript:void(0);"><img src={require('img/图1.jpg')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/图2.jpg')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/图3.jpg')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/图4.jpg')} alt="" /></a></li>
					</ul>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 style={{paddingTop:3}}>现状问题</h5>
					</div>
					<p className='flex centerOne'>测试人员较少，只能集中于验证功能和业务的实现。缺少测试设备和完善深入的测试方法找到隐藏的问题。产品上线后用户反馈存在兼容性问题。
					</p>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 style={{paddingTop:3}}>解决方案</h5>
					</div>
					<p className='flex'>针对药渡头条APP进行兼容性测试，验证该产品对于智能手机品牌和机型的兼容性。通过正式环境下的兼容性测试，检查APP在各Android终端的适配率，主要检查APP能否正常进行安<br></br>
						装、基本功能运行、卸载和升级，并且检查APP在运行过程中是否存在运行问题及UI展示问题。
					</p>
					<span className='bottomp'>立即申请</span>
				</div>

			</div>

		</div>;
	}
}

export default Function;
