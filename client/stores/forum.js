import { observable, computed, action, runInAction, autorun } from 'mobx';
import { get } from 'js/api/fetch';
import { message } from 'antd';

class Store {
	constructor() { }
	@observable lists = [];
	@observable category = 0;
	@observable tabs = [];
	@observable idx = '1';
	@observable tags = [];
	@observable detail = {};
	@observable pagination = {
		current_page: 1,
		per_page: 4,
		total: 0,
		total_page: 1
	};

	_query = {
		state: 1,
		page: 1,
		pre_page: 4,
		category: 0,
	}

	@computed
	get query() {
		return this._query;
	}

	@action
	getLists = async (parmas = {}) => {
		if (Number(this.idx) !== 1) {
			parmas.tags = this.tags;
		} else {
			parmas = {};
		}
		this._query.category = this.category;
		const { code, result } = await get('forum', { ...this.query, ...parmas });
		runInAction(() => {
			if (code) {
				this.lists = result.data;
				this.pagination = result.pagination;
			}
		});
	}

	@action
	getTabs = async () => {
		const { code, result } = await get('tag', { enable: true });
		runInAction(() => {
			if (code) {
				this.tabs = result.data;
			}
		});
	}

	@action
	changeTag = (e) => {
		let idx = Number(e);
		this._query.page = 1;
		this.idx = idx;
		if (Object.is(Number(idx), 1)) {
			this.getLists();
		} else {
			this.tags = [this.tabs[idx - 2]._id].join();
			this.getLists({ tags: this.tags });
		}
	}

	@action
	getDetailId = async (id) => {
		const { code, result } = await get(`forum/${id}`);
		runInAction(() => {
			if (code) {
				this.detail = result;
			}
		});
	}

	@action
	changPage = async (page) => {
		this._query.page = page;
		this.getLists();
	}
}

const store = new Store();
export default store;