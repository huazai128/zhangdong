import React from 'react';
import './creative.scss';
import Top from '../common/partyTop.jsx';
import Tab from '../common/tabCreative.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';

class CreativeContent extends React.Component {
	render() {
		return (
			<div>
				<div className="bg"></div>
				<div className='creativeCont flex jc-between'>
					<Tab></Tab>
					<div className="bar">
						<div className="barContent">
							<Link to="/creative/quill">我要发帖</Link>
						</div>
						<div className="toolContent">
							<Link to="/creative/community">
								<div className="cpt flex">
									<div className="leftImg"></div>
									<div className='textConet flex-vcenter'>测试工具集市</div>
								</div>
								<div className="flex wrap roundBottm">
									<div className="round">
										<div className="one"></div>
										<div className='two'>loaderrunner</div>
									</div>
									<div className="round">
										<div className="one"></div>
										<div className='two'>Testlink</div>
									</div>
									<div className="round">
										<div className="one"></div>
										<div className='three'>禅道项目管理软件</div>
									</div>
									<div className="round">
										<div className="one"></div>
										<div className='three'>mantis</div>
									</div>
								</div>
							</Link>
						</div>
						{/* 知识集市 */}
						<div className="toolContent">
							<div className="cpt flex">
								<div className="leftImg cptOne"></div>
								<div className='textConet flex-vcenter'>知识库集市</div>
							</div>
							<div className="flex wrap roundBottm">
								<div className="round">
									<div className="one"></div>
									<div className='two'>STF平台搭建方案</div>
								</div>
								<div className="round">
									<div className="one"></div>
									<div className='two'>STF设备管理操作平台    </div>
								</div>
								<div className="round">
									<div className="one"></div>
									<div className='three'>功能测试流程标准</div>
								</div>
								<div className="round">
									<div className="one"></div>
									<div className='three'>智能硬件测试标准及方法</div>
								</div>
							</div>
						</div>
						<div className="jingContent">
							<div className="jingTop">
								精选话题 </div>
							<div className="jingImg flex-vcenter">
								<img src={require('img/jing.png')} />
								<p>话题标题话题标题话题标题</p>
							</div>
							<div className="jingImg flex-vcenter">
								<img src={require('img/jing.png')} />
								<p>话题标题话题标题话题标题</p>
							</div>
							<div className="jingImg flex-vcenter">
								<img src={require('img/jing.png')} />
								<p>话题标题话题标题话题标题</p>
							</div>
							<div className="jingImg flex-vcenter">
								<img src={require('img/jing.png')} />
								<p>话题标题话题标题话题标题</p>
							</div>
							<div className="jingImg flex-vcenter">
								<img src={require('img/jing.png')} />
								<p>话题标题话题标题话题标题</p>
							</div>
							<div className="jingImg flex-vcenter">
								<img src={require('img/jing.png')} />
								<p>话题标题话题标题话题标题</p>
							</div>
							<div className="jingImg flex-vcenter">
								<img src={require('img/jing.png')} />
								<p>话题标题话题标题话题标题</p>
							</div>
							<div className="jingImg flex-vcenter">
								<img src={require('img/jing.png')} />
								<p>话题标题话题标题话题标题</p>
							</div>
						</div>
						{/* 社区运行状况 */}
						<div className="situation">
							<div className="stuTop">社区运行状况</div>
							<div className="stuContent flex-vcenter">
								<img src={require('img/xingzhuang1.png')} />
								<div className="stuRight">会员：23152</div>
							</div>
						</div>
						<div className="situation stuOne">
							<div className="stuContent flex-vcenter">
								<img src={require('img/xingzhuang2.jpg')} />
								<div className="stuRight">测试者：856</div>
							</div>
						</div>
						<div className="situation stuOne">
							<div className="stuContent flex-vcenter">
								<img src={require('img/xingzhuang3.png')} />
								<div className="stuRight">主题：46058</div>
							</div>
						</div>
						<div className="situation stuOne">
							<div className="stuContent flex-vcenter">
								<img src={require('img/xingzhuang4.png')} />
								<div className="stuRight">回复：46058</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class Creative extends React.Component {
	render() {
		return (
			<div id='creative'>
				<Top></Top>
				{this.props.children}
				<Footer></Footer>
			</div>
		);
	}
}
export  {Creative,CreativeContent};
