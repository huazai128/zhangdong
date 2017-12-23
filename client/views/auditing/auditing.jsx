import React from 'react';
import './auditing.scss';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
export default class Auditing extends React.Component {
	render() {
		return (
			<div id='auditing'>
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/personal">个人中心</Link>&nbsp;>&nbsp;测试接单</div>
				</div>
				<div className="takingTop">
					<div className="takingOne flex">
						<p>申请名称申请名称</p>
						<p>审核中</p>
					</div>
					<div className='takingBottom flex'>
						<div className="leftTaking flex d-column">
							<div><i></i>需求方:需求方名域名称</div>
							<div><i></i>项目金额:￥39999</div>
							<div><i></i>项目周期:两个月</div>
						</div>
						<div className="rightBottom flex d-column">
							<div><i></i>测试类型:APP测试</div>
							<div><i></i>发布时间:2017-10-16</div>
						</div>
					</div>
					<div className="toolBottom">
						<div className='toolTop'>项目详情:</div>
						<div className="tuTop commonNone">图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍
				图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍 图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍.</div>
						<div className="wenTop commonNone">文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图
				文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图 文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图. </div>
						<div className="imgAn"></div>
						<div className='commonNone'>文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图
				文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图.</div>
						<div className='commonNone'>文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图
				文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图 文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图
				文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图 文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图.</div>
					</div>
					<div className="testBottm">
						<div className="test">测试进程:</div>
						<div className="tuContent">
							<div className='btnTop flex'>
								<div className='btnContent'>
									<div className="rect phoneOne"></div>
									<div>阶段A</div>
								</div>
								<div className="xian"></div>
								<div className='btnContent'>
									<div className="rect phoneTwo"></div>
									<div>阶段B</div>
								</div>
								<div className="xian"></div>
								<div className='btnContent'>
									<div className="rect phoneThree"></div>
									<div>阶段C</div>
								</div>
								<div className="xian"></div>
								<div className='btnContent'>
									<div className="rect phoneThree"></div>
									<div>阶段D</div>
								</div>
								<div className="xian"></div>
								<div className='btnContent'>
									<div className="rect phoneThree"></div>
									<div>阶段E</div>
								</div>
							</div>
							<div className='result'>上传结果</div>
						</div>
						<div className='status'>
							<ul className='flex'>
								<li className='treat'>审核通过</li>
								<li className='treat'>结果上传</li>
								<li className='bad'>测试结果申请驳回</li>
							</ul>
						</div>
					</div>
				</div>
				{/* <Footer></Footer> */}
			</div>
		);
	}
}
