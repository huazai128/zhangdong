import React, { Component } from 'react';
import { Tabs } from 'antd';
import './knowledgeTab.scss';
const { TabPane } = Tabs;
import { Link, hashHistory } from 'react-router';
export default class Tab extends React.Component {

	render() {
		return (
			<div id='knowledgeTab'>
				<Tabs
					defaultActiveKey="1"
					renderTabBar={() => <ScrollableInkTabBar />}
					renderTabContent={() => <TabContent />}
					animated={false}
				>
					<TabPane tab='全部类型' key="1" className='tabOne'>
						<div className="content">
							<div className="oneTop flex jc-between">
								<Link to="/creative/stfGuan">
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>STF手机管理系统</h3>
												<p className='gong'>STF手机管理系统</p>
											</div>
										</div>
										<div className="bottomText">
											<p>STF的优势：方便的手机管理系统，直接显示手机的物理位置，方便手机的查找；已连接的手机实时充电，需要使用手机时可以直接拆除或通过浏览器进行远程调试；</p>
										</div>
									</div>
								</Link>
								<Link to="/creative/platform">
									<div className="oneContent rightNone">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>STF – 一个安卓设备管理操作平台</h3>
												<p className='gong'>STF – 一个安卓设备管理操作平台</p>
											</div>
										</div>
										<div className="bottomText">
											<p>STF的功能很强大，其中远程屏幕实时操作和设备信息获取等功能，是我去年在规划移动测试平台特别想做的，当时在想远程屏幕实时操作估计做起来复杂（所以一直没投入资源做这个功能）；看到STF的功能，真的让我眼前一亮。如果搭建云测试或者众测平台，应该用得上（或借鉴）STF。</p>
										</div>
									</div>
								</Link>
							</div>
							<div className="oneTop flex jc-between oneBottom">
								<Link to="/creative/ability">
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>功能测试的流程与标准</h3>
												<p className='gong'>功能测试的流程与标准</p>
											</div>
										</div>
										<div className="bottomText">
											<p>如今，软件测试变得越来越重要。在软件业较发达的国家，软件测试不仅成为软件开发的一个有机组成部分，而且在软件开发的系统工程中占据着相当大的比重。软件测试是一个系列过程活动，贯穿于软件项目的整个生命过程，很多软件项目的开发还停留在“作坊式”阶段，项目的成功往往靠个别程序员决定。 但随着市场对软件质量的的要求不断提高，软件测试将变得越来越重要。
											</p>
										</div>
									</div>
								</Link>
								<Link to="/creative/standard">
									<div className="oneContent rightNone">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>智能硬件测试标准及方法</h3>
												<p className='gong'>智能硬件测试标准及方法</p>
											</div>
										</div>
										<div className="bottomText">
											<p>硬件测试是针对大型智能家电的测试需求进行分析评估，对大型智能冰箱提出具体测试方案，其目的是解决大型智能冰箱在使用过程中出现的异常和问题，并通过相关测试去发现潜在问题，消除可能的风险。</p>
										</div>
									</div>
								</Link>
							</div>
						</div>

					</TabPane>
					{/* 第二个内容 */}
					<TabPane tab='工具类型1' key="2" className='tabOne'>
						<div className="content">
							<div className="oneTop flex jc-between">
								<Link to="/creative/tooldetails">
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>loadrunner</h3>
												<p className='gong'>预测系统行为和性能的负载测试工具</p>
											</div>
										</div>
										<div className="bottomText">
											<p>LoadRunner，是一种预测系统行为和性能的负载测试工具。通过以模拟上千万用户实施并发负载及实时性能监测的方式来确认和查找问题，LoadRunner能够对整个企业架构进行测试。</p>
										</div>
									</div>
								</Link>
								<Link to="/creative/mantis">
									<div className="oneContent rightNone">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>Mantis测试工具</h3>
												<p className='gong'>缺陷管理平台Mantis，也做MantisBT，全称Mantis Bug Tracker</p>
											</div>
										</div>
										<div className="bottomText">
											<p>Mantis是一个基于PHP技术的轻量级的开源缺陷跟踪系统，以Web操作的形式提供项目管理及缺陷跟踪服务。在功能上、实用性上足以满足中小型项目的管理及跟踪。更重要的是其开源，不需要负担任何费用。</p>
										</div>
									</div>
								</Link>
							</div>
							<div className="oneTop flex jc-between oneBottom">
								<Link to="/creative/testlink">
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>Testlink工具</h3>
												<p className='gong'>TestLink 是基于web的测试用例管理系统</p>
											</div>
										</div>
										<div className="bottomText">
											<p>TestLink 是基于web的测试用例管理系统，主要功能是测试用例的创建、管理和执行，并且还提供了一些简单的统计功能。
											</p>
										</div>
									</div>
								</Link>
								<Link to="/creative/zentaoPMS">
									<div className="oneContent rightNone">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>禅道项目管理软件</h3>
												<p className='gong'>禅道项目管理软件集产品管理等</p>
											</div>
										</div>
										<div className="bottomText">
											<p>禅道项目管理软件集产品管理、项目管理、质量管理、文档管理、组织管理和事务管理于一体，是一款功能完备的项目管理软件，完美地覆盖了项目管理的核心流程。</p>
										</div>
									</div>
								</Link>
							</div>
						</div>

					</TabPane>
					{/* 第三个内容 */}
					<TabPane tab='工具类型1' key="3" className='tabOne'>

						<div className="content">
							<div className="oneTop flex jc-between">
								<Link to="/creative/tooldetails">
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>loadrunner</h3>
												<p className='gong'>预测系统行为和性能的负载测试工具</p>
											</div>
										</div>
										<div className="bottomText">
											<p>LoadRunner，是一种预测系统行为和性能的负载测试工具。通过以模拟上千万用户实施并发负载及实时性能监测的方式来确认和查找问题，LoadRunner能够对整个企业架构进行测试。</p>
										</div>
									</div>
								</Link>
								<Link to="/creative/mantis">
									<div className="oneContent rightNone">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>Mantis测试工具</h3>
												<p className='gong'>缺陷管理平台Mantis，也做MantisBT，全称Mantis Bug Tracker</p>
											</div>
										</div>
										<div className="bottomText">
											<p>Mantis是一个基于PHP技术的轻量级的开源缺陷跟踪系统，以Web操作的形式提供项目管理及缺陷跟踪服务。在功能上、实用性上足以满足中小型项目的管理及跟踪。更重要的是其开源，不需要负担任何费用。</p>
										</div>
									</div>
								</Link>
							</div>
							<div className="oneTop flex jc-between oneBottom">
								<Link to="/creative/testlink">
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>Testlink工具</h3>
												<p className='gong'>TestLink 是基于web的测试用例管理系统</p>
											</div>
										</div>
										<div className="bottomText">
											<p>TestLink 是基于web的测试用例管理系统，主要功能是测试用例的创建、管理和执行，并且还提供了一些简单的统计功能。
											</p>
										</div>
									</div>
								</Link>
								<Link to="/creative/zentaoPMS">
									<div className="oneContent rightNone">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>禅道项目管理软件</h3>
												<p className='gong'>禅道项目管理软件集产品管理等</p>
											</div>
										</div>
										<div className="bottomText">
											<p>禅道项目管理软件集产品管理、项目管理、质量管理、文档管理、组织管理和事务管理于一体，是一款功能完备的项目管理软件，完美地覆盖了项目管理的核心流程。</p>
										</div>
									</div>
								</Link>
							</div>
						</div>

					</TabPane>
				</Tabs>
			</div>
		);
	}
}
