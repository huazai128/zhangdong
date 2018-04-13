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
							<div className="itemHead" onClick={() => hashHistory.push('/service')}>产品与服务</div>
							<ul className='jc-start '>
								{/* <li>
									<Link to={`/service/${'honor'}`}>软件测试</Link>
								</li>
								<li>
									<Link to={`/service/${'yin'}`}>硬件测试</Link>
								</li>
								<li>
									<Link to={`/service/${'ren'}`}>认证</Link>
								</li> */}
								<li onClick={() => hashHistory.push('/service?one=one')}>软件测试</li>
								<li onClick={() => hashHistory.push('/service?one=two')}>硬件测试</li>
								<li onClick={() => hashHistory.push('/service?one=three')}>认证</li>
							</ul>
						</div>
						<div className="item itemOne">
							<div className="itemHead" onClick={() => hashHistory.push('/solve')}>解决方案</div>
							<ul>
								<li onClick={() => hashHistory.push('/app')}>APP软件测试解决方案</li>
								<li onClick={() => hashHistory.push('/hardware')}>智能硬件测试解决方案</li>
								<li onClick={() => hashHistory.push('/education')}>教育行业测试解决方案</li>
								<li onClick={() => hashHistory.push('/lab')}>运营商测试解决方案</li>
							</ul>
						</div>
						<div className="item itemOne">
							<div className="itemHead" onClick={() => hashHistory.push('/new')}>新闻动态</div>
							<ul>
								<li onClick={() => hashHistory.push('/newsMore/1?page=1')}>公司动态</li>
								<li onClick={() => hashHistory.push('/newsMore/3?page=3')}>科技资讯</li>
								<li onClick={() => hashHistory.push('/newsMore/2?page=2')}>行业新闻</li>
							</ul>
						</div>
						<div className="item">
							<div className="itemHead" onClick={() => hashHistory.push('/our')}>关于我们</div>
							<ul>
								<li onClick={() => hashHistory.push('/our?page=1')}>公司简介</li>
								<li onClick={() => hashHistory.push('/our?page=2')}>招贤纳士</li>
							</ul>
						</div>


						<div className="bottomRight flex-g-1 itemOne">
							<Link to="/"><img src={require('img/logo.png')} /></Link>
							<div className="text">关注我们</div>
							<div className="btm-login flex-center">
								<div className="btn-img">
									<img src={require("img/login02.png")} onClick={() => { window.open('http://wpa.qq.com/msgrd?v=3&uin=2146594489&site=qq&menu=yes', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no') }} alt="" />
								</div>
								<div className="btn-img">
									<img src={require("img/login01.png")} alt="" />
									<div className="btn-er">
										<img src={require("img/login03.jpg")} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer">
					<div className="content">
						<div>商务洽谈:&nbsp;&nbsp;020-38555340&nbsp;&nbsp;020-89289423&nbsp;&nbsp;&nbsp;&nbsp;CS邮箱:&nbsp;&nbsp;businesss@appstest.cn&nbsp;&nbsp;cs@appstest.cn&nbsp;&nbsp;&nbsp;&nbsp;地址:广州中山大道西8号天河商贸大厦14楼</div>
						<div>2009-2017&nbsp;Appstest.cn版权所有ICP证:&nbsp;粤A1-20040604&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;粤公网安备&nbsp;33566758445789号</div>
					</div>
				</div>
			</div>
		);
	}
}
