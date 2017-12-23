import React from 'react';
import './toolDetails.scss';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
class ToolDetails extends React.Component {
	render() {
		return (
			<div id="detail">
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/community">测试工具</Link>&nbsp;>&nbsp;loadrunner</div>
				</div>
				<div className="toolContent">
					<div className="toolTop flex jc-between">
						<div className="toolLeft flex">
							<div className="yuan"></div>
							<div className="text">
								<p className='textOne'>loadrunner</p>
								<p className='textTwo'>预测系统行为和性能的负载测试工具</p>
							</div>
						</div>
						<div className="toolRight">
							<p className='ourOne'>我也要用</p>
						</div>
					</div>
					<div className="toolBottom">
						<div className="tuTop commonNone">
						LoadRunner，是一种预测系统行为和性能的负载测试工具。通过以模拟上千万用户实施并发负载及实时性能监测的方式来确认和查找问题，LoadRunner能够对整个企业架构进行测试。企业使用LoadRunner能最大限度地缩短测试时间，优化性能和加速应用系统的发布周期LoadRunner可适用于各种体系架构的自动负载测试，能预测系统行为并评估系统性能。
						</div>
						<div className="wenTop commonNone">
						重复测试,负载测试是一个重复过程。每次处理完一个出错情况，您都需要对您的应用程序在相同的方案下，再进行一次负载测试。以此检验您所做的修正是否改善了运行性能。
LoadRunner完全支持EJB 的负载测试。这些基于Java 的组件运行在应用服务器上，提供广泛的应用服务。通过测试这些组件，您可以在应用程序开发的早期就确认并解决可能产生的问题。
						</div>
						<div className="imgAn"></div>
						<div className='commonNone'>利用LoadRunner,您可以很方便地了解系统的性能。它的Controller 允许您重复执行与出错修改前相同的测试方案。它的基于HTML 的报告为您提供一个比较性能结果所需的基准，以此衡量在一段时间内，有多大程度的改进并确保应用成功。由于这些报告是基于HTML 的文本，您可以将其公布于您公司的内部网上，便于随时查阅。</div>

					</div>
				</div>
				{/* <Footer></Footer> */}
			</div>
		);
	}
}
export default ToolDetails;
