import React from 'react';
import { setStore, getStore } from './loginLocal.js';
import { Link, hashHistory } from 'react-router';
import { Form, Icon, Input, Button, Checkbox, Tabs } from 'antd';
import { inject, observer } from 'mobx-react';
const FormItem = Form.Item;

@inject('login')
@observer
class LoginOne extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			confirmDirty: false
		};
		this.store = this.props.login;
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				this.store.addUser({ ...values, c_state: 1 }, (code) => {
					if (code) {
						hashHistory.push('/creative');
					}
				});
			}
		});
	}
	checkConfirm = (rule, value, callback) => {
		const form = this.props.form;
		if (value && this.state.confirmDirty) {
			form.validateFields(['confirm'], { force: true });
		}
		callback();
	}

	checkPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('两次密码输入不一致');
		} else {
			callback();
		}
	}

	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className='tabForm' style={{ marginTop: 30 }}>
				<Form className="from-container">
					<div className="item">
						<FormItem hasFeedback>
							{getFieldDecorator('username', {
								rules: [{ required: true, message: '不能为空' }],
							})(
								<Input className='use flex-center' placeholder="用户名" />)}
						</FormItem>
					</div>
					<div className="item">
						<FormItem hasFeedback>
							{getFieldDecorator('email', {
								rules: [
									{ required: true, message: '不能为空' },
									{ type: 'email', message: '请输入正确的邮箱' }
								],
							})(
								<Input className='use flex-center' placeholder="邮箱" />)}
						</FormItem>
					</div>
					<div className="item">
						<FormItem hasFeedback>
							{getFieldDecorator('password', {
								rules: [{
									required: true, message: '不能为空',
								}, {
									validator: this.checkConfirm,
								},
								{ max: 16, message: '密码过长' },
								{ min: 6, message: '密码过短' },
								],
							})(
								<Input type="password" placeholder='请输入密码(密码长度控制(6-16))' />
							)}
						</FormItem>
					</div>
					<div className="item">
						<FormItem hasFeedback>
							{getFieldDecorator('confirm', {
								rules: [{
									required: true, message: '不能为空',
								}, {
									validator: this.checkPassword,
								},
								{ max: 16, message: '密码过长' },
								{ min: 6, message: '密码过短' },
								],
							})(
								<Input type="password" onBlur={this.handleConfirmBlur} placeholder='请再次输入密码' />
							)}
						</FormItem>
					</div>
					<div className='flex'>其他信息</div>
					<div className="item">
						<FormItem hasFeedback>
							{getFieldDecorator('name', {
								rules: [{
									required: true, message: '不能为空',
								}],
							})(
								<Input onBlur={this.handleConfirmBlur} placeholder='请输入真实姓名' />
							)}
						</FormItem>
					</div>
					<div className="item">
						<FormItem hasFeedback>
							{getFieldDecorator('card', {
								rules: [{
									required: true, message: '不能为空',
								}, { pattern: /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/, message: '请填写正确的身份证！' }],
							})(
								<Input onBlur={this.handleConfirmBlur} placeholder='请输入身份证号码' />
							)}
						</FormItem>
					</div>
					<FormItem>
						<Button type="primary" onClick={this.handleSubmit} className="login-form-button loginOne">注册</Button>
					</FormItem>
				</Form>
			</div>
		);
	}
}

export default Form.create()(LoginOne);
