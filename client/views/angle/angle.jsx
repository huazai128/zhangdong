import React from 'react';
import './angle.scss';
import { Link, hashHistory } from 'react-router';
class Function extends React.Component {
	render() {
		return <div id="function">
			<div className="topBox">
				<div className="content">
					<div className="flex">
						<ul className="flex-vcenter flex-g-1">
							<li><a href="javascript:void(0);"><img src={require('img/logo.png')} alt="" /></a></li>
							<li className="item"><Link to="/service">产品与服务</Link></li>
							<li className="item"><Link to="/solve">解决方案</Link></li>
							<li className="item"><Link to="/new">新闻动态</Link></li>
							<li className="item"><Link to="/our">关于我们</Link></li></ul>
						<ul className="topBoxright flex-vcenter">
							<li><Link to='/main'>注册</Link></li><li><Link to='/login'>登陆</Link></li><li className="blueBtn"><Link to='/creative'>测试者社区</Link></li>
						</ul>
					</div>
					<div className="count">
						<h2>功能测试</h2>
						<span>专家啊分析走查+自动化功能测试</span>
						<span>
							测试团队通过专家结合工具的测试方法进行功能测试服务</span>
						<a href="javascript:void(0);"><p>立即申请</p></a>
					</div>
				</div>
			</div>
			{/* 内容 */}
			<div className='content'>
				<div className="box">
					<div className="boxcontent">
						<h3>我们的优势</h3>

						<div className="flex-center jc-between soft" >
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require("img/gong1.jpg")} alt="" />
									<h5>标准化测试流程</h5>
									<p>国际标准规范针对检测国际标准规范针对检测<br></br>
										覆盖全面，重现测试轨迹<br></br>
										深入识别APP隐藏的功能缺陷</p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require("img/gong2.jpg")} alt="" />
									<h5>专家真机测试</h5>
									<p>国内领先技术<br></br>
										十年测试经验专家团队<br></br>
										真人真机全方位测试 </p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require("img/gong3.jpg")} alt="" />
									<h5>海量用例数据库</h5>
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
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">案例介绍</h5>
					</div>
					<p className='flex'>安吉尔是由深圳安吉尔饮水产业集团有限公司自创的品牌，二十多年来，深圳安吉尔饮水产业集团有限公司始终坚持科技创新，自主研发。安吉尔智能净水器，水龙头上选配创新“数控水<br></br>
						龙头”与主机同步显示，轻松实现人机信息交流。最大亮点拥有滤芯寿命显示功能，滤芯使用剩余小时数显示。</p>
					<ul className='flex-hcenter'>
						<li><a href="javascript:void(0);"><img src={require("img/angle1.jpg")} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require("img/angle2.jpg")} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require("img/angle3.jpg")} alt="" /></a></li>
					</ul>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">现状问题</h5>
					</div>
					<p className='flex'>测试手机端不足，需要一个专业的测试团队对硬件与软件进行测试。 </p>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">解决方案</h5>
					</div>
					<p className='flex'>采用专家走查的方式，进行用户体验测试，目的是站在用户角度思考解决方案，提高智能净水器这一产品的用户体验，改善产品，提高产品的竞争力。此外，还将进行深度兼容测试和蓝牙<br></br></p>
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
						<img src={require("img/logo.png")} />
						<div className="text">关注我们</div>
						<img src={require("img/share.png")} />
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
