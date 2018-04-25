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
		this.state = {};
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
  render() {
  	const { getFieldDecorator } = this.props.form;
  	return (
  		<div id='forget' className="flex-center">
  			<div className="register-form">
  				<h4 className="title">忘记密码</h4>
  				<Form>
  					<FormItem>
  						{getFieldDecorator('email', {
  							rules: [{ required: true, message: '请输入账户' }],
  						})(
  							<Input placeholder="请输入账号" />
  						)}
  					</FormItem>
  					<FormItem>
  						{getFieldDecorator('name', {
  							rules: [{ required: true, message: '请输入真实姓名!' }],
  						})(
  							<Input placeholder="请输入真实姓名" />
  						)}
  					</FormItem>
  					<FormItem>
  						{getFieldDecorator('card', {
  							rules: [{ required: true, message: '请输入身份证号!' }],
  						})(
  							<Input placeholder="请输入身份证号" />
  						)}
  					</FormItem>
  					<FormItem>
  						{getFieldDecorator('new_password', {
  							rules: [{ required: true, message: '请输入新密码!' }],
  						})(
  							<Input type="password" placeholder="请输入新密码" />
  						)}
  					</FormItem>
  					<FormItem>
  						{getFieldDecorator('confirm_password', {
  							rules: [{ required: true, message: '请再次确认新密码!' }],
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

