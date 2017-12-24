import React from 'react';
import './barDel.scss';
import Top from '../common/partyTop.jsx';
import Open from '../common/black.jsx';
import Footer from '../common/lastFooter.jsx';
import $ from 'jquery';
import { Button, List, Avatar, Icon, Modal, Input } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, hashHistory } from 'react-router';

const { TextArea } = Input;

class ModalWrap extends React.Component {
	state = { visible: false }
	showModal = () => {
		this.setState({
			visible: true,
		});
	}
	handleOk = (e) => {
		this.setState({
			visible: false,
		});
	}
	handleCancel = (e) => {
		this.setState({
			visible: false,
		});
	}
	render() {
		const Child = () => React.cloneElement(this.props.children, {
			onClick: this.showModal
		});

		return (
			<div>
				<Child />
				<Modal
					title="评论回复"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<TextArea rows={6}placeholder="评论回复内容..." />
				</Modal>
			</div>
		);
	}
}

// const IconText = ({ type, text }) => (
// 	<span>
// 		<Icon type={type} style={{ marginRight: 8 }} />
// 		{text}
// 	</span>
// );


export default class New extends React.Component {
	// 上传图片
	constructor(props) {
		super(props);

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
		this.state = {
			// num: 5,
			text: '',
			listData: [
				{ time: '18分钟前', content: '回复内容回复内容回复内容回复内容回gdfg复内容回复内容回复内容回复内容回复内容回复内回复', title: '879' },
				{ time: '23分钟前', content: '回复内容回复内容回复内容回复内容fdsf回复内容回复内容回复内容回复内容回复内容回复内回复', title: 'gdgf' },
				{ time: '15分钟前', content: '回复内容回复内容回复内容回复内容ds回复内容回复内容回复内容回复内容回复内容回复内回复', title: '456' },
				{ time: '11分钟前', content: 'fg', title: '456' },
				{ time: '15分钟前', content: '回复内容回复内容回复内容回复内sdf容回复内容回复内容回复内容回复内容回复内容回复内回复', title: '123' },
				{ time: '19分钟前', content: '回复内容回复内容回复内容回复内容回复dfg内容回复内容回复内容回复内容回复内容回复内回复', title: 'dfgdgf' }
			]
		};
	}


	// 点击收藏
	getHandle = () => {
		$('.shou').toggleClass('dis');
	}
	toggleHandle = () => {
		$('.zanImg').toggleClass('zanLan');
	}
	//设置评论框内容
	handleChange(value) {
		this.setState({ text: value });
	}
	// 点击显示隐藏事件
	click = () => {
		$('#comment').toggle();
	};
	iconPing = () => {
		$('#comment').css('display', 'none');
	}

	// 提交评论
	handle = () => {
		var ctime = new Date().getMinutes();
		const { listData } = this.state;
		listData.unshift({

			content: this.state.text,
			title: '砖头'
		});

		this.setState({ listData });
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
						<div className="shou flex-center" onClick={this.getHandle}><i className='shouOne'></i> 收藏</div>
						<div className="dis" onClick={this.click}><i className='pingOne'></i>评论</div>
					</div>
				</div>
				{/* 评论框 */}
				<div className="comment" id='comment'>
					{/* 头部 */}
					<div className="topThree flex-vcenter jc-between">
						<div className="commentTop">评论</div>
						<div className="Icon" onClick={this.iconPing}></div>
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
					<Button className="ti" onClick={this.handle} disabled={!this.state.text}>提交</Button>
					{/* <div className="ti" onClick={this.handle}>提交</div> */}
				</div>
				{/* 回复信息的弹出框 */}
				{/* <Open></Open> */}
				{/* 评论内容 */}
				<div className="discuss">
					<div className="disContent">
						<div className='contOne'><i className='cirlOne'></i> 全部3条回复</div>
						{this.state.listData.map(item => {
							return (
								<div className="disOne flex jc-between">
									<div className="leftOne flex-vcenter">
										<div className="imgLeft"></div>
										<div className="contentLeft">
											<div className='title'>{item.title}<span>{item.time}</span></div>
											<div className='huiContent'>{item.content}</div>
										</div>
									</div>
									<div className="rightOne flex-vcenter">
										<ModalWrap><div className="huiTu flex-vcenter"><i className='huiImg'></i> 回复</div></ModalWrap>

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
