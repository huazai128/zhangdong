import React from 'react';
import './community.scss';
import Top from '../common/partyTop.jsx';
import Tab from '../common/tabParty.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';


class Community extends React.Component {
	render() {
		return (
			<div id='community'>
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;测试者工具</div>
				</div>
				<div className="bg"></div>
				<Tab></Tab>
				{/* <Footer></Footer> */}
			</div>
		);
	}
}
export default Community;
