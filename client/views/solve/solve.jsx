

import React from 'react';
import './solve.scss';
import { Link, hashHistory } from 'react-router';
import 'js/lib/swiper.css';
import Common from '../common/comonOur.jsx';
import $ from 'jquery';

class Sovle extends React.Component {
	constructor() {
		super();
		this.state = {
			num: 0
		};
	}
	componentDidMount() {
		// const hei=window.innerHeight;
		this.solveSroll();
		setTimeout(() => {
			var mySwiper = new window.Swiper('.swiper-container', {
				direction: 'vertical',
				slidesPerView: 1,
				initialSlide: this.state.num,
				width: window.innerWidth,
				// height: window.innerHeight,
				autoHeight: true, //高度随内容变化
				mousewheel: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		}, 100);

	}
	componentWillReceiveProps() {
		this.solveSroll();

		var mySwiper = new window.Swiper('.swiper-container', {
			direction: 'vertical',
			slidesPerView: 1,
			initialSlide: this.state.num,
			width: window.innerWidth,
			// height: window.innerHeight,
			autoHeight: true, //高度随内容变化
			mousewheel: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});

	}
	solveSroll = () => {
		console.log(this.props.location.query.four)
		this.setState({
			num: this.props.location.query.four
		})
	}

	render() {
		// console.log(this.props)
		return <div id='solve'>
			<div className="swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className="boxContentOne">
							<Common bgCls="solve" {...this.props} />
						</div>
					</div>
					<div className="swiper-slide" ref='five'>		<div className="content">
						<div className="box">
							<div className="boxcontent">
								<div className="count flex ">
									<div className="countLeft">
										<div className="countLeftHeader">智能硬件测试解决方案</div>
										<div className="countImg">
											<ul className='countContentUl flex'>
												<li className='flex-col-5'><img src={require('img/count2.png')} />
													<p>硬件测试</p>
												</li>
												<li className='flex-col-5'><img src={require('img/count3.png')} />
													<p>软件测试</p></li>
												<li className='flex-col-5'><img src={require('img/count4.png')} />
													<p>用户体验<br />研究测试</p></li>
											</ul>
										</div>
										<div className="countButton" onClick={() => hashHistory.push('/hardware')}>
											查看案例</div>
									</div>
									<div className='flex-col-3'></div>
									<div className="countRight"></div>
									<div className="countRightImg">
										<img src={require('img/count1.png')} />
									</div>
								</div>
							</div>
						</div>
					</div></div>
					<div className="swiper-slide">	<div className="content ">
						<div className="box edBox">
							<div className="boxcontent">
								<div className="count flex ">
									<div className="edLeft">
										<img src={require('img/ed1.png')} />
									</div>
									<div className='flex-col-3'></div>
									<div className="edRight">
										<div className="edRightHeader">教育行业测试解决方案</div>
										<div className="edRightImg">
											<ul className='edContentUl flex'>
												<li className='flex-col-5'><img src={require('img/ed2.png')} />
													<p>UI自动化测试</p>
												</li>
												<li className='flex-col-5'><img src={require('img/ed3.png')} />
													<p>接口自动化测试</p></li>
												<li className='flex-col-5'><img src={require('img/ed4.png')} />
													<p>自动化构建发布</p></li>
											</ul>
										</div>
										<div className="edButton" onClick={() => hashHistory.push('/education')}>
											查看案例</div>
									</div>
								</div>
							</div>
						</div>
					</div></div>
					<div className="swiper-slide">	<div className="content ">
						<div className="box">
							<div className="boxcontent">
								<div className="count flex ">
									<div className="countLeft">
										<div className="countLeftHeader jieTop">运营商测试解决方案</div>
										<div className="countImg jieContent">
											<ul className='countContentUl flex'>
												<li className='flex-col-3 textOne'><img src={require('img/jie2.png')} />
													<p>技术实验室</p>
													{/* <div className='jishu'>技术实验室</div> */}
												</li>
												<li className='flex-col-3 textOne'><img src={require('img/jie3.png')} />
													<p>用户研究</p></li>
												<li className='flex-col-3 textOne'><img src={require('img/jie4.png')} />
													<p>	中移MARKET<br />测试中心</p></li>
												<li className='flex-col-3 textOne'><img src={require('img/jie5.png')} />
													<p>ODC场内外支撑</p></li>
											</ul>
										</div>
										<div className="countButton" onClick={() => hashHistory.push('/lab')}>
											查看案例</div>
									</div>
									<div className='flex-col-2'></div>
									<div className="countRight"></div>
									<div className="countRightImg">
										<img src={require('img/jie1.png')} />
									</div>
								</div>
							</div>
						</div>
					</div></div>

				</div>
				<div className="swiper-pagination"></div>
			</div>
		</div>;
	}
}
export default Sovle;
