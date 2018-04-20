import { observable, computed, action, runInAction, autorun } from 'mobx';
import { get } from 'js/api/fetch';
import { message } from 'antd';

class Store {
	constructor() { }

  _query = {
  	page: 1,
  	pre_page: 10,
  	state: 1
  }

  @observable lists = {
  	data: [],
  	pagination: {
  		total: 0,
  		current_page: 1,
  		pre_page: 10,
  		total_page: 0,
  	}
  }

  @observable detail;
  @observable idx = '1';

  @computed
  get query() {
  	return this._query;
  }

  @action
  getInit = async () => {
  	await this.getTabIdx();
  }
  
  @action
  getApplyLists = async (parmas = {}) => {
  	const { code, result } = await get('apply', { ...this.query, ...parmas });
  	runInAction(() => {
  		if (code) {
  			this.lists = result;
  		}
  	});
  }

  @action
  getCommunityLists = async (parmas = {}) => {
  	let user = JSON.parse(localStorage.getItem('user'));
  	parmas.user_id = user._id;
  	const { code, result } = await get('community', { ...this.query, ...parmas });
  	runInAction(() => {
  		if (code) {
  			this.lists = result;
  		}
  	});
  }

  @action
  changeTab = (idx) => {
  	this.idx = idx;
  	this.getTabIdx();
  }

  @action
  getTabIdx = () => {
  	let user = JSON.parse(localStorage.getItem('user'));
  	switch (this.idx) {
  	case '1':
  		this.getApplyLists({ style: 0,user:user._id });
  		break;
  	case '2':
  		this.getApplyLists({ style: 1,p_user:user._id });
  		break;
  	case '3':
  		this.getCommunityLists();
  		break;
  	case '4':
  		this.getApplyLists({ style: 0 });
  		break;
  	case '5':
  		this.getApplyLists({ style: 0 });
  		break;
  	}
  }
}

const store = new Store();
export default store;