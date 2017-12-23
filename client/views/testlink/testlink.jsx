import React from 'react';
import './testlink.scss';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
class ToolDetails extends React.Component {
	render() {
		return (
			<div id="testlink">
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/community">测试工具</Link>&nbsp;>&nbsp;Testlink工具</div>
				</div>
				<div className="toolContent">
					<div className="toolTop flex jc-between">
						<div className="toolLeft flex">
							<div className="yuan"></div>
							<div className="text">
								<p className='textOne'>Testlink工具</p>
								<p className='textTwo'>TestLink 是基于web的测试用例管理系统</p>
							</div>
						</div>
						<div className="toolRight">
							<p className='ourOne'>我也要用</p>
						</div>
					</div>
					<div className="toolBottom">
						<div className="tuTop commonNone">
							TestLink 是基于web的测试用例管理系统，主要功能是测试用例的创建、管理和执行，并且还提供了一些简单的统计功能。

						</div>
						<div className="wenTop commonNone">
							TestLink用于进行测试过程中的管理，通过使用TestLink提供的功能，可以将测试过程从测试需求、测试设计、到测试执行完整的管理起来，同时，它还提供了好多种测试结果的统计和分析，使我们能够简单的开始测试工作和分析测试结果。
						</div>
						<div className="imgAn"></div>
						<div className='commonNone'>TestLink 是sourceforge的开放源代码项目之一，作为基于web的测试管理系统。
							<ul className='gongneng'>
								<li className='gonhNengOne'>主要功能：</li>
								<li>测试需求管理</li>
								<li>测试用例管理</li>
								<li>测试用例对测试需求的覆盖管理</li>
								<li>测试计划的制定</li>
								<li>测试用例的执行</li>
								<li>大量测试数据的度量和统计功能。</li>
								<li>目前在XLS导入上存在缺陷，但可以使用第三方的“Testlink Convert”工具实现XLS/TXT/XML导入导出。</li>
							</ul>
						</div>
						<ul className='bottomPer'>
							<li className='jise'>软件特色</li>
							<li>免费开源代码遵循Apache2开源协议，免费使用，对商业用户也无任何限制；</li>
							<li>邮箱提醒系统会通过邮件及时的通知你的团队和客户。邮件通知的环节、形式、时间、接受人均可定制；</li>
							<li>权限控制基于项目的权限控制，支持创建多个项目的管理，每个人员可以属于不同项目的不同角色；</li>
							<li>系统可定制可以灵活的自定义多个信息，包括：自定义字段、邮件通知、管理流程、查询字段、报表字段等等；</li>
							<li>插件支持可以方面的在线安装多个插件，比如：图形报表、导出xls、统计分析等；</li>
							<li>广泛的技术支持Testlink是国内和国际上非常流程的系统，使用广泛，产品稳定可靠，值得信赖。</li>
						</ul>
					</div>
				</div>
				{/* <Footer></Footer> */}
			</div>
		);
	}
}
export default ToolDetails;
