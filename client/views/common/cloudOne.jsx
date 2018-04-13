import React, { Component } from 'react';
import './cloudOne.scss';
import $ from 'jquery';

export default class HeadOne extends React.Component {
	render() {
		const { text = '质量认证', bg = 'colorTu', active } = this.props;

		return (
			<div className='cloudOne flex-center'>
				<div className='boxTuContent'>
					<div className="boxTu" onClick={this.click}>
						<i className={`${bg} ${active ? 'active' : ''}`}></i>
					</div>
					<div className='lastText'>{text}</div>
				</div>
			</div>
		);
	}
}
