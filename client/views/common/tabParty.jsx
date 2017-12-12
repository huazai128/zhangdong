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
						<Link to="/creative/tooldetails">
							<div className="content">
								<div className="oneTop flex jc-between">
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>测试工具名称（字符限制10字以内）</h3>
												<p className='gong'>工具类型名称</p>
											</div>
										</div>
										<div className="bottomText">
											<p>测试工具简介：简介内容文本简介内容文内容文本简介内容文本,简介内容文本简介内容文本。</p>
											<p>简介内容文本简介内容文本,简介内容简介内容文本,简介内容文本.</p>
											<p>内容文本简介,内容文本简介内容文本简介内容文本简介内容文本简介内容文本简介内容文本简，介内容文本简介内容文本.</p>
										</div>
									</div>
									<div className="oneContent rightNone">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>测试工具名称（字符限制10字以内）</h3>
												<p className='gong'>工具类型名称</p>
											</div>
										</div>
										<div className="bottomText">
											<p>测试工具简介：简介内容文本简介内容文内容文本简介内容文本,简介内容文本简介内容文本。</p>
											<p>简介内容文本简介内容文本,简介内容简介内容文本,简介内容文本.</p>
											<p>内容文本简介,内容文本简介内容文本简介内容文本简介内容文本简介内容文本简介内容文本简，介内容文本简介内容文本.</p>
										</div>
									</div>
								</div>
								<div className="oneTop flex jc-between oneBottom">
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>测试工具名称（字符限制10字以内）</h3>
												<p className='gong'>工具类型名称</p>
											</div>
										</div>
										<div className="bottomText">
											<p>测试工具简介：简介内容文本简介内容文内容文本简介内容文本,简介内容文本简介内容文本。</p>
											<p>简介内容文本简介内容文本,简介内容简介内容文本,简介内容文本.</p>
											<p>内容文本简介,内容文本简介内容文本简介内容文本简介内容文本简介内容文本简介内容文本简，介内容文本简介内容文本.</p>
										</div>
									</div>
									<div className="oneContent rightNone">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>测试工具名称（字符限制10字以内）</h3>
												<p className='gong'>工具类型名称</p>
											</div>
										</div>
										<div className="bottomText">
											<p>测试工具简介：简介内容文本简介内容文内容文本简介内容文本,简介内容文本简介内容文本。</p>
											<p>简介内容文本简介内容文本,简介内容简介内容文本,简介内容文本.</p>
											<p>内容文本简介,内容文本简介内容文本简介内容文本简介内容文本简介内容文本简介内容文本简，介内容文本简介内容文本.</p>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</TabPane>
					{/* 第二个内容 */}
					<TabPane tab='工具类型1' key="2" className='tabOne'>
						<Link to="/tooldetails">
							<div className="content">
								<div className="oneTop flex jc-between">
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>测试工具名称（字符限制10字以内）</h3>
												<p className='gong'>工具类型名称</p>
											</div>
										</div>
										<div className="bottomText">
											<p>测试工具简介：简介内容文本简介内容文内容文本简介内容文本,简介内容文本简介内容文本。</p>
											<p>简介内容文本简介内容文本,简介内容简介内容文本,简介内容文本.</p>
											<p>内容文本简介,内容文本简介内容文本简介内容文本简介内容文本简介内容文本简介内容文本简，介内容文本简介内容文本.</p>
										</div>
									</div>
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>测试工具名称（字符限制10字以内）</h3>
												<p className='gong'>工具类型名称</p>
											</div>
										</div>
										<div className="bottomText">
											<p>测试工具简介：简介内容文本简介内容文内容文本简介内容文本,简介内容文本简介内容文本。</p>
											<p>简介内容文本简介内容文本,简介内容简介内容文本,简介内容文本.</p>
											<p>内容文本简介,内容文本简介内容文本简介内容文本简介内容文本简介内容文本简介内容文本简，介内容文本简介内容文本.</p>
										</div>
									</div>
								</div>
								<div className="oneTop flex jc-between oneBottom">
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>测试工具名称（字符限制10字以内）</h3>
												<p className='gong'>工具类型名称</p>
											</div>
										</div>
										<div className="bottomText">
											<p>测试工具简介：简介内容文本简介内容文内容文本简介内容文本,简介内容文本简介内容文本。</p>
											<p>简介内容文本简介内容文本,简介内容简介内容文本,简介内容文本.</p>
											<p>内容文本简介,内容文本简介内容文本简介内容文本简介内容文本简介内容文本简介内容文本简，介内容文本简介内容文本.</p>
										</div>
									</div>
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>测试工具名称（字符限制10字以内）</h3>
												<p className='gong'>工具类型名称</p>
											</div>
										</div>
										<div className="bottomText">
											<p>测试工具简介：简介内容文本简介内容文内容文本简介内容文本,简介内容文本简介内容文本。</p>
											<p>简介内容文本简介内容文本,简介内容简介内容文本,简介内容文本.</p>
											<p>内容文本简介,内容文本简介内容文本简介内容文本简介内容文本简介内容文本简介内容文本简，介内容文本简介内容文本.</p>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</TabPane>
					{/* 第三个内容 */}
					<TabPane tab='工具类型1' key="3" className='tabOne'>
						<Link to="/tooldetails">
							<div className="content">
								<div className="oneTop flex jc-between">
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>测试工具名称（字符限制10字以内）</h3>
												<p className='gong'>工具类型名称</p>
											</div>
										</div>
										<div className="bottomText">
											<p>测试工具简介：简介内容文本简介内容文内容文本简介内容文本,简介内容文本简介内容文本。</p>
											<p>简介内容文本简介内容文本,简介内容简介内容文本,简介内容文本.</p>
											<p>内容文本简介,内容文本简介内容文本简介内容文本简介内容文本简介内容文本简介内容文本简，介内容文本简介内容文本.</p>
										</div>
									</div>
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>测试工具名称（字符限制10字以内）</h3>
												<p className='gong'>工具类型名称</p>
											</div>
										</div>
										<div className="bottomText">
											<p>测试工具简介：简介内容文本简介内容文内容文本简介内容文本,简介内容文本简介内容文本。</p>
											<p>简介内容文本简介内容文本,简介内容简介内容文本,简介内容文本.</p>
											<p>内容文本简介,内容文本简介内容文本简介内容文本简介内容文本简介内容文本简介内容文本简，介内容文本简介内容文本.</p>
										</div>
									</div>
								</div>
								<div className="oneTop flex jc-between oneBottom">
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>测试工具名称（字符限制10字以内）</h3>
												<p className='gong'>工具类型名称</p>
											</div>
										</div>
										<div className="bottomText">
											<p>测试工具简介：简介内容文本简介内容文内容文本简介内容文本,简介内容文本简介内容文本。</p>
											<p>简介内容文本简介内容文本,简介内容简介内容文本,简介内容文本.</p>
											<p>内容文本简介,内容文本简介内容文本简介内容文本简介内容文本简介内容文本简介内容文本简，介内容文本简介内容文本.</p>
										</div>
									</div>
									<div className="oneContent">
										<div className="imgTop flex">
											<div className="leftImg"></div>
											<div className="rightText">
												<h3>测试工具名称（字符限制10字以内）</h3>
												<p className='gong'>工具类型名称</p>
											</div>
										</div>
										<div className="bottomText">
											<p>测试工具简介：简介内容文本简介内容文内容文本简介内容文本,简介内容文本简介内容文本。</p>
											<p>简介内容文本简介内容文本,简介内容简介内容文本,简介内容文本.</p>
											<p>内容文本简介,内容文本简介内容文本简介内容文本简介内容文本简介内容文本简介内容文本简，介内容文本简介内容文本.</p>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</TabPane>
				</Tabs>
			</div>
		)
	}
}
