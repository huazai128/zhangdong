import React from 'react';
import './login.scss';
import { setStore, getStore } from './loginLocal.js';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link, hashHistory } from 'react-router';

const FormItem = Form.Item;
class Login extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				// console.log(values.userName)
				setStore('name', values.userName);
				// setStore('psd', values.password);
				// console.log(getStore(name));
				if (values.userName === 'admin' && values.password== 123456) {
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
			<div id='login' className="flex-center">
				<div className="login-form flex-center">
					<Form onSubmit={this.handleSubmit} className="from-container">
						<FormItem>
							{getFieldDecorator('userName', {
								rules: [{ required: true, message: 'Please input your username!' }],
							})(
								<Input className='use flex-center' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', fontSize: '28px' }} />} placeholder="账号" />)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: 'Please input your Password!' }],
							})(
								<Input className='use flex-center' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)', fontSize: '28px' }} />} type="password" placeholder="密码" />)}
						</FormItem>
						<Button htmlType="submit" className="login-form-button">
							登录</Button>
					</Form>
				</div>
			</div>
		);
	}
}

export default Form.create()(Login);
