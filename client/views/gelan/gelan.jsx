import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import './gelan.scss';
export default class Tab extends React.Component {
	render() {
		return (
			<div className='gelan'>
				<div className="nav flex">
					<div className="navText flex"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/itcontent">优质帖子</Link></div>
				</div>
				<div className="boxIt">
					<div className='boxItTop'>格兰仕智能冰箱检验测试</div>
					<div className="itTop">
						<div className='hangContent'>企业背景</div>
						<div className="textContentOne">
							<div>格兰仕集团定位于“全球最大空调专业化制造中心”，高起点快速切入市场，在第一个冷冻年度（2001年度）就实现产销50万台。2002年预计产销180万台，其中内销60万台，外销120万台。</div>
							<div>2007年 7月进军中央空调，成立格兰仕中央空调有限公司，2010年销售额破一亿， 成长速度有目共睹。</div>

						</div>
					</div>
					<div className="itTop itMargin">
						<div className='hangContent'>格兰仕460L冰箱定位为格兰仕旗下的高端智能产品；</div>
						<div className='hangContent'>冰箱使用安卓系统，可进行实时更新迭代；</div>
						<div className="textContentOne">
							<div className='sanContent itMarginOne'>•软件端：</div>
							<div>搭载多个网络接口，可供接入各类平台如：菜谱（豆果美食）、网上购物（本来生活）、新闻（ZAKER）、音乐、视频、
电台、游戏、娱乐</div>
							<div>提供开放的合作环境，可根据集团需求与各个电商平台、菜谱平台等进行无障碍合作；</div>
							<div className='sanContent'>•硬件端：</div>
							<div>不仅有21.5‘ 大屏显示器，还加入内、外部摄像头，距离传感器、温湿度传感器等多种传感器设备，丰富了冰箱的功能；</div>
							<div>
								<div className='sanContent'>硬件测试部分测试项</div>
								<div className='sanContent'>智能冰箱常温性能检验</div>
								<img src={require('img/biao1.png')} />
							</div>

							<div className='zhiBiao'>
								<div className='sanContent'>智能家电互联性能检验</div>
								<img src={require('img/biao2.png')} />
							</div>
							<div className='zhiBiao'>
								<div className='sanContent'>智能冰箱可靠性检验结果</div>
								<img src={require('img/biao3.png')} />
							</div>
							<div className='zhaoImg flex jc-between'>
								<div className='flex'>
									<img src={require('img/zhao1.jpg')} />
								</div>
								<div className='flex'>
									<img src={require('img/zhao2.jpg')} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
