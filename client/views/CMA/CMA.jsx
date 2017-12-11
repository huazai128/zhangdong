import React from 'react';
import './CMA.scss';
import { Link, hashHistory } from 'react-router';
class Function extends React.Component {
	render() {
		return <div id="function">
			<div className="topBox">
				<div className="content">
					<div className="flex">
						<ul className="flex-vcenter flex-g-1">
							<li><a href="javascript:void(0);"><img src={require("img/logo.png")} alt="" /></a></li>
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
										深入识别APP隐藏的功能缺陷 </p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require("img/gong2.jpg")} alt="" />
									<h5>专家真机测试</h5>
									<p>国内领先技术<br></br>
										十年测试经验专家团队<br></br>
										真人真机全方位测试</p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div className="item" >
									<img src={require("img/gong3.jpg")} alt="" />
									<h5>海量用例数据库</h5>
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
						<h5 className="">案例介绍</h5>
					</div>
					<p className='flex'>自1997年6月创立以来，凭借先进的技术和优质的服务，网易深受广大网民的欢迎，曾两次被中国互联网络信息中心（CNNIC）评选为中国十佳网站之首。在开发互联网应用、服务及其它<br></br>
						技术方面，网易始终保持业界的领先地位，并取得了中国互联网行业的多项第一。</p>
					<ul className='flex-hcenter'>
						<li><a href="javascript:void(0);"><img src={require("img/wei1.jpg")} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require("img/wei2.jpg")} alt="" /></a></li>
						<li><a href="javascript:void(0);"><img src={require("img/wei3.jpg")} alt="" /></a></li>
					</ul>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">现状问题</h5>
					</div>
					<p className='flex'>处于验收建设关键阶段需要申请政府科技计划项目资助、申报各类科技成果奖，以及软件产品入市的准备，需要反映成果的技术水平和市场价值。 </p>
					<div className='flex-vcenter' style={{ height: 70 }}>
						<div className='blue'></div>
						<h5 className="">解决方案</h5>
					</div>
					<p className='flex'>根据专项资金拨款项目和科研项目计划任务书的要求，对软件产品所应实现的功能和性能指标进行验证，为承担过政府资助项目的IT企业提供国家工信部权威的第三方测试</p>
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
