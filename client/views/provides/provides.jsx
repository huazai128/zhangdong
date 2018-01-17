import React from 'react';
import './provides.scss';
import { Link, hashHistory } from 'react-router';
import Commontop from '../common/commonTop.jsx';
import Footer from '../common/lastFooter.jsx';

export default class Provides extends React.Component {
	componentDidMount() {
		this.node.scrollIntoView();
	}
	render() {
		return (<div className='provides' ref={node => this.node = node}>
			<Commontop />
			<div className="topPage">
				<div className="topPageContet">
					<div className="pageContent flex">
						<div onClick={() => hashHistory.push('/')} className='pageContentOne'>首页</div>&nbsp;&nbsp;>&nbsp;&nbsp;<div onClick={() => hashHistory.push('/new')} className='pageContentOne'>新闻动态</div>&nbsp;&nbsp;>&nbsp;&nbsp;掌动智能被认定为“2017年广东省中小企业公共服务示范平台”
			</div>
				</div>
			</div>
			<div className="proPage">
				<div className="proContent flex">
					<div className="proLeft flex-g-1">
						<div className="proTop">
							<div className="proTopContent">
								<div className="zhangContent">
									掌动智能被认定为“2017年广东省中小企业公共服务示范平台”
								</div>
								<div className="timeConten">
									掌动.发表于：2017年9月20日
									</div>
							</div>
						</div>
						<div className="proDetail">
							<div className="getProDetail">
								<div className='zizhu '>广州掌动智能科技有限公司自主拥有的【广州掌动智能中小企业移动互联网+创业创新服务平台】被广东省中小企业局认定为“2017年广东省中小企业公共服务示范平台”为贯彻落实省政府《关于大力推进大众创业万众创新的实施意见》（粤府〔2016〕20号）、省政府办公厅《关于印发广东省促进民营经济大发展若干政策措施的通知》（粤府办〔2016〕58号），根据《中小企业公共服务示范平台管理办法》（粤经信规字〔2017〕2号）、《小型微型企业创业创新示范基地建设管理办法》（粤经信规字〔2017〕1号）要求，经自愿申报、资格初审、专家评审等程序，广州掌动智能科技有限公司自主拥有的“广州掌动智能中小企业移动互联网+创业创新服务平台”被广东省中小企业局认定为“2017年广东省中小企业公共服务示范平台”。</div>
								<div className='imgContent'>
									<img src={require('img/qiye1.jpg')} alt="" />
									<div className='ziOne'>广东省中小企业公共服务示范平台</div>
								</div>
								<div className='zizhu ziOne'>广东省经济和信息化委每年认定和重点扶持一批民营企业（中小企业）创新产业化示范基地和中小企业公共（技术）服务示范平台”的要求，健全和规范我省中小企业公共（技术）平台发展，提高公共（技术）服务平台的运行质量和服务水平，进一步推动我省中小企业加快“以企业为主体、以市场为导向、产学研相结合”的技术进步体系建设。</div>
								{/* <div className='suiji suiTwo'>会上，广州市科创委罗处表示鼓励、支持、推动广州智能硬件与移动互联网融合技术创新联盟打造公共平台，加强科技创新发展，突破产业发展的核心技术，通过产业联盟形成重要的产业技术标准，提升产业整体竞争力，助力创新创业。为广州乃至全省的产业发展贡献更大的力量，同时对广州智能硬件与移动互联网融合技术创新联盟未来的发展给予殷切的期望。</div> */}
								<div className='imgContent'>
									<img src={require('img/jingji1.jpg')} alt="" />
									{/* <div className='shiOne'>市科创委副处长 罗铮先生 致辞</div> */}
									<img className='imgTwo' src={require('img/rending1.jpg')} alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="proRight">
						<div className="zhangTop">
							<div className="zhangdian">热点</div>
						</div>
						<div className="zhnagContent">
							<div className="zhangContentTop flex">
								<div className="reLeft">
									<img src={require('img/19990.jpg')} alt="" />
								</div>
								<div className="reRight">
									【获奖名单】广州互联网企业风云榜获奖名单公布
								</div>
							</div>
						</div>
						<div className="zhnagContent">
							<div className="zhangContentTop flex">
								<div className="reLeft">
									<img src={require('img/19990.jpg')} alt="" />
								</div>
								<div className="reRight">
									【获奖名单】广州互联网企业风云榜获奖名单公布
								</div>
							</div>
						</div>
						<div className="zhnagContent">
							<div className="zhangContentTop flex">
								<div className="reLeft">
									<img src={require('img/19990.jpg')} alt="" />
								</div>
								<div className="reRight">
									【获奖名单】广州互联网企业风云榜获奖名单公布
								</div>
							</div>
						</div>
						<div className="zhnagContent">
							<div className="zhangContentTop flex">
								<div className="reLeft">
									<img src={require('img/19990.jpg')} alt="" />
								</div>
								<div className="reRight">
									【获奖名单】广州互联网企业风云榜获奖名单公布
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>);
	}
}
