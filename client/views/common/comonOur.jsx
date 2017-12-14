import React from 'react';
import './comonOur.scss';
import { Link, hashHistory } from 'react-router';
class Common extends React.Component {
	render() {
		return <div id="common">
			<div className={`${this.props.bgCls} topBox`}>
				<div className="content">
					<div className="flex common-top">
						<ul className="flex-vcenter flex-g-1">
							<li className='liTwo'><Link to="/"><img src={require('img/logo.png')} alt="" /></Link></li>
							<li className="item"><Link to="/service">产品与服务</Link></li>
							<li className="item"><Link to="/solve">解决方案</Link></li>
							<li className="item"><Link to="/new">新闻动态</Link></li>
							<li className="item"><Link to="/our">关于我们</Link></li></ul>
						<ul className="topBoxright flex-vcenter">
							<li><a href="javasctipt:;">注册</a></li><li><a href="javasctipt:;">登陆</a></li><li className="blueBtn"><Link to='/creative'>测试者社区</Link></li>
						</ul>
					</div>
					<div className="bottomContent">
						{this.props.bgCls === 'solve' || this.props.bgCls === 'main'||this.props.bgCls === 'new' ||this.props.bgCls === 'our'? null : <p className='pTow'>立即申请</p>}
					</div>
					<div className="count">
						{this.props.bgCls === 'main' ? <div id="count"></div> : null}</div>
				</div>
			</div>
		</div>;
	}
}
export default Common;
