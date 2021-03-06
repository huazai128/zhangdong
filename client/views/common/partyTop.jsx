import React, { Component } from 'react';
import './partyTop.scss';
import { Input, Select,message } from 'antd';
import { Link, hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react';
import { imgRoot } from 'js/api/config';
const Search = Input.Search;

class CommentLogin extends React.Component {
	render() {
		return (
			<div className='flex-vcenter login-box'>
				<Link className="banA" to='/register'>注册</Link>
				<Link className="banA" to='/login'>登录</Link>
			</div>
		);
	}
}

@inject('login')
@observer
export default class Top extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: false,
			user: null
		};
		this.store = this.props.login;
	}
	click = () => {
		hashHistory.push('/creative/personal');
	}
	componentDidMount() {
		let user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			this.setState({
				user: user
			});
			this.store.getUserInfo();
		}
		this.store.getInit();
		this.store.expireToken();
	}
	componentWillReceiveProps(props) {
		this.store.getInit();
		this.store.expireToken();
	}
	
	signOut = () => {
		this.store.signOut();
		hashHistory.push('/creative');
	}

	search = (value) => {
		if(value){
			localStorage.setItem('search',value);
			hashHistory.push('/creative/search');
		}else{
			message.info('请输入关键字');
		}
	}

	render() {
		let { isLogin, userInfo } = this.store;
		return (
			<div id='partytop'>
				<div className="party flex jc-between">
					<div className="leftTop flex-vcenter">
						<Link to='/'><img src={require('img/logo.png')} alt="" /></Link>
						<div className='ceOne'>	<Link to='/creative'>测试者社区</Link></div>
					</div>
					<div className="rightTop flex-vcenter">
						<div className="search">
							<Search
								placeholder="搜索"
								onSearch={value => { this.search(value); }}
								style={{ width: 270, backgroundColor: '#333333' }}
								enterButton
							/>
						</div>
						<div className="dropDown flex-center">
							{isLogin ? <img src={(userInfo && (imgRoot + userInfo.gravatar))} alt="" onClick={() => { this.click(); }} /> : <CommentLogin />}
							{isLogin && (
								<div className="drop">
									<p><span>{(userInfo && userInfo.username) ? userInfo.username : '暂无名称'}</span><i></i></p>
									<ul className="drop-list">
										<li onClick={() => { this.click(); }}>个人中心</li>
										<li onClick={() => { this.signOut(); }}>退出登录</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
