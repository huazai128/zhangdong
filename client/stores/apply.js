import { observable, computed, action, runInAction, autorun } from 'mobx';
import { get, put } from 'js/api/fetch';
import { message } from 'antd';

class Store {
	constructor() { }
	_query = {
		page: 1,
		pre_page: 10,
		state: 1,
	}

	@observable lists;
	@observable detail = {};
	@observable idx = '1';
	@observable index = 0;
	@observable files = [
		{ url: '', state: false, _id: '', process: 1, open: true },
		{ url: '', state: false, _id: '', process: 2, },
		{ url: '', state: false, _id: '', process: 3, },
	];
	@observable id = '';

	@computed
	get query() {
		return { ...this._query, ...this.parmas };
	}
	@action
	getInit = () => {
		this.query.page = 1;
	}

	// 获取众测平台数据
	@action
	getPlatformLists = async () => {
		const { code, result, message: msg } = await get('apply', this.query);
		runInAction(() => {
			if (code) {
				this.lists = result;
			} else {
				message.error(msg);
			}
		});
	}

	@action
	getApplyId = async (id) => {
		const { code, result } = await get(`apply/${id}`);
		runInAction(() => {
			if (code) {
				this.id = result._id;
				this.getFiles(result._id);
				this.detail = result;
			} else {
				message.error(message);
			}
		});
	}

	@action
	getFiles = async (id) => {
		this.getInitData();
		const { code, result, message: msg } = await get('image', { apply_id: id, p_type: true });
		runInAction(() => {
			if (code) {
				this.files = [...result.data.slice(0, 3), ...this.files.slice(result.data.length, 3)];
				this.index = this.files.filter((item) => Object.is(item.state,1)).length;
				console.log(this.index);
			} else {
				message.error(msg);
			}
		});
	}

	@action
	stateOver = async (id) => {
		const { code, result, message: msg } = await put(`image/${id}`, { state: 1, apply_id: this.id, process: 3 });
		runInAction(() => {
			if (code) {
				message.success('修改成功');
				this.getFiles(this.id);
			} else {
				message.error(msg);
			}
		});
	}

	getInitData = () => {
		this.files = [
			{ url: '', state: false, _id: '', process: 1, open: true },
			{ url: '', state: false, _id: '', process: 2, },
			{ url: '', state: false, _id: '', process: 3, },
		];
	}

}

const store = new Store();
export default store;