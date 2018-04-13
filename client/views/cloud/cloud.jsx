import React from 'react';
import './cloud.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
import Tab from '../common/cloudTab.jsx';
import Footer from '../common/lastFooter.jsx';
export default class Cloud extends React.Component {
	componentDidMount() {
		window.scrollTo(0,0);
		document.body.scrollTop = 0;
	}
	render() {
		// 获取路由传来的值
		let id = this.props.params.id;
		// console.log(id)
		return (
			<div id='cloud' ref={node => this.node = node}>
				<Common bgCls="cloud" {...this.props} />
				{/* 内容 */}
				<div className="animaContent">
					<Tab id={id}></Tab>
				</div>
				<Footer></Footer>
			</div>
		);
	}
}
