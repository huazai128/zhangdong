import React, { Component } from 'react';
import './askModal.scss';
import { Form, Input, Modal, Button, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete, InputNumber } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
import { inject, observer } from 'mobx-react';

@inject('project')
@observer
class ModalForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
		this.store = this.props.project;
	}
	showModal = () => {
		this.setState({
			visible: true,
		});
	}
	handleCancel = (e) => {
		this.setState({
			visible: false,
		});
	}

	handleOk = (e) => {
		this.setState({
			visible: false,
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				this.store.addPlan(values);
				this.props.form.resetFields();
				this.setState({
					visible: false,
				});
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: { span: 6 },
			wrapperCol: { span: 15 },
		};
		return <div className='askModal'>
			<Button type="primary" onClick={this.showModal}>立即申请</Button>
			<Modal
				visible={this.state.visible}
				onOk={this.handleOk}
				width={500}
				onCancel={this.handleCancel}
				footer={null}
			>
				<div>
					<Form onSubmit={this.handleSubmit}>
						<div className="item">
							<FormItem
								{...formItemLayout}
								label="公司名称："
								hasFeedback
							>
								{getFieldDecorator('company', {
									rules: [
										{ required: true, message: '不能为空', },
										{ max: 30, message: '公司名称过长' },
										{ min: 3, message: '公司名称过短' },
									],
								})(
									<Input placeholder="请输入公司名称(限制在(3-30))" />
								)}
							</FormItem>
						</div>
						<div className="itemContent">

							<FormItem
								{...formItemLayout}
								label="企业规模"
								hasFeedback
							>
								{getFieldDecorator('scale', {
									rules: [{
										required: true, message: '不能为空',
									}],
								})(
									<Input placeholder="请输入公司规模" />
								)}
							</FormItem>
						</div>
						<div className="item">
							<FormItem
								{...formItemLayout}
								label="行业："
								hasFeedback
							>
								{getFieldDecorator('industry', {
									rules: [{
										required: true, message: '不能为空',
									},
									{ max: 30, message: '输入文字过长' },
									{ min: 3, message: '输入文字过短' },
									],
								})(
									<Input placeholder="请输入公司行业" />
								)}
							</FormItem>
						</div>
						<div className="item">
							<FormItem
								{...formItemLayout}
								label="申请人姓名："
								hasFeedback
							>
								{getFieldDecorator('name', {
									rules: [{
										required: true, message: '不能为空',
									},
									{ max: 30, message: '输入文字过长' },
									{ min: 2, message: '输入文字过短' },
									],
								})(
									<Input placeholder="请输入姓名" />
								)}
							</FormItem>
						</div>
						<div className="item">
							<FormItem
								{...formItemLayout}
								label="申请人电话："
								hasFeedback
							>
								{getFieldDecorator('phone', {
									rules: [{
										required: true, message: '不能为空',
									},
									{ pattern: /^((1[3-8][0-9])+\d{8})$/, message: '请填写正确的手机号码' },
									],
								})(
									<Input placeholder="请输入手机号码" />
								)}
							</FormItem>
						</div>
						<div className="item">
							<FormItem
								{...formItemLayout}
								label="申请人邮箱："
								hasFeedback
							>
								{getFieldDecorator('email', {
									rules: [{
										required: true, message: '不能为空',
									},
									{ pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/, message: '请填写正确的邮箱！' }
									],
								})(
									<Input placeholder="请输入邮箱" />
								)}
							</FormItem>
						</div>
						<div className="flex-center">
							<FormItem>
								<Button type="primary" htmlType="submit">确认申请</Button>
							</FormItem>
						</div>
					</Form>
				</div>
			</Modal>
		</div>;
	}
}
export default Form.create()(ModalForm);
