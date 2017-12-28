import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import './zhangce.scss';
export default class Tab extends React.Component {
	render() {
		return (
			<div className='zhangce'>
				<div className="nav flex">
					<div className="navText flex"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/itcontent">优质帖子</Link></div>
				</div>
				<div className="boxIt">
					<div className='boxItTop'>掌测AppSTest|接口自动化测试</div>
					<div className="itTop">
						<div className="textContentOne">
							<div>接口自动化测试是测试浏览器与服务器的接口。用户把数据输入到的前端页面上，通过http协议的get与post请求来实现前后端的数据传递。</div>
							<div>首先对用例进行分析，了解需要对接口做什么操作，并在UI页面做对应的操作，打开Chrome浏览器的开发者工具，对接口信息进行分析。例如登录的接口：</div>
							<div className='ziImgOne'>
								<div>分析后可以知道登录接口需要传入的参数，就可以按照用例，通过改变不同的参数，对接口返回的数据进行验证，看是否符合预期。同样以登录接口为例：</div>
								<div>
									<div>
										<img src={require('img/zi2.png')} />
										<img src={require('img/zi3.png')} />
									</div>
									<div>
										<img src={require('img/zi4.png')} />
										<img src={require('img/zi5.png')} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
