import React from 'react';
import './commonTop.scss';
import { Link, hashHistory } from 'react-router';
const navs = [
	{ title: '产品与服务',path:'/service',data:[
		{ icon:require('img/index04.png'),title:'软件测试',path:'/service' },
		{ icon:require('img/index03.png'),title:'硬件测试',path:'/service' },
		{ icon:require('img/index02.png'),title:'认证',path:'/service' },
	]},
	{ title: '解决方案',path:'/solve',data:[
		{ icon:require('img/index04.png'),title:'APP软件测试解决方案',path:'/app' },
		{ icon:require('img/index03.png'),title:'智能硬件测试解决方案',path:'/hardware' },
		{ icon:require('img/index01.png'),title:'教育行业测试解决方案',path:'/education' },
		{ icon:require('img/index05.png'),title:'运营商测试解决方案',path:'/lab' },
	] },
	{ title: '新闻动态',path:'/new' },
	{ title: '关于我们',path:'/our' },
];
export default class CommonTop extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			show: false,
			curNavs:[],
			title:''
		};
	}
	onChange = (e,flag) => {
		this.setState({
			curNavs: [],
			show:false,
			title:''
		});
	}
	render() {
		return (<div className='commonTop'>
			<div className="topDetail">
				<div className="topNav flex">
					<div className="navLeft flex-g-1">
						<ul className="flex-vcenter">
							<li className='liTwo'><Link to="/"><img src={require('img/logo.png')} alt="" /></Link></li>
							<li className="item"><Link to="/service">产品与服务</Link></li>
							<li className="item"><Link to="/solve">解决方案</Link></li>
							<li className="item"><Link to="/new">新闻动态</Link></li>
							<li className="item"><Link to="/our">关于我们</Link></li>
						</ul>
					</div>
					<div className="navRight">
						<ul className="topBoxright flex-vcenter">
							<li className="blueBtn"><Link to='/creative'>测试者社区</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>);
	}
}
