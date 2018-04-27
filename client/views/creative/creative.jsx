import React from 'react';
import './creative.scss';
import Top from '../common/partyTop.jsx';
import Tab from '../common/tabCreative.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
import { message, Button } from 'antd';

import { get } from 'js/api/fetch';
import { imgRoot } from 'js/api/config';

class CreativeContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: false,
			lists1: [],
			lists2: [],
			lists3: [],
			views: {},
			conuts: [],
			isModal: false,
		};
	}
	componentDidMount() {
		let query = {
			state: 1,
			page: 1,
			pre_page: 4
		};
		let params = {
			pre_page: 10,
			choice: 1
		};
		Promise.all([
			this.getLists({ ...query, category: 0 }),
			this.getLists({ ...query, category: 1 }),
			this.getChoiceLists({ ...query, ...params }),
			this.getViews(),
			this.getCount()
		])
			.then((res) => {
				this.setState({
					lists1: res[0].result.data,
					lists2: res[1].result.data,
					lists3: res[2].result.data,
					views: res[3].result,
					conuts: res[4].result
				});
			});
	}
	getLists = async (params) => await get('/forum', params);
	getChoiceLists = async (params) => await get('/community', params);
	getViews = async () => await get('/views');
	getCount = async () => await get('/count');

	isPost = () => {
		let user = JSON.parse(localStorage.getItem('user'));
		let arr = [0, -1];
		if (user) {
			if (arr.includes(user.status)) {
				message.info(`已被禁言${user.time_name}`);
				return false;
			} else {
				hashHistory.push('/creative/quill');
			}
		} else {
			this.setState({
				isModal: true,
			});
		}
	}
	showModal = (value = false) => {
		this.setState({
			isModal: false,
		});
		if (value) {
			hashHistory.push('/login');
		}
	}

	render() {
		const { lists1, lists2, lists3, views, conuts, isModal } = this.state;
		return (
			<div id='creative'>
				<div className="bg"></div>
				<div className='creativeCont flex jc-between'>
					<Tab></Tab>
					<div className="bar">
						<div className="barContent">
							<span onClick={() => { this.isPost(); }}>我要发帖</span>
						</div>
						<div className="toolContent">
							<Link to="/creative/community?state=0">
								<div className="cpt flex">
									<div className="leftImg"></div>
									<div className='textConet flex-vcenter'>测试工具集市</div>
								</div>
							</Link>
							<div className="flex wrap roundBottm">
								{lists1.length > 0 && lists1.map((item, index) => (
									<Link className="round" to={`/creative/detail/${item.id}?state=0`}>
										<div >
											<div className="one"><img src={`${imgRoot}/${item.pc_img}`} alt="" /></div>
											<div className='two'>{item.title}</div>
										</div>
									</Link>
								))}
								{lists1.length === 0 && <h3 className="no-data flex-g-1">暂无数据</h3>}
							</div>
						</div>
						{/* 知识集市 */}
						<div className="toolContent">
							<Link to="/creative/community?state=1">
								<div className="cpt flex">
									<div className="leftImg cptOne"></div>
									<div className='textConet flex-vcenter'>知识库集市</div>
								</div>
							</Link>
							<div className="flex wrap roundBottm">
								{lists2.length > 0 && lists2.map((item, index) => (
									<Link className="round" to={`/creative/detail/${item.id}?state=1`}>
										<div >
											<div className="one"><img src={`${imgRoot}/${item.pc_img}`} alt="" /></div>
											<div className='two'>{item.title}</div>
										</div>
									</Link>
								))}
								{lists2.length === 0 && <h3 className="no-data flex-g-1">暂无数据</h3>}
							</div>
						</div>
						{/* 社区运行状况 */}
						<div className="situation">
							<div className="stuTop">社区运行状况</div>
							<div className="stuContent flex-vcenter">
								<img src={require('img/xingzhuang1.png')} />
								<div className="stuRight">会员：{views.vip}</div>
							</div>
						</div>
						<div className="situation stuOne">
							<div className="stuContent flex-vcenter">
								<img src={require('img/xingzhuang2.jpg')} />
								<div className="stuRight">测试者：{views.test}</div>
							</div>
						</div>
						<div className="situation stuOne">
							<div className="stuContent flex-vcenter">
								<img src={require('img/xingzhuang3.png')} />
								<div className="stuRight">主题：{conuts[1] || 0}</div>
							</div>
						</div>
						<div className="situation stuOne">
							<div className="stuContent flex-vcenter">
								<img src={require('img/xingzhuang4.png')} />
								<div className="stuRight">回复：{conuts[0] || 0}</div>
							</div>
						</div>
					</div>
				</div>
				{isModal && (
					<div id="modal-cont">
						<div className="flex-center tan-cont">
							<div className="tan-box">
								<p><span>发帖前请先登录</span></p>
								<div className="flex-center btn-lists">
									<Button onClick={() => { this.showModal(true); }} className="btn">去登录</Button>
									<Button className="btn-default" onClick={() => { this.showModal(); }}>点错了，再看看</Button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

class Creative extends React.Component {
	render() {
		return (
			<div id='creative'>
				<Top></Top>
				{this.props.children}
				<Footer></Footer>
			</div>
		);
	}
}
export { Creative, CreativeContent };
