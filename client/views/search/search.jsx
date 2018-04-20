import React, { Component } from 'react';
import { Input, Pagination } from 'antd';
const Search = Input.Search;
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';
import date from 'js/core/date';
import './search.scss';

@inject('creative')
@observer
export default class SearchComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keywords: localStorage.getItem('search'),
		};
		this.store = this.props.creative;
	}

	componentDidMount() {
		this.store.getKeywords(this.state.keywords);
	}

  search = (value) => {
  	this.store.getKeywords(value);
  }

  componentWillUnmount() {
  	localStorage.removeItem('search');
  }

  render() {
  	const { lists, pageUpdate } = this.store;
  	return (
  		<div className="search-box">
  			<div className="search-input flex-center">
  				<Search
  					placeholder="请输入搜索关键字"
  					style={{ width: 400 }}
  					onSearch={value => this.search(value)}
  					enterButton
  				/>
  			</div>
  			<div className="lists">
  				{lists && lists.data.map((item) => (
  					<Link to={`/creative/barDel/${item.id}`}>
  						<div className="item flex">
  							<div className="flex-vcenter flex-g-1">
  								<div className="item-img">
  									<img src={item.userId && item.userId.gravatar} alt="" />
  								</div>
  								<p>{item.title}</p>
  							</div>
  							<div>{item.userId && item.userId.username}•{date(item.create_at)}</div>
  						</div>
  					</Link>
  				))}
  				{lists && lists.data.length === 0 && <h3 className="no-more">没有搜索到相应的数据！</h3>}
  				{lists && !!lists.data.length && (<Pagination
  					total={lists.pagination.total}
  					current={lists.pagination.current_page}
  					pageSize={lists.pagination.pre_page}
  					className='flex-center'
  					onChange={(e) => { pageUpdate(e); }}
  					style={{ marginTop: '34px' }} />)}
  			</div>
  		</div>
  	);
  }
}