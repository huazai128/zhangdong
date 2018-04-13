import { observable, computed, action, runInAction, autorun } from 'mobx';
import { get, post } from 'js/api/fetch';
import { message } from 'antd';

class Store {
  constructor() {

  }
  @observable
  isLogin = false;

  @action
  loginPost = async (datas) => {
    const { code, result } = await post("auth", datas);
    runInAction(() => {
      if (code) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result));
        localStorage.setItem("exp", result.exp);
        message.success("登录成功");
        this.isLogin = true;
      }
    })
  }

  @action
  expireToken = () => {
    let exp = JSON.parse(localStorage.getItem("exp"));
    if (exp) {
      let newDate = exp - Math.floor(new Date() / 1000) - 60;
      if (newDate <= 0) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem('exp');
        this.isLogin = false;
      }else{
        this.isLogin = true;
      }
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem('exp');
      this.isLogin = false;
    }
  }

  @action
  signOut = () => {
    message.success("退出成功");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem('exp');
    this.isLogin = false;
  }
}

const store = new Store();
export default store;