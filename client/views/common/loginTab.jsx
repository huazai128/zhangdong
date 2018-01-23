import React from 'react';
import './loginTab.scss';
import LoginOne from './loginForm.jsx';
import { Form, Icon, Input, Button, Checkbox, Tabs } from 'antd';
const { TabPane } = Tabs;
const FormItem = Form.Item;


class ConfirmImg extends React.Component {
	render() {
		return (
			<div className='flex'>
				<Input placeholder='验证码' />
				<div className='comfirImg'>
					<img className='comfiYzheng' src={require('img/19990.jpg')} />
				</div>
			</div>
		);
	}
}

class LoginTab extends React.Component {
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
	handleSubmitUser = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return <div className='logintab'>
			<Tabs
				defaultActiveKey="1"
				renderTabBar={() => <ScrollableInkTabBar />}
				renderTabContent={() => <TabContent />}
				animated={false}
			>
				<TabPane tab="普通用户" key="1">
					<LoginOne />
				</TabPane>
				<TabPane tab="测试开发用户" key="2">
					<Form>
						<div className="itemContent">
							<FormItem>
								{getFieldDecorator('nikiName', {
									rules: [{ required: true, message: '不能为空', whitespace: true }],
								})(
									<Input placeholder='用户名' />
									)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem>
								{getFieldDecorator('mail', {
									rules: [{ required: true, message: '不能为空' }],
								})(
									<Input className='use flex-center' placeholder="邮箱" />)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem
							>
								{getFieldDecorator('userPassword', {
									rules: [{
										required: true, message: '不能为空',
									}, {
										validator: this.checkConfirm,
									}],
								})(
									<Input type="password" placeholder='设置密码' />
									)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem
							// {...formItemLayout}
							// label="Confirm Password"
							>
								{getFieldDecorator('userConfirm', {
									rules: [{
										required: true, message: '不能为空',
									}, {
										validator: this.checkPassword,
									}],
								})(
									<Input type="password" onBlur={this.handleConfirmBlur} placeholder='确认密码' />
									)}
							</FormItem>
						</div>
						<div className='flex'>其他信息</div>
						<div className="itemContent">
							<FormItem>
								{getFieldDecorator('userName', {
									rules: [{ required: true, message: '不能为空', whitespace: true }],
								})(
									<Input placeholder='真实姓名' />
									)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem>
								{getFieldDecorator('company', {
									rules: [{ required: true, message: '不能为空', whitespace: true }],
								})(
									<Input placeholder='公司名称' />
									)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem>
								{getFieldDecorator('phone', {
									rules: [{ required: true, message: '不能为空' }],
								})(
									<Input placeholder='联系电话' />
									)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem>
								{getFieldDecorator('job', {
									rules: [{ required: true, message: '不能为空' }],
								})(
									<Input placeholder='职位' />
									)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem>
								{getFieldDecorator('job', {
									rules: [{ required: true, message: '不能为空' }],
								})(
									<Input placeholder='职位' />
									)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem>
								{getFieldDecorator('record', {
									rules: [{ required: true, message: '不能为空' }],
								})(
									<Input placeholder='测试资历' />
									)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem>
								{getFieldDecorator('record', {
									rules: [{ required: true, message: '不能为空' }],
								})(

									// 填写验证码
									<ConfirmImg />
									)}
							</FormItem>
						</div>
						<FormItem>
							<Button type="primary" onClick={this.handleSubmitUser} className="login-form-button loginTwo">注册</Button>
						</FormItem>
					</Form>
				</TabPane>
			</Tabs>
		</div >;
	}
}
export default Form.create()(LoginTab);
