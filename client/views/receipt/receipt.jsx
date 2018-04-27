import React from 'react';
import './receipt.scss';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import moment from 'moment';

@inject('apply')
@observer
export default class Receipt extends React.Component {
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
			<div id='receipt'>
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative">众测平台</Link>&nbsp;>&nbsp;测试任务</div>
				</div>
				<div className="takingTop">
					<div className="takingOne flex">
						<p>{detail.mold === 0 ? '功能测试' : '兼容测试'}任务</p>
					</div>
					<div className='takingBottom'>
						<div className='flex'>
							<div className="leftTaking flex-col-3 wrap d-column">
								<div><i></i>公司名称：{detail.company}</div>
								<div><i></i>联系人：***</div>
								<div><i></i>手机号：********</div>
								<div><i></i>QQ：*******</div>
							</div>
							<div className="rightBottom flex d-column">
								<div><i></i>测试类型：{detail.mold === 0 ? '功能测试' : '兼容测试'}</div>
								<div><i></i>职位：*****</div>
								<div><i></i>邮箱：*******</div>
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
				</div>
			</div>
		);
	}
}
