import React from 'react';
import './auditing.scss';
import { Link, hashHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Button, message, Upload } from 'antd';
import moment from 'moment';
import { imgRoot } from 'js/api/config';

@inject('apply')
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
		const { detail, files, getFiles, id } = this.store;
		const props = {
			name: 'bg',
			data: { apply_id: detail._id, p_file: true, },
			showUploadList: false,
			headers: {
				authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			onChange(info) {
				if (info.file.status !== 'uploading') {
					console.log(info.file, info.fileList);
				}
				if (info.file.status === 'done') {
					let file = info.file.response.result.path;
					getFiles(id);
					message.success('上传成功');
				} else if (info.file.status === 'error') {
					message.error('上传失败');
				}
			},
		};

		return (
			<div id='auditing'>
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/personal">个人中心</Link>&nbsp;>&nbsp;{Object.is(detail.style, 1) ? '测试接单' : '测试申请'}</div>
				</div>
				<div className="takingTop">
					<div className="takingOne flex">
						<p>{detail.mold === 0 ? '功能测试' : '兼容测试'}任务</p>
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
								<div><i></i>测试类型：{detail.mold === 0 ? '功能测试' : '兼容测试'}</div>
								<div><i></i>职位：{detail.job}</div>
								<div><i></i>邮箱：{detail.email}</div>
								<div><i></i>申请时间：{moment(detail.create_at).format('YYYY-MM-DD')}</div>
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
								<div className='status'>
									<ul className='flex'>
										<li>
											<div className="flex">
												<div className='btnContent'>
													<div className={`rect  ${(detail.process >= 0) ? 'phoneOne' : 'phoneThree'}`}></div>
													<div>完成申请</div>
												</div>
											</div>
											<p className='treat'>{Object.is(detail.style, 1) ? '已接单' : '已完成'}</p>
										</li>
										{files && !!files.length && files.map((item, index) => (
											<li>
												<div className="flex">
													<div className="xian"></div>
													<div className='btnContent'>
														<div className={`rect  ${(Object.is(item.state, 1) || Object.is(item.state, -1)) ? 'phoneOne' : 'phoneThree'}`}></div>
														<div>
															{Object.is(index, 0) && '确认需求'}
															{Object.is(index, 1) && '技术测试'}
															{Object.is(index, 2) && '结果交付'}
														</div>
													</div>
												</div>
												<div className="btn-right">
													{Object.is(item.state, 1) && <p className='treat'>已完成</p>}
													{Object.is(item.state, -1) && <p className='bad'>已取消</p>}
													{Object.is(this.store.index - 1, 2) && Object.is(item.state, 0) && <div><Button className="btn-green" onClick={() => { this.store.stateOver(item._id); }}>确认完成</Button></div>}
													{item.url && Object.is(detail.style, 0) && <a target="_blank" href={imgRoot + item.p_url} download={item.url} className="btn-blue" >下载文件</a>}
													{(Object.is(detail.style, 1) && !(Object.is(item.state, 0)) && <div className="file-box">
														<Upload action={`${imgRoot}/image?process=${item.process}&id=${item._id}&state=${ item.state }`} {...props} >
															<Button className="btn-file">{(item.url && item.p_url) ? '重新上传' : '上传文件'}</Button>
														</Upload>
													</div>)}
													{Object.is(detail.style, 1) &&  (Object.is(item.state, 1)) && <a target="_blank" href={imgRoot + item.p_url} download={item.url} className="url">{item.url}</a>}
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
