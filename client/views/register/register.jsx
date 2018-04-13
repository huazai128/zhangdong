import React from 'react';
import './register.scss';
import { observer, inject } from 'mobx-react';
import { setStore, getStore } from './loginLocal.js';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { Link, hashHistory } from 'react-router';
import { get, post } from "js/api/fetch";
const FormItem = Form.Item;

@inject("login")
@observer
class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		
		}
		this.store = this.props.login;
	}
	componentDidMount(){
		
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				setStore('remember', values);
				this.store.loginPost(values);
				hashHistory.push("/creative")
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
							{getFieldDecorator('email', {
								rules: [{ required: true, message: '请输入邮箱!' }],
							})(
								<Input prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
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
							<Button className="login-form-button" onClick={this.handleSubmit}>登录</Button>
						</FormItem>
					</Form>
				</div>
			</div>
		);
	}
}

export default Form.create()(Login);

