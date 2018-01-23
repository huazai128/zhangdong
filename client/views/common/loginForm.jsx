import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Tabs } from 'antd';
const FormItem = Form.Item;

class LoginOne extends React.Component {
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
			callback('Two passwords that you enter is inconsistent!');
		} else {
			callback();
		}
	}

	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div>
				<Form className="from-container">
					<div className="item">
						<FormItem>
							{getFieldDecorator('e-mail', {
								rules: [{ required: true, message: '不能为空' }],
							})(
								<Input className='use flex-center' placeholder="邮箱" />)}
						</FormItem>
					</div>
					<div className="item">
						<FormItem
						>
							{getFieldDecorator('password', {
								rules: [{
									required: true, message: '不能为空',
								}, {
									validator: this.checkConfirm,
								}],
							})(
								<Input type="password" placeholder='请输入密码' />
							)}
						</FormItem>
					</div>
					<div className="item">
						<FormItem
						// {...formItemLayout}
						// label="Confirm Password"
						>
							{getFieldDecorator('confirm', {
								rules: [{
									required: true, message: '不能为空',
								}, {
									validator: this.checkPassword,
								}],
							})(
								<Input type="password" onBlur={this.handleConfirmBlur} placeholder='请再次输入密码' />
							)}
						</FormItem>
					</div>
					<FormItem>
						<Button type="primary" onClick={this.handleSubmit} className="login-form-button loginOne">登录</Button>
					</FormItem>

				</Form>
			</div>
		);
	}
}

export default Form.create()(LoginOne);
