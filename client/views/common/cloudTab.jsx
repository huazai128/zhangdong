import React, { Component } from 'react';
import { Tabs } from 'antd';
import './cloudTab.scss';
import HeadOne from './cloudOne.jsx';
const { TabPane } = Tabs;
import { Link, hashHistory } from 'react-router';
export default class extends React.Component {
	state = {
		activeKey: this.props.id
	}

	onChange = (activeKey) => {
		this.setState({ activeKey });
	}

	render() {
		return (
			<div id='cloudTab'>
				<div className="zhang">
					<Tabs
						activeKey={this.state.activeKey}
						renderTabBar={() => <ScrollableInkTabBar />}
						onChange={this.onChange}
						renderTabContent={() => <TabContent />}
						animated={false}
					>
						<TabPane tab={<HeadOne active={this.state.activeKey == '1'} />} key="1" className='tabOne'>
							<div className="boxText">
								<div className='guojia'>国家质量基础设施云平台NQI-Clound质量认证，支撑智能应用管理交付能力</div>
								<div className='qingzhi'>
									<div className='ban'>半强制性认证</div>
									<div>
										<ul className='flex'>
											<li>
												<img src={require('img/chan.png')} alt="" />
												<p className='diFang'>第三方产品验收测试</p>
											</li>
											<li>
												<img src={require('img/zheng1.png')} alt="" />
												<p className='diFang'>政府科技项目验收测试</p>
											</li>
											<li>
												<img src={require('img/qiye1.png')} alt="" />
												<p className='diFang'>高企/软企资质认证测试</p>
											</li>
											<li>
												<img src={require('img/sifa.png')} alt="" />
												<p className='diFang'>第三方司法仲裁测试</p>
											</li>
										</ul>
									</div>
								</div>
								<div className='qingzhi ziyuan'>
									<div className='ban'>自愿性认证</div>
									<div>
										<ul className='flex'>
											<li>
												<img src={require('img/shou5.png')} alt="" />
												<p className='diFang'>掌测和企业共同推出APP<br />及智能硬件自愿性认证测试</p>
											</li>
											<li>
												<img src={require('img/app3.png')} alt="" />
												<p className='diFang'>获得APP及智能硬件<br />供应商的采信</p>
											</li>
											<li>
												<img src={require('img/lianjie.png')} alt="" />
												<p className='diFang'>形成企业生态链成员的<br />刚性测试需求开展强制检测</p>
											</li>
											<li>
												<img src={require('img/ming2.png')} alt="" />
												<p className='diFang'>“掌测认证”成为行业的APP<br />及智能硬件产品的“出生证”</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</TabPane>
						<TabPane tab={<HeadOne text="质量运营" bg="shiTu" active={this.state.activeKey == '2'} />} key="2" className='tabOne'>
							<div className="boxText">
								<div className='guojia'>国家质量基础设施云平台NQI-Cloud质量运营，支撑智能应用持续运维能力</div>
								<div className='qingzhi'>
									<div>
										<ul className='flex lingWai'>
											<li>
												<img src={require('img/bing1.png')} alt="" />
												<p className='diFang'>API软件植入</p>
											</li>
											<li>
												<img src={require('img/qian1.png')} alt="" />
												<p className='diFang'>可拔插IC嵌入</p>
											</li>
											<li>
												<img src={require('img/shuju2.png')} alt="" />
												<p className='diFang'>产品数据采集</p>
											</li>
											<li>
												<img src={require('img/chen1.png')} alt="" />
												<p className='diFang'>远程诊断</p>
											</li>
											<li>
												<img src={require('img/wo1.png')} alt="" />
												<p className='diFang'>远程诊断</p>
											</li>
										</ul>
										<div className='ImgContent'>
											<img src={require('img/333.png')} alt="" />
										</div>
									</div>
								</div>

							</div>
							{/* <div className="boxText">
								<div className='guojia'>国家质量基础设施云平台NQI-Cloud质量测试，支撑智能应用基础测试能力</div>
								<div className='qingzhi'>
									<div>
										<ul className='flex'>
											<li>
												<img src={require('img/yun1.png')} alt="" />
												<p className='diFang'>基于公有云/私有云的工具集市<br />与知识库集市的联网共享、在线测试</p>
											</li>
											<li>
												<img src={require('img/cpg1.png')} alt="" />
												<p className='diFang'>36种先进测试工具</p>
											</li>
											<li>
												<img src={require('img/test1.png')} alt="" />
												<p className='diFang'>58种主流测试方法</p>
											</li>
											<li>
												<img src={require('img/shuju1.png')} alt="" />
												<p className='diFang'>万余种行业应用沉淀数据仓库</p>
											</li>
										</ul>
										<div>
											<img src={require('img/444.png')} alt="" />
										</div>
									</div>
								</div>
							</div> */}
						</TabPane>
						<TabPane tab={<HeadOne text='质量变现' bg="qiuTu" active={this.state.activeKey == '3'} />} key="3" className='tabOne'>
							<div className="boxText">
								<div className='guojia'>国家质量基础设施云平台NQI-Cloud质量测试，支撑智能应用基础测试能力</div>
								<div className='qingzhi'>
									<div>
										<ul className='flex'>
											<li>
												<img src={require('img/ziliang2.png')} alt="" />
												<p className='diFang'>基于公有云/私有云的工具集市<br />与知识库集市的联网共享、在线测试</p>
											</li>
											<li>
												<img src={require('img/xuexi2.png')} alt="" />
												<p className='diFang'>36种先进测试工具</p>
											</li>
											<li>
												<img src={require('img/jisuan1.png')} alt="" />
												<p className='diFang'>58种主流测试方法</p>
											</li>
											<li>
												<img src={require('img/shuju1.png')} alt="" />
												<p className='diFang'>万余种行业应用沉淀数据仓库</p>
											</li>
										</ul>
										<div className='ImgContent'>
											<img src={require('img/222.png')} alt="" />
										</div>
									</div>
								</div>

							</div>
							{/* <div className="boxText">
								<div className='guojia'>国家质量基础设施云平台NQI-Cloud质量运营，支撑智能应用持续运维能力</div>
								<div className='qingzhi'>
									<div>
										<ul className='flex lingWai'>
											<li>
												<img src={require('img/bing1.png')} alt="" />
												<p className='diFang'>API软件植入</p>
											</li>
											<li>
												<img src={require('img/qian1.png')} alt="" />
												<p className='diFang'>可拔插IC嵌入</p>
											</li>
											<li>
												<img src={require('img/shuju2.png')} alt="" />
												<p className='diFang'>产品数据采集</p>
											</li>
											<li>
												<img src={require('img/chen1.png')} alt="" />
												<p className='diFang'>远程诊断</p>
											</li>
											<li>
												<img src={require('img/wo1.png')} alt="" />
												<p className='diFang'>远程诊断</p>
											</li>
										</ul>
										<div>
											<img src={require('img/444.png')} alt="" />
										</div>
									</div>
								</div>

							</div> */}
						</TabPane>
						<TabPane tab={<HeadOne text='质量测试' bg="comTu" active={this.state.activeKey == '4'} />} key="4" className='tabOne'>
							<div className="boxText">
								<div className='guojia'>国家质量基础设施云平台NQI-Cloud质量测试，支撑智能应用基础测试能力</div>
								<div className='qingzhi'>
									<div>
										<ul className='flex'>
											<li>
												<img src={require('img/yun1.png')} alt="" />
												<p className='diFang'>基于公有云/私有云的工具集市<br />与知识库集市的联网共享、在线测试</p>
											</li>
											<li>
												<img src={require('img/cpg1.png')} alt="" />
												<p className='diFang'>36种先进测试工具</p>
											</li>
											<li>
												<img src={require('img/test1.png')} alt="" />
												<p className='diFang'>58种主流测试方法</p>
											</li>
											<li>
												<img src={require('img/shuju1.png')} alt="" />
												<p className='diFang'>万余种行业应用沉淀数据仓库</p>
											</li>
										</ul>
										<div className='ImgContent'>
											<img src={require('img/444.png')} alt="" />
										</div>
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
