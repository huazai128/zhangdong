import React from 'react';
import './comonOur.scss';
import { Link, hashHistory } from 'react-router';
import NavLink from '../component/navLink';
// import NavHover from './serverHover.jsx';
// import HoverContent from './hoverContent.jsx';
class Common extends React.Component {
	state = {
		show: false
	}

	show = () => this.setState({ show: true })

	hide = () => this.setState({ show: false })

	render() {
		return <div id="common">

			<div className={`${this.props.bgCls} topBox`}>
				<div className="content">
					<div id='navTop' className="flex common-top">
						<ul className="flex-vcenter flex-g-1">
							<li className='liTwo'><Link to="/"><img src={require('img/logo.png')} alt="" /></Link></li>
							{/* 这是根据路由判断的组件 */}
							<NavLink url={this.props.location.pathname} to={'/service'}>产品与服务

							</NavLink>
							<NavLink url={this.props.location.pathname} to="/solve">解决方案</NavLink>
							<NavLink url={this.props.location.pathname} to="/new">新闻动态</NavLink>
							<NavLink url={this.props.location.pathname} to="/our">关于我们</NavLink>
						</ul>
						<ul className="topBoxright flex-vcenter">
							<li className="blueBtn flex-center"><Link to='/creative'>测试者社区</Link></li>
						</ul>
					</div>
					{/* {this.state.show && <NavHover />} */}
					<div className="bottomContent">
						{this.props.bgCls === 'solve' || this.props.bgCls === 'main' || this.props.bgCls === 'new' || this.props.bgCls === 'our' || this.props.bgCls === 'app' || this.props.bgCls === 'hardware' || this.props.bgCls === 'education' || this.props.bgCls === 'lab' ? null : <p className='pTow'>立即申请</p>}
					</div>
					<div className="count">
						{this.props.bgCls === 'main' ? <div id="count"></div> : null}</div>
				</div>

			</div>
		</div>;
	}
}
export default Common;
