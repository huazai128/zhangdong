import { observable, computed, action, runInAction, autorun } from 'mobx';
import { get, put } from 'js/api/fetch';
import { message } from 'antd';

class Store {
	constructor() { }
	_query = {
		page: 1,
		pre_page: 10,
		state: 1
	}
	parmas = {
		sort: 1,
	}

	@observable lists;
	@observable detail;
	@observable idx = '1';

	@computed
	get query() {
		return { ...this._query, ...this.parmas };
	}

	@computed
	get user() {
		let user = JSON.parse(localStorage.getItem('user'));
		return user;
	}

	@action
	getKeywords = (keywords) => {
		this.parmas.keywords = keywords;
		this.getLists();
	}

	@action
	getInit = () => {
		this.change();
	}

	@action
	getLists = async () => {
		const { code, result, message } = await get('community', this.query);
		runInAction(() => {
			if (code) {
				this.lists = result;
			} else {
				message.error(message);
			}
		});
	}

	@action
	change = (value) => {
		this.idx = value || this.idx;
		this._query.page = 1;
		if (Object.is(this.idx, '5')) {
			this.parmas.style = 1;
			this.getPlatformLists();
		} else {
			delete this.parmas.style;
			if (Object.is(this.idx, '1')) {
				this.parmas.sort = 1;
			}
			if (Object.is(this.idx, '2')) {
				this.parmas.sort = 2;
			}
			if (Object.is(this.idx, '3')) {
				this.parmas.recommend = 1;
			} else {
				delete this.parmas.recommend;
			}
			if (Object.is(this.idx, '4')) {
				this.parmas.choice = 1;
			} else {
				delete this.parmas.choice;
			}
			this.getLists();
		}
	}

	// 获取商品详情
	@action
	getDetailId = async (id) => {
		const { code, result } = await get(`/community/${id}`);
		runInAction(() => {
			let arr = result.c_user.filter((item) => Object.is(item, this.user._id));
			!arr.length && (result.c_state = false);
			arr.length && (result.c_state = true);
			this.detail = result;
		});
	}

	// 获取众测平台数据
	@action
	getPlatformLists = async () => {
		const { code, result, message } = await get('apply', this.query);
		runInAction(() => {
			if (code) {
				this.lists = result;
			} else {
				message.error(message);
			}
		});
	}

	// 分页
	@action
	pageUpdate = (page) => {
		this._query.page = page;
		if (Object.is(this.idx, '5')) {
			this.getPlatformLists();
		} else {
			this.getLists();
		}
	}

	@action
	putArticleId = async(_id,id) => { // 收藏
		if (!this.user) {
			message.info('没有登录暂时不能评论');
			return false;
		}
		const { code, result,message:msg } = await put(`/community/${_id}`, {user_id:this.user._id,is_collect:true});
		runInAction(() => {
			if(code){
				this.getDetailId(id);
				message.success(msg);
			}
		});
	}
}

const store = new Store();
export default store;