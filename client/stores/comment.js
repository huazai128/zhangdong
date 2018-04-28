import { observable, computed, action, runInAction, autorun } from 'mobx';
import { get, post, put } from 'js/api/fetch';
import { message } from 'antd';

class Store {
	constructor() { }
	_query = {
		page: 1,
		pre_page: 10,
		state: 1,
		c_userId: this.user ? this.user._id : ''
	}
	id = '';
	@observable comments = [];
	@observable pagination = {
		current_page: 1,
		per_page: 10,
		total: 0,
		total_page: 1
	};

	@computed
	get query() {
		return this._query;
	}

	@computed
	get user() {
		let user = JSON.parse(localStorage.getItem('user'));
		return user;
	}

	@action
	getInit = (id) => {
		this.query.page = 1;
		this.getComments(id);
	}

	@action
	getComments = async (id) => {
		this.id = id;
		const { code, message: msg, result } = await get('/comment', { ...this.query, id: id });
		runInAction(() => {
			let data = [];
			if(this.user){
				data = result.data.map((item) => {
					let arr = item.like_user.filter((item) => Object.is(item, this.user._id));
					!arr.length && (item.is_like = false);
					arr.length && (item.is_like = true);
					return item;
				});
			}else{
				data = result.data;
			}
			this.comments = data;
			this.pagination = result.pagination;
		});
	}

	@action
	addCommnet = async (data) => {
		if (!this.user) {
			message.info('没有登录暂时不能评论');
			return false;
		}
		const { code, message: msg, result } = await post('/comment', data);
		runInAction(() => {
			if (code) {
				this.getComments(this.id);
				message.success(msg);
			} else {
				message.error(msg);
			}
		});
	}

	@action
	likeState = async (data, _id) => {
		if (!this.user) {
			message.info('没有登录暂时不能评论');
			return false;
		}
		data.user_id = this.user._id;
		const { code, result } = await put(`/comment/${_id}`, data);
		runInAction(() => {
			if (code) {
				this.getComments(this.id);
			} else {
				message.error('点赞失败');
			}
		});
	}

	@action
	changeComment = (page) => {
		this._query.page = page;
		this.getComments(this.id);
	}
}
const store = new Store();
export default store;