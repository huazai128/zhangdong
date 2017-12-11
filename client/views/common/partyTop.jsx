import React, { Component } from 'react';
import './partyTop.scss';
import { Input, Select } from 'antd';
import { Link, hashHistory } from 'react-router';
// import $ from 'jquery';
// 这是搜索框
const Search = Input.Search;
// 下拉框
const Option = Select.Option;
function handleChange(value) {
	// console.log(`selected ${value}`);
	if (`${value}` == '个人中心') {
		setTimeout(() => {
			hashHistory.push('/creative/personal');
		}, 200);
	} else if (`${value}` == '退出登录') {
		hashHistory.push('/login');
	}
}

export default class Top extends React.Component {
	render() {

		return (
			<div id='partytop'>
				<div className="party flex jc-between">
					<div className="leftTop flex-vcenter">
						<img src={require('img/partyTop1.png')} alt="" />
						<div className='ceOne'>测试者社区</div>
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
							<img src={require('img/top2.png')} alt="" />
							<div className="drop">
								用户名称&nbsp;&nbsp;
                <Select defaultValue="224" style={{ width: 120 }} onChange={handleChange}>
									<Option value="个人中心">个人中心</Option>
									<Option value="退出登录">退出登录</Option>
								</Select>
							</div>

						</div>
					</div>
				</div>
			</div>
		);
	}
}
