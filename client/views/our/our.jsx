import React from 'react';
import './our.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
import Footer from '../common/lastFooter.jsx';
import Tab from '../common/tabOur.jsx';
export default class Our extends React.Component {
	componentDidMount(){
		window.scrollTo(0,0);
		document.body.scrollTop = 0;
	}
	componentWillReceiveProps(){
		window.scrollTo(0,0);
		document.body.scrollTop = 0;
	}
	render() {
		return (
			<div id="our">
				<Common bgCls="our" {...this.props}/>
				<Tab {...this.props}></Tab>
				<Footer></Footer>
			</div>
		);
	}
}
