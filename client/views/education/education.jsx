import React from 'react';
import './education.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
import NavsBox from '../common/navs';
import ModalForm from '../common/askModal';

// 对应的组件
class App extends React.Component {
	componentDidMount(){
		window.scrollTo(0,0);
		document.body.scrollTop = 0;
	}
	render() {
		return <div id='app' ref={node => this.node = node}>
			{/* {...this.props}这是传出属性 */}
			<Common bgCls="main" {...this.props} />
			<NavsBox cls="app02" type={false} vh="flex-center" title="教育行业测试" datas={['针对教育行业行业业务特性，搭建行业特色测试方案', '打造个性化教育行业解决方案']} />
			{/* 内容 */}
			<div className='content'>
				<div className="box">
					<div className="boxcontent">
						<h3>我们将面临的挑战</h3>
						<div className="flex-center jc-between soft" >
							<div className="item itemOne" >
								<img src={require('img/500489173.jpg')} alt="" />
								<i className='one'></i>
								<h5>测试手机端的不足</h5>
								<p>测试手机端的不足，一直是困扰着以APP软件企业的<br></br>
									头大问题，而购买真机终端的巨大成本，往往使企业<br></br>
									望而止步 </p>
							</div>
							<div className="item itemTwo" >
								<img src={require('img/微信图片_20171011113913.jpg')} alt="" />
								<i className='two'></i>
								<h5>专业测试人员不足</h5>
								<p>很多软件项目的开发还停留在“作坊式”阶段，项目的<br></br>
									成功往往靠个别程序员决定，但随着市场对软件质量<br></br>
									的要求不断提高，软件测试将变得越来越重要</p>
							</div>
							<div className="item itemThree" >
								<img src={require('img/微信图片_20171011114614.jpg')} alt="" />
								<i className='three'></i>
								<h5>测试深度和广度不足</h5>
								<p>产品功能复杂，往往需要耗费众多的人员投入，大<br></br>
									大增加企业成本负担，而功能、性能、兼容性、压<br></br>
									打性、安全性等方面的深度和广度也无法得到满足</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 客服案例 */}
			<div className="contentcar">
				<div className='box'>
					<h3>云积百灵智能终端 </h3>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 style={{ paddingTop: 1 }}>案例介绍</h5>
					</div>
					<p className='flex'>
						应用于教育领域的APP，结合移动终端与投影仪，植入云盘与批注功能，实现移动教学。具有丰富的接口，可以连接大部分教室设备。学校老师就不需要接入任何视频线便可将电脑信号一键投射到投影机，方便老师上课素材、PPT展示。</p>

					<ul className='flex-vcenter'>
						<li><img src={require('img/edu1.png')} alt="" /></li>
						<li><img src={require('img/edu2.png')} alt="" /></li>
						<li><img src={require('img/edu4.png')} alt="" /></li>
					</ul>
					<div className='flex-vcenter' style={{ height: 70, marginTop: 60 }}>
						<div className='blue'></div>
						<h5 style={{ paddingTop: 1 }}>现状问题</h5>
					</div>
					<p className='flex'>无专门的测试人员，缺少系统测试方法。<br></br> </p>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 style={{ paddingTop: 1 }}>解决方案</h5>
					</div>
					<p className='flex'>运用UI自动化测试技术，覆盖多款安卓系统与ios系统手机终端测试，实现了Android、iOS移动设备的无线镜像投屏技术，支持微信远程管控投影仪设备。</p>
					<p>
						搭建覆盖多种网络场景，接口测试，并提供意见进行优化。通过可用微信远程控制投影机工作，目前支持Wi-Fi Display、Miracast、AirPlay连接，轻松分享PC、iOS、Android等终端无线投屏。</p>

					<div style={{ margin: "50px 0 30px" }}>
						<ModalForm />
					</div>
				</div>

			</div>
			<div className="bottomBox">
				<div className="content flex">
					<div className="item">
						<div className="itemHead" onClick={() => hashHistory.push('/service')}>产品与服务</div>
						<ul className='jc-start '>
							<li onClick={() => hashHistory.push('/service?one=one')}>软件测试</li>
							<li onClick={() => hashHistory.push('/service?one=two')}>硬件测试</li>
							<li onClick={() => hashHistory.push('/service?one=three')}>认证</li>
						</ul>
					</div>
					<div className="item">
						<div className="itemHead" onClick={() => hashHistory.push('/solve')}>解决方案</div>
						<ul>
							<li onClick={() => hashHistory.push('/app')}>APP软件测试解决方案</li>
							<li onClick={() => hashHistory.push('/hardware')}>智能硬件测试解决方案</li>
							<li onClick={() => hashHistory.push('/education')}>教育行业测试解决方案</li>
							<li onClick={() => hashHistory.push('/lab')}>运营商测试解决方案</li>
						</ul>
					</div>
					<div className="item">
						<div className="itemHead" onClick={() => hashHistory.push('/new')}>新闻动态</div>
						<ul>
							<li onClick={() => hashHistory.push('/newsMore/1')}>公司动态</li>
							<li onClick={() => hashHistory.push('/newsMore/3')}>科技资讯</li>
							<li onClick={() => hashHistory.push('/newsMore/2')}>行业新闻</li>
						</ul>
					</div>
					<div className="item">
						<div className="itemHead" onClick={() => hashHistory.push('/our')}>关于我们</div>
						<ul>
							<li onClick={() => hashHistory.push('/our?page=1')}>公司简介</li>
							<li onClick={() => hashHistory.push('/our?page=2')}>招贤纳士</li>
						</ul>
					</div>
					{/* <div className="item">
						<div className="itemHead">测试者社区</div>
						<ul>
							<li>测试中心</li>
							<li>质量测试</li>
							<li>质量认证</li>
							<li>质量变现</li>
						</ul>
					</div> */}

					<div className="bottomRight flex-g-1">
						<Link to="/"><img src={require('img/logo.png')} /></Link>
						<div className="text">关注我们</div>
						<div className="btm-login flex-center">
							<div className="btn-img">
								<img src={require("img/login02.png")} onClick={() => { window.open('http://wpa.qq.com/msgrd?v=3&uin=2146594489&site=qq&menu=yes', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no') }} alt="" />
							</div>
							<div className="btn-img">
								<img src={require("img/login01.png")} alt="" />
								<div className="btn-er">
									<img src={require("img/login03.jpg")} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer">
				<div className="content">
					<div>商务洽谈:&nbsp;&nbsp;020-38555340&nbsp;&nbsp;020-89289423&nbsp;&nbsp;&nbsp;&nbsp;CS邮箱:&nbsp;&nbsp;businesss@appstest.cn&nbsp;&nbsp;cs@appstest.cn&nbsp;&nbsp;&nbsp;&nbsp;地址:广州中山大道西8号天河商贸大厦14楼</div>
					<div>2009-2017&nbsp;Appstest.cn版权所有ICP证:&nbsp;粤A1-20040604&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;粤公网安备&nbsp;33566758445789号</div>
				</div>
			</div>

		</div>;
	}
}

export default App;
