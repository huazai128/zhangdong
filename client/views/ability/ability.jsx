import React from 'react';
import './ability.scss';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
class ToolDetails extends React.Component {
	render() {
		return (
			<div id="ability">
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/knowledge">测试工具</Link>&nbsp;>&nbsp;功能测试的流程与标准</div>
				</div>
				<div className="toolContent">
					<div className="toolTop flex jc-between">
						<div className="toolLeft flex">
							<div className="yuan"></div>
							<div className="text">
								<p className='textOne'>功能测试的流程与标准</p>
								<p className='textTwo'>功能测试的流程与标准</p>
							</div>
						</div>
						<div className="toolRight">
							<p className='ourOne'>我也要用</p>
						</div>
					</div>
					<div className="toolBottom">
						<div className="tuTop commonNone">
							这两天发现的STF工具（ Smartphone Test Farm），基于NodeJS编写，可用于Android设备的远程管理。
						</div>
						<div className="wenTop commonNone">
							如今，软件测试变得越来越重要。在软件业较发达的国家，软件测试不仅成为软件开发的一个有机组成部分，而且在软件开发的系统工程中占据着相当大的比重。软件测试是一个系列过程活动，贯穿于软件项目的整个生命过程，很多软件项目的开发还停留在“作坊式”阶段，项目的成功往往靠个别程序员决定。 但随着市场对软件质量的的要求不断提高，软件测试将变得越来越重要。
						</div>
						<div className="wenTop commonNone">
							本类型测试是对软件进行功能测试，由具有丰富经验的测试人员根据产品需求，设计原型等资料进行测试分析，结合具体使用场景和测试项目积累的测试点清单设计测试用例。确保产品的正确性、完整性。在测试过程中对产品的各功能进行验证，根据功能测试用例，逐项测试，检查产品是否达到用户要求的功能，并结合探索性测试和在模拟不同测试环境的测试，发现深藏在产品的功能性缺陷，全面保证和提升产品质量。
						</div>
						<div className="boxZhong">
							<h2 className='jingDian'>经典案例：</h2>
							<div className='flex-center'>中金产品</div>
							<div className="imgAn one"></div>
							<div>目前为止，财视产品已进行81次版本测试，累计用例数10万余条，发现缺陷数2千余个。掌测一直为中金产品APP保驾护航，专业的测试团队，每个版本尽可能的覆盖各种机型设备，海量用例库进行回归测试，确保每个模块达到测试验收标准，使用户体验达到最佳。</div>
							<h2 className='jingDian'>测试流程图：</h2>
							<div className="imgAn two"></div>
						</div>
					</div>
				</div>
				{/* <Footer></Footer> */}
			</div>
		);
	}
}
export default ToolDetails;
