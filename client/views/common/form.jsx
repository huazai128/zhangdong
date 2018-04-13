import React, { Component } from 'react';
import { Form, Input, Modal, Button, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete, message } from 'antd';
import { inject, observer } from 'mobx-react';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
import './form.scss';

@inject("project")
@observer
class FormComponent extends Component {
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
        this.store.addApply(values);
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
    return (
      <div id="form">
        <Button ghost onClick={this.showModal} className="pTow">立即申请</Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          width={500}
          onCancel={this.handleCancel}
          footer={null}>
          <div>
            <Form onSubmit={this.handleSubmit}>
              <div className="item">
                <FormItem
                  {...formItemLayout}
                  label="测试类型："
                  p
                >
                  {getFieldDecorator('mold', {
                    rules: [{
                      required: true, message: '不能为空',
                    }],
                  })(
                    <Select defaultValue="0" placeholder="请选择测试类型">
                      <Option value="0">功能测试</Option>
                      <Option value="1">兼容测试</Option>
                    </Select>
                  )}
                </FormItem>
              </div>
              <div className="item">
                <FormItem
                  {...formItemLayout}
                  label="公司名称："
                >
                  {getFieldDecorator('company', {
                    rules: [{
                      required: true, message: '不能为空',
                    }],
                  })(
                    <Input placeholder="请输入公司名称" />
                  )}
                </FormItem>
              </div>
              <div className="itemContent">
                <FormItem
                  {...formItemLayout}
                  label="联系人名称："
                >
                  {getFieldDecorator('name', {
                    rules: [{
                      required: true, message: '不能为空',
                    }],
                  })(
                    <Input placeholder="请输入姓名" />
                  )}
                </FormItem>
              </div>
              <div className="item">
                <FormItem
                  {...formItemLayout}
                  label="职位："
                >
                  {getFieldDecorator('job', {
                    rules: [{
                      required: true, message: '不能为空',
                    }],
                  })(
                    <Input placeholder="请输入职位" />
                  )}
                </FormItem>
              </div>
              <div className="item">
                <FormItem
                  {...formItemLayout}
                  label="手机号："
                >
                  {getFieldDecorator('phone', {
                    rules: [
                      { required: true, message: '请输入您的手机号码' },
                      { pattern: /^((1[3-8][0-9])+\d{8})$/, message: '请填写正确的手机号码' },
                    ]
                  })(
                    <Input placeholder="请输入手机号码" />
                  )}
                </FormItem>
              </div>
              <div className="item">
                <FormItem
                  {...formItemLayout}
                  label="邮箱："
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
              <div className="item">
                <FormItem
                  {...formItemLayout}
                  label="QQ："
                >
                  {getFieldDecorator('qq', {
                    rules: [{
                      required: true, message: '不能为空',
                    }],
                  })(
                    <Input placeholder="请输入QQ号码" />
                  )}
                </FormItem>
              </div>
              <div className="item">
                <FormItem
                  {...formItemLayout}
                  label="咨询内容："
                >
                  {getFieldDecorator('content', {
                    rules: [{
                      required: true, message: '不能为空',
                    }],
                  })(
                    <Input placeholder="请输入内容" />
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
      </div>
    );
  }
}
export default Form.create()(FormComponent);