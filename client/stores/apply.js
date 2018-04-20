import { observable, computed, action, runInAction, autorun } from 'mobx';
import { get } from 'js/api/fetch';
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
  @observable idx = "1";

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
    const { code, result, message } = await get("apply", this.query);
    runInAction(() => {
      if (code) {
        this.lists = result;
      } else {
        message.error(message);
      }
    })
  }

  @action
  getApplyId = async (id) => {
    const { code, result } = await get(`apply/${id}`);
    runInAction(() => {
      if (code) {
        this.detail = result;
      } else {
        message.error(message)
      }
    })
  }
}

const store = new Store();
export default store;