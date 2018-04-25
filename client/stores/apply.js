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
	@observable files = [];
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
		const { code, result, message:msg } = await get('apply', this.query);
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
		const { code, result,message:msg } = await get('image', { apply_id: id, p_type: true });
		runInAction(() => {
			if (code) {
				this.files = result.data;
			} else {
				message.error(msg);
			}
		});
	}

	@action
	stateOver = async (id) => {
		const { code, result,message:msg } = await put(`image/${id}`, { state: 1, apply_id: this.id, process: 3 });
		runInAction(() => {
			if (code) {
				this.getFiles(this.id);
				message.succes(msg);
			} else {
				message.error(msg);
			}
		});
	}

}

const store = new Store();
export default store;