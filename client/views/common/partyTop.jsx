import React, { Component } from 'react';
import './partyTop.scss';
import { Input, Select } from 'antd';
import { Link, hashHistory } from 'react-router';
// import $ from 'jquery';
// 这是搜索框
const Search = Input.Search;
// 下拉框
// const Option = Select.Option;
// function handleChange(value) {
// 	if (`${value}` == '个人中心') {
// 		setTimeout(() => {
// 			hashHistory.push('/creative/personal');
// 		}, 200);
// 	} else if (`${value}` == '退出登录') {
// 		hashHistory.push('/login');
// 		// console.log(333)
// 		localStorage.removeItem('name');
// 	}
// }

class CommentLogin extends React.Component {
	state = {
		text: '登录'
	}
	render() {
		// name = 'dddd'
		// onClick={() => {hashHistory.push('/login');}}
		return (
			<div className='flex-vcenter'>
				<Link className="banA">注册</Link>
				<Link className="banA" to='/login' target="_blank">{this.state.text}</Link>
			</div>
		);
	}
}


export default class Top extends React.Component {

	click = () => {
		hashHistory.push('/creative/personal');
	}
	render() {
		const name = localStorage.getItem('name');
		console.log(name)
		const isLogin = name === 'admin';//布尔值

		// console.log(isLogin,8888)
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
								onSearch={value => console.log(value)}
								style={{ width: 270, height: '34px', backgroundColor: '#333333' }}
							/>
						</div>
						<div className="dropDown flex flex-vcenter">
							{isLogin ? <img src={require('img/top2.png')} alt="" onClick={name == 'admin' ? this.click : ''} /> : <CommentLogin />}
							{/* <div className="drop">
								用户名称&nbsp;&nbsp;
								<Select defaultValue="224" style={{ width: 120 }} onChange={handleChange}>
									<Option value="个人中心">个人中心</Option>
									<Option value="退出登录">退出登录</Option>
								</Select>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
