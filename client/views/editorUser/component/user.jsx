import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import { inject, observer } from 'mobx-react';
import { hashHistory } from 'react-router';
const FormItem = Form.Item;

import './user.scss';

@inject('login')
@observer
class UserDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
		this.store = this.props.login;
	}
	async componentDidMount() {
		await this.store.getUserInfo();
		let user = this.store.userInfo;
		this.setState({
			user: user
		});
		if (Object.is(user.type, 1)) {
			this.props.form.setFieldsValue({
				username: user.username,
				email: user.email,
				company: user.company,
				iphone: user.iphone,
				job: user.job,
				record: user.record,
			});
		} else {
			this.props.form.setFieldsValue({
				username: user.username,
				email: user.email,
			});
		}
	}
	handleSubmit = () => {
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				this.store.putUserId(Object.assign(this.state.user, values), (code) => {
					if (code) {
						hashHistory.push('/creative/personal');
					}
				});
			}
		});
	}
	handleCancel = () => {
		hashHistory.push('/creative/personal');
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const { user } = this.state;
		return (
			<div className="user-form">
				{user && Object.is(user.type, 1) ? (
					<Form>
						<div className="itemContent">
							<p>用户名:</p>
							<FormItem hasFeedback>
								{getFieldDecorator('username', {
									rules: [{ required: true, message: '不能为空', whitespace: true }],
								})(
									<Input placeholder='用户名' />
								)}
							</FormItem>
						</div>
						<div className="itemContent">
							<p>邮箱:</p>
							<FormItem hasFeedback>
								{getFieldDecorator('email', {
									rules: [
										{ required: true, message: '不能为空' },
										{ pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/, message: '请填写正确的邮箱！' }
									],
								})(
									<Input className='use flex-center' placeholder="邮箱" />)}
							</FormItem>
						</div>
						<div className="itemContent">
							<p>公司名称:</p>
							<FormItem hasFeedback>
								{getFieldDecorator('company', {
									rules: [{ required: true, message: '不能为空', whitespace: true }],
								})(
									<Input placeholder='公司名称' />
								)}
							</FormItem>
						</div>
						<div className="itemContent">
							<p>联系电话:</p>
							<FormItem hasFeedback>
								{getFieldDecorator('iphone', {
									rules: [
										{ required: true, message: '不能为空' },
										{ pattern: /^((1[3-8][0-9])+\d{8})$/, message: '请填写正确的手机号码' },
									],
								})(
									<Input placeholder='联系电话' />
								)}
							</FormItem>
						</div>
						<div className="itemContent">
							<p>职位:</p>
							<FormItem hasFeedback>
								{getFieldDecorator('job', {
									rules: [{ required: true, message: '不能为空' }],
								})(
									<Input placeholder='职位' />
								)}
							</FormItem>
						</div>
						<div className="itemContent">
							<p>测试资历:</p>
							<FormItem hasFeedback>
								{getFieldDecorator('record', {
									rules: [{ required: true, message: '不能为空' }],
								})(
									<Input placeholder='测试资历' />
								)}
							</FormItem>
						</div>
						<FormItem>
							<Button type="primary" onClick={this.handleSubmit} className="login-form-button loginTwo">确认</Button>
							<Button type="default" onClick={this.handleCancel} className="login-form-button loginTwo">取消</Button>
						</FormItem>
					</Form>
				) : (
					<Form>
						<div className="itemContent">
							<p>用户名:</p>
							<FormItem hasFeedback>
								{getFieldDecorator('username', {
									rules: [{ required: true, message: '不能为空', whitespace: true }],
								})(
									<Input placeholder='用户名' />
								)}
							</FormItem>
						</div>
						<div className="itemContent">
							<p>邮箱:</p>
							<FormItem hasFeedback>
								{getFieldDecorator('email', {
									rules: [
										{ required: true, message: '不能为空' },
										{ pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/, message: '请填写正确的邮箱！' }
									],
								})(
									<Input className='use flex-center' placeholder="邮箱" />)}
							</FormItem>
						</div>
						<FormItem>
							<Button type="primary" onClick={this.handleSubmit} className="login-form-button loginTwo">确认</Button>
							<Button type="default" onClick={this.handleCancel} className="login-form-button loginTwo">取消</Button>
						</FormItem>
					</Form>
				)}
			</div>
		);
	}
}

export default Form.create()(UserDetail);