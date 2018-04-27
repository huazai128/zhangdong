import React, { Component } from 'react';
import { imgRoot } from 'js/api/config';
import { Modal, Upload, Form, Input, Button, message } from 'antd';
import { inject, observer } from 'mobx-react';
import './editor.scss';
const FormItem = Form.Item;

@inject('login')
@observer
class EditorUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			headers: {},
			confirmDirty: false,
		};
		this.store = this.props.login;
	}
	showModal = () => {
		this.setState({
			visible: true,
		});
	}
	handleOk = (e) => {
		let user = JSON.parse(localStorage.getItem('user'));
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				if (Object.is(values.old_password, values.new_password)) {
					message.info('输入新的密码和老密码一致');
					return false;
				}
				this.store.putUserId({ ...values, _id: user._id, psw: true }, (code) => {
					if (code) {
						this.props.form.resetFields();
						this.setState({
							visible: false
						});
					} else {
						message.error('修改失败');
					}
				});
			}
		});

	}
	handleCancel = (e) => {
		this.props.form.resetFields();
		this.setState({
			visible: false,
		});
	}
	checkConfirm = (rule, value, callback) => {
		const form = this.props.form;
		if (value && this.state.confirmDirty) {
			form.validateFields(['confirm_password'], { force: true });
		}
		callback();
	}

	checkPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('new_password')) {
			callback('两次密码输入不一致');
		} else {
			callback();
		}
	}

	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	}
	componentDidMount() {
		this.store.getInit();
		let headers = {
			authorization: 'Bearer ' + localStorage.getItem('token'),
		};
		this.setState({
			headers: headers
		});
	}

	changeFile = (info) => {
		let user = JSON.parse(localStorage.getItem('user'));
		const { putUserId, getUserInfo } = this.store;
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === 'done') {
			let gravatar = info.file.response.result.path;
			putUserId({ _id: user._id, gravatar: gravatar }, (code) => {
				getUserInfo();
			});
		} else if (info.file.status === 'error') {
			message.error('上传失败');
		}
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const { userInfo } = this.store;
		return (
			<div className="user-box flex">
				<div className="user-left">
					<div className="user-img">
						<img src={`${imgRoot}${userInfo.gravatar}`} alt="" />
					</div>
					<p className="icon-text">(建议上传1:1的头像)</p>
					<p className="icon-avator"><Upload headers={this.state.headers} name="bg" action={`${imgRoot}/image`} onChange={(info) => { this.changeFile(info); }} showUploadList={false}>修改头像</Upload></p>
					<p className="icon-psw" onClick={() => { this.showModal(); }}>修改密码</p>
				</div>
				<div className="flex-g-1 user-cont">
					{this.props.children}
				</div>
				<Modal
					title="修改密码"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}>
					<Form>
						<div className="itemContent">
							<p>原有密码:</p>
							<FormItem>
								{getFieldDecorator('old_password', {
									rules: [
										{ required: true, message: '不能为空', whitespace: true },
										{ max: 16, message: '密码过长' },
										{ min: 6, message: '密码过短' },
									],
								})(
									<Input type="password" placeholder='请输入原有密码' />
								)}
							</FormItem>
						</div>
						<div className="item">
							<p>新密码:</p>
							<FormItem>
								{getFieldDecorator('new_password', {
									rules: [
										{ required: true, message: '不能为空', },
										{ validator: this.checkConfirm, },
										{ max: 16, message: '密码过长' },
										{ min: 6, message: '密码过短' },
									],
								})(
									<Input type="password" placeholder='请输入密码(密码长度控制(6-16))' />
								)}
							</FormItem>
						</div>
						<div className="item">
							<p>确认新密码:</p>
							<FormItem>
								{getFieldDecorator('confirm_password', {
									rules: [
										{ required: true, message: '不能为空', },
										{ validator: this.checkPassword, },
										{ max: 16, message: '密码过长' },
										{ min: 6, message: '密码过短' },
									],
								})(
									<Input type="password" onBlur={this.handleConfirmBlur} placeholder='请再次输入密码' />
								)}
							</FormItem>
						</div>
					</Form>
				</Modal>
			</div>
		);
	}
}
export default Form.create()(EditorUser);