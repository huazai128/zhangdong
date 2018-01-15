import React, { Component } from 'react';
import { Tabs } from 'antd';
import './tabOur.scss';

const { TabPane } = Tabs;

export default class extends React.Component {

	render() {
		return (
			<div id='tabOur'>
				<div className="zhang">
					<Tabs
						defaultActiveKey="1"
						renderTabBar={() => <ScrollableInkTabBar />}
						renderTabContent={() => <TabContent />}
						animated={false}
					>
						<TabPane tab='公司简介' key="1" className='tabOne' style={{ color: '#333333' }}>
							{/* 公司简介 */}
							<div className="messageOne">
								<div className='bgContent'>
									<div className="messageContent flex">
										<img src={require('img/message1.png')} />
										<div className='rightMes flex-g-1'>
											<p className='firstMes'>AppsTest掌测（广州掌动智能科技有限公司），2006年，在华南理工大学科技园区内成立，公司专注于移动应用
                测试的云服务平台，致力帮助中小企业和大众创业园团队获取“云+端”的软件质量提升服务；</p>
											<p className='secondMes'>
												掌动智能以十年移动互联网应用测试领域的积累与沉淀铸就“APP+智能硬件”模式的软件硬件一体化评测专家。
                无缝匹配App软件及智能硬件开发团队的产品迭代周期，解决产品“好不好用”和“能不能用”的成长痛点，并出具国家权威的APP软件及智能
                软件测试报告（可用于退税、高企/软件认证、申请政府扶持资金和质量仲裁）；</p>
											<p>
												我们致力打造在线的“云平台”“云工具”和“云终端”三位一体的云测试集群和线下权威的测试服务资源，
                测试服务联盟网络和高素质的测试服务队伍；</p>
											<p>掌动智能于2014年广州股权交易挂挂牌上市（代码：896257），目前已签约西部证券。</p>
										</div>
									</div>
									<ul className='ulImg flex'>
										<li><a href="javascript:void(0);"><img src={require('img/intro_pic1.jpg')} /></a></li>
										<li><a href="javascript:void(0);"><img src={require('img/intro_pic2.jpg')} /></a></li>
										<li><a href="javascript:void(0);"><img src={require('img/intro_pic3.jpg')} /></a></li>
									</ul>
								</div>
							</div>
						</TabPane>
						<TabPane tab='招贤纳士' key="2" className='tabOne'>
							<div className="find">
								<div className="findOne">
									<div className="email"><a href="#">简历请投递至：syqiu@appstest.cn</a></div>
									<div className="findCont">
										<div className='flex textTop'><i className='findBlue'></i><p className='findTitle flex-g-l'>软件测试工程师</p></div>
										<ul className='station'>
											<li>岗位职责</li>
											<li>1.根据需要编写方案，分析测试数据、测试结果，撰写报告；</li>
											<li>2.搭建测试环境，编写测试脚本，执行自动化测试；</li>
											<li>3.根据项目需要，研究新的测试工具或测试框架；</li>
											<li>4.对移动端产品进行性能、功能测试；</li>
											<li>5.对测试任务进行统筹安排。</li>
										</ul>
										<ul className='station'>
											<li>任职要求：</li>
											<li>1.至少一年黑盒子测试经验或一年自动化测试经验；</li>
											<li>2.有Android/iOS开发或移动端产品测试经验优先；</li>
											<li>3.能熟练黑盒测试方法，熟练使用不同的测试方法设计用例、执行测试；</li>
											<li>4.熟悉黑盒测试方法，熟练使用不同的测试方法设计用例、执行测试；</li>
											<li>5.熟悉一款自动化功能/性能测试的工具，能熟练的根据需求和被测试产品编写测试脚本；</li>
											<li className='lastBottom'>6.能对测试结果进行研究分析，并最终生成报告。</li>
										</ul>
									</div>
								</div>
								{/* 高级测试工程师 */}
								<div className="findOne">
									<div className="findCont">
										<div className='flex textTop'><i className='findBlue'></i><p className='findTitle flex-g-l'>高级测试工程师</p></div>
										<ul className='station'>
											<li>岗位职责</li>
											<li>1.精通测试理论、流程与方法，能够熟悉使用主流的功能及性能测试工具（selenium、jenkins等）；</li>
											<li>2.熟悉软件功能、性能及安全方面的测试方法；</li>
											<li>3.对测试中发现的问题进行详细分析和准确定位，并能对产品提出优化的方案提高产品的性能；</li>
											<li>4.通过对产品的测试、保证产品质量达到制定质量目标、能提出对产品质量目标的进一步改进的要求并依照执行；</li>
											<li>5.参与制定软件测试标准，编写相应的软件测试文档；</li>
											<li>6.负责部门内部员工的测试知识和测试工具的培训工作。</li>
										</ul>
										<ul className='station'>
											<li>任职要求：</li>
											<li>1.本科以上学历，3年以上的工作经验，有互联网企业工作经验优先考虑；</li>
											<li>2.精通软件测试理论、软件测试流程及其各项规范；</li>
											<li>3.熟悉linux系统，有基本的脚本编写能力，如shell、python、perl等，会使用脚本做的一些自动化工作；</li>
											<li>4.熟悉常用的自动化测试工具、性能测试工具，如Seleniu、Autolt、SoapUI、LoadRunner等，并精通一款测试工具；</li>
											<li>5.熟悉网络协议（HTTP、TCP/IP等）优先；</li>
											<li className='lastBottom'>6.熟悉wireshark,tcpdump网络抓包，数据分析工具。</li>
										</ul>
									</div>
								</div>
								{/* 用户研究院 */}
								<div className="findOne">
									<div className="findCont">
										<div className='flex textTop'><i className='findBlue'></i><p className='findTitle flex-g-l'>用户研究员</p></div>
										<ul className='station'>
											<li>岗位职责</li>
											<li>1.与需求方、项目经理沟通，并设计相应的测试的方案；</li>
											<li>2.确保评测方案的顺利实施，把控数据搜集和分析质量；</li>
											<li>3.完成报告撰写，能有效的向需求方传递调研结果。</li>
										</ul>
										<ul className='station'>
											<li>任职要求：</li>
											<li>1.大专或以上学历，心理学、设计学、统计学/社会学等市场研究相关专业优先；</li>
											<li>2.工作年限：1年或以上；有交互设计或工业设计背景优先；</li>
											<li>3.熟练掌握常用的用户研究方法，能独立负责用户观察、深度访谈、定量问卷调研等工作；能独立进行科学、严禁的实验并实施；掌握专家走查方法；</li>
											<li>4.熟练使用SPAA、Excel等工具进行数据库管理和基础分析；熟练使用常用办公工具；了解常用APP的体验评测流程；</li>
											<li>5.热爱用户研究工作，有敏锐的数据洞察和分析能力，能承受较高程度的工作压力；</li>
											<li className='lastBottom'>6.主动性强、善于学习各种知识；积极完成项目经理安排的工作</li>
										</ul>
									</div>
								</div>
								{/* 销售经理 */}
								<div className="findOne borderOne">
									<div className="findCont">
										<div className='flex textTop'><i className='findBlue'></i><p className='findTitle flex-g-l'>销售经理</p></div>
										<ul className='station'>
											<li>岗位职责</li>
											<li>1.销售文件准备及商务报价等工作，挖掘客户做大的消费潜力；</li>
											<li>2.负责制定客户经营计划，积极有效推进客户经营，承担销售目标、完成销售业绩目标；</li>
											<li>3.负责资源整合，形成整体测试解决方案，包装销售；</li>
											<li>4.合作方关系的维护和拓展对客户做软件测试工具、方案和服务介绍演示。</li>
										</ul>
										<ul className='station'>
											<li>任职要求：</li>
											<li>1.有智能家居，家电，商用设备等行业资源和行业销售的经验者优先考虑；</li>
											<li>2.反应敏捷，具备良好的沟通、表达、商务谈判能力；</li>
											<li>3.具备一定的市场分析及判断能力，良好的客户服务意识；</li>
											<li>4.积极主动，喜欢有挑战性工作，对工作有激情，能承受较大工作压力；</li>
											<li className='lastBottom'>5.具有团队的合作意识，具备努力开拓市场的精神，有个人奋斗目标和信心。</li>
										</ul>
									</div>
								</div>
							</div>
						</TabPane>
					</Tabs>
				</div>
			</div>
		);
	}
}
