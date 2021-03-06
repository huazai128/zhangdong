import React from 'react';
import './register.scss';
import { observer, inject } from 'mobx-react';
import { setStore, getStore, removeStore } from './loginLocal.js';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { Link, hashHistory } from 'react-router';
const FormItem = Form.Item;

@inject('login')
@observer
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.store = this.props.login;
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log(values.remember);
				if (values.remember) {
					setStore('remember', values);
				}
				this.store.loginPost(values, (code) => {
					if (code) {
						hashHistory.push('/creative');
					}
				});
			}
		});
	}

	changeCheck = (value) => {
		console.log(value);
		if (!value.target.checked) {
			removeStore('remember');
		}
	}

	componentDidMount() {
		let user = JSON.parse(getStore('remember'));
		if(user){
			this.props.form.setFieldsValue(user);
		}
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
								<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
							)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: '请输入密码!' }],
							})(
								<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
							)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('remember', {
								valuePropName: 'checked',
							})(
								<Checkbox onChange={(e) => { this.changeCheck(e); }}>记住密码</Checkbox>
							)}
							<span className="float-right"><Link to="/register">注册</Link> | <Link to="/forget">忘记密码?</Link></span>
							<Button className="login-form-button" onClick={this.handleSubmit}>登录</Button>
						</FormItem>
					</Form>
				</div>
			</div>
		);
	}
}

export default Form.create()(Login);

