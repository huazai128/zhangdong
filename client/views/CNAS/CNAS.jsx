import React from 'react';
import './CNAS.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
// import AskModal from '../common/askModal.jsx';
import NavsBox from '../common/navs';

class Function extends React.Component {
	componentDidMount(){
		window.scrollTo(0,0);
		document.body.scrollTop = 0;
		document.body.scrollIntoView(true);
	}
	render() {
		return <div id="function" >
			{/* <Common bgCls="service" /> */}
			{/* 内容 */}
			<NavsBox cls="service" title="CNAS" datas={['信息处理产品标准符合性检测中心-广东授权检测中心', '为企业提供国家税收优惠政策的必备条件认证服务']} />
			<div className='content'>
				<div className="box">
					<div className="boxcontent">
						<h3>我们的优势</h3>
						<div className="flex-center jc-between soft" >
							<div className="itemThree" >
								<img src={require('img/gong1.jpg')} alt="" />
								<h5 className='commonOne'>标准化测试流程</h5>
								<p>国际标准规范针对检测国际标准规范针对检测<br></br>
									覆盖全面，重现测试轨迹<br></br>
									深入识别APP隐藏的功能缺陷 </p>
							</div>
							<div className="itemThree" >
								<img src={require('img/gong2.jpg')} alt="" />
								<h5 className='zhuanOne'>专家真机测试</h5>
								<p>国内领先技术<br></br>
									十年测试经验专家团队<br></br>
									真人真机全方位测试 </p>
							</div>
							<div className="itemThree" >
								<img src={require('img/gong3.jpg')} alt="" />
								<h5 className='haiOne'>海量用例数据库</h5>
								<p>十年累计千万用例<br></br>
									为产品提供全面测试用例<br></br>
									大数据为产品测试达到全面化 </p>
							</div>
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
						<h5 style={{ paddingTop: 3 }}>案例介绍</h5>
					</div>
					<p className='flex'>公司主要承担广东联通通信网络建设、网络维护，以及新业务项目开发与支撑等工作，为广东联通发展提供了优质的服务，逐步成为了广东联通网络价值链上的重要一环，工程项目质量和<br></br>
						维护质量均达到同行较高水平，屡次受到广东联通表扬。</p>
					<ul className='flex-hcenter'>
						<li className='flex-vcenter'><img src={require('img/liangtong1.jpg')} alt="" /></li>
						<li><img src={require('img/liangtong3.jpg')} alt="" /></li>
						<li className='flex-vcenter'><img src={require('img/liangtong2.jpg')} alt="" /></li>

					</ul>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 style={{ paddingTop: 3 }}>现状问题</h5>
					</div>
					<p className='flex centerOne'>准备申请国家税收优惠；申请系统集成资质；申请高新企业认定；需要软件自律评估；软件产品准备入市。 </p>
					<div className='flex-vcenter' style={{ height: 46 }}>
						<div className='blue'></div>
						<h5 style={{ paddingTop: 3 }}>解决方案</h5>
					</div>
					<p className='flex'>
						为IT企业提供双软企业认定中必备的软件产品登记测试，并出具国家认可的测试报告。</p>
					{/* <span className='bottomp'>立即申请</span> */}
					{/* <AskModal></AskModal> */}
				</div>

			</div>
		</div>;
	}
}

export default Function;
