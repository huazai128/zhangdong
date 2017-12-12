import React from 'react';
import './new.scss';
import Common from '../common/common.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
class New extends React.Component {
	render() {
		return <div id="new">
			<Common />
			<div className='company'>
				<div>
					{/* 公司动态 */}
					<div className="new-top flex-center jc-between">
						<h2 className="new-message flex-vcenter"><i className='lefttop'></i> 公司动态</h2>
						<div className="more">查看更多</div> <span className='youIcon'></span>
					</div>
					<div className="flex new-item">
						<div className="leftcompahy">
							<img src={require('img/new1.png')} alt="" />
						</div>
						<div className="rightcompany">
							<h3 className='lianTop'>市科创委智能硬件联盟之《打造公共平台，助力创新创业》论坛活动圆满落幕</h3>
							<div className='time'>新华社.2017-10-21.公司动态</div>
							<div className="contentone">
								2017年9月20日，在广州市科创委的指导下，由广州智能硬件与移动互联网融合技术创新联盟主办，掌动智能、机智云、芳禾数据、群志科技承办的广州智能硬件与移动互联网融合技术创新联盟系列主题活动 《打造公共平台，助力创新创业》拉开了帷幕！ </div>
						</div>
					</div>
					<div className="flex new-item">
						<div className="leftcompahy">
							<img src={require('img/new2.png')} alt="" />
						</div>
						<div className="rightcompany">
							<h3 className='lianTop'>掌动智能被认为“2017年广东省中小企业公共服务示范平台”</h3>
							<div className='time'>新华社.2017-10-21.公司动态</div>
							<div className="contentone">
								广州掌动智能科技有限公司自主拥有的【广州掌动只能中小企业移动互联网+创业创新服务平台】被广东省中小企业局认定为“2017年广东省中小企业公共服务示范平台” </div>
						</div>
					</div>
				</div>
				{/* 行业新闻 */}
				<div className='industry'>
					<div className="new-top flex-center jc-between">
						<h2 className="new-message flex-vcenter"><i className='lefttop'></i> 行业新闻</h2>
						<div className="more">查看更多</div> <span className='youIcon'></span>
					</div>
					<div className="flex new-item">
						<div className="leftcompahy">
							<img src={require('img/indus2.png')} alt="" />
						</div>
						<div className="rightcompany">
							<h3 className='lianTop'>"互联网女皇" 2017 报告十大要点</h3>
							<div className='time'>新华社.2017-10-21.行业新闻</div>
							<div className="contentone">
								被誉为“互联网女皇”的 KPCB 合伙人 Mary Meeker，刚刚公布了 2017 年《互联网趋势（Internet Trends）》报告，这也是她第 22 次公布这一年度的互联网报告。</div>
						</div>
					</div>
					<div className="flex new-item">
						<div className="leftcompahy">
							<img src={require('img/indus1.png')} alt="" />
						</div>
						<div className="rightcompany">
							<h3 className='lianTop'>2016-2017年中国儿童智能手环市场研究报告</h3>
							<div className='time'>新华社.2017-10-21.行业新闻</div>
							<div className="contentone">
								2017年5月4日，根据权威大数据显示，2016年中国儿童手环用户规模达0.29亿人，较2015年增长107.1%；预计2019年整体市场用户规模将达到1.35亿人。随着儿童手环技术进一步成熟，80后、90后群体逐渐晋升为家长，市场持续受利好因素刺激，预计未来三年中国儿童手环市场仍将保持高速增长。 </div>
						</div>
					</div>
				</div>
				{/*科技咨询  */}
				<div className='science'>
					<div className="new-top flex-center jc-between">
						<h2 className="new-message flex-vcenter"><i className='lefttop'></i> 科技资讯</h2>
						<div className="more">查看更多</div> <span className='youIcon'></span>
					</div>
					<div className="flex new-item">
						<div className="leftcompahy">
							<img src={require('img/ke1.png')} alt="" />
						</div>
						<div className="rightcompany">
							<h3 className='lianTop'>616那些为我们生活带来便利的智能硬件设备们（一）</h3>
							<div className='time'>新华社.2017-10-21.科技资讯</div>
							<div className="contentone">
								随着技术的不断发展，越来越多的智能硬件走进了我们的生活之中。数字化、三网融合、物联网、大数据、云计算等应用技术的完善，相信在不久的未来智能硬件将会逐步替代传统家电成为生活中随处可见的一道风景。</div>
						</div>
					</div>
					<div className="flex new-item">
						<div className="leftcompahy">
							<img src={require('img/ke2.png')} alt="" />
						</div>
						<div className="rightcompany">
							<h3 className='lianTop'>616那些为我们生活带来便利的智能硬件设备们（二）</h3>
							<div className='time'>新华社‘2017-10-21’科技资讯</div>
							<div className="contentone">
								近些年来，大家都在讨论智能化，智能家电。人工智能已经成为社会发展的主流，家电行业更是做的风生水起。无论是冰箱，空调还是电视等，都在大肆的宣传家居智能化。这一期主要介绍一些为我们生活提供巨大便捷的智能家电们。 </div>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>;
	}
}

export default New;
