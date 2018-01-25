import React from 'react';
import { setStore, getStore } from './loginLocal.js';
import { Link, hashHistory } from 'react-router';
import { Form, Icon, Input, Button, Checkbox, Tabs } from 'antd';
const FormItem = Form.Item;

class LoginOne extends React.Component {

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {

			if (!err) {
				console.log('Received values of form: ', values);
				setStore('mail', values.mail);
				console.log(getStore('mail'))

				// setStore('psd', values.password);
				// console.log(getStore(name));
				if (values.mail === 'test' && values.password == 123456 && values.confirm == 123456) {
					hashHistory.push('/creative');
				} else {
					alert('登录失败');
				}
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className='tabForm' style={{ marginTop: 30 }}>
				<Form className="from-container">
					<div className="item">
						<FormItem
						>
							{getFieldDecorator('mail', {
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
