import React from 'react';
import './barDel.scss';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import $ from 'jquery';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, hashHistory } from 'react-router';


export default class New extends React.Component {
	// 上传图片
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			data: [
				{ time: '18分钟前', content: '回复内容回复内容回复内容回复内容回gdfg复内容回复内容回复内容回复内容回复内容回复内回复', title: '879' },
				{ time: '23分钟前', content: '回复内容回复内容回复内容回复内容fdsf回复内容回复内容回复内容回复内容回复内容回复内回复', title: 'gdgf' },
				{ time: '15分钟前', content: '回复内容回复内容回复内容回复内容ds回复内容回复内容回复内容回复内容回复内容回复内回复', title: '456' },
				{ time: '11分钟前', content: 'fg', title: '456' },
				{ time: '15分钟前', content: '回复内容回复内容回复内容回复内sdf容回复内容回复内容回复内容回复内容回复内容回复内回复', title: '123' },
				{ time: '19分钟前', content: '回复内容回复内容回复内容回复内容回复dfg内容回复内容回复内容回复内容回复内容回复内回复', title: 'dfgdgf' }
			]
		}; // You can also pass a Quill Delta here
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
	// 点击显示隐藏事件
	click = () => {
		$('#comment').toggle();
	};
	iconClick = () => {

		$('#comment').css('display', 'none');
	};
	// 提交评论
	handle = () => {
		// this.state.text='';
		var ctime = new Date().getMinutes();
		const { data } = this.state;

		data.unshift({
			time: ctime,
			content: this.state.text,
			title: '砖头'
		});

		this.setState({ data});
	}

	render() {

		return (
			<div id="barDel">
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText flex"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/barDel">最新话题</Link></div>
				</div>
				<div className="toolContent">
					<div className="toolTop flex jc-between">
						<div className="toolLeft ">
							<p className='textOne'>帖子大标题帖子大标题帖子大标题帖子大标题</p>
							<p className='textTwo'>作者名称&nbsp;&nbsp;&nbsp;发布于14天谴&nbsp;&nbsp;&nbsp;浏览量：958</p>
						</div>
						<div className="toolRight">
							<p className='ourOne'></p>
						</div>
					</div>
					<div className="toolBottom">
						<div className="tuTop">图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍
          图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍 图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍.</div>
						<div className="wenTop">文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图
          文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图 文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图. </div>
						<div className="imgAn"></div>
						<div>文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图.</div>
						<div>文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍.</div>
						<div>文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图 .</div>
					</div>
					<div className="disBtn flex-vcenter">
						<div className="shou"><i className='shouOne'></i> 收藏</div>
						<div className="dis" onClick={this.click}><i className='pingOne'></i>评论</div>
					</div>
				</div>
				{/* 评论框 */}
				<div className="comment" id='comment'>
					{/* 头部 */}
					<div className="topThree flex-vcenter jc-between">
						<div className="commentTop">评论</div>
						<div className="Icon" id='Icon' onClick={this.iconClick}></div>
					</div>
					{/* 添加图片 */}
					<div className="upDa">
						<ReactQuill className='textQuill'
							value={this.state.text}
							onChange={this.handleChange}
							modules={{
								toolbar: this.toolbarOptions
							}} />
					</div>
					<div className="ti" onClick={this.handle}>提交</div>
				</div>
				{/* 评论内容 */}
				<div className="discuss">
					<div className="disContent">
						<div className='contOne'><i className='cirlOne'></i> 全部3条回复</div>
						{this.state.data.map(item => {
							return (
								<div className="disOne flex jc-between">
									<div className="leftOne flex-vcenter">
										<div className="imgLeft"></div>
										<div className="contentLeft">
											<div className='title'>{item.title}<span className='timeOne'>{item.time}</span></div>
											<div className='huiContent'>{item.content}</div>
										</div>
									</div>
									<div className="rightOne flex-vcenter">
										<div className="huiTu flex-vcenter"><i className='huiImg'></i> 回复</div>
										<div className="zan flex-vcenter"><i className='zanImg'></i>30</div>
									</div>
								</div>
							);
						})}

					</div>
				</div>
			</div>
		);
	}
}
