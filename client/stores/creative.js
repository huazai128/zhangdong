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
  parmas = {
    sort: 1,
  }

  @observable lists;
  @observable detail;
  @observable idx = "1";

  @computed
  get query() {
    return { ...this._query, ...this.parmas };
  }

  @action
  getLists = async () => {
    const { code, result, message } = await get("community", this.query);
    runInAction(() => {
      if (code) {
        this.lists = result
      } else {
        message.error(message)
      }
    })
  }

  @action
  change = (value) => {
    this.idx = value;
    if (Object.is(value, "1")) {
      this.parmas.sort = 1;
    }
    if (Object.is(value, "2")) {
      this.parmas.sort = 2;
    }
    if (Object.is(value, "3")) {
      this.parmas.recommend = 1;
    } else {
      delete this.parmas.recommend;
    }
    if (Object.is(value, "4")) {
      this.parmas.choice = 1;
    } else {
      delete this.parmas.choice;
    }
    this.getLists();
  }

  // 获取商品详情
  @action
  getDetailId = async (id) => {
    const { code, result } = await get(`/community/${id}`);
    runInAction(() => {
      this.detail = result;
    })
  }
}

const store = new Store();
export default store;