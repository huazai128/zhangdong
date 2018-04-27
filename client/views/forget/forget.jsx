import React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { Link, hashHistory } from 'react-router';
const FormItem = Form.Item;
import './forget.scss';


@inject('login')
@observer
class Forget extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			confirmDirty: false,
		};
		this.store = this.props.login;
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.store.forgetPwd(values, (code) => {
					if (code) {
						hashHistory.push('/login');
					}
				});
			}
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
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div id='forget' className="flex-center">
				<div className="register-form">
					<h4 className="title">忘记密码</h4>
					<Form>
						<FormItem hasFeedback>
							{getFieldDecorator('email', {
								rules: [{ required: true, message: '请输入账户' }],
							})(
								<Input placeholder="请输入账号" />
							)}
						</FormItem>
						<FormItem hasFeedback>
							{getFieldDecorator('name', {
								rules: [{ required: true, message: '请输入真实姓名!' }],
							})(
								<Input placeholder="请输入真实姓名" />
							)}
						</FormItem>
						<FormItem hasFeedback>
							{getFieldDecorator('card', {
								rules: [
									{ required: true, message: '请输入身份证号!' },
									{ pattern: /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/, message: '请填写正确的身份证！' }
								],
							})(
								<Input placeholder="请输入身份证号" />
							)}
						</FormItem>
						<FormItem hasFeedback>
							{getFieldDecorator('new_password', {
								rules: [
									{ required: true, message: '请输入新密码!' },
									{ validator: this.checkConfirm, },
									{ max: 16, message: '密码过长' },
									{ min: 6, message: '密码过短' },
								],
							})(
								<Input type="password" placeholder="请输入密码(密码长度控制(6-16))" />
							)}
						</FormItem>
						<FormItem hasFeedback>
							{getFieldDecorator('confirm_password', {
								rules: [
									{ required: true, message: '请再次确认新密码!' },
									{ validator: this.checkPassword, },
									{ max: 16, message: '密码过长' },
									{ min: 6, message: '密码过短' },
								],
							})(
								<Input type="password" placeholder="请再次确认新密码" />
							)}
						</FormItem>
						<FormItem>
							<Button className="login-form-button" onClick={this.handleSubmit}>登录</Button>
						</FormItem>
					</Form>
				</div>
			</div>
		);
	}
}

export default Form.create()(Forget);

