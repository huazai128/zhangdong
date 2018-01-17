import React from 'react';
import './sound.scss';
import Top from '../common/partyTop.jsx';
import Open from '../common/black.jsx';
import Footer from '../common/lastFooter.jsx';
import $ from 'jquery';
import { Button, List, Avatar, Icon, Modal, Input } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, hashHistory } from 'react-router';


class CommentItem extends React.Component {
	state = {
		active: false,
		number: 30
	}

	onClick = () => {
		this.setState({
			active: !this.state.active,
			number: this.state.active ? this.state.number - 1 : this.state.number + 1
		});
	}

	render() {
		const { item } = this.props;

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
					<div onClick={this.onClick} className="zan flex-vcenter"><i className={this.state.active ? 'zanLan' : 'zanImg'}></i>{this.state.number}</div>
				</div>
			</div>
		);
	}
}

const { TextArea } = Input;

class ModalWrap extends React.Component {
	state = {
		visible: false,
		text: '',
	}
	showModal = () => {
		this.setState({
			visible: true,
		});
	}
	handleOk = (e) => {
		this.setState({
			visible: false,
			text: '',
		});
		// console.log(this.state.text);
		console.log(333)
	}
	handleCancel = (e) => {
		this.setState({
			visible: false,
		});
	}

	onChangeInput = (e) => {
		const { value: text } = e.target;
		this.setState({ text });
		console.log(444)
	}

	render() {
		const Child = () => React.cloneElement(this.props.children, {
			onClick: this.showModal
		});

		const { text } = this.state;

		return (
			<div>
				<Child />
				<Modal
					title="评论回复"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<TextArea value={text} onChange={this.onChangeInput} rows={6} placeholder="评论回复内容..." />
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
			],
			active:'false'
		};
	}

// 点击收藏
handleShow = () => {
	this.setState({
		active: !this.state.active,
	});
}

	toggleHandle = () => {
		$('.zanImg').toggleClass('zanLan');
	}
	//设置评论框内容
	handleChange(value) {
		console.log(this.state.text)
		this.setState({ text: value });
	}
	// 点击显示隐藏事件
	click = () => {
		$('#comment').toggle();
	};
	iconPing = () => {
		$('#comment').css('display', 'none');
	}

	// 点击图片切换
	// handleTab = (index) => {
	// 	console.log($('.zan').children().eq(index).toggleClass('zanLan'))
	// }
	// 提交评论
	handle = () => {
		var ctime = new Date().getMinutes();
		const { listData } = this.state;
		listData.unshift({

			content: this.state.text,
			title: '砖头'
		});

		this.setState({
			listData,
			text: ''
		});
		$('#comment').css('display', 'none');
	}

	render() {

		return (
			<div id="sound">
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText flex"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/itcontent">最新话题</Link></div>
				</div>
				<div className="toolContent">
					<div className="toolTop flex jc-between">
						<div className="toolLeft ">
							<p className='textOne'>智能音箱</p>
							<p className='textTwo'>作者名称&nbsp;&nbsp;&nbsp;发布于14天谴&nbsp;&nbsp;&nbsp;浏览量：958</p>
						</div>
						<div className="toolRight">
							<p className='ourOne'></p>
						</div>
					</div>
					<div className="toolBottom">

						<div className="tuTop">
							“互联网+”是创新2.0下的互联网发展的新业态，是知识社会创新2.0推动下的互联网形态演进及其催生的经济社会发展新形态。智能音箱，结合互联网+的的理念创造而成，是一个音箱升级的产物智能音箱。但是同样作为一种新生产品，目前还有很多地方并不完善，需要不断的发现问题并改进问题，才能使产品越发成熟。</div>
						<div>掌测紧跟潮流，开创系统的智能音箱硬件测试流程并为之应用至实际项目之中。</div>
						<div className='itImg'>
							<div className='itImgOne'>
								<img src={require('img/yin1.jpg')} />
								<img src={require('img/yin1.jpg')} />
							</div>
						</div>

					</div>
					<div className="disBtn flex-vcenter">
						<div className={ `shou flex-center ${ this.state.active?'cangTwo':'cangOne' }` } onClick={this.handleShow}><i></i> 收藏</div>
						<div className="dis" onClick={this.click}><i className='pingOne'></i>评论</div>
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
				</div>

				{/* 回复信息的弹出框 */}
				{/* <Open></Open> */}
				{/* 评论内容 */}
				<div className="discuss">
					<div className="disContent">
						<div className='contOne'><i className='cirlOne'></i> 全部3条回复</div>
						{this.state.listData.map((item) => {
							return (
								// 一个一个组件内容
								<CommentItem item={item} />
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
