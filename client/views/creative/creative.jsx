import React from 'react';
import './creative.scss';
import Top from '../common/partyTop.jsx';
import Tab from '../common/tabCreative.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
import { get } from 'js/api/fetch';
import { imgRoot } from 'js/api/config';

class CreativeContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: false,
			lists1: [],
			lists2: [],
			lists3: []
		};
	}
	componentDidMount() {
		let query = {
			state: 1,
			page: 1,
			pre_page: 4
		};
		let params = {
			pre_page: 10,
			choice: 1
		};
		Promise.all([this.getLists({ ...query, category: 0 }), this.getLists({ ...query, category: 1 }), this.getChoiceLists({ ...query, ...params })])
			.then((res) => {
				this.setState({
					lists1: res[0].result.data,
					lists2: res[1].result.data,
					lists3: res[2].result.data,
				});
			});
	}
	getLists = async (params) => await get('/forum', params);
	getChoiceLists = async (params) => await get('/community', params)
	render() {
		const { lists1, lists2, lists3 } = this.state;
		return (
			<div id='creative'>
				<div className="bg"></div>
				<div className='creativeCont flex jc-between'>
					<Tab></Tab>
					<div className="bar">
						<div className="barContent">
							<Link to="/creative/quill">我要发帖</Link>
						</div>
						<div className="toolContent">
							<Link to="/creative/community?state=0">
								<div className="cpt flex">
									<div className="leftImg"></div>
									<div className='textConet flex-vcenter'>测试工具集市</div>
								</div>
							</Link>
							<div className="flex wrap roundBottm">
								{lists1.length > 0 && lists1.map((item, index) => (
									<Link className="round" to={`/creative/detail/${item.id}?state=0`}>
										<div >
											<div className="one"><img src={`${imgRoot}/${item.pc_img}`} alt="" /></div>
											<div className='two'>{item.title}</div>
										</div>
									</Link>
								))}
							</div>
						</div>
						{/* 知识集市 */}
						<div className="toolContent">
							<Link to="/creative/community?state=1">
								<div className="cpt flex">
									<div className="leftImg cptOne"></div>
									<div className='textConet flex-vcenter'>知识库集市</div>
								</div>
							</Link>
							<div className="flex wrap roundBottm">
								{lists2.length > 0 && lists2.map((item, index) => (
									<Link className="round" to={`/creative/detail/${item.id}?state=1`}>
										<div >
											<div className="one"><img src={`${imgRoot}/${item.pc_img}`} alt="" /></div>
											<div className='two'>{item.title}</div>
										</div>
									</Link>
								))}
							</div>
						</div>
						<div className="jingContent">
							<div className="jingTop">精选话题</div>
							{lists3.length > 0 && lists3.map((item, index) => (
								<Link className="jingImg" to={`/creative/barDel/${item.id}`}>
									<div className=" flex-vcenter">
										<img src={(item.userId && item.userId.gravatar) ? item.userId.gravatar : require('img/top2.png')} />
										<p>{item.title}</p>
									</div>
								</Link>
							))}

						</div>
						{/* 社区运行状况 */}
						<div className="situation">
							<div className="stuTop">社区运行状况</div>
							<div className="stuContent flex-vcenter">
								<img src={require('img/xingzhuang1.png')} />
								<div className="stuRight">会员：23152</div>
							</div>
						</div>
						<div className="situation stuOne">
							<div className="stuContent flex-vcenter">
								<img src={require('img/xingzhuang2.jpg')} />
								<div className="stuRight">测试者：856</div>
							</div>
						</div>
						<div className="situation stuOne">
							<div className="stuContent flex-vcenter">
								<img src={require('img/xingzhuang3.png')} />
								<div className="stuRight">主题：46058</div>
							</div>
						</div>
						<div className="situation stuOne">
							<div className="stuContent flex-vcenter">
								<img src={require('img/xingzhuang4.png')} />
								<div className="stuRight">回复：46058</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class Creative extends React.Component {
	render() {
		return (
			<div id='creative'>
				<Top></Top>
				{this.props.children}
				<Footer></Footer>
			</div>
		);
	}
}
export { Creative, CreativeContent };
