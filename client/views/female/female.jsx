import React from 'react';
import './female.scss';
import { Link, hashHistory } from 'react-router';
import Commontop from '../common/commonTop.jsx';
import Footer from '../common/lastFooter.jsx';
export default class Female extends React.Component {
	componentDidMount() {
		this.node.scrollIntoView();
	}
	render() {
		return (<div className='female'  ref={node => this.node = node}>
			<Commontop />
			<div className="topPage">
				<div className="topPageContet">
					<div className="pageContent flex">
						<div onClick={()=>hashHistory.push('/')} className='pageContentOne'>首页</div>&nbsp;&nbsp;>&nbsp;&nbsp;<div onClick={()=>hashHistory.push('/new')} className='pageContentOne'>新闻动态</div>&nbsp;&nbsp;>&nbsp;&nbsp;"互联网女皇" 2017 报告十大要点
					</div>
				</div>
			</div>
			<div className="frePage">
				<div className="freContent flex">
					<div className="freLeft flex-g-1">
						<div className="freTop">
							<div className="freTopContent">
								<div className="zhangContent">
								"互联网女皇"2017 报告十大要点
								</div>
								<div className="timeConten">
									掌动.发表于：2017年9月20日
									</div>
							</div>
						</div>
						<div className="freDetail">
							<div className="getFreDetail">
								<div className='zizhu '>被誉为“互联网女皇”的 KPCB 合伙人 Mary Meeker，刚刚公布了 2017 年《互联网趋势（Internet Trends）》报告，这也是她第 22 次公布这一年度的互联网报告。</div>
								<div className='imgContent'>
									<img src={require('img/nvhuang22.jpg')} alt="" />
									<div className='ziOne'>以下为 “互联网女皇” 2017 报告十大要点： 一、2016 年，全球互联网用户数约为 34 亿，互联网普及率为 46%。</div>
								</div>
								{/* <div className='zizhu ziOne'>以下为 “互联网女皇” 2017 报告十大要点： 一、2016 年，全球互联网用户数约为 34 亿，互联网普及率为 46%。</div> */}

								<div className='imgContent'>
									<img src={require('img/baobiao12.jpg')} alt="" />
									<div className='quanOne'>二、全球智能手机出货量按年增长率持续走低，Android 系统占有率持续走高，2016 年达到 80% 以上全球市占率。</div>
									{/* <img className='imgTwo' src={require('img/rending1.jpg')} alt="" /> */}
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
