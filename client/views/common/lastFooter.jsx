import React from 'react';
import './lastFooter.scss';
import { Link, hashHistory } from 'react-router';
export default class LastFooter extends React.Component {
	render() {
		return (
			<div id="lastFooter">
				<div className="bottomBox">
					<div className="content flex">
						<div className="item itemOne">
							<div className="itemHead">产品与服务</div>
							<ul className='jc-start '>
								<li onClick={() => hashHistory.push('/service')}>软件测试</li>
								<li onClick={() => hashHistory.push('/service')}>硬件测试</li>
								<li onClick={() => hashHistory.push('/service')}>认证</li>
							</ul>
						</div>
						<div className="item itemOne">
							<div className="itemHead">解决方案</div>
							<ul>
								<li onClick={() => hashHistory.push('/app')}>APP软件测试解决方案</li>
								<li onClick={() => hashHistory.push('/hardware')}>智能硬件测试解决方案</li>
								<li onClick={() => hashHistory.push('/education')}>教育行业测试解决方案</li>
								<li onClick={() => hashHistory.push('/lab')}>运营商测试解决方案</li>
							</ul>
						</div>
						<div className="item itemOne">
							<div className="itemHead">新闻动态</div>
							<ul>
								<li onClick={() => hashHistory.push('/alliance')}>公司动态</li>
								<li onClick={() => hashHistory.push('/newdetail')}>科技资讯</li>
								<li onClick={() => hashHistory.push('/female')}>行业新闻</li>
							</ul>
						</div>
						<div className="item">
							<div className="itemHead">关于我们</div>
							<ul>
								<li onClick={() => hashHistory.push('/our')}>公司简介</li>
								<li onClick={() => hashHistory.push('/our')}>招纳贤士</li>
							</ul>
						</div>


						<div className="bottomRight flex-g-1 itemOne">
							<img src={require('img/logo.png')} />
							<div className="text">关注我们</div>
							<img src={require('img/share.png')} />
						</div>
					</div>
				</div>
				<div className="footer">
					<div className="content">
						<div>商务洽谈:&nbsp;&nbsp;020-38555340&nbsp;&nbsp;020-89289423&nbsp;&nbsp;&nbsp;&nbsp;CS邮箱:&nbsp;&nbsp;businesss@appstest.cn&nbsp;&nbsp;cs@appstest.cn&nbsp;&nbsp;&nbsp;&nbsp;地址:广州中山大道西8号天河商贸大厦14楼</div>
						<div>2009-2017&nbsp;Appstest.com版权所有ICP证:&nbsp;粤A1-20040604&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;粤公网安备&nbsp;33566758445789号</div>
					</div>
				</div>
			</div>
		);
	}
}
