import React, { Component } from 'react';
import { Tabs } from 'antd';
import './tabOur.scss';

const FindNode = ({ activeKey, onKey, children }) => {
	if (activeKey === 'all' || activeKey === onKey) return <div className="findOne">{children}</div>;
	else return null;
};

const { TabPane } = Tabs;
const datas = [
	{
		title: '职位类别：', address: [
			{ value: '全部', key: 'all', sective: true },
			{ value: '产品', key: '产品' },
			{ value: '项目', key: '项目' },
			{ value: '设计', key: '设计' },
			{ value: '市场', key: '市场' },
			{ value: '销售', key: '销售' },
			{ value: '推广', key: '推广' },
			{ value: '运营', key: '运营' },
			{ value: '实习', key: '实习' },
			{ value: '开发', key: '开发' },
			{ value: '测试', key: '测试' },
			{ value: '财务', key: '财务' },
			{ value: '会计', key: '会计' },
		]
	}
];

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			getDatas: datas,
			idx: "1"
		};
	}
	componentDidMount() {
		const href = window.location.href.split("page")[1];
		if(href){
			const id = window.location.href.split("=")[1].split("&")[0];
			this.setState({
				idx: id ? id : "1"
			})
		}
	}

	select = (index, idx) => {
		this.state.getDatas[[index]].address.map((item, i) => {
			item.sective = false;
			if (i === idx) {
				item.sective = true;
			}
			return item;
		});
		this.setState({
			getDatas: this.state.getDatas
		});
	}
	componentWillReceiveProps() {
		const href = window.location.href.split("page")[1];
		if(href){
			const id = window.location.href.split("=")[1].split("&")[0];
			this.setState({
				idx: id ? id : "1"
			})
		}
	}
	render() {
		const { getDatas, idx } = this.state;
		const activeKey = getDatas[0].address.find(item => item.sective).key;
		const BindFindNode = ({ children, onKey }) => (
			<FindNode onKey={onKey} activeKey={activeKey}>{children}</FindNode>
		);
		return (
			<div id='tabOur'>
				<div className="zhang">
					<Tabs
						defaultActiveKey={idx}
						activeKey={idx}
						renderTabBar={() => <ScrollableInkTabBar />}
						renderTabContent={() => <TabContent />}
						onChange={(e) => { this.setState({ idx: e }) }}
						animated={false}>
						<TabPane tab='公司简介' key="1" className='tabOne' style={{ color: '#333333' }}>
							{/* 公司简介 */}
							<div className="messageOne">
								<div className='bgContent'>
									<div className="messageContent flex">
										<img src={require('img/message1.png')} />
										<div className='rightMes flex-g-1'>
											<p className='firstMes'>
												广州掌动智能科技有限公司(AppsTest 掌测)，2006 年成立于华南理工大学科技园区，公司是经国家质检总局（国家认监委）认定的第三方APP和智能硬件技术检验检测机构，拥有国家认监委颁发的“CMA”资质认定证书。国内领先的智能应用质量云服务提供商、国家高新技术企业、国家软件企业、国家信息产品标准化评测中心广东分中心、广东省中小企业公共服务平台、广州市信息产品标准化评测公共服务平台。</p>
											<p className='secondMes'>
												掌动公司打造智能硬件与移动互联网融合公共试验检测平台，为传统产品的物联网化、互联网化提供集功能测试、性能测试、兼容测试、软硬交互性测试、网络连通性测试等系列关键共性试验测试技术、工具的集成化服务平台，并通过云端动态的质量大数据托管、收集和分析，为企业传统产品的智能化转型设计、开发、制造、售后和升级全面的质量数据支撑服务，帮助企业提高智能产品的核心竞争力和产品服务质量。</p>
										</div>

									</div>
									<div className="jieContentTop">掌动公司服务超过50万用户，接入超过100万个智能硬件产品，服务90万个APP产品，沉淀超过200万个智能应用测试用例和500万质量大数据。
掌动公司服务客户有：中国移动、科大讯飞、百度金融、陌陌 、TIM、汽车之家、手机百度、手机新浪、讯飞输入法、QQ、WPS Office、携程旅行、Faceu激萌、华为商城、天翼云盘、UC浏览器、爱奇艺、猫眼电影、珍爱网、大姨妈、百度外卖、美拍、豆瓣、网易云音乐等。</div>
									<ul className='ulImg flex'>
										<li><img src={require('img/intro_pic1.jpg')} /></li>
										<li><img src={require('img/intro_pic2.jpg')} /></li>
										<li><img src={require('img/intro_pic3.jpg')} /></li>
									</ul>
								</div>
							</div>
						</TabPane>
						<TabPane tab='招贤纳士' key="2" className='tabOne'>
							<div className="find">
								<div className="findOne our-margin">
									{getDatas.map((item, index) => {
										return (
											<div className="position-selector-item flex" key={index}>
												<div className="selector-title">{item.title}</div>
												<ul className="selector-list flex">
													{item.address.map((list, idx) => {
														return (
															<li key={idx}>
																<a href="javascript:void(0)" className={`selector-link city ${list.sective ? 'active' : ''}`} onClick={() => { this.select(index, idx); }}>{list.value}</a>
															</li>
														);
													})}
												</ul>
											</div>
										);
									})}
								</div>
								<div className="email">简历请投递至：mwei@appstest.cn</div>
								<BindFindNode onKey="测试">
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
								</BindFindNode>
								{/* 高级测试工程师 */}
								<BindFindNode onKey="开发">
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
								</BindFindNode>
								{/* 用户研究院 */}
								<BindFindNode onKey="运营">
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
								</BindFindNode>
								{/* 销售经理 */}
								<BindFindNode onKey="销售">
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
								</BindFindNode>
							</div>
						</TabPane>
					</Tabs>
				</div>
			</div>
		);
	}
}
