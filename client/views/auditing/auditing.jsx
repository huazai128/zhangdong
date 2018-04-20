import React from 'react';
import './auditing.scss';
import { Link, hashHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import moment from 'moment'

@inject("apply")
@observer
export default class Auditing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.store = this.props.apply;
	}
	componentDidMount() {
		const { id } = this.props.params;
		this.store.getApplyId(id);
	}
	render() {
		const { detail } = this.store;
		return (
			<div id='auditing'>
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/personal">个人中心</Link>&nbsp;>&nbsp;测试接单</div>
				</div>
				<div className="takingTop">
					<div className="takingOne flex">
						<p>{detail.mold === 0 ? "功能测试" : "兼容测试"}任务</p>
						{Object.is(detail.process, 0) && (<p className='secondP'>完成申请</p>)}
						{Object.is(detail.process, 1) && (<p className='secondP jieP'>确认需求</p>)}
						{Object.is(detail.process, 2) && (<p className='secondP ceP'>技术测试</p>)}
						{Object.is(detail.process, 3) && (<p className='secondP yiP'>结果交付</p>)}
					</div>
					<div className='takingBottom'>
						<div className='flex'>
							<div className="leftTaking flex-col-3 wrap d-column">
								<div><i></i>公司名称：{detail.company}</div>
								<div><i></i>联系人：{detail.name}</div>
								<div><i></i>手机号：{detail.phone}</div>
								<div><i></i>QQ：{detail.qq}</div>
							</div>
							<div className="rightBottom flex d-column">
								<div><i></i>测试类型：{detail.mold === 0 ? "功能测试" : "兼容测试"}</div>
								<div><i></i>职位：{detail.job}</div>
								<div><i></i>邮箱：{detail.email}</div>
								<div><i></i>申请时间：{moment(detail.create_at).format('YYYY-MM-DD hh:mm:ss')}</div>
							</div>
						</div>
						{Object.is(detail.style, 0) && (<div className="apply-content"><i></i>咨询内容：{detail.content}</div>)}
					</div>
					{Object.is(detail.style, 1) && (
						<div className="toolBottom">
							<h4>项目详情：</h4>
							<div dangerouslySetInnerHTML={{
								__html: detail.content
							}}></div>
						</div>
					)}
					<div className="testBottm">
						<div className="test">测试进程:</div>
						<div className="tuContent">
							<div className='btnTop flex'>
								<div className='btnContent'>
									<div className={`rect  ${(detail.process >= 0) ? 'phoneOne' : 'phoneThree'}`}></div>
									<div>完成申请</div>
									<p></p>
								</div>
								<div className="xian"></div>
								<div className='btnContent'>
									<div className={`rect  ${(detail.process >= 1) ? 'phoneOne' : 'phoneThree'}`}></div>
									<div>确认需求</div>
								</div>
								<div className="xian"></div>
								<div className='btnContent'>
									<div className={`rect  ${(detail.process >= 2) ? 'phoneOne' : 'phoneThree'}`}></div>
									<div>阶段C</div>
								</div>
								<div className="xian"></div>
								<div className='btnContent'>
									<div className={`rect  ${(detail.process == 3) ? 'phoneOne' : 'phoneThree'}`}></div>
									<div>阶段D</div>
								</div>
							</div>
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
			</div>
		);
	}
}
