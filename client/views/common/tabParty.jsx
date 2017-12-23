import React, { Component } from 'react';
import { Tabs } from 'antd';
import './tabParty.scss';
const { TabPane } = Tabs;
import { Link, hashHistory } from 'react-router';
export default class Tab extends React.Component {

	render() {
		return (
			<div id='tabParty'>
				<Tabs
					defaultActiveKey="1"
					renderTabBar={() => <ScrollableInkTabBar />}
					renderTabContent={() => <TabContent />}
					animated={false}
				>
					<TabPane tab='全部类型' key="1" className='tabOne'>

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
