import React from 'react';
import './CMA.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
class Function extends React.Component {
	render() {
		return <div id="function" >
			{/* <Common bgCls="service" /> */}
			{/* 内容 */}
			<div className='content'>
				<div className="box">
					<div className="boxcontent">
						<h3>我们的优势</h3>

						<div className="flex-center jc-between soft" >
							<a href="javascript:void(0);">
								<div className="itemThree" >
									<img src={require('img/gong1.jpg')} alt="" />
									<h5 className='commonOne'>标准化测试流程</h5>
									<p>国际标准规范针对检测国际标准规范针对检测<br></br>
										覆盖全面，重现测试轨迹<br></br>
										深入识别APP隐藏的功能缺陷 </p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="itemThree" >
									<img src={require('img/gong2.jpg')} alt="" />
									<h5 className='zhuanOne'>专家真机测试</h5>
									<p>国内领先技术<br></br>
										十年测试经验专家团队<br></br>
										真人真机全方位测试</p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="itemThree" >
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
					<h3>广州网易计算机系统有限公司</h3>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 style={{paddingTop:3}}>案例介绍</h5>
					</div>
					<p className='flex'>自1997年6月创立以来，凭借先进的技术和优质的服务，网易深受广大网民的欢迎，曾两次被中国互联网络信息中心（CNNIC）评选为中国十佳网站之首。在开发互联网应用、服务及其它<br></br>
						技术方面，网易始终保持业界的领先地位，并取得了中国互联网行业的多项第一。</p>
					<ul className='flex-hcenter'>
						<li><a href="javascript:void(0);"><img src={require('img/wangyi163.jpg')} alt="" /></a></li>
						{/* <li><a href="javascript:void(0);"><img src={require('img/wei2.jpg')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/wei3.jpg')} alt="" /></a></li> */}
					</ul>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 style={{paddingTop:3}}>现状问题</h5>
					</div>
					<p className='flex centerOne'>处于验收建设关键阶段需要申请政府科技计划项目资助、申报各类科技成果奖，以及软件产品入市的准备，需要反映成果的技术水平和市场价值。 </p>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 style={{paddingTop:3}}>解决方案</h5>
					</div>
					<p className='flex'>根据专项资金拨款项目和科研项目计划任务书的要求，对软件产品所应实现的功能和性能指标进行验证，为承担过政府资助项目的IT企业提供国家工信部权威的第三方测试</p>
					<span className='bottomp'>立即申请</span>
				</div>

			</div>
		</div>;
	}
}

export default Function;
