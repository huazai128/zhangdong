import React from 'react';
import './platform.scss';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
class ToolDetails extends React.Component {
	render() {
		return (
			<div id="platform">
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/knowledge">测试工具</Link>&nbsp;>&nbsp;STF – 一个安卓设备管理操作平台</div>
				</div>
				<div className="toolContent">
					<div className="toolTop flex jc-between">
						<div className="toolLeft flex">
							<div className="yuan"></div>
							<div className="text">
								<p className='textOne'>STF – 一个安卓设备管理操作平台</p>
								<p className='textTwo'>STF – 一个安卓设备管理操作平台</p>
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
							STF的功能很强大，其中远程屏幕实时操作和设备信息获取等功能，是我去年在规划移动测试平台特别想做的，当时在想远程屏幕实时操作估计做起来复杂（所以一直没投入资源做这个功能）；看到STF的功能，真的让我眼前一亮。如果搭建云测试或者众测平台，应该用得上（或借鉴）STF。
							<ul>
								<li>简单说下STF的功能吧（只提我喜欢的或觉得很有用的）：</li>
								<li>1. 在Web上支持管理上百个android设备</li>
								<li>2. 支持Android多个版本（2.3.3 ~ 5.1），而且不需要root。</li>
								<li>3. 实时屏幕操作和显示</li>
								<li>4. 支持adb connnect远程连接调试</li>
								<li>5. 可以从PC机键盘输入到远程的android设备中</li>
								<li>6. 安装卸载APK</li>
								<li>7. android设备信息的展示（如：网络状态、MIME、android版本、手机型号等等）</li>
								<li>8. 远程开关机、远程开关WIFI、截屏、LogCat等等</li>
								<li>当然这个STF的安装还是稍微有点复杂的，我在Ubuntu工作机上花了1小时左右安装配置完成。</li>
							</ul>
						</div>
						<div className="imgAn"></div>
						<div className='commonNone lastInstall'>安装过程和代码，见：https://github.com/openstf/stf</div>
					</div>
				</div>
				{/* <Footer></Footer> */}
			</div>
		);
	}
}
export default ToolDetails;
