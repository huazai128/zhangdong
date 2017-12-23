import React from 'react';
import './mantis.scss';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
class ToolDetails extends React.Component {
	render() {
		return (
			<div id="mantis">
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/community">测试工具</Link>&nbsp;>&nbsp;Mantis测试工具</div>
				</div>
				<div className="toolContent">
					<div className="toolTop flex jc-between">
						<div className="toolLeft flex">
							<div className="yuan"></div>
							<div className="text">
								<p className='textOne'>Mantis测试工具</p>
								<p className='textTwo'>缺陷管理平台Mantis，也做MantisBT，全称Mantis Bug Tracker</p>
							</div>
						</div>
						<div className="toolRight">
							<p className='ourOne'>我也要用</p>
						</div>
					</div>
					<div className="toolBottom">
						<div className="tuTop commonNone">
							缺陷管理平台Mantis，也做MantisBT，全称Mantis Bug Tracker。
Mantis是一个基于PHP技术的轻量级的开源缺陷跟踪系统，以Web操作的形式提供项目管理及缺陷跟踪服务。在功能上、实用性上足以满足中小型项目的管理及跟踪。更重要的是其开源，不需要负担任何费用。
						</div>
						<div className="wenTop commonNone">
							概述缺陷管理平台Mantis[1]  ，也做MantisBT，全称Mantis Bug Tracker。
Mantis是一个基于PHP技术的轻量级的开源缺陷跟踪系统，以Web操作的形式提供项目管理及缺陷跟踪服务。在功能上、实用性上足以满足中小型项目的管理及跟踪。更重要的是其开源，不需要负担任何费用。

						</div>
						<div className="imgAn"></div>
						<div className='commonNone'>Mantis是一个缺陷跟踪系统具有多特性包括：易于安装，易于操作，基于Web，支持任何可运行PHP的平台(Windows,Linux,Mac,Solaris,AS400/i5等)，已经被翻译成68种语言，支持多个项目，为每一个项目设置不同的用户访问级别，跟踪缺陷变更历史，定制我的视图页面，提供全文搜索功能，内置报表生成功能(包括图形报表)，通过Email报告缺陷，用户可以监视特殊的Bug，附件可以保存在web服务器上或数据库中(还可以备份到FTP服务器上)，自定义缺陷处理工作流，支持输出格式包括csv、MicrosoftExcel、MicrosoftWord，集成源代码控制(SVN与CVS)，集成wiki知识库与聊天工具(可选/可不选)，支持多种数据库(MySQL、MSSQL、PostgreSQL、Oracle、DB2)，提供WebService(SOAP)接口，提供Wap访问。</div>
						<ul className='bottomPer'>
							<li className='jise'>基本特性</li>
							<li>1、个人可定制的Email通知功能，每个用户可根据自身的工作特点只订阅相关缺陷状态邮件；</li>
							<li>2、支持多项目、多语言；</li>
							<li>3、权限设置灵活，不同角色有不同权限，每个项目可设为公开或私有状态，每个缺陷可设为公开或私有状态，每个缺陷可以在不同项目间移动；</li>
						</ul>
					</div>
				</div>
				{/* <Footer></Footer> */}
			</div>
		);
	}
}
export default ToolDetails;
