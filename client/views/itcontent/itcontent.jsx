import React from 'react';
import './itcontent.scss';
import Top from '../common/partyTop.jsx';
import Open from '../common/black.jsx';
import Footer from '../common/lastFooter.jsx';
import $ from 'jquery';
import { Button, List, Avatar, Icon, Modal, Input } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, hashHistory } from 'react-router';


class CommentItem extends React.Component {
	state = {
		active: false,
		number: 30
	}

	onClick = () => {
		this.setState({
			active: !this.state.active,
			number: this.state.active ? this.state.number - 1 : this.state.number + 1
		});
	}

	render() {
		const { item } = this.props;

		return (
			<div className="disOne flex jc-between">
				<div className="leftOne flex-vcenter">
					<div className="imgLeft"></div>
					<div className="contentLeft">
						<div className='title'>{item.title}<span>{item.time}</span></div>
						<div className='huiContent'>{item.content}</div>
					</div>
				</div>
				<div className="rightOne flex-vcenter">
					<ModalWrap><div className="huiTu flex-vcenter"><i className='huiImg'></i> 回复</div></ModalWrap>
					<div onClick={this.onClick} className="zan flex-vcenter"><i className={this.state.active ? 'zanLan' : 'zanImg'}></i>{this.state.number}</div>
				</div>
			</div>
		);
	}
}

const { TextArea } = Input;

class ModalWrap extends React.Component {
	state = {
		visible: false,
		text: '',
	}
	showModal = () => {
		this.setState({
			visible: true,
		});
	}
	handleOk = (e) => {
		this.setState({
			visible: false,
			text: '',
		});
		// console.log(this.state.text);
		console.log(333)
	}
	handleCancel = (e) => {
		this.setState({
			visible: false,
		});
	}

	onChangeInput = (e) => {
		const { value: text } = e.target;
		this.setState({ text });
		console.log(444)
	}

	render() {
		const Child = () => React.cloneElement(this.props.children, {
			onClick: this.showModal
		});

		const { text } = this.state;

		return (
			<div>
				<Child />
				<Modal
					title="评论回复"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<TextArea value={text} onChange={this.onChangeInput} rows={6} placeholder="评论回复内容..." />
				</Modal>
			</div>
		);
	}
}

// const IconText = ({ type, text }) => (
// 	<span>
// 		<Icon type={type} style={{ marginRight: 8 }} />
// 		{text}
// 	</span>
// );


