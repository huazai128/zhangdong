import React from 'react';
import './barDel.scss';
import Top from '../common/partyTop.jsx';
import Open from '../common/black.jsx';
import Footer from '../common/lastFooter.jsx';
import $ from 'jquery';
import { Button, List, Avatar, Icon, Modal, Input, message, Pagination } from 'antd';
import { imgRoot } from 'js/api/config';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, hashHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import date from 'js/core/date';

@inject(store => ({
	creative: store.creative,
	comment: store.comment
}))
@observer
export default class New extends React.Component {
	// 上传图片
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.toolbarOptions = [
			['bold', 'italic', 'underline', 'strike'],
			[{ 'header': 1 }, { 'header': 2 }],
			[{ 'list': 'ordered' }, { 'list': 'bullet' }],
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
			[{ 'color': [] }, { 'background': [] }],
			// ['image'],
		];
		this.state = {
			text: '',
			id: '',
			active: 'false',
			reply_id: ''
		};
		this.store = this.props.creative;
		this.commentStore = this.props.comment;
	}
	componentDidMount() {
		const { id } = this.props.params;
		this.setState({ id: id });
		this.store.getDetailId(id);
		this.commentStore.getInit(id);
	}
	handleChange(value) {
		this.setState({ text: value });
	}
	click = (user_id = '') => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (!user) {
			message.info('请先登录!');
			return false;
		}
		if (Object.is(user._id, user_id)) {
			message.info('不能评论自己!');
			return false;
		}
		$('#comment').toggle();
	};
	iconPing = () => {
		this.setState({
			reply_id: ''
		});
		$('#comment').css('display', 'none');
	}
	handle = () => {
		const { id, text, reply_id } = this.state;
		const user = JSON.parse(localStorage.getItem('user'));
		if (!user) {
			message.info('请先登录!');
			$('#comment').css('display', 'none');
			return false;
		}
		let params = {
			post_id: id,
			content: text,
			user_id: user._id,
			username: user.username
		};
		if (reply_id) {
			params.reply_id = reply_id;
		}
		this.commentStore.addCommnet(params);
		this.setState({
			text: ''
		});
		$('#comment').css('display', 'none');
	}
	render() {
		const { detail, putArticleId } = this.store;
		const { comments, pagination, changeComment, likeState } = this.commentStore;
		const user = JSON.parse(localStorage.getItem('user'));
		return (
			<div id="barDel">
				{detail && (
					<div>
						<div className="nav flex">
							<div className="navText flex"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<span>{detail.title}</span></div>
						</div>
						<div className="toolContent">
							<div className="toolTop flex jc-between">
								<div className="toolLeft ">
									<p className='textOne'>{detail.title}</p>
									<p className='textTwo'>作者：{detail.userId && detail.userId.name}&nbsp;&nbsp;&nbsp;发布于{date(detail.create_at)}&nbsp;&nbsp;&nbsp;浏览量：{detail.meta.links}</p>
								</div>
								<div className="toolRight">
									<p className="ourOne"><img src={(detail.userId && detail.userId.gravatar) && (imgRoot + detail.userId.gravatar)} alt="" /></p>
								</div>
							</div>
							<div className="toolBottom" dangerouslySetInnerHTML={{
								__html: detail.content
							}}>
							</div>
							<div className="disBtn flex-vcenter">
								<div className={`shou flex-center cangTwo ${detail.c_state ? 'select' : ''}`} onClick={() => { putArticleId(detail._id,this.state.id); }}><i></i> 收藏</div>
								<div className="dis" onClick={this.click}><i className='pingOne'></i>评论</div>
							</div>
							<div className="comment" id='comment'>
								<div className="topThree flex-vcenter jc-between">
									<div className="commentTop">评论</div>
									<div className="Icon" onClick={this.iconPing}></div>
								</div>
								<div className="upDa">
									<ReactQuill className='textQuill'
										value={this.state.text}
										onChange={this.handleChange}
										modules={{
											toolbar: this.toolbarOptions
										}} />
								</div>
								<Button className="ti" onClick={() => { this.handle(); }} disabled={!this.state.text}>提交</Button>
							</div>
						</div>
						<div className="discuss">
							<div className="disContent">
								<div className='contOne'><i className='cirlOne'></i> 全部{pagination.total}条回复</div>
								<div className="comments">
									{comments.length > 0 && comments.map((item) => {
										return (
											<div className="disOne flex jc-between">
												<div className="leftOne flex">
													<div className="imgLeft"><img src={imgRoot + item.user_id.gravatar} alt="" /></div>
													<div className="contentLeft">
														<div className='title'>{item.user_id.username || item.user_id.email}{item.reply_id && <span>回复{item.reply_id.username || item.user_id.email}</span>} <span className="time"> {date(item.create_at)}</span></div>
														<div className='huiContent' dangerouslySetInnerHTML={{
															__html: item.content
														}}></div>
													</div>
												</div>
												<div className="rightOne flex-vcenter">
													<div className="huiTu flex-vcenter" onClick={() => { this.click(item.user_id._id); this.setState({ reply_id: item.user_id._id }); }} ><i className='huiImg'></i> 回复</div>
													<div className="zan flex-vcenter" onClick={() => { likeState({ likes: item.likes }, item._id); }}>
														<i className={item.is_like ? 'zanLan' : 'zanImg'}></i>{item.likes}
													</div>
												</div>
											</div>
										);
									})}
								</div>
								{comments.length > 0 && pagination && (<div className="pagi flex-center">
									<Pagination defaultCurrent={pagination.current_page} total={pagination.total} onChange={(e) => { changeComment(e); }} />
								</div>)}
								{comments.length === 0 && (<h3>暂无评论</h3>)}
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}
