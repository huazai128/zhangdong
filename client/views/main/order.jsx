import React, { Component } from 'react';
import './order.scss';
import { Form, Input, Modal, Button, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
//  二级联动
// import { a as addressMap, b } from 'js/core/iteye.js';

// addressMap.forEach(item => {
// 	// console.log(item,8989)
// 	const { ProID } = item;

// 	item.children = [];
// 	b.forEach(i => {
// 		if (i.ProID == ProID) item.children.push(i.name);
// 	});
// });

// console.log(addressMap,89809898)
// const options = addressMap.map(item => ({
// 	value: item.name,
// 	label: item.name,
// 	children: item.children.map(i => ({
// 		value: i,
// 		label: i,
// 	}))
// }))

function onChange(value) {
	console.log(value);
}

class ModalForm extends React.Component {
	constructor() {
		super();
		this.state = {
			visible: false,
		};
	}
	showModal = () => {
		this.setState({
			visible: true,
		});
	}
	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}

	handleOk = (e) => {
		console.log(56565);
		this.setState({
			visible: false,
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: { span: 6 },
			wrapperCol: { span: 15 },
		};
		return <div className='order'>
			<Button ghost onClick={this.showModal}>立即下单</Button>
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
								label="测试类型："
							>
								{getFieldDecorator('test', {
									rules: [{
										required: true, message: '不能为空',
									}],
								})(
									<Input />
									)}
							</FormItem>
						</div>
						<div className="item">
							<FormItem
								{...formItemLayout}
								label="公司名称："
							>
								{getFieldDecorator('email', {
									rules: [{
										required: true, message: '不能为空',
									}],
								})(
									<Input />
									)}
							</FormItem>
						</div>
						<div className="itemContent">
							{/* <Cascader options={options} onChange={onChange} placeholder="Please select" /> */}
							{/* <FormItem
								{...formItemLayout}
								label="公司所在省份："
							>
								{getFieldDecorator('provi', {
									rules: [{
										required: true, message: '不能为空',
									}],
								})(
									<Cascader options={options} onChange={onChange} />
									)}
							</FormItem> */}
							<FormItem
								{...formItemLayout}
								label="联系人名称："
							>
								{getFieldDecorator('provi', {
									rules: [{
										required: true, message: '不能为空',
									}],
								})(
									<Input />
									)}
							</FormItem>
						</div>
						<div className="item">
							<FormItem
								{...formItemLayout}
								label="职位："
							>
								{getFieldDecorator('company', {
									rules: [{
										required: true, message: '不能为空',
									}],
								})(
									<Input />
									)}
							</FormItem>
						</div>
						<div className="item">
							<FormItem
								{...formItemLayout}
								label="手机号："
							>
								{getFieldDecorator('user', {
									rules: [{
										required: true, message: '不能为空',
									}],
								})(
									<Input />
									)}
							</FormItem>
						</div>
						<div className="item">
							<FormItem
								{...formItemLayout}
								label="邮箱："
							>
								{getFieldDecorator('phone', {
									rules: [{
										required: true, message: '不能为空',
									}],
								})(
									<Input />
									)}
							</FormItem>
						</div>
						<div className="item">
							<FormItem
								{...formItemLayout}
								label="QQ："
							>
								{getFieldDecorator('e-mail', {
									rules: [{
										required: true, message: '不能为空',
									}],
								})(
									<Input />
									)}
							</FormItem>
						</div>
						<div className="item">
							<FormItem
								{...formItemLayout}
								label="咨询内容："
							>
								{getFieldDecorator('e-mail', {
									rules: [{
										required: true, message: '不能为空',
									}],
								})(
									<Input />
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
