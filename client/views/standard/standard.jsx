import React from 'react';
import './standard.scss';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
class ToolDetails extends React.Component {
	render() {
		return (
			<div id="standard">
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/knowledge">测试工具</Link>&nbsp;>&nbsp;智能硬件测试标准及方法</div>
				</div>
				<div className="toolContent">
					<div className="toolTop flex jc-between">
						<div className="toolLeft flex">
							<div className="yuan"></div>
							<div className="text">
								<p className='textOne'>智能硬件测试标准及方法</p>
								<p className='textTwo'>智能硬件测试标准及方法</p>
							</div>
						</div>
						<div className="toolRight">
							<p className='ourOne'>我也要用</p>
						</div>
					</div>
					<div className="toolBottom">
						<h2 className='muDi'>目的：</h2>
						<div className="tuTop commonNone">
							硬件测试是针对大型智能家电的测试需求进行分析评估，对大型智能冰箱提出具体测试方案，其目的是解决大型智能冰箱在使用过程中出现的异常和问题，并通过相关测试去发现潜在问题，消除可能的风险。
							<p>针对各类家用和类似用途电器，依据相关标准及技术规范，从自学习、自适应、自协调、自诊断、自推理、自组织、自校正和安全易用八个方面对各类家电的智能功能进行系统、科学的评价，一方面要向消费者进行推介，促进消费；另一方面将引导家电行业智能化发展方向，促进产品研发、标准发展。</p>
						</div>
						<div className="boxZhong">
							<h2 className='jingDian'>测试标准：</h2>
							<div className="imgAn one"></div>
							<div className='zhiContent'>
								<ul className='zhiBiao'>
									<li>智能家电评价标准体系</li>
									<li>1.基础标准：国家标准、企业标准</li>
									<li>2.家电设备结合智能设备</li>
									<li>3.智能设备组网，兼容性测试，用户体验指标</li>
								</ul>
							</div>
							<h2 className='jingDian'>智能家电功能特性范围:</h2>
							<div className="imgAn two"></div>
							<h2 className='jingDian'>冰箱智能特性分析:</h2>
							<div className="imgAn three"></div>
							<div className='iceContent'>
								<h2 className='jingDian'>智能冰箱智能化评价测试方法：</h2>
								<div>
									<div className='yuanDian'><i></i>自学习</div>
									<div>通过对被测器具及其技术资料的视检、手动操作等方式进行评价，自学习特性测试项内容：</div>
									<div><span className='spanOne'>学习能力：</span>器具允许用户自编程，对不同食品进行智能化管理（了解冰箱内的食物数量、了解食物的保鲜周期、自动提醒食物保质期时间），方便用户使用。</div>
									<div><span className='spanOne'>记忆能力：</span>器具能够根据不同的时间、负载条件、使用者等参数记忆用户设定程序，方便用户使用。</div>
									<div><span className='spanOne'>计算能力：</span>器具能够根据一段时间的用户设定，识别出常用程序选项，自动进行冰箱模式调换，方便用户。</div>
								</div>
								<div>
									<div className='yuanDian'><i></i>自适应</div>
									<div>通过对被测器具及其技术资料的视检、手动操作等方式进行评价，自适应特性测试项内容：</div>
									<div><span className='spanOne'>电源自适应：</span>器具能够在额定电压的（1±20%）、50H-60Hz范围内正常工作。</div>
									<div><span className='spanOne'>断电自恢复：</span>器具在短时间（不低于5s）的断电后再通电能够继续原有工作。</div>
									<div><span className='spanOne'>显示自适应：</span>器具能够根据周围环境亮度自主调整显示背光的亮度或关闭相关显示功能。</div>
									<div><span className='spanOne'>节能自适应：</span>不需人参与，冰箱根据环境温度、湿度，白天黑夜，自动调节压缩机运行频率，并自动进行开关机。</div>
									<div><span className='spanOne'>自动感知：</span>器具自动检测环境温度、环境湿度、人体位置、光线强弱，冰箱自身</div>
								</div>
								<div>
									<div className='yuanDian'><i></i>自协调</div>
									<div>通过对被测器具及其技术资料的视检、手动操作等方式进行评价，自协调特性测试项内容：</div>
									<div><span className='spanOne'>支持家电互连：</span>器具可以与其他家电互连，或可加入家庭控制系统，协同完成食品储藏工作。</div>
									<div><span className='spanOne'>支持远程控制：</span>器具可以与远程信息设备终端进行交互，在线查询冰箱内食物信息和（或）设置购物清单，提醒用户购买食物等，以方便用户使用。</div>
									<div><span className='spanOne'>支持网络服务：</span>器具可以与网络服务平台进行内容交互，下载使用说明和（或）上传器具运行维护信息等。</div>
								</div>
								<div>
									<div className='yuanDian'><i></i>自诊断</div>
									<div>通过对被测器具及其技术资料的视检、手动操作等方式进行评价，自诊断特性测试项内容：</div>
									<div><span className='spanOne'>未关门诊断：</span>器具能够识别用户忘记关门，并报警，用户可以通过远程控制关闭器具门。</div>
									<div><span className='spanOne'>硬件故障诊断：</span>器具能够诊断微控制器（MCU）、各种传感器电路以及其他硬件电路是否正常，并进行保护和（或）报警。</div>
									<div><span className='spanOne'>供电系统异常诊断：</span>器具能够识别供电系统异常（例如，没有接地），并进行保护和（或）报警。</div>
									<div><span className='spanOne'>节能自适应：</span>不需人参与，冰箱根据环境温度、湿度，白天黑夜，自动调节压缩机运行频率，并自动进行开关机。</div>
									<div><span className='spanOne'>清理蒸发器盘管诊断：</span>器具能够识别蒸发器盘管霜层厚度，对于不带自动除霜系统的器具，能够提示用户清理蒸发器盘管霜层。</div>
									<div><span className='spanOne'>网络平台故障诊断：</span>通过网络对产品运行参数的收集和分析发现故障并报警通知用户。</div>
									<div><span className='spanOne'>互联网解决：</span>器具报警后，互联网根据故障信息提供解决方案。</div>
								</div>
								<div>
									<div className='yuanDian'><i></i>自推理</div>
									<div>通过对被测器具及其技术资料的视检、手动操作等方式进行评价，自推理特性测试项内容：</div>
									<div><span className='spanOne'>性能预测：</span>器具有延迟化霜和延迟装载的选项，根据器具运行状态启动其中之一；带有制冰功能的器具，能够为用户提供制冰信息。</div>
									<div><span className='spanOne'>维护预测：</span>器具能够根据工作频次和实时检测数据，预测需要维护保养的时间。</div>
								</div>
								<div>
									<div className='yuanDian'><i></i>自组织</div>
									<div>通过对被测器具及其技术资料的视检、手动操作等方式进行评价，自组织特性测试项内容：</div>
									<div><span className='spanOne'>硬件系统自组织：</span>器具能够根据用户所选择的功能（如净化、除菌、保鲜等），结合实际采集到的信号，决定采用某个或某些元件的组合，实现该功能。</div>
									<div><span className='spanOne'>工作参数自组织：</span>器具能够根据用户设定（如速冻、变温等），自动调整参数，实现该功能。</div>
									<div><span className='spanOne'>软件流程自组织：</span>器具具有全天候预约设定功能，器具可预先设定一天中各个时间段的运行参数，并能实现按预设运行参数运行。</div>
								</div>
								<div>
									<div className='yuanDian'><i></i>自校正</div>
									<div>通过对被测器具及其技术资料的视检、手动操作等方式进行评价，自校正特性测试项内容：</div>
									<div><span className='spanOne'>控温自校正：</span>器具能够实现精确控温，使箱内温度保持均匀并与设定温度保持一致。</div>
									<div><span className='spanOne'>湿度自校正：</span>器具能够实现对感知到的器具内湿度进行校正和调整。</div>
								</div>
								<div className='iceLastContent'>
									<div className='yuanDian'><i></i>其他智能特性</div>
									<div>通过对被测器具及其技术资料的视检、手动操作等方式进行评价，其他智能特性测试项内容：</div>
									<div><span className='spanOne'>可扩展性：</span>器具硬件和软件具有模块化结构、冗余的计算和存储能力，可增加其他功能。</div>
									<div><span className='spanOne'>可升级性：</span>器具可以通过网络或其他方式升级功能性软件，增加、修改和删除功能程序。</div>
									<div><span className='spanOne'>可干预性：</span>器具允许用户在器具正常工作期间调节各间室温度等。</div>
									<div><span className='spanOne'>功能安全性：</span>器具除采用硬件保护外，采用软件保护用户使用安全。</div>
									<div><span className='spanOne'>信息安全性：</span>器具具备访问控制、数据保密、防止隐私泄露、保证数据完整性、防止网络攻击等能力。</div>
									<div><span className='spanOne'>易用性：</span>器具通过良好的用户界面（包括界面语言、文字和声光提示等）、引导式操作模式、场景式工作模式等方式提高用户使用的便利性。</div>
									<div><span className='spanOne'>智能冰箱可靠性测试：</span>可靠性测试是检验产品在预先设定的环境下，能否保持功能正常实现，从而评价产品能否在暴露在自然或人工环境条件下能否正常工作。通过各种环境试验设备模拟出不同的气候环境情况，如高温、低温、高温高湿以及温度变化等情况。测试产品在高温、低温、高温高湿以及温度变化等情况下的反应。验证产品在这些极端环境下是否达到预期的结果，从而评估产品的可靠性寿命。</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <Footer></Footer> */}
			</div>
		);
	}
}
export default ToolDetails;
