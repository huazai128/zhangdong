import React from 'react';
import './login.scss';
// import { setStore, getStore } from './loginLocal.js';
import LoginTab from '../common/loginTab.jsx';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link, hashHistory } from 'react-router';

const FormItem = Form.Item;
class Login extends React.Component {

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div id='login' className="flex-center">
				<div className="login-form ">
					<div className='flex-henter flexImg'>
						<img src={require('img/logo2.jpg')} />
					</div>
					<LoginTab />
				</div>
			</div>
		);
	}
}

export default Form.create()(Login);

