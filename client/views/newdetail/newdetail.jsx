import React from 'react';
import './newdetail.scss';
import { Link, hashHistory } from 'react-router';
import Common from '../common/comonOur.jsx';
import Footer from '../common/lastFooter.jsx';
class NewDetail extends React.Component {
	render() {
		return (
			<div className='newDetail'>
				<div className="topDetail">
					<div className="topNav flex">
						<div className="navLeft flex-g-1">
							<ul className="flex-vcenter">
								<li className='liTwo'><Link to="/"><img src={require('img/logo.png')} alt="" /></Link></li>
								<li className="item"><Link to="/service">产品与服务</Link></li>
								<li className="item"><Link to="/solve">解决方案</Link></li>
								<li className="item"><Link to="/new">新闻动态</Link></li>
								<li className="item"><Link to="/our">关于我们</Link></li>
							</ul>
						</div>
						<div className="navRight">
							<ul className="topBoxright flex-vcenter">
								<li className="blueBtn"><Link to='/creative'>测试者社区</Link></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="topPage">
					<div className="topPageContet">
						<div className="pageContent">
							首页&nbsp;&nbsp;>&nbsp;&nbsp;新闻动态&nbsp;&nbsp;>&nbsp;&nbsp;那些为我们生活带来便利的智能硬件设备们(一)
						</div>
					</div>
				</div>
				<div className="egPageContent">
					<div className="egContent flex">
						<div className="egLeft flex-g-1">
							<div className="egTop">
								<div className="egTopContent">
									<div className="shengContent">
										那些为我们生活带来的便利的智能硬件设备们(一)
									</div>
									<div className="timeConten">
										掌动.发表于：2017年11月28日12:09.更新于：2018年01月11日 16：57
									</div>
								</div>
							</div>
							<div className="contentDetail">
								<div className='getContentDetail'>
									<div className='suiji '>随着技术的不断发展，越来越多的智能硬件走进了我们的生活之中。数字化、三网融合、物联网、大数据、云计算等应用技术的完善，相信在不久的未来智能硬件将会逐步替代传统家电成为生活中随处可见的一道风景。</div>
									<div className='imgContent'>
										<img src={require('img/2222.jpg')} alt="" />
									</div>
									<div className='suiji suiOne'>而本期，将会给大家介绍一些给我们生活带来巨大便利的智能硬件们。</div>
									<div className='suiji suiTwo'>随着现代病的不断低龄化，健身已经成为了每天久坐办公室的都市人日常必修课。但对于长期处于快速的生活节奏的都市人来说，总是抽不出时间去健身房锻炼。而智能健身设备的出现，不用去健身房，也可以使用户享受到专业的健身指导。</div>
									<div className='imgContent'>
										<img src={require('img/2221.jpg')} alt="" />
									</div>
									<div className='suiji suiTwo'>与掌测有过合作的Move it智能健身设备，有了这款智能健身设备的帮助，不仅可以使用户随心随意在家进行健身锻炼，还可以通过APP让用户知道自己锻炼的数据情况。</div>
									<div className='imgContent'>
										<img src={require('img/2220.jpg')} alt="" />
									</div>
									<div className='suiji suiTwo'>根据用户的个人条件及相关的大数据进行科学的分析，通过筛选、模拟，打造出独一无二、贴合用户自身情况的上百种锻炼方案。让用户可以在百种方案中挑选出自己喜欢的健身计划进行锻炼，使用户不必花大价钱也能享受到专业的定身指导。</div>
									<div className='imgContent'>
										<img src={require('img/1999.jpg')} alt="" />
									</div>
									<div className='suiji suiTwo'>除此之外，根据用户研究调查的结果，对APP加入了社交基因。使用户可以在挑战场中与世界各国的用户进行健身心得交流，健身达人们的数值PK。同时，还可以把自身数据发表在社交软件上，让朋友了解你的健身情况。</div>
									<div className="shuiBei">
										<di className="shuiTop">智能水杯</di>
										<div className="shuiContent">正常情况下，成年人每天饮用8杯水（1.5升 - 2.4升）为好。8杯水的量，大家一听可能就觉得自己就从未达标过，其实并非如此，人吸收水分除了喝水外，还有一大半的水分是来源于我们的三餐，而种种不确定的因素，我们该如何保证吸收的水分能达到标准呢？</div>
										<div className='imgTop'>
											<img src={require('img/1998.jpg')} alt="" />
										</div>
										<div className="shuiContent">这时，智能水杯就派上用场了，不仅能根据每天不同的饮食，不同的运动量，甚至还能根据不同的气温来对你的饮水量进行适当的调整，还会自动记录你的饮水量，累计每喝一杯的水就会点亮一盏灯。</div>
										<div className='imgTop'>
											<img src={require('img/1997.jpg')} alt="" />
										</div>
										<div className="shuiContent">如果正在减肥的菇凉们千万不要错过了，大量运动后搭配上科学的饮水方法，对于减肥这项辛苦的革命，简直就是事半功倍呢。</div>
										<div className='imgTop'>
											<img src={require('img/1995.jpg')} alt="" />
										</div>
										<div className="shuiContent">除此之外，智能水杯它还能监控杯中水的温度，当水温达到25℃的时候，此时的水是最容易被人体吸收，经常饮用温开水，能提高人体免疫力，缓解疲劳，保持皮肤水分，使人容光焕发。</div>
									</div>
									<div className="shuiBei shuiBottom">
										<di className="shuiTop">智能硬件设备&掌测</di>
										<div className="shuiContent">智能硬件设备的设计意图主要是探索人和科技全新的交互方式，为人们提供一些专属、个性化的服务。如今的智能硬件设备已各式各样、五花八门，它们的出现已在很大程度上改变着人们的生活。</div>
										<div className='imgTop'>
											<img src={require('img/1994.jpg')} alt="" />
										</div>
										<div className="shuiContent">但目前市场上的智能硬件设备普遍价格较高，用户对硬件质量上的要求，设备及硬件结合使用问题，都是影响着用户体验的重要因素，所以当当仅是一款外表设计精良的产品也不足以创建庞大的规模和培养大量的忠诚用户，更无法在高价格下脱颖而出。</div>
										<div className='imgTop'>
											<img src={require('img/1993.jpg')} alt="" />
										</div>
										<div className="shuiContent">用心做产品，真正从用户的需求着手，永远都是智能硬件设备的追求，而掌测也愿意为这些智能硬件设备们保驾护航。凭借掌测丰富的测试案例，通过对产品进行智能硬件测试，软件测试以及用户研究测试，全面提升产品质量，提高用户体验度，让世界因品质而美好。</div>

									</div>
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
