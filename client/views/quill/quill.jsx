import React from 'react';
import './quill.scss';
import { Link, hashHistory } from 'react-router';
import { Form, Input, message } from 'antd';
import UE from 'js/lib/ueditor/ueditor.all';
import { post } from 'js/api/fetch';
const FormItem = Form.Item;

class New extends React.Component {
	static defaultProps = {
		config: {}
	}
	constructor(props) {
		super(props);
		this.state = {
			isState: false
		};
	}
	componentDidMount() {
		this.initEditor();
	}
	componentWillUnmount() {
		UE.delEditor('content');
	}
	initEditor() {
		const { id, config } = this.props;
		const ueEditor = UE.getEditor('content', config);
		const self = this;
		ueEditor.ready((ueditor) => {
			if (!ueditor) {
				UE.delEditor(id);
				self.initEditor();
			}
		});
	}
	handle = () => {
		if (this.state.isState) return false;
		let content = UE.getEditor('content').getContent();
		let user = JSON.parse(localStorage.getItem('user'));
		if (!user) {
			message.info('请先登录');
			return false;
		}
		this.props.form.validateFields((err, values) => {
			if (!err && content) {
				this.setState({
					isState: true
				});
				this.addContent({ ...values, userId: user._id, content: content });
			} else {
				message.error('请完成表单填写');
			}
		});
	}
	addContent = async (data) => {
		const { code, message: msg } = await post('community', data);
		if (code) {
			message.success(msg, 1, () => {
				this.setState({
					isState: false
				});
				hashHistory.push('/creative');
			});
		} else {
			message.error(msg, () => {
				this.setState({
					isState: false
				});
			});
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 },
			},
		};

		return (
			<div id='quill'>
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;我要发帖</div>
				</div>
				<div className="textContent">
					<div className="title">
						<Form layout="inline">
							<FormItem
								hasFeedback
								label="标题" >
								{getFieldDecorator('title', {
									rules: [{ required: true, message: '请输入文章标题' }],
								})(
									<Input placeholder="请输入文章标题" />
								)}
							</FormItem>
						</Form>
					</div>
					<div className="content-box">
						<div id="content" className="content" name="content" type="text/plain"></div>
					</div>

					<div className="lastQuill flex d-row-reverse">
						<div className={`firstOne ${this.state.isState ? 'no' : ''}`} onClick={() => { this.handle(); }}>上传</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Form.create()(New);

