import React from 'react';
import Footer from '../common/lastFooter.jsx';
import './new.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
import { get, post } from "js/api/fetch";
import { imgRoot } from "js/api/config";
import { message } from 'antd'
import moment from 'moment';

class NewMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: "公司动态",
      page: 1,
      total: 0,
      flag: false,
      column: 1
    };
  }
  async shouldComponentUpdate(){
    return this.props.location.action === "PUSH";
  }
  async componentDidMount() {
    window.scrollTo(0,0);
		document.body.scrollTop = 0;
    const { id } = this.props.params;
    if (id) {
      let title = "";
      switch (Number(id)) {
        case 1:
          title = "公司动态"
          break;
        case 2:
          title = '行业新闻'
          break;
        case 3:
          title = '科技资讯'
          break;
      }
      this.setState({
        title: title,
      })
      const { result } = await get("/news", { column: id, public: 1, page: 1 });
      this.setState({
        data: result.data,
        total: result.pagination.total_page
      })
    }
  }
  async componentWillReceiveProps() {
    window.scrollTo(0,0);
		document.body.scrollTop = 0;
    const id = window.location.href.split("=")[1].split("&")[0];
    if (id) {
      let title = "";
      switch (Number(id)) {
        case 1:
          title = "公司动态"
          break;
        case 2:
          title = '行业新闻'
          break;
        case 3:
          title = '科技资讯'
          break;
      }
      this.setState({
        title: title,
      })
      const { result } = await get("/news", { column: id, public: 1, page: 1 });
      this.setState({
        data: result.data,
        total: result.pagination.total_page
      })
    }
  }
 
  // 加载更多
  loadMore = () => {
    const { total, column, data, flag, page } = this.state;
    if (flag) return false;
    if (page === total) {
      message.info("没有更多数据加载");
      return false;
    }
    this.setState({
      flag: true
    })
    const params = {
      column: column,
      public: 1,
      page: (page + 1),
    }
    get("/news", params).then(({ result }) => {
      this.setState({
        data: [...data, ...result.data],
        flag: false,
        page: (page + 1),
        total: result.pagination.total_page
      })
    })

  }
  render() {
    const { data, title, total, page } = this.state;
    // console.log(total)
    return <div id="new">
      {/* {...this.props}这是传出属性 */}
      <Common bgCls="new" {...this.props} />
      <div className='company'>
        <div>
          {data.length > 0 ? (
            <div className="new-top flex-center jc-between">
              <h2 className="new-message flex-vcenter"><i className='lefttop'></i>{title}</h2>
            </div>
          ) : (
              <div className="no-data">暂无数据</div>
            )}
          {data.length > 0 && data.map((item, index) => (
            <div className="new-item">
              <div className="leftcompahy">
                <img src={`${imgRoot}${item.url}`} onClick={() => hashHistory.push('/alliance/' + item.id + '?page=' + item.id)} />
              </div>
              <div className="rightcompany">
                <h3 className='lianTop' onClick={() => hashHistory.push('/alliance/' + item.id)}>{item.title}</h3>
                <div className='time'>{item.origin}.{moment(item.update_at).format('YYYY-MM-DD')}.{item.origin}</div>
                <div className="contentone">{item.summary}</div>
              </div>
            </div>
          ))}
          {}
          {total >= 1 && (<div className="lord-more" onClick={() => { this.loadMore() }}>加载更多</div>)}
        </div>
      </div>
      <Footer></Footer>
    </div>;
  }
}

export default NewMore;
