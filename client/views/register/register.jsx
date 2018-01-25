import React from 'react';
import './register.scss';
import { setStore, getStore } from './loginLocal.js';
// import LoginTab from '../common/loginTab.jsx';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link, hashHistory } from 'react-router';

const FormItem = Form.Item;
class Login extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			console.log(values)
			if (!err) {
				setStore('name', values.userName);
				console.log('Received values of form: ', values);
				if (values.password == '123456' && values.userName == 'admin') {
					hashHistory.push('/creative');
				}
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div id='register' className="flex-center">
				<div className="register-form ">
					<div className='flex-henter flexImg'>
						<img src={require('img/logo2.jpg')} />
					</div>
					<Form>
						<FormItem>
							{getFieldDecorator('userName', {
								rules: [{ required: true, message: 'Please input your username!' }],
							})(
								<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
								)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: 'Please input your Password!' }],
							})(
								<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
								)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('remember', {
								valuePropName: 'checked',
								initialValue: true,
							})(
								<Checkbox>记住密码</Checkbox>
								)}
							<a className="login-form-forgot float-right" href="">忘记密码?</a>
							<Button className="login-form-button" onClick={this.handleSubmit}>
								登录
          </Button>
						</FormItem>


					</Form>

				</div>
			</div>
		);
	}
}

export default Form.create()(Login);

