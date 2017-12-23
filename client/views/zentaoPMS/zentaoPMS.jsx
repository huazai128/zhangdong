import React from 'react';
import './zentaoPMS.scss';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
class ToolDetails extends React.Component {
	render() {
		return (
			<div id="zentaoPMS">
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/community">测试工具</Link>&nbsp;>&nbsp;Testlink工具</div>
				</div>
				<div className="toolContent">
					<div className="toolTop flex jc-between">
						<div className="toolLeft flex">
							<div className="yuan"></div>
							<div className="text">
								<p className='textOne'>禅道项目管理软件</p>
								<p className='textTwo'>禅道项目管理软件集产品管理等</p>
							</div>
						</div>
						<div className="toolRight">
							<p className='ourOne'>我也要用</p>
						</div>
					</div>
					<div className="toolBottom">
						<div className="tuTop commonNone">
						禅道项目管理软件集产品管理、项目管理、质量管理、文档管理、组织管理和事务管理于一体，是一款功能完备的项目管理软件，完美地覆盖了项目管理的核心流程。
						</div>
						<div className="wenTop commonNone">
						禅和道是中国文化中极具代表意义的两个字，是中国传统文化的结晶。以“禅道”作为软件的名字，传达对管理的理解和思考，通过禅道来进行管理，可以摒弃繁文缛节，摒弃官本位的畸形，还原事情的本质。
						</div>
						<div className="imgAn"></div>
						<div className='commonNone'>
							<ul className='gongneng'>
								<li className='gonhNengOne'>禅道开放平台</li>
								<li>禅道开放平台是禅道项目管理软件（ZentaoPMS）推出的插件发布平台，鼓励禅道的使用者加入软件开发中，建立企业项目管理的生态系统，并与开发者实现共赢。禅道项目管理软件拥有大量的企业用户。</li>
								<li>很多企业根据自身业务提出许多个性化的需求，这些功能软件本身是无法全部实现的。而开发者可以针对特定需求开发相应的插件，并借助禅道插件开放平台，进行插件的发布与销售。</li>
								<li>框架结构清晰，扩展开发非常简单。禅道项目管理软件基于ZentaoPHP框架，框架遵循MVC设计模式，使代码更容易编写和维护，内置的插件扩展机制极大地方便了定制开发。另外，禅道项目管理软件代码完全开源，开发者完全可以通过阅读ZentaoPMS自身的代码，轻松学习禅道插件的开发。</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ToolDetails;
