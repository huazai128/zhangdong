import { observable, computed, action, runInAction, autorun } from 'mobx';
import { get, post, put } from 'js/api/fetch';
import { message } from 'antd';

class Store {

	constructor() { }

	@observable
	isLogin = false;
	@observable
	userInfo = {};
	@observable
	codeInfo = {};

	@action
	loginPost = async (datas, callback) => {
		const { code, result } = await post('auth', datas);
		runInAction(() => {
			if (code) {
				localStorage.setItem('token', result.token);
				localStorage.setItem('user', JSON.stringify(result));
				localStorage.setItem('exp', result.exp);
				message.success('登录成功');
				this.isLogin = true;
			}
			callback(code);
		});
	}

	@action
	expireToken = () => {
		let exp = JSON.parse(localStorage.getItem('exp'));
		if (exp) {
			let newDate = exp - Math.floor(new Date() / 1000) - 60;
			if (newDate <= 0) {
				localStorage.removeItem('token');
				localStorage.removeItem('user');
				localStorage.removeItem('exp');
				this.isLogin = false;
			} else {
				this.isLogin = true;
			}
		} else {
			localStorage.removeItem('token');
			localStorage.removeItem('user');
			localStorage.removeItem('exp');
			this.isLogin = false;
		}
	}

	@action
	signOut = () => {
		message.success('退出成功');
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('exp');
		this.isLogin = false;
	}

	@action
	addUser = async (datas, callback) => {
		if(Object.is(datas.type,1)){
			datas.exp = this.codeInfo.exp;
		}
		const { code, result } = await post('user', datas);
		runInAction(() => {
			this.getCode();
			if (code) {
				localStorage.setItem('token', result.token);
				localStorage.setItem('user', JSON.stringify(result));
				localStorage.setItem('exp', result.exp);
				message.success('注册成功');
				this.isLogin = true;
			}
			callback(code);
		});
	}

	// 获取用户信息 
	@action
	getUserInfo = async () => {
		let user = JSON.parse(localStorage.getItem('user'));
		const { code, result } = await get(`auth/${user._id}`);
		runInAction(() => {
			if (code) {
				this.userInfo = result;
			}
		});
	}

	@action
	putUserId = async (data, callback) => {
		let user = JSON.parse(localStorage.getItem('user'));
		const { code, result } = await put(`auth/${user._id}`, data);
		runInAction(() => {
			callback(code);
			if (code) {
				message.success('修改成功');
			} else {
				message.error('修改失败');
			}
		});
	}

	@action
	forgetPwd = async (data, callback) => {
		const { code, result, message: msg } = await post('forget', data);
		runInAction(() => {
			callback(code);
			if (code) {
				message.success(msg);
			} else {
				message.error(msg);
			}
		});
	}

	@action
	getCode = async () => {
		const { code, result } = await get('code', { data: new Date().getTime() });
		runInAction(() => {
			if (code) {
				this.codeInfo = result;
			} 
		});
	}
}

const store = new Store();
export default store;