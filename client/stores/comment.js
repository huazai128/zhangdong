import { observable, computed, action, runInAction, autorun } from 'mobx';
import { get, post, put } from 'js/api/fetch';
import { message } from 'antd';

class Store {
  constructor() { }
  _query = {
    page: 1,
    pre_page: 10,
    state: 1
  }
  id = '';

  @observable comments = [];
  @observable pagination = {
    current_page: 1,
    per_page: 10,
    total: 0,
    total_page: 1
  };

  @computed
  get query() {
    return this._query;
  }

  @action
  getComments = async (id) => {
    this.id = id;
    const { code, message: msg, result } = await get("/comment", { ...this.query, id: id });
    runInAction(() => {
      this.comments = result.data;
      this.pagination = result.pagination;
    })
  }
  @action
  addCommnet = async (data) => {
    const { code, message: msg, result } = await post("/comment", data);
    runInAction(() => {
      if (code) {
        this.getComments(this.id);
        message.success(msg);
      } else {
        message.error(msg)
      }
    })
  }

  @action
  likeState = async (_id, data) => {
    const { code, result } = await put(`/comment/${_id}`, data);
    runInAction(() => {
      if (code) {
        this.getComments(this.id);
      } else {
        message.error("点赞失败")
      }
    })
  }

  @action
  changeComment = (page) => {
    this._query.page = page;
    this.getComments();
  }
}
const store = new Store();
export default store;