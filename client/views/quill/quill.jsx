import React from "react";
import './quill.scss';
import Top from '../common/partyTop.jsx';
import Open from '../preview/preview.jsx';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, hashHistory } from 'react-router';
export default class New extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };// You can also pass a Quill Delta here
		this.handleChange = this.handleChange.bind(this);

		this.toolbarOptions = [
			['bold', 'italic', 'underline', 'strike'], // toggled buttons
			['blockquote', 'code-block'],

			[{ 'header': 1 }, { 'header': 2 }], // custom button values
			[{ 'list': 'ordered' }, { 'list': 'bullet' }],
			// [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
			[{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
			// [{ 'direction': 'rtl' }], // text direction

			[{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

			[{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
			[{ 'font': [] }],
			[{ 'align': [] }],
			['image'],
			// ['clean'] // remove formatting button
		];
	}

	handleChange(value) {
		this.setState({ text: value });
	}
	// 点击上传发表评论
	handle = () => {
		console.log(this.state.text);
	}


	render() {
		console.log(this.state.text);
		return (
			<div id='quill'>
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText"><Link to="/main">首页</Link>&nbsp;>&nbsp;我要发帖</div>
				</div>
				<div className="textContent">
					<ReactQuill className='textQuill'
						value={this.state.text}
						onChange={this.handleChange}
						modules={{
							toolbar: this.toolbarOptions
						}} />
					<div className="lastQuill flex d-row-reverse">
						<Open text={this.state.text}></Open>
						<div className="firstOne" onClick={this.handle}>上传</div>
					</div>

				</div>

			</div>
		);
	}
}
