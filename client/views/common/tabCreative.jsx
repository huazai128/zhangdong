import React, { Component } from 'react';
import { Tabs, Pagination } from 'antd';
import { inject, observer } from 'mobx-react';
import './tabCreative.scss';
import { Link, hashHistory } from 'react-router';
import { imgRoot } from 'js/api/config';
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
let tabs = [
	{ key: '1', value: '最新回复', },
	{ key: '2', value: '最新发布', },
	{ key: '3', value: '版主推荐', },
	{ key: '4', value: '精选帖子', },
];

@inject('creative')
@observer
export default class Tab extends React.Component {
	constructor(props) {
		super(props);
		this.store = this.props.creative;
	}
	componentDidMount() {
		this.store.getInit();
	}
	componentWillReceiveProps() {
		this.store.getInit();
	}
	render() {
		const { lists, change, idx, pageUpdate } = this.store;
		let user = JSON.parse(localStorage.getItem('user'));
		if (user && Object.is(user.type, 1)) {
			let arr = [{ key: '5', value: '众测平台', }];
			tabs = [...tabs, ...arr];
		} else {
			tabs = [
				{ key: '1', value: '最新回复', },
				{ key: '2', value: '最新发布', },
				{ key: '3', value: '版主推荐', },
				{ key: '4', value: '精选帖子', },
			];
		}
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
								{(lists && !!lists.data.length) ? lists.data.map((list, index) => (
									!Object.is(idx, '5') ? (
										<Link to={`/creative/barDel/${list.id}`} className='border_bottom'>
											<div className="new flex flex-vcenter">
												<div className="leftNew">
													<img src={(list.userId && list.userId.gravatar) ? imgRoot + list.userId.gravatar : require('img/top2.png')} />
												</div>
												<div className="rightNew">
													<p>{list.title}</p>
													<div>
														<ul className='flex'>
															<li>作者: {list.userId && list.userId.username}</li>
															<li>{date(list.create_at)}</li>
															<li>浏览量：{list.meta && list.meta.links}</li>
															<li>回复量：{list.meta && list.meta.comments}</li>
														</ul>
													</div>
												</div>
											</div>
										</Link>
									) : (
										<Link to={`/creative/receipt/${list.id}`} className='border_bottom'>
											<div className="new apply-item flex flex-vcenter">
												<div className="rightNew">
													<p>{list.mold ? '兼容测试' : '功能测试'}任务</p>
													<div>
														<ul className='flex'>
															<li>{list.mold ? '兼容测试' : '功能测试'} </li>
															<li>{date(list.create_at)}</li>
														</ul>
													</div>
												</div>
											</div>
										</Link>
									)
								)) : <h3 className="no-more">暂无数据</h3>}
							</TabPane>
						))}
					</Tabs>
					{lists && lists.pagination.total > 10 && (<Pagination
						total={lists.pagination.total}
						current={lists.pagination.current_page}
						pageSize={lists.pagination.pre_page}
						itemRender={itemRender}
						className='flex-center'
						onChange={(e) => { pageUpdate(e); }}
						style={{ marginTop: '34px' }} />)}
				</div>
			</div>
		);
	}
}
