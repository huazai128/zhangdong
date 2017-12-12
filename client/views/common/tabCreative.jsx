import React, { Component } from 'react';
import { Tabs, Pagination } from 'antd';
import './tabCreative.scss';
import { Link, hashHistory } from 'react-router';
const { TabPane } = Tabs;
// 分页器
function itemRender(current, type, originalElement) {
	if (type === 'prev') {
		return <a>上一页</a>;
	} else if (type === 'next') {
		return <a>下一页</a>;
	}
	return originalElement;
}

export default class Tab extends React.Component {
	render() {
		return (
			<div id='tabCreative'>
				<div className="tabContent">
					<Tabs
						defaultActiveKey="1"
						renderTabBar={() => <ScrollableInkTabBar />}
						renderTabContent={() => <TabContent />}
						animated={false}
					>
						<TabPane tab='最新回复' key="1" className='tabOne'>
							<Link to="/creative/barDel" className='border_bottom'>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
							</Link>
						</TabPane>
						<TabPane tab='最新发布' key="2" className='tabOne'>
							<Link to="/creative/barDel">
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
							</Link>
						</TabPane>
						<TabPane tab='版主推荐' key="3" className='tabOne'>
							<Link to="/creative/barDel">
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
							</Link>
						</TabPane>
						<TabPane tab='优质帖子' key="4" className='tabOne'>
							<Link to="/creative/barDel">
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="new flex flex-vcenter">
									<div className="leftNew"></div>
									<div className="rightNew">
										<p>帖子标题文本帖子标题文本帖子标题文本</p>
										<div>
											<ul className='flex'>
												<li>作者名称</li>
												<li>两分钟前</li>
												<li>浏览量：958</li>
												<li>回复量：958</li>
											</ul>
										</div>
									</div>
								</div>
							</Link>
						</TabPane>
					</Tabs>
					<Pagination total={100} itemRender={itemRender} className='flex-center' style={{ marginTop: '34px' }} />
				</div>

			</div>
		);
	}
}
