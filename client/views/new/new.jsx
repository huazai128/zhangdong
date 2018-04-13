import React from 'react';
import Footer from '../common/lastFooter.jsx';
import './new.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
import { get, post } from "js/api/fetch";
import { imgRoot } from "js/api/config";
import moment from 'moment';


class New extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			data1: [],
			data2: [],
		};
	}
	async componentDidMount() {
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
		const { result: result1 } = await get("/news", { column: 1, public: 1, pre_page: 2 });
		const { result: result2 } = await get("/news", { column: 2, public: 1, pre_page: 2 });
		const { result: result3 } = await get("/news", { column: 3, public: 1, pre_page: 2 });
		this.setState({
			data: result1.data,
			data1: result2.data,
			data2: result3.data,
		})
	}
	render() {
		const { data, data1, data2 } = this.state;
		return <div id="new">
			{/* {...this.props}这是传出属性 */}
			<Common bgCls="new" {...this.props} />
			<div className='company'>
				<div>
					{data.length === 0 && data1.length === 0 && data2.length === 0 && (
						<h1 >暂无数据</h1>
					)}
					{/* 公司动态 */}
					{data.length > 0 && (
						<div className="new-top flex-center jc-between">
							<h2 className="new-message flex-vcenter"><i className='lefttop'></i> 公司动态</h2>
							<div className="more flex-center" onClick={() => hashHistory.push('/newsMore/1')}>查看更多<span className='youIcon'></span></div>
						</div>
					)}
					{data.length > 0 && data.slice(0, 2).map((item, index) => (
						<div className="new-item">
							<div className="leftcompahy">
								<img src={`${imgRoot}${item.url}`} onClick={() => hashHistory.push('/alliance/' + item.id + '?page=' + item.id)} />
							</div>
							<div className="rightcompany">
								<h3 className='lianTop' onClick={() => hashHistory.push('/alliance/' + item.id + '?page=' + item.id)}>{item.title}</h3>
								<div className='time'>{item.origin}.{moment(item.update_at).format('YYYY-MM-DD')}.{item.origin}</div>
								<div className="contentone">{item.summary}</div>
							</div>
						</div>
					))}

				</div>
				{/* 行业新闻 */}
				<div className='industry'>
					{
						data1.length > 0 && (
							<div className="new-top flex-center jc-between">
								<h2 className="new-message flex-vcenter"><i className='lefttop'></i> 行业新闻</h2>
								<div className="more flex-center" onClick={() => hashHistory.push('/newsMore/2')}>查看更多<span className='youIcon'></span></div>
							</div>
						)
					}
					{data1.length > 0 && data1.slice(0, 2).map((item, index) => (
						<div className="new-item">
							<div className="leftcompahy">
								<img src={`${imgRoot}${item.url}`} onClick={() => hashHistory.push('/alliance/' + item.id + '?page=' + item.id)} />
							</div>
							<div className="rightcompany">
								<h3 className='lianTop' onClick={() => hashHistory.push('/alliance/' + item.id + '?page=' + item.id)}>{item.title}</h3>
								<div className='time'>{item.origin}.{moment(item.update_at).format('YYYY-MM-DD')}.{item.origin}</div>
								<div className="contentone">{item.summary}</div>
							</div>
						</div>
					))}
				</div>
				{/*科技咨询  */}
				<div className='science'>
					{data2.length > 0 && (
						<div className="new-top flex-center jc-between">
							<h2 className="new-message flex-vcenter"><i className='lefttop'></i> 科技资讯</h2>
							<div className="more flex-center" onClick={() => hashHistory.push('/newsMore/3')}>查看更多<span className='youIcon'></span></div>
						</div>
					)}
					{data2.length > 0 && data2.slice(0, 2).map((item, index) => (
						<div className="new-item">
							<div className="leftcompahy">
								<img src={`${imgRoot}${item.url}`} onClick={() => hashHistory.push('/alliance/' + item.id + '?page=' + item.id)} />
							</div>
							<div className="rightcompany">
								<h3 className='lianTop' onClick={() => hashHistory.push('/alliance/' + item.id + '?page=' + item.id)}>{item.title}</h3>
								<div className='time'>{item.origin}.{moment(item.update_at).format('YYYY-MM-DD')}.{item.origin}</div>
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

export default New;
