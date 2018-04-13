import React, { Component } from 'react';
import { Tabs, Pagination } from 'antd';
import { inject, observer } from 'mobx-react';
import './tabCreative.scss';
import { Link, hashHistory } from 'react-router';
import date from 'js/core/date';
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
const tabs = [
	{ key: "1", value: "最新回复", },
	{ key: "2", value: "最新发布", },
	{ key: "3", value: "版主推荐", },
	{ key: "4", value: "优质帖子", },
]

@inject("creative")
@observer
export default class Tab extends React.Component {
	constructor(props) {
		super(props);
		this.store = this.props.creative;
	}
	componentDidMount() {
		this.store.getLists();
	}

	componentWillReceiveProps(nextProps) {

	}

	render() {
		const { lists, change, idx } = this.store;
		return (
			<div id='tabCreative'>
				<div className="tabContent">
					<Tabs
						defaultActiveKey={idx}
						renderTabBar={() => <ScrollableInkTabBar />}
						onChange={(e) => { change(e); }}
						renderTabContent={() => <TabContent />}
						animated={false}>
						{tabs.map((item, index) => (
							<TabPane tab={item.value} key={item.key} className='tabOne'>
								{(lists && lists.data) ? lists.data.map((list, index) => (
									<Link to={`/creative/barDel/${list.id}`} className='border_bottom'>
										<div className="new flex flex-vcenter">
											<div className="leftNew">
												<img src={(item.userId && item.userId.gravatar) ? item.userId.gravatar : require('img/top2.png')} />
											</div>
											<div className="rightNew">
												<p>{list.title}</p>
												<div>
													<ul className='flex'>
														<li>作者: {list.userId && list.userId.username}</li>
														<li>{date(list.create_at)}</li>
														<li>浏览量：{list.meta.links}</li>
														<li>回复量：{list.meta.comments}</li>
													</ul>
												</div>
											</div>
										</div>
									</Link>
								)) : <h3>暂无数据</h3>}
							</TabPane>
						))}
					</Tabs>
					<Pagination total={(lists && lists.pagination.total)} itemRender={itemRender} className='flex-center' style={{ marginTop: '34px' }} />
				</div>
			</div>
		);
	}
}
