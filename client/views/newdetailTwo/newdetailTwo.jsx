import React from 'react';
import './newdetailTwo.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
import Footer from '../common/lastFooter.jsx';
class NewDetail extends React.Component {
	componentDidMount() {
		this.node.scrollIntoView();
	}
	render() {
		return (
			<div className='newdetailTwo' ref={node => this.node = node}>
				<Common bgCls="newdetailTwo" {...this.props} />
				<div className="topPage">
					<div className="topPageContet">
						<div className="pageContent flex">
							<div onClick={() => hashHistory.push('/')} className='pageContentOne'>首页</div>&nbsp;&nbsp;>&nbsp;&nbsp;<div onClick={() => hashHistory.push('/new')} className='pageContentOne'>新闻动态</div>&nbsp;&nbsp;>&nbsp;&nbsp;616那些为我们生活带来便利的智能硬件设备们（二）
						</div>
					</div>
				</div>
				<div className="twoPageContent">
					<div className="twoContent flex">
						<div className="twoLeft flex-g-1">
							<div className="twoTop">
								<div className="twoTopContent">
									<div className="shengContent">
										616那些为我们生活带来便利的智能硬件设备们（二）
									</div>
									<div className="timeConten">
										掌动.发表于：2017年11月28日12:09.更新于：2018年01月11日 16：57
									</div>
								</div>
							</div>
							<div className="twoDetail">
								<div className='getTwoDetail'>
									<div className="sehBei">
										<div className='jinji'>近些年来，大家都在讨论智能化，智能家电。人工智能已经成为社会发展的主流，家电行业更是做的风生水起。</div>
										<div className='imgContent'>
											<img src={require('img/2222.jpg')} alt="" />
											<div className='jinji jinOne'>无论是冰箱，空调还是电视等，都在大肆的宣传家居智能化。这一期主要介绍一些为我们生活提供巨大便捷的智能家电们。</div>
										</div>
									</div>
									<div className="gelanTwo">
										<di className="gelanTop">格兰仕智能冰箱</di>
										<div className='imgLanTop'>
											<div className="lanContent">对于普通家庭来说，智能冰箱更像是一个虚无缥缈的概念，很难想像它究竟有怎样的产品功能优势，又会给自己的日常生活带来怎样的便利。</div>
											<img src={require('img/jubei1.jpg')} alt="" />
										</div>
										<div className='imgLanTop'>
											<div className="lanContent">对于格兰仕智能冰箱来说，除了具备作为“冰箱”本该具有的冷藏功能，它更像一位生活管家。将互联网与家电相互连接。智能冰箱上配置了搭载着安卓系统的触摸屏幕，简直为冰箱赋予了新的生命。</div>
											<img src={require('img/bingxiang1.jpg')} alt="" />
										</div>
										<div className='imgLanTop'>
											<div className="lanContent">智能云菜谱、保质期标签，保鲜期提醒，智能云菜谱，远程查看食材，甚至可以通过冰箱触控屏上的食材购买功能区，实时在线购物，补充食材。即使足不出户，便可满足厨房的一切需求。</div>
											<img src={require('img/shuiguo1.jpg')} alt="" />
										</div>
										<div className="zongjie">掌测受格兰仕集团的委托，帮助提升格兰仕智能生态冰箱的整体质量、优化用户体验，让更多的用户喜欢上这款智能冰箱。掌测也希望格兰仕的“G+智慧家居互联网”模式越走越好。</div>
									</div>
									<div className="gelanTwo">
										<di className="gelanTop">扫地机器人</di>
										<div className='imgLanTop'>
											<div className="lanContent">扫地机器人绝对能称得上是懒人福利。当然啦，有了它就再也不用在家里因为谁做家务而争吵啦。这些年来随着技术的突破更新，越来越多的扫地机器人也出现在了生活中。</div>
											<img src={require('img/jiqi1.jpg')} alt="" />
										</div>
										<div className='imgLanTop'>
											<div className="lanContent">随着技术的长进，扫地机器人能够实时建立起家居地图，通过激光扫描，精准定位自身及家居环境，能够真正适应复杂多变的家居环境。</div>
											<img src={require('img/jiqi2.jpg')} alt="" />
										</div>
										<div className='imgLanTop'>
											<div className="lanContent">不仅如此，扫地机器人还拥有搭配智能自学性系统。可根据多个传感器收集真实环境中的信息从而做出正确的行为判断。一键清洁功能，启动全屋清扫模式，简单易操作使家里的老人也可以上手，甚至是可以预设每周清扫的次数。</div>
											<img src={require('img/jiqi3.jpg')} alt="" />
										</div>
										<div className="zongjie">清扫完毕后，扫地机器人还会自动返回基座充电，全程无需人工看管和干预，实现真正的智能化。</div>
									</div>
								</div>
								<div className="jieyu">
									<div className="jieTop">结语</div>
									<div className="jieContent">随着智能家居的发展，消费者正在追求更高层面的消费内容，那便是更健康、更便捷的生活方式。更好、更先进的智能家居必将实现消费者对于高品质的生活诉求，智能家电时代已经来临。</div>
								</div>
							</div>
						</div>
						<div className="egRight">
							< div className="reTop">
								<div className="redian">热点</div>
							</div>
							<div className="reContent">
								<div className="reContentTop flex">
									<div className="reLeft">
										<img src={require('img/19990.jpg')} alt="" />
									</div>
									<div className="reRight">
										【获奖名单】广州互联网企业风云榜获奖名单公布
									</div>
								</div>
							</div>
							<div className="reContent">
								<div className="reContentTop flex">
									<div className="reLeft">
										<img src={require('img/19990.jpg')} alt="" />
									</div>
									<div className="reRight">
										【获奖名单】广州互联网企业风云榜获奖名单公布
									</div>
								</div>
							</div>
							<div className="reContent">
								<div className="reContentTop flex">
									<div className="reLeft">
										<img src={require('img/19990.jpg')} alt="" />
									</div>
									<div className="reRight">
										【获奖名单】广州互联网企业风云榜获奖名单公布
									</div>
								</div>
							</div>
							<div className="reContent">
								<div className="reContentTop flex">
									<div className="reLeft">
										<img src={require('img/19990.jpg')} alt="" />
									</div>
									<div className="reRight">
										【获奖名单】广州互联网企业风云榜获奖名单公布
									</div>
								</div>
							</div>
							<div className="reContent">
								<div className="reContentTop flex">
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
			</div>
		);
	}
}
export default NewDetail;
