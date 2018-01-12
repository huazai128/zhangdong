import React from 'react';
import './lab.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
// 对应的组件
class App extends React.Component {
	componentDidMount() {
		this.node.scrollIntoView();
	}
	render() {
		return <div id='app' ref={node => this.node = node}>
			{/* <div className="topBox">
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
			</div> */}
			{/* {...this.props}这是传出属性 */}
			<Common bgCls="lab" {...this.props} />
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
									<h5>测试手机端的不足</h5>
									<p>测试手机端的不足，一直是困扰着以APP软件企业的<br></br>
										头大问题，而购买真机终端的巨大成本，往往使企业<br></br>
										望而止步 </p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require('img/微信图片_20171011113913.jpg')} alt="" />
									<i className='two'></i>
									<h5>专业测试人员不足</h5>
									<p>很多软件项目的开发还停留在“作坊式”阶段，项目的<br></br>
										成功往往靠个别程序员决定，但随着市场对软件质量<br></br>
										的要求不断提高，软件测试将变得越来越重要 </p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require('img/微信图片_20171011114614.jpg')} alt="" />
									<i className='three'></i>
									<h5>测试深度和广度不足</h5>
									<p>产品功能复杂，往往需要耗费众多的人员投入，大<br></br>
										大增加企业成本负担，而功能、性能、兼容性、压<br></br>
										打性、安全性等方面的深度和广度也无法得到满足</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* 客服案例 */}
			<div className="contentcar">
				<div className='box'>
					<h3>中国移动 </h3>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">案例介绍</h5>
					</div>
					<p className='flex'>
						贯彻中国移动集团公司战略转型的要求，向用户提供优质的产品体验，由互联网基地承建面向全网的“移动互联网应用用户体验测评共享中心”，向全集团各产品线提供专业化、多样化的体验测评能力支撑。 </p>
					<p>企业想建立一个专业的团队。 </p>
					<ul className='flex-hcenter'>
						<li><a href="javascript:void(0);"><img src={require('img/yidong1.jpg')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/yidong2.png')} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require('img/yidong3.png')} alt="" /></a></li>
					</ul>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">现状问题</h5>
					</div>
					<p className='flex'>产品功能复杂，功能迭代快，产品测试人员无法满足测试深度和广度。</p>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">解决方案</h5>
					</div>
					<p className='flex'>梳理产品的核心功能，制定具体的假设任务，邀请目标人群针对产品进行操作体验；挖掘用户在产品操作中遇到的问题及操作失败的原因，并获取用户对产品的需求及接受度；总结分析用户的需求及建议，为产品优化迭代提供意见支持。<br></br>
					</p>
					<p>
						帮助移动集团建立专业的团队。</p>

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
