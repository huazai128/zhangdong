
import React from 'react';
import './main.scss';
import '../index.scss';
import 'js/lib/swiper-3.4.2.min.css';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
import FormComponent  from '../common/form';
import NewsBg from './news';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollTop: 0
		};
	}
	componentDidMount() {
		var swiper1 = new window.Swiper('.swiper-container1', {
			paginationClickable: true,
			spaceBetween: 0,
			slidesPerView: 4,
			// freeMode: true,
			navigation: {
				nextEl: '.swiper-container1 .swiper-button-next',
				prevEl: '.swiper-container1 .swiper-button-prev',
			},
		});
		var swiper2 = new window.Swiper('.swiper-container2', {
			paginationClickable: true,
			spaceBetween: 0,
			slidesPerView: 4,
			navigation: {
				nextEl: '.swiper-container2 .swiper-button-next',
				prevEl: '.swiper-container2 .swiper-button-prev',
			},
		});
		var swiper3 = new window.Swiper('.swiper-container3', {
			paginationClickable: true,
			spaceBetween: 0,
			slidesPerView: 4,
			navigation: {
				nextEl: '.swiper-container3 .swiper-button-next',
				prevEl: '.swiper-container3 .swiper-button-prev',
			},
		});
		var swiper4 = new window.Swiper('.swiper-container4', {
			spaceBetween: 0,
			slidesPerView: 5,
			navigation: {
				nextEl: '.swiper-container4 .swiper-button-next',
				prevEl: '.swiper-container4 .swiper-button-prev',
			},
		});
		this.node.scrollIntoView();
	}

	render() {
		return (
			<div id="main" ref={node => this.node = node}>
				<Common bgCls="main" {...this.props} />
				<NewsBg ></NewsBg>
				<div className="navBox">
					<div className="content">
						<ul>
							<li><img src={require('img/order.png')} /><div>自主下单</div></li>
							<li><img src={require('img/testcenter.png')} /><div>测试中心</div></li>
							<li><img src={require('img/cma.png')} /><div>CMA</div></li>
							<li><img src={require('img/service.png')} /><div>定制化服务</div></li>
						</ul>
					</div>
				</div>
				<div className="qualityBox">
					<div className="content p-relative">
						<div className="title">质量云人工智能</div>
						<div className="line"></div>
						<div className="tip">NQI-Cloud提供Paas+Saas的完备质量云服务,实现智能应用全生命周期质量托管</div>
						<div className="item first">
							<div onClick={() => {
								hashHistory.push('/cloud/1');
							}}>
								<div className="icon"></div>
								<div className="text">质量认证</div>
							</div>
						</div>
						<div className="item second">
							<div onClick={() => {
								hashHistory.push('/cloud/2');
							}}>
								<div className="icon"></div>
								<div className="text">质量运营</div>
							</div>
						</div>
						<div className="item third">
							<div onClick={() => {
								hashHistory.push('/cloud/3');
							}}>
								<div className="icon"></div>
								<div className="text">质量变现</div>
							</div>
						</div>
						<div className="item four">
							<div onClick={() => {
								hashHistory.push('/cloud/4');
							}}>
								<div className="icon"></div>
								<div className="text">质量测试</div>
							</div>
						</div>
						<div className="more" onClick={() => hashHistory.push('/cloud/1')}>了解更多</div>
					</div>
				</div>
				<div className="exampleBox">
					{/* <div className="content">
            质量云平台已为全国用户解决测试需求<span className="number">14,212</span>例/周
          </div> */}
				</div>
				<div className="serviceBox">
					<div className="content">
						<div className="title">产品与服务</div>
						<div className="line"></div>
						<div className="tip">卓越品质决定优质服务,优质服务决定产品质量</div>
						<div className="item first">
							<div className="itemview">
								<div className="itemHead">
									<div className="topText">软件测试</div>
									<div>SoftWare&nbsp;&nbsp;Testing</div>
								</div>
								<div className="node">
									<img src={require('img/search2.png')} />
									<div className="text" >功能测试</div>
								</div>
								<div className="node">
									<img src={require('img/phone.png')} />
									<div className="text">兼容性测试</div>
								</div>
								<div className="node">
									<img src={require('img/circle.png')} />
									<div className="text">性能测试</div>
								</div>
							</div>
							<ul>
								<li>
									<Link to="/service/function">
										<div className="clearfix itemTitle">
											<img src={require('img/search1.png')} className="float-left d-inline-block" />
											<div className="float-left">功能测试</div>
										</div>
										<div className="itemContent">结合探索性测试和模拟不同环境下的测试,检查产品是否达到用户要求的功能</div>
									</Link>
									<div className="btn float-right" ><FormComponent /></div>
								</li>
								<li>
									<Link to="/service/compatible">
										<div className="clearfix itemTitle">
											<img src={require('img/search1.png')} className="float-left d-inline-block" />
											<div className="float-left">兼容测试</div>
										</div>
										<div className="itemContent">上千款测试真机设备供客户挑选,完善自动化测试系统,快速定位,解决问题</div>
									</Link>
									<div className="btn float-right"><FormComponent /></div>
								</li>
								<li>
									<Link to="/service/property">
										<div className="clearfix itemTitle">
											<img src={require('img/search1.png')} className="float-left d-inline-block" />
											<div className="float-left" >性能测试</div>
										</div>
										<div className="itemContent">基于业务场景与用户行为的全链路压力测试,发现并发瓶颈,优化容量规划</div>
									</Link>
									<div className="btn float-right"><FormComponent /></div>
								</li>
							</ul>
						</div>
						<div className="item second">
							<div className="itemview">
								<div className="itemHead">
									<div className="topText">智能硬件测试</div>
									<div>Hardware&nbsp;&nbsp;Testing</div>
								</div>
								<div className="node">
									<img src={require('img/search2.png')} />
									<div className="text">可靠性测试</div>
								</div>
								<div className="node">
									<img src={require('img/phone.png')} />
									<div className="text">无线通信模组测试</div>
								</div>
								<div className="node">
									<img src={require('img/circle.png')} />
									<div className="text">连通性测试</div>
								</div>
							</div>
							<ul>
								<li>
									<Link to="/service/reliability">
										<div className="clearfix itemTitle">
											<img src={require('img/search1.png')} className="float-left d-inline-block" />
											<div className="float-left">可靠性测试</div>
										</div>
										<div className="itemContent">通过低温试验、高温试验、恒定湿热试验、N/A全方面对硬件进行测试</div>
									</Link>
									<div className="btn float-right"><FormComponent /></div>
								</li>
								<li>
									<Link to="/service/wisdom">
										<div className="clearfix itemTitle">
											<img src={require('img/search1.png')} className="float-left d-inline-block" />
											<div className="float-left">无线通信模组测试</div>
										</div>
										<div className="itemContent">通过无线通信模组测试产品的性能，包括发射性能、接收性能、电源适应性、传输性能等专业测试</div>
									</Link>
									<div className="btn float-right"><FormComponent /></div>
								</li>
								<li>
									<Link to="/service/angle">
										<div className="clearfix itemTitle">
											<img src={require('img/search1.png')} className="float-left d-inline-block" />
											<div className="float-left">连通性测试</div>
										</div>
										<div className="itemContent">测试产品网络状况、硬件跟手机节点之间打流，误码率、传输速率、延时等测试</div>
									</Link>
									<div className="btn float-right"><FormComponent /></div>
								</li>
							</ul>
						</div>
						<div className="item third">
							<div className="itemview">
								<div className="itemHead">
									<div className="topText">认证</div>
									<div>Certification</div>
								</div>
								<div className="node">
									<img src={require('img/search2.png')} />
									<div className="text">CMA</div>
								</div>
								<div className="node">
									<img src={require('img/phone.png')} />
									<div className="text">CNAS</div>
								</div>
								<div className="node">
									<img src={require('img/circle.png')} />
									<div className="text">ISO</div>
								</div>
							</div>
							<ul>
								<li>
									<Link to="/service/CMA">
										<div className="clearfix itemTitle">
											<img src={require('img/search1.png')} className="float-left d-inline-block" />
											<div className="float-left" >CMA</div>
										</div>
										<div className="itemContent">专业CMA认证机构，可用于申请政府扶持资金和质量仲裁</div>
									</Link>
									<div className="btn float-right"><FormComponent /></div>
								</li>
								<li>
									<Link to="/service/CNAS">
										<div className="clearfix itemTitle">
											<img src={require('img/search1.png')} className="float-left d-inline-block" />
											<div className="float-left">CNAS</div>
										</div>
										<div className="itemContent">专业CNAS认证机构，确认其是否有能力开展相应的合格评定活动</div>
									</Link>
									<div className="btn float-right"><FormComponent /></div>
								</li>
								<li>
									<div className="clearfix itemTitle">
										<img src={require('img/search1.png')} className="float-left d-inline-block" />
										<div className="float-left">ISO</div>
									</div>
									<div className="itemContent">ISO认证专业机构</div>
									<div className="btn float-right"><FormComponent /></div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="solveBox">
					<div className="content">
						<div className="title">解决方案</div>
						<div className="line"></div>
						<div className="tip">世界因智能而改变,掌测APPSTEST让智能因品质而更美好</div>
						<div>
							<div className="item" style={{ background: 'url("' + require('img/solve1.jpg') + '") no-repeat center center' }}>
								<div className="itemView">
									<img className="solveicon" src={require('img/solveicon.png')} />
									<div className="line"></div>
									<div className="text">运营商测试建设</div>
								</div>
								<div className="itemViewHover">
									<div className="itemTitle">运营商测试建设</div>
									<ul className="clearfix flex-center wrap">
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">技术实验室</div>
										</li>
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">用户研究</div>
										</li>
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext"><p>中移market</p> <p>测试中心</p></div>
										</li>
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">ODC场内外支撑</div>
										</li>
									</ul>
									<div className="itembtn" onClick={() => hashHistory.push('/lab')}><a href="javascript:void(0);">了解更多</a></div>
								</div>
							</div>
							<div className="item" style={{ background: 'url("' + require('img/solve4.png') + '") no-repeat center center' }}>
								<div className="itemView">
									<img className="solveicon" src={require('img/solveicon.png')} />
									<div className="line"></div>
									<div className="text">智能硬件测试</div>
								</div>
								<div className="itemViewHover">
									<div className="itemTitle">智能硬件测试</div>
									<ul className="clearfix flex-center wrap">
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">硬件测试</div>
										</li>
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">软件测试</div>
										</li>
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">用户体验测试</div>
										</li>
									</ul>
									<div className="itembtn" onClick={() => hashHistory.push('/hardware')}><a href="javascript:void(0);">了解更多</a></div>
								</div>
							</div>
							<div className="item" style={{ background: 'url("' + require('img/solve2.jpg') + '") no-repeat center center' }}>
								<div className="itemView">
									<img className="solveicon" src={require('img/solveicon.png')} />
									<div className="line"></div>
									<div className="text">教育行业测试</div>
								</div>
								<div className="itemViewHover">
									<div className="itemTitle">教育行业测试</div>
									<ul className="clearfix flex-center wrap">
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">UI自动化测试</div>
										</li>
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">接口自动化测试</div>
										</li>
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">自动化构建发布</div>
										</li>
									</ul>
									<div className="itembtn" onClick={() => hashHistory.push('/education')}><a href="javascript:void(0);">了解更多</a></div>
								</div>
							</div>
							<div className="item" style={{ background: 'url("' + require('img/solve3.jpg') + '") no-repeat center center' }}>
								<div className="itemView">
									<img className="solveicon" src={require('img/solveicon.png')} />
									<div className="line"></div>
									<div className="text">APP软件测试</div>
								</div>
								<div className="itemViewHover">
									<div className="itemTitle">APP软件测试</div>
									<ul className="clearfix flex-center wrap">
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">功能测试</div>
										</li>
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">兼容测试</div>
										</li>
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">安全测试</div>
										</li>
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">压力测试</div>
										</li>
										<li>
											<div><img className="img" src={require('img/phone_white.png')} /></div>
											<div className="litext">性能测试</div>
										</li>
									</ul>
									<div className="itembtn" onClick={() => hashHistory.push('/app')}><a href="javascript:void(0);">了解更多</a></div>
								</div>
							</div>
						</div>
					</div>

				</div>

				<div className="prizeBox">
					<div className="content">
						<div className="title">公司资质及奖项</div>
						<div className="line"></div>
						<div className="list">
							<span className="listTitle">企业资质</span>
							<div className="swiper-container swiper-container1">
								<div className="swiper-wrapper">
									<div className="swiper-slide"><img src={require('img/j01.png')} /></div>
									<div className="swiper-slide"><img src={require('img/j02.png')} /></div>
									<div className="swiper-slide"><img src={require('img/j03.png')} /></div>
									<div className="swiper-slide"><img src={require('img/j04.jpg')} /></div>
									<div className="swiper-slide"><img src={require('img/j05.png')} /></div>
									<div className="swiper-slide"><img src={require('img/j06.png')} /></div>
									<div className="swiper-slide"><img src={require('img/j07.png')} /></div>
									<div className="swiper-slide"><img src={require('img/j08.png')} /></div>
									<div className="swiper-slide"><img src={require('img/j09.png')} /></div>
									<div className="swiper-slide"><img src={require('img/j10.png')} /></div>
									<div className="swiper-slide"><img src={require('img/j11.png')} /></div>
									<div className="swiper-slide"><img src={require('img/j12.png')} /></div>
									<div className="swiper-slide"><img src={require('img/j13.png')} /></div>
								</div>
								<div className="swiper-button-next"></div>
								<div className="swiper-button-prev"></div>
							</div>
						</div>
						<div className="list">
							<div className="listTitle">荣誉奖项</div>
							<div className="swiper-container swiper-container2">
								<div className="swiper-wrapper">
									<div className="swiper-slide"><img src={require('img/price2.png')} /></div>
									<div className="swiper-slide"><img src={require('img/price3.png')} /></div>
									<div className="swiper-slide"><img src={require('img/price4.png')} /></div>
									<div className="swiper-slide"><img src={require('img/price5.png')} /></div>
								</div>
								<div className="swiper-button-next"></div>
								<div className="swiper-button-prev"></div>
							</div>
						</div>
						<div className="list">
							<div className="listTitle">专业证书</div>
							<div className="swiper-container swiper-container3">
								<div className="swiper-wrapper">
									<div className="swiper-slide"><img src={require('img/price6.png')} /></div>
									<div className="swiper-slide"><img src={require('img/price7.png')} /></div>
									<div className="swiper-slide"><img src={require('img/price8.png')} /></div>
									<div className="swiper-slide"><img src={require('img/price9.png')} /></div>
								</div>
								<div className="swiper-button-next"></div>
								<div className="swiper-button-prev"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="customerBox">
					<div className="content">
						<div className="title">他们都选择掌测为产品保驾护航</div>
						<div className="customerListImg flex">
							<div>
								<img src={require('img/customer1.jpg')} />
							</div>
							<div>
								<img src={require('img/customer2.jpg')} />
								<img src={require('img/customer3.jpg')} />
							</div>
							<div>
								<img src={require('img/customer4.jpg')} />
								<img src={require('img/customer5.jpg')} />
							</div>
						</div>
						<div className="p-relative">
							<div className="swiper-container swiper-container4">
								<div className="swiper-wrapper">
									<div className="swiper-slide"><p><img src={require('img/c1.jpg')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c2.jpg')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c3.jpg')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c4.jpg')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c5.jpg')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c6.png')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c7.png')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c8.png')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c9.png')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c10.png')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c11.png')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c12.png')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c13.png')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c14.png')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c15.png')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c16.png')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c17.png')} /></p></div>
									<div className="swiper-slide"><p><img src={require('img/c18.png')} /></p></div>
								</div>
								<div className="swiper-button-next"></div>
								<div className="swiper-button-prev"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="bottomBox">
					<div className="content">
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
						<div className="bottomRight">
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
			</div>
		);
	}
}

export default Main;

