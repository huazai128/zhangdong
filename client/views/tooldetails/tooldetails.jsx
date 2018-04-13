import React from 'react';
import './toolDetails.scss';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import { imgRoot } from 'js/api/config';

@inject("forum")
@observer
class ToolDetails extends React.Component {
	constructor(props) {
		super(props);
		this.store = this.props.forum;
	}
	componentDidMount() {
		const { id } = this.props.params;
		let { query } = this.props.location;
		if (query) {
			this.store.category = Number(query.state);
		}
		if (id) {
			this.store.getDetailId(id);
		}
	}
	render() {
		const { category, detail } = this.store;
		return (
			<div id="detail">
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to={`/creative/community?state=${category}`}>{Number(category) ? "知识库" : "测试者工具"}</Link>&nbsp;>&nbsp;loadrunner</div>
				</div>
				<div className="toolContent">
					<div className="toolTop flex jc-between">
						<div className="toolLeft flex">
							<div className="yuan"><img src={`${imgRoot}${detail.pc_img}`} alt="" /></div>
							<div className="text">
								<p className='textOne'>{detail.title}</p>
								<p className='textTwo'>{detail.summary}</p>
							</div>
						</div>
						<div className="toolRight">
							<p className='ourOne'>我也要用</p>
						</div>
					</div>
					<div className="toolBottom" dangerouslySetInnerHTML={{
						__html: detail.content
					}}>
					</div>
				</div>
			</div>
		);
	}
}
export default ToolDetails;
