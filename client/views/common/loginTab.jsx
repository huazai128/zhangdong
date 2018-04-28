import React from 'react';
import './loginTab.scss';
import LoginOne from './loginForm.jsx';
import { Form, Icon, Input, Button, Checkbox, Tabs } from 'antd';
import { inject, observer } from 'mobx-react';
import { hashHistory } from 'react-router';
const { TabPane } = Tabs;
const FormItem = Form.Item;

class ConfirmImg extends React.Component {
	render() {
		return (
			<div className='flex'>
				<div className='comfirImg'>
					<img className='comfiYzheng' src={require('img/19990.jpg')} />
				</div>
			</div>
		);
	}
}
@inject('login')
@observer
class LoginTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			confirmDirty: false,
			isModal: false
		};
		this.store = this.props.login;
	}
	handleSubmitUser = (e) => {
		e.preventDefault();
		this.store.getCode();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				let obj = { type: 1 };
				this.store.addUser(Object.assign(values, obj), (code) => {
					if (code) {
						this.setState({
							isModal: true,
						});
					}
				});
			}
		});
	}
	componentDidMount() {
		this.store.getCode();
	}

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
			callback('两次密码输入不一致');
		} else {
			callback();
		}
	}

	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	}

	showModal = () => {
		this.setState({
			isModal: false,
		});
		hashHistory.push('/creative');
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const { codeInfo } = this.store;
		const { isModal } = this.state;
		return <div className='logintab'>
			<Tabs
				defaultActiveKey="1"
				renderTabBar={() => <ScrollableInkTabBar />}
				renderTabContent={() => <TabContent />}
				animated={false}>
				<TabPane tab="普通用户" key="1">
					<LoginOne />
				</TabPane>
				<TabPane tab="测试开发用户" key="2">
					<Form>
						<div className="itemContent">
							<FormItem hasFeedback>
								{getFieldDecorator('username', {
									rules: [{ required: true, message: '不能为空', whitespace: true }],
								})(
									<Input placeholder='用户名' />
								)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem hasFeedback>
								{getFieldDecorator('email', {
									rules: [
										{ required: true, message: '不能为空', whitespace: true },
										{ type: 'email', message: '请输入正确的邮箱' },
									],
								})(
									<Input className='use flex-center' placeholder="邮箱" />)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem hasFeedback>
								{getFieldDecorator('password', {
									rules: [{
										required: true, message: '不能为空', whitespace: true
									},
									{
										validator: this.checkConfirm,
									},
									{ max: 16, message: '密码过长' },
									{ min: 6, message: '密码过短' },
									],
								})(
									<Input type="password" placeholder='请输入密码(密码长度控制(6-16))' />
								)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem hasFeedback>
								{getFieldDecorator('confirm', {
									rules: [{
										required: true, message: '不能为空', whitespace: true
									},
									{
										validator: this.checkPassword,
									},
									{ max: 16, message: '密码过长' },
									{ min: 6, message: '密码过短' },
									],
								})(
									<Input type="password" onBlur={this.handleConfirmBlur} placeholder='确认密码' />
								)}
							</FormItem>
						</div>
						<div className='flex'>其他信息</div>
						<div className="itemContent">
							<FormItem hasFeedback>
								{getFieldDecorator('company', {
									rules: [{ required: true, message: '不能为空', whitespace: true }],
								})(
									<Input placeholder='公司名称' />
								)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem hasFeedback>
								{getFieldDecorator('iphone', {
									rules: [
										{ required: true, message: '不能为空', whitespace: true },
										{ pattern: /^1[3|4|5|7|8]\d{9}$/, message: '请输入正确的手机号码' }
									],
								})(
									<Input placeholder='联系电话' />
								)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem hasFeedback>
								{getFieldDecorator('job', {
									rules: [{ required: true, message: '不能为空', whitespace: true }],
								})(
									<Input placeholder='职位' />
								)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem hasFeedback>
								{getFieldDecorator('record', {
									rules: [{ required: true, message: '不能为空', whitespace: true }],
								})(
									<Input placeholder='测试资历' />
								)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem hasFeedback>
								<div className='flex'>
									{getFieldDecorator('vcode', {
										rules: [{ required: true, message: '不能为空', whitespace: true }],
									})(
										<Input placeholder='验证码' />
									)}
									<div className='comfirImg' onClick={() => { this.store.getCode(); }} dangerouslySetInnerHTML={{
										__html: codeInfo.captcha
									}} >
									</div>
								</div>
							</FormItem>
						</div>
						<div className='flex'>实名认证</div>
						<div className="itemContent">
							<FormItem hasFeedback>
								{getFieldDecorator('name', {
									rules: [{ required: true, message: '不能为空', whitespace: true }],
								})(
									<Input placeholder='真实姓名' />
								)}
							</FormItem>
						</div>
						<div className="itemContent">
							<FormItem hasFeedback>
								{getFieldDecorator('card', {
									rules: [
										{ required: true, message: '不能为空', whitespace: true },
										{ pattern: /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/, message: '请填写正确的身份证！' }
									],
								})(
									<Input onBlur={this.handleConfirmBlur} placeholder='请输入身份证号码' />
								)}
							</FormItem>
						</div>
						<FormItem>
							<Button type="primary" onClick={this.handleSubmitUser} className="login-form-button loginTwo">注册</Button>
						</FormItem>
					</Form>
				</TabPane>
			</Tabs>
			{isModal && (
				<div className="modal-cont">
					<div className="flex-center tan-cont">
						<div className="tan-box">
							<p>提示：测试者用户在审核通过后才能进行登录使用哦，请浏览和了解社区。</p>
							<div className="flex-center">
								<Button className="btn" onClick={() => { this.showModal(); }}>我知道了</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div >;
	}
}

export default Form.create()(LoginTab);
