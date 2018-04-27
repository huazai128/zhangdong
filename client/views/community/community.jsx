import React from 'react';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import './community.scss';
import { imgRoot } from 'js/api/config';
import { Tabs, Pagination } from 'antd';
const TabPane = Tabs.TabPane;

@inject('forum')
@observer
class Community extends React.Component {
	constructor(props) {
		super(props);
		this.store = this.props.forum;
	}
	componentDidMount() {
		this.store.getTabs();
		let { query } = this.props.location;
		if (query) {
			this.store.category = Number(query.state || 0);
		}
		this.store.getLists();
	}
	componentWillReceiveProps(nextProps){
	}

	render() {
		const { lists, pagination, tabs, idx, changeTag, changPage } = this.store;
		return (
			<div id='community'>
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;{this.store.category ? '知识库' : '测试者工具'}</div>
				</div>
				<div className="bg"></div>
				<div id='tabParty'>
					<Tabs
						defaultActiveKey={idx}
						renderTabBar={() => <ScrollableInkTabBar />}
						renderTabContent={() => <TabContent />}
						onChange={(e) => { changeTag(e); }}
						animated={false}>
						<TabPane tab="全部类型" key="1" className='tabOne'>
							<div className="content">
								<div className="oneTop flex wrap jc-between">
									{lists.length > 0 && lists.map((item) => (
										<Link to={`/creative/detail/${item.id}`}>
											<div className="oneContent">
												<div className="imgTop flex">
													<div className="leftImg"><img src={`${imgRoot}${item.pc_img}`} alt="" /></div>
													<div className="rightText">
														<h3>{item.title}</h3>
														<p className='gong'>{item.subtitle}</p>
													</div>
												</div>
												<div className="bottomText">
													<p>{item.summary}</p>
												</div>
											</div>
										</Link>
									))}
								</div>
								{lists.length === 0 && (<h2>暂无数据</h2>)}
							</div>
						</TabPane>
						{tabs.length > 0 && tabs.map((tab, index) => (
							<TabPane tab={tab.name} key={index + 2} className='tabOne'>
								<div className="content">
									<div className="oneTop flex wrap jc-between">
										{lists.length > 0 && lists.map((item) => (
											<Link to={`/creative/detail/${item.id}`}>
												<div className="oneContent">
													<div className="imgTop flex">
														<div className="leftImg"><img src={`${imgRoot}${item.pc_img}`} alt="" /></div>
														<div className="rightText">
															<h3>{item.title}</h3>
															<p className='gong'>{item.subtitle}</p>
														</div>
													</div>
													<div className="bottomText">
														<p>{item.summary}</p>
													</div>
												</div>
											</Link>
										))}
									</div>
									{lists.length === 0 && (<h2>暂无数据</h2>)}
								</div>
							</TabPane>
						))}
					</Tabs>
					{pagination.total > 4 && (
						<div className="flex-center">
							<Pagination defaultCurrent={pagination.current_page} defaultPageSize={4} total={pagination.total} onChange={(e) => { changPage(e); }} />
						</div>
					)}
				</div>
			</div>
		);
	}
}
export default Community;
