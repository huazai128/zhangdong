import React from 'react';
import './commonTop.scss';
import { Link, hashHistory } from 'react-router';
export default class CommonTop extends React.Component {
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
