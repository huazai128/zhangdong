import React from "react";
import './preview.scss';
import { Modal, Button } from 'antd';
class Open extends React.Component {
	state = { visible: false }
	showModal = () => {
		this.setState({
			visible: true,
		});
	}
	hideModal = () => {
		this.setState({
			visible: false,
		});
	}

	render() {
		return (
			<div id="preview">
				<div>
					<Button type="primary" onClick={this.showModal}>预览</Button>
					<Modal
						title="Modal"
						visible={this.state.visible}
						onOk={this.hideModal}
						onCancel={this.hideModal}
						okText="确认"
						cancelText="取消"
					>
						<div dangerouslySetInnerHTML={{__html:this.props.text}}/>
					</Modal>
				</div>
			</div>
		)
	}
}

export default Open;
