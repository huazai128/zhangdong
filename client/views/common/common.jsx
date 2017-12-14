import React from 'react';
import './common.scss';
import { Link, hashHistory } from 'react-router';

class Common extends React.Component {
	render() {
		// console.log(this.props.bgCls)
		return <div id="common">
			<div className={`${this.props.bgCls} topBox`}>
				<div className="content">
					<div className="flex common-top">
						<ul className="flex-vcenter flex-g-1">
							<li className="item"><Link to="/service">产品与服务</Link></li>
							<li className="item"><Link to="/solve">解决方案</Link></li>
							<li className="item"><Link to="/new">新闻动态</Link></li>
							<li className="item"><Link to="/our">关于我们</Link></li></ul>
						<ul className="topBoxright flex-vcenter">
							<li><Link to='/main'>注册</Link></li><li><Link to='/login'>登陆</Link></li><li className="blueBtn"><Link to='/creative'>测试者社区</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>;
	}
}
export default Common;
