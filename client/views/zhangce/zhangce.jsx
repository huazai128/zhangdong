import React from 'react';
import './zhangce.scss';
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
			]
		};
	}


	// 点击收藏
	getHandle = () => {
		$('.shou').toggleClass('dis');
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
			<div id="zhangce">
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText flex"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/zhangce">最新话题</Link></div>
				</div>
				<div className="toolContent">
					<div className="toolTop flex jc-between">
						<div className="toolLeft ">
							<p className='textOne'>掌测AppSTest|自动化测试</p>
							<p className='textTwo'>作者名称&nbsp;&nbsp;&nbsp;发布于14天谴&nbsp;&nbsp;&nbsp;浏览量：958</p>
						</div>
						<div className="toolRight">
							<p className='ourOne'></p>
						</div>
					</div>
					<div className="toolBottom">
						<div className='toolContentOne'>
							<div>
								<div className="tuTop">自动化测试是把以人为驱动的测试行为转化为机器执行的一种过程。通常，在设计了测试用例并通过评审之后，由测试人员根据测试用例中描述的规程一步步执行测试，得到实际结果与期望结果的比较。在此过程中，为了节省人力、时间或硬件资源，提高测试效率，便引入了自动化测试的概念。</div>
								<div className="wenTop">一、实施自动化测试之前需要对软件开发过程进行分析，以观察其是否适合使用自动化测试。</div>
								<div>通常需要同时满足以下条件：</div>
								{/* <div className='hangye'>智能穿戴设备行业面临的挑战</div> */}
								<div>1) 需求变动不频繁</div>
								<div className="tuTop">测试脚本的稳定性决定了自动化测试的维护成本。如果软件需求变动过于频繁，测试人员需要根据变动的需求来更新测试用例以及相关的测试脚本，而脚本的维护本身就是一个代码开发的过程，需要修改、调试，必要的时候还要修改自动化测试的框架，如果所花费的成本不低于利用其节省的测试成本，那么自动化测试便是失败的。 </div>
								<div className="wenTop">项目中的某些模块相对稳定，而某些模块需求变动性很大。我们便可对相对稳定的模块进行自动化测试，而变动较大的仍是用手工测试。</div>
								<div>2) 项目周期足够长</div>
								<div>自动化测试需求的确定、自动化测试框架的设计、测试脚本的编写与调试均需要相当长的时间来完成，这样的过程本身就是一个测试软件的开发过程，需要较长的时间来完成。如果项目的周期比较短，没有足够的时间去支持这样一个过程，那么自动化测试便成为笑谈。</div>
								{/* <div className='hangye'>典型案例</div> */}
								<div>3) 自动化测试脚本可重复使用</div>
								<div className="tuTop">如果费尽心思开发了一套近乎完美的自动化测试脚本，但是脚本的重复使用率很低，致使其间所耗费的成本大于所创造的经济价值，自动化测试便成为了测试人员的练手之作，而并非是真正可产生效益的测试手段了。</div>
								<div className="wenTop">另外，在手工测试无法完成，需要投入大量时间与人力时也需要考虑引入自动化测试。比如性能测试、配置测试、大数据量输入测试等。</div>
							</div>
							<div>
								<div className="tuTop">二、通常适合于软件测试自动化的场合：</div>
								<div className="wenTop">(1)回归测试，重复单一的数据录入或是击键等测试操作造成了不必要的时间浪费和人力浪费；</div>
								<div>(2)此外测试人员对程序的理解和对设计文档的验证通常也要借助于测试自动化工具；</div>
								{/* <div className='hangye'>智能穿戴设备行业面临的挑战</div> */}
								<div>(3)采用自动化测试工具有利于测试报告文档的生成和版本的连贯性；</div>
								<div className="tuTop">(4)自动化工具[3]  能够确定测试用例的覆盖路径，确定测试用例集对程序逻辑流程和控制流程的覆盖。 </div>
								<div className="wenTop">随着测试流程的不断规范以及软件测试技术的进一步细化，软件测试自动化已经日益成为一支不可忽视的力量。能否借助于这支外在力量以及如何借助于这支力量来规范企业测试流程、提高特定测试活动的效率，正是本期所要讨论的话题。</div>
								<div>软件测试自动化的研究领域主要集中在软件测试流程的自动化管理以及动态测试的自动化（如单元测试、功能测试以及性能方面）。在这两个领域，与手工测试相比，测试自动化的优势是明显的。首先自动化测试可以提高测试效率，使测试人员更加专注于新的测试模块的建立和开发，从而提高测试覆盖率;其次，自动化测试更便于测试资产的数字化管理，使得测试资产在整个测试生命周期内可以得到复用，这个特点在功能测试和回归测试中尤其具有意义;此外，测试流程自动化管理可以使机构的测试活动开展更加过程化，这很符合CMMI过程改进的思想。根据OppenheimerFunds的调查，在2001年前后的3年中，全球范围内由于采用了测试自动化手段所实现的投资回报率高达1500%。</div>
							</div>
							<div>
								<div className="tuTop">三、自动化测试与软件开发过程从本质上来讲是一样的，无非是利用自动化测试工具（相当于软件开发工具），经过对测试需求的分析（软件过程中的需求分析），设计出自动化测试用例（软件过程中的需求规格），从而搭建自动化测试的框架（软件过程中的概要设计），设计与编写自动化脚本（详细设计与编码），测试脚本的正确性，从而完成该套测试脚本（即主要功能为测试的应用软件）。</div>
								<div className="wenTop">1) 自动化测试需求分析。</div>
								<div>当测试项目满足了自动化的前提条件，并确定在该项目中需要使用自动化测试时，我们便开始进行自动化测试需求分析。此过程需要确定自动化测试的范围以及相应的测试用例、测试数据，并形成详细的文档，以便于自动化测试框架的建立。</div>
								{/* <div className='hangye'>智能穿戴设备行业面临的挑战</div> */}
								<div>2)自动化测试框架的搭建。</div>
								<div className="tuTop">所谓自动化测试框架便是像软件架构一般，定义了在使用该套脚本时需要调用哪些文件、结构，调用的过程，以及文件结构如何划分。 </div>
								<div className="wenTop">而根据自动化测试用例，我们很容易能够定位出自动化测试框架的典型要素：</div>
								<div>a. 公用的对象。</div>
								<div>不同的测试用例会有一些相同的对象被重复使用，比如窗口、按钮、页面等。这些公用的对象可被抽取出来，在编写脚本时随时调用。当这些对象的属性因为需求的变更而改变时，只需要修改该对象属性即可，而无需修改所有相关的测试脚本。</div>
								<div>b. 公用的环境。</div>
								<div>各测试用例也会用到相同的测试环境，将该测试环境独立封装，在各个测试用例中灵活调用，也能增强脚本的可维护性。</div>
								<div>c. 公用的方法。</div>
								<div>当测试工具没有需要的方法时，而该方法又会被经常使用，我们便需要自己编写该方法，以方便脚本的调用。</div>
								<div>d. 测试数据。</div>
								<div>也许一个测试用例需要执行很多个测试数据，我们便可将测试数据放在一个独立的文件中，由测试脚本执行到该用例时读取数据文件，从而达到数据覆盖的目的。</div>
								<div>在该框架中需要将这些典型要素考虑进去，在测试用例中抽取出公用的元素放入已定义的文件，设定好调用的过程。</div>
								<div>事实上，当每一个测试用例所形成的脚本通过测试后，并不意味着执行多个甚至所有的测试用例就不会出错。输入数据以及测试环境的改变，都会导致测试结果受到影响甚至失败。而如果只是一个个执行测试用例，也仅能被称作是半自动化测试，这会极大的影响自动化测试的效率，甚至不能满足夜间自动执行的特殊要求。</div>
								<div>因此，脚本的测试与试运行极为重要，它需要详查多个脚本不能依计划执行的原因，并保证其得到修复。同时他也需要经过多轮的脚本试运行，以保证测试结果得一致性与精确性。</div>
								<div>自动化测试引入的原因是就把软件测试人员从枯燥乏味的机械性手工测试劳动中解放出来，以自动化测试工具取而代之，使测试人员的精力真正花在提高软件产品质量本身。</div>
								<div>首先，一个企业实施测试自动化，绝对不是拍脑袋说干就能干好的，它不仅涉及测试工作本身流程上、组织结构上的调整与改进，甚至也包括需求、设计、开发、维护及配置管理等其他方面的配合。如果对这些必要的因素没有考虑周全的话，必然在实施过程中处处碰壁，既定的实施方案也无法开展。其次，尽管自动化测试可以降低人工测试的工作量，但并不能完全取代手工测试。100%的自动化测试只是一个理想目标，根据笔者的经验，即便一些如SAP、OracleERP等测试库规划十分完善的套件，其测试自动化率也不会超过70%。所以一味追求测试自动化只会给企业带来运作成本的急剧上升。再次，实施测试自动化需要企业有相对规模的投入，对企业运作来说，投入回报率将是决定是否实施软件测试自动化的最终指挥棒，笔者建议企业在决定实施软件测试自动化之前，必须要做量化的投资回报分析。此外，实施软件测试自动化并不意味着必须采购强大的自动化软件测试工具或自动化管理平台，毕竟软件质量的保证不是依靠产品或技术，更多的因素在于高素质的人员和合理有效的流程。</div>
								<div>以云积项目为例，主要分为两个模块：UI自动化测试和接口自动化测试。</div>
								<div>UI自动化测试，通过编写脚本，将重复繁琐的人工操作替换成自动化操作，在网页页面模拟人工操作，实现对UI的测试。</div>
								<div>首先对可以反复使用的关键字进行封装，例如登录。</div>
							</div>
						</div>
						<div className='itImg'>
							<div className='itImgOne'>
								<img src={require('img/dong1.png')} />
								<img src={require('img/dong2.png')} />
								<img src={require('img/dong3.png')} />
								<img src={require('img/dong4.png')} />
								<img src={require('img/dong5.png')} />
								<img src={require('img/dong6.png')} />
							</div>
						</div>

					</div>
					<div className="disBtn flex-vcenter">
						<div className="shou flex-center" onClick={this.getHandle}><i className='shouOne'></i> 收藏</div>
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
