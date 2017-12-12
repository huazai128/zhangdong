import React from 'react';
import './personal.scss';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
export default class Personal extends React.Component {
	render() {
		return (
			<div id='personal'>
				{/* <Top></Top> */}
				<div className="personTop flex jc-between">
					<div className="leftPerson flex-g-l">
						<p>用户名称名称</p>
						<p>第326位会员/测试开发者<span>2017-10-26</span></p>
					</div>
					<div className="rightPerson flex">
						<p>编辑资料</p>
						<p>	<Link to="/login">退出登录</Link></p>
					</div>
				</div>
				{/*tab栏*/}
				<div className='tabContent'>
					<Tabs
						defaultActiveKey="1"
						renderTabBar={() => <ScrollableInkTabBar />}
						renderTabContent={() => <TabContent />}
						animated={false}>
						<TabPane tab='测试申请' key="1" className='tabOne'>
							<Link to="/creative/orderTaking">
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP'>审核中</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请 </div>
								</div>
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP'>审核中</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请</div>
								</div>
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP jieP '>已接单</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请 </div>
								</div>
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP jieP '>已接单</p>
									</div>
									<div className="bottomContent">
									申请类型A.条件1.条件2.3天前申请</div>
								</div>
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP ceP'>测试中</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请</div>
								</div>
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP ceP'>测试中</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请 </div>
								</div>
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP yiP'>已完成</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请</div>
								</div>
								<div className='shenOne btn'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP yiP'>已完成</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请 </div>
								</div>
							</Link>
						</TabPane>
						<TabPane tab='测试接单' key="2" className='tabOne'>
							<Link to="/creative/orderTaking">
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP'>审核中</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请</div>
								</div>
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP'>审核中</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请 </div>
								</div>
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP jieP '>已接单</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请 </div>
								</div>
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP jieP '>已接单</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请</div>
								</div>
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP ceP'>测试中</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请</div>
								</div>
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP ceP'>测试中</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请 </div>
								</div>
								<div className='shenOne'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP yiP'>已完成</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请</div>
								</div>
								<div className='shenOne btn'>
									<div className="firstPer flex">
										<p className='firstP'>申请名称申请名称</p>
										<p className='secondP yiP'>已完成</p>
									</div>
									<div className="bottomContent">
										申请类型A.条件1.条件2.3天前申请</div>
								</div>
							</Link>
						</TabPane>
						<TabPane tab='话题' key="3" className='tabOne'>
							<Link to="/creative/barDel">
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme theLast">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
							</Link>
						</TabPane>
						<TabPane tab='回帖' key="4" className='tabOne'>
							<Link to="/creative/barDel">
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme theLast">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
							</Link>
						</TabPane>
						<TabPane tab='收藏' key="5" className='tabOne'>
							<Link to="/creative/barDel">
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
								<div className="theme theLast">
									<div className="themeContent">
										<div className='flex-g-l one'>帖子标题文本帖子标题文本帖子标题文本</div>
										<div className='flex-g-l two'><span>作者名称</span><span>2分钟前</span><span>浏览量:958</span><span>回复量:958</span></div>
									</div>
								</div>
							</Link>
						</TabPane>
					</Tabs>
				</div>
				{/* <Footer></Footer> */}
			</div>
		);
	}
}
