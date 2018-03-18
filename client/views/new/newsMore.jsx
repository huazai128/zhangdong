import React from 'react';
import Footer from '../common/lastFooter.jsx';
import './new.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
import { get, post } from "js/api/fetch";
import { imgRoot } from "js/api/config";
import moment from 'moment';

class NewMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    const { result } = await get("/news", { column: 1,public: 1 });
    this.setState({
      data: result.data,
    })
  }
  render() {
    const { data } = this.state;
    return <div id="new">
      {/* {...this.props}这是传出属性 */}
      <Common bgCls="new" {...this.props} />
      <div className='company'>
        <div>
          {data.length > 0 ? (
            <div className="new-top flex-center jc-between">
              <h2 className="new-message flex-vcenter"><i className='lefttop'></i> 公司动态</h2>
            </div>
          ): (
            <div className="no-data">暂无数据</div>
          )}
          {data.length > 0 && data.map((item, index) => (
            <div className="new-item">
              <div className="leftcompahy">
                <img src={`${imgRoot}${item.url}`} onClick={() => hashHistory.push('/alliance/' + item.id)} />
              </div>
              <div className="rightcompany">
                <h3 className='lianTop' onClick={() => hashHistory.push('/alliance/' + item.id)}>{item.title}</h3>
                <div className='time'>{item.origin}.{moment(item.update_at).format('YYYY-MM-DD')}.公司动态</div>
                <div className="contentone">{item.summary}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>;
  }
}

export default NewMore;
