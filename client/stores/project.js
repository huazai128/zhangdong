import { observable, computed, action, runInAction, autorun } from 'mobx';
import { get, post, put } from 'js/api/fetch';
import { message } from 'antd';

class Store {
	constructor() { }

  @computed get user() {
		let user = JSON.parse(localStorage.getItem('user'));
		return user;
	}

  @action
  addApply = async (data) => {
  	if (this.user) {
  		data.user = this.user._id;
  		data.username = this.user.username;
  	}
  	const { code, result } = await post('/apply', data);
  	runInAction(() => {
  		if (code) {
  			message.success('申请成功');
  		} else {
  			message.error('表单提交');
  		}
  	});
  }

  @action
  addPlan = async (data) => {
  	if (this.user) {
  		data.user = this.user._id;
  		data.username = this.user.username;
  	}
  	const { code, result } = await post('/plan', data);
  	runInAction(() => {
  		if (code) {
  			message.success('申请成功');
  		} else {
  			message.error('表单提交');
  		}
  	});
  }
}
const store = new Store();
export default store;