export default class New extends React.Component {
	// 上传图片
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);

		this.toolbarOptions = [
			['bold', 'italic', 'underline', 'strike'], // toggled buttons
			['blockquote', 'code-block'],

			[{ 'header': 1 }, { 'header': 2 }], // custom button values
			[{ 'list': 'ordered' }, { 'list': 'bullet' }],
			// [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
			[{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
			// [{ 'direction': 'rtl' }], // text direction

			[{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

			[{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
			[{ 'font': [] }],
			[{ 'align': [] }],
			['image'],
			// ['clean'] // remove formatting button
		];
		this.state = {
			// num: 5,
			text: '',
			listData: [
				{ time: '18分钟前', content: '回复内容回复内容回复内容回复内容回gdfg复内容回复内容回复内容回复内容回复内容回复内回复', title: '879' },
				{ time: '23分钟前', content: '回复内容回复内容回复内容回复内容fdsf回复内容回复内容回复内容回复内容回复内容回复内回复', title: 'gdgf' },
				{ time: '15分钟前', content: '回复内容回复内容回复内容回复内容ds回复内容回复内容回复内容回复内容回复内容回复内回复', title: '456' },
				{ time: '11分钟前', content: 'fg', title: '456' },
				{ time: '15分钟前', content: '回复内容回复内容回复内容回复内sdf容回复内容回复内容回复内容回复内容回复内容回复内回复', title: '123' },
				{ time: '19分钟前', content: '回复内容回复内容回复内容回复内容回复dfg内容回复内容回复内容回复内容回复内容回复内回复', title: 'dfgdgf' }
			],
			active:'false'
		};
	}


		// 点击收藏
		handleShow = () => {
			this.setState({
				active: !this.state.active,
			});
		}

	toggleHandle = () => {
		$('.zanImg').toggleClass('zanLan');
	}
	//设置评论框内容
	handleChange(value) {
		console.log(this.state.text)
		this.setState({ text: value });
	}
	// 点击显示隐藏事件
	click = () => {
		$('#comment').toggle();
	};
	iconPing = () => {
		$('#comment').css('display', 'none');
	}

	// 点击图片切换
	// handleTab = (index) => {
	// 	console.log($('.zan').children().eq(index).toggleClass('zanLan'))
	// }
	// 提交评论
	handle = () => {
		var ctime = new Date().getMinutes();
		const { listData } = this.state;
		listData.unshift({

			content: this.state.text,
			title: '砖头'
		});

		this.setState({
			listData,
			text: ''
		});
		$('#comment').css('display', 'none');
	}

	render() {

		return (
			<div id="itcontent">
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText flex"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/itcontent">最新话题</Link></div>
				</div>
				<div className="toolContent">
					<div className="toolTop flex jc-between">
						<div className="toolLeft ">
							<p className='textOne'>Move it智能穿戴设备测试</p>
							<p className='textTwo'>作者名称&nbsp;&nbsp;&nbsp;发布于14天前&nbsp;&nbsp;&nbsp;浏览量：958</p>
						</div>
						<div className="toolRight">
							<p className='ourOne'></p>
						</div>
					</div>
					<div className="toolBottom">
						<div className='hangye'>行业背景</div>
						<div className="tuTop">智能穿戴设备是应用穿戴式技术对日常穿戴进行智能化设计、开发出可以穿戴的设备总称。例如：手表、手环、服饰等。穿戴式技术在国际计算机学术界和工业界一直被受关注，随着现代互联网的发展、技术的进步和高性能低功耗处理芯片的推出，部分穿戴式设备已经从概念化走向商用化，新式穿戴式设备不断传出，通过这些设备，人们可以更好的感知外部与自身的信息，能够在计算机、网络甚至其他人的辅助下更为高效率的处理信息。</div>
						<div className="wenTop">目前智能穿戴设备代表产品有：iwatch苹果智能手表、FashionCommA1智能手表、智能手环、谷歌眼镜、BrainLink智能头箍、鼓点T恤ElectronicDrumMachineT-shirt、社交牛仔裤SocialDenim、卫星导航鞋、可佩戴式多点触控投影机。这类可穿戴式智能设备能够协助用户实现信息感知与处理能力的提升，其应用领域极为广阔，从休闲娱乐、信息交流到行业应用，用户均能通过拥有多样化的传感、处理、连接、显示功能的可穿戴式设备来实现自身技能的增强或创新。主要的参与者为高科技厂商中的创新者以及学术机构，产品形态以全功能的智能手表、眼镜等形态为主，不用依赖于智能手机或其它外部设备即可实现与用户的交互。代表者如Google、Apple以及麻省理工学院等。</div>
						<div>智能穿戴设备的设计意图主要是探索人和科技全新的交互方式，为人们提供一些专属的和个性化的服务。穿戴式设备现如今已各式各样、五花八门，它们的出现已在很大程度上改变着人们的生活。</div>
						{/* <div className="imgAn"></div> */}
						<div className='hangye'>智能穿戴设备行业面临的挑战</div>
						<div>硬件品质隐藏质量问题</div>
						<div className="tuTop">从三星Note7爆炸事件，到iPhone6的电池门，消费者对智能硬件的质量问题越来越重视，然而据有关数据统计，发生质量问题，99%以上的企业都是尽量隐瞒消息，花大量精力封锁消息。 智能硬件厂商需要用产品质量来提振消费者的信心，而不是搬起石头砸自己的脚，让消费者失去购买的兴趣，并对智能硬件产生太多负面的情绪。虽然产品中有质量问题是常有的事儿，但是如果概率太高的话就很说明品控问题了。这对国内的智能硬件而言，也敲响了警钟。在功能还不能打动下消费者的情况下，请用产品质量、做工、外观设计给消费者留下一个好印象，这对未来的品牌影响力不是一件坏事儿。</div>
						<div className="wenTop">智能硬件备市场的成功将在很大程度上取决于用户的积极体验。目前而言，健康和运动设备制造商以及医疗专家普遍的担忧就是，消费者对新硬件和软件的最初兴奋状态将会随着时间的流驶而逐步淡化，特别是用户发现他们的健康和运动目标未能达到的情况之下。由于缺乏进展，用户可能会感到失望、疏远、甚至是愤怒——人的情感可能会因此让设备制造商失去用户的支持和未来的创收机遇。如果用户无法像他们预期的那样取得进展，那么这种状况将会对设备制造商承诺的高质量服务形成打击，而且还会影响设备制造商稳定创收。</div>
						<div>设备及硬件结合使用问题多</div>
						<div>对原始设备制造商而言，一款设计精良的产品仍不足以创建庞大的规模和培养大量的忠诚用户。特别是，运动与健康型的可穿戴智能设备面临着所有同类设备的普通问。对这些设备而言，只有在用户关注他们的健康状况时，这些设备才能被广泛地使用。消费者使用这些设备主要就是想看看相应的健康结果，然而这些功能和任务无法通过硬件本身来完成，还需要足够的软件和服务的支持。</div>
						<div className='hangye'>典型案例</div>
						<div className="tuTop">Move it 是一款私人健身设备，集成四种不同的健身器材于一身。让用户可以随心随意在家里进行健身锻炼。它还可以与手机进行连接，让用户可以在app上查看自己的锻炼情况，四种健身器材与带有传感器的手柄配合使用，收集用户的运动数据并进行分析。智能手柄收集到的内容通过蓝牙4.0传输至用户的Android设备或iOS设备上，用户的设备同步显示当前的运动数据。</div>
						<div className="wenTop">Move it APP端中，用户可以制定合适自己的健身计划；可以选择上百种健身方式进行健身锻炼；在挑战场中，你可以跟世界各地用户进行pk，还可以挑战好友，相互激励锻炼；在热门动态中发表动态炫耀数据，让朋友了解你的健身情况，相对也可以了解其他用户的动态。</div>
						<div className='itImg'>
							<div className='itImgOne'>
								<img src={require('img/tie1.png')} />
								<img src={require('img/tie2.png')} />
								<img src={require('img/tie3.png')} />
								<img src={require('img/tie4.png')} />
							</div>
							<div className='itImgTwo'>
								<img src={require('img/yun1.jpg')} />
								<img src={require('img/yun2.jpg')} />
								<img src={require('img/yun3.jpg')} />
								<img src={require('img/yun4.jpg')} />

							</div>
						</div>

					</div>
					<div className="disBtn flex-vcenter">
						<div className={ `shou flex-center ${ this.state.active?'cangTwo':'cangOne' }` } onClick={this.handleShow}><i></i> 收藏</div>
						<div className="dis" onClick={this.click}><i className='pingOne'></i>评论</div>
					</div>
					{/* 评论框 */}
					<div className="comment" id='comment'>
						{/* 头部 */}
						<div className="topThree flex-vcenter jc-between">
							<div className="commentTop">评论</div>
							<div className="Icon" onClick={this.iconPing}></div>
						</div>
						{/* 添加图片 */}
						<div className="upDa">
							<ReactQuill className='textQuill'
								value={this.state.text}
								onChange={this.handleChange}
								modules={{
									toolbar: this.toolbarOptions
								}} />
						</div>
						<Button className="ti" onClick={this.handle} disabled={!this.state.text}>提交</Button>
						{/* <div className="ti" onClick={this.handle}>提交</div> */}
					</div>
				</div>

				{/* 回复信息的弹出框 */}
				{/* <Open></Open> */}
				{/* 评论内容 */}
				<div className="discuss">
					<div className="disContent">
						<div className='contOne'><i className='cirlOne'></i> 全部3条回复</div>
						{this.state.listData.map((item) => {
							return (
								// 一个一个组件内容
								<CommentItem item={item} />
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
