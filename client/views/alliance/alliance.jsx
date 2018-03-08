import React from 'react';
import './alliance.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
import Footer from '../common/lastFooter.jsx';
import { get, post } from "js/api/fetch";
import moment from 'moment';

class NewDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newData: null,
			ty: 1
		}
	}
	async componentDidMount() {
		this.node.scrollIntoView();
		if (this.props.params && this.props.params.id) {
			let ty = ''
			const { result } = await get("/news/" + this.props.params.id);
			console.log(result)
			switch (result.column) {
				case 1:
					ty = "新闻动态"
					break;
				case 2:
					ty = '行业新闻'
					break;
				case 3:
					ty = '科技资讯'
					break;
			}
			this.setState({
				data: result,
				ty: ty
			})
		}
	}

	render() {
		const { data,ty } = this.state; 
		return (
			<div className='alliance' ref={node => this.node = node}>
				<Common bgCls="alliance" {...this.props} />
				<div className="topPage">
					<div className="topPageContet">
						<div className="pageContent flex">
							<div onClick={() => hashHistory.push('/')} className='pageContentOne'>首页</div>&nbsp;&nbsp;>&nbsp;&nbsp;<div onClick={() => hashHistory.push('/new')} className='pageContentOne'>{ty}</div>&nbsp;&nbsp;>&nbsp;&nbsp;{data && data.title }
						</div>
					</div>
				</div>
				<div className="alliPage">
					<div className="alliContent flex">
						<div className="allLeft flex-g-1">
							<div className="alliTop">
								<div className="alliTopContent">
									<div className="shiContent">
										{ data && data.title }
									</div>
									<div className="timeConten">
										{ data && data.auth }.发表于：{data && moment(data.update_at).format('YYYY年MM月DD日') }
									</div>
								</div>
							</div>
							<div className="alliDetail">
								{ data && (
									<div dangerouslySetInnerHTML={{
										__html: data.content
									}} ></div>
								) }
							</div>
						</div>
						<div className="alliRight">
							< div className="dianTop">
								<div className="retian">热点</div>
							</div>
							<div className="dianContent">
								<div className="dianContentTop flex">
									<div className="reLeft">
										<img src={require('img/19990.jpg')} alt="" />
									</div>
									<div className="reRight">
										【获奖名单】广州互联网企业风云榜获奖名单公布
									</div>
								</div>
							</div>
							<div className="dianContent">
								<div className="dianContentTop flex">
									<div className="reLeft">
										<img src={require('img/19990.jpg')} alt="" />
									</div>
									<div className="reRight">
										【获奖名单】广州互联网企业风云榜获奖名单公布
									</div>
								</div>
							</div>
							<div className="dianContent">
								<div className="dianContentTop flex">
									<div className="reLeft">
										<img src={require('img/19990.jpg')} alt="" />
									</div>
									<div className="reRight">
										【获奖名单】广州互联网企业风云榜获奖名单公布
									</div>
								</div>
							</div>
							<div className="dianContent">
								<div className="dianContentTop flex">
									<div className="reLeft">
										<img src={require('img/19990.jpg')} alt="" />
									</div>
									<div className="reRight">
										【获奖名单】广州互联网企业风云榜获奖名单公布
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		);
	}
}
export default NewDetail;
