import React from 'react';
import './our.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
import Footer from '../common/lastFooter.jsx';
import Tab from '../common/tabOur.jsx';
export default class Our extends React.Component {
	render() {
		return (
			<div id="our">
				<Common />
				<Tab></Tab>
				<Footer></Footer>
			</div>
		);
	}
}
