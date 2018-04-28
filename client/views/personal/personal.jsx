import React from 'react';
import './personal.scss';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Tabs, Modal, Pagination } from 'antd';
import date from 'js/core/date';
import moment from 'moment';
import { imgRoot } from 'js/api/config';
const { TabPane } = Tabs;

@inject((store) => ({
	login: store.login,
	personal: store.personal
}))
@observer
export default class Personal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
		this.loginStore = this.props.login;
		this.store = this.props.personal;
	}
	componentWillMount() {
		this.store.getInit();
		this.loginStore.getUserInfo();
	}
	componentDidMount() {

	}

	showModal = () => {
		this.setState({
			visible: true,
		});
	}
	handleOk = (e) => {
		this.setState({
			visible: false,
		}, () => {
			this.loginStore.signOut();
			hashHistory.push('/creative');
		});
	}
	handleCancel = (e) => {
		this.setState({
			visible: false,
		});
	}

	render() {
		const { userInfo } = this.loginStore;
		let { lists, idx, changeTab, pageUpdate } = this.store;
		return (
			<div id='personal'>
				<div className="personTop flex jc-between">
					<div className="user-img">
						<img src={imgRoot + userInfo.gravatar} alt="" />
					</div>
					<div className="leftPerson flex-g-1">
						<p>{userInfo.username || 'UUID'}</p>
						<p>第{userInfo.id}位会员/{userInfo.type ? '测试开发用户' : '会员'}<span>{moment(userInfo.create_at).format('YYYY-MM-DD')}</span></p>
					</div>
					<div className="rightPerson flex">
						<p><Link to="/creative/user">编辑资料</Link></p>
						<p onClick={this.showModal}>退出登录</p>
						<Modal
							visible={this.state.visible}
							onOk={this.handleOk}
							onCancel={this.handleCancel}>
							<div>确定要退出吗？</div>
						</Modal>
					</div>
				</div>
				<div className='tabContent'>
					<Tabs
						defaultActiveKey={idx}
						onChange={(e) => { changeTab(e); }}
						animated={false}>
						<TabPane tab='测试申请' key="1" className='tabOne'>
							{lists && lists.data.map((item) => (
								<Link to={`/creative/auditing/${item.id}`}>
									<div className='shenOne'>
										<div className="firstPer flex">
											<p className='firstP'>{item.mold ? '兼容测试' : '功能测试'}任务</p>
											{Object.is(item.process, 0) && (<p className='secondP'>完成申请</p>)}
											{Object.is(item.process, 1) && (<p className='secondP jieP'>确认需求</p>)}
											{Object.is(item.process, 2) && (<p className='secondP ceP'>技术测试</p>)}
											{Object.is(item.process, 3) && (<p className='secondP yiP'>结果交付</p>)}
										</div>
										<div className="bottomContent">{date(item.create_at)}申请 </div>
									</div>
								</Link>
							))}
							{lists && lists.data.length === 0 && <h3 className="no-more">暂无数据</h3>}
						</TabPane>
						{userInfo && Object.is(userInfo.type, 1) && (
							<TabPane tab='测试接单' key="2" className='tabOne'>
								{lists && lists.data && lists.data.map((item) => (
									<Link to={`/creative/auditing/${item.id}`}>
										<div className='shenOne'>
											<div className="firstPer flex">
												<p className='firstP'>{item.mold ? '兼容测试' : '功能测试'}任务</p>
												{Object.is(item.process, 0) && (<p className='secondP'>已接单</p>)}
												{Object.is(item.process, 1) && (<p className='secondP jieP'>确认需求</p>)}
												{Object.is(item.process, 2) && (<p className='secondP ceP'>技术测试</p>)}
												{Object.is(item.process, 3) && (<p className='secondP yiP'>结果交付</p>)}
											</div>
											<div className="bottomContent">
												{date(item.create_at)}申请 </div>
										</div>
									</Link>
								))}
								{lists && lists.data.length === 0 && <h3 className="no-more">暂无数据</h3>}
							</TabPane>
						)}
						<TabPane tab='话题' key="3" className='tabOne'>
							{lists && lists.data && lists.data.map((item) => (
								<Link to={`/creative/barDel/${item.id}`}>
									<div className="theme">
										<div className="themeContent flex">
											<div className="comm-img">
												{item.userId && item.userId.gravatar && (<img src={ imgRoot + item.userId.gravatar} alt="" />)}
												{item.userId && !item.userId.gravatar && (<img src={require('img/top2.png')} alt="" />)}
											</div>
											<div className="flex-g-l comm-cont">
												<div className='one'>{item.title}</div>
												<div className='two'><span>{item.userId && item.userId.username}</span><span>{date(item.create_at)}</span><span>浏览量:{item.meta && item.meta.links}</span><span>回复量:{item.meta && item.meta.comments}</span></div>
											</div>
										</div>
									</div>
								</Link>
							))}
							{lists && lists.data.length === 0 && <h3 className="no-more">暂无数据</h3>}
						</TabPane>
						<TabPane tab='回帖' key="4" className='tabOne'>
							{lists && lists.data && lists.data.map((item) => (
								<Link to={`/creative/barDel/${item.id}`}>
									<div className="theme">
										<div className="themeContent">
											<div className='flex-g-l one'>{item.title}</div>
											<div className='flex-g-l two'><span>{item.userId && item.userId.username}</span><span>{date(item.create_at)}</span><span>浏览量:{item.meta && item.meta.links}</span><span>回复量:{item.meta && item.meta.comments}</span></div>
										</div>
									</div>
								</Link>
							))}
							{lists && lists.data.length === 0 && <h3 className="no-more">暂无数据</h3>}
						</TabPane>
						<TabPane tab='收藏' key="5" className='tabOne'>
							{lists && lists.data && lists.data.map((item) => (
								<Link to={`/creative/barDel/${item.id}`}>
									<div className="theme">
										<div className="themeContent">
											<div className='flex-g-l one'>{item.title}</div>
											<div className='flex-g-l two'><span>{item.userId && item.userId.username}</span><span>{date(item.create_at)}</span><span>浏览量:{item.meta && item.meta.links}</span><span>回复量:{item.meta && item.meta.comments}</span></div>
										</div>
									</div>
								</Link>
							))}
							{lists && lists.data.length === 0 && <h3 className="no-more">暂无数据</h3>}
						</TabPane>
					</Tabs>
					<div className="page-box">
						{lists && !!lists.data.length && (<Pagination
							total={lists.pagination.total}
							current={lists.pagination.current_page}
							pageSize={lists.pagination.pre_page}
							className='flex-center'
							onChange={(e) => { pageUpdate(e); }}
							style={{ marginTop: '34px' }} />)}
					</div>
				</div>
			</div >
		);
	}
}
