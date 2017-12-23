import React from 'react';
import './stfGuan.scss';
import Top from '../common/partyTop.jsx';
import Footer from '../common/lastFooter.jsx';
import { Link, hashHistory } from 'react-router';
class ToolDetails extends React.Component {
	render() {
		return (
			<div id="stfGuan">
				{/* <Top></Top> */}
				<div className="nav flex">
					<div className="navText"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/knowledge">测试工具</Link>&nbsp;>&nbsp;STF手机管理系统</div>
				</div>
				<div className="toolContent">
					<div className="toolTop flex jc-between">
						<div className="toolLeft flex">
							<div className="yuan"></div>
							<div className="text">
								<p className='textOne'>STF手机管理系统</p>
								<p className='textTwo'>STF手机管理系统</p>
							</div>
						</div>
						<div className="toolRight">
							<p className='ourOne'>我也要用</p>
						</div>
					</div>
					<div className="toolBottom">
						<div className="tuTop commonNone">
							<ul>
								<li>STF的优势：</li>
								<li>1.方便的手机管理系统，直接显示手机的物理位置，方便手机的查找；</li>
								<li>2.已连接的手机实时充电，需要使用手机时可以直接拆除或通过浏览器进行远程调试；</li>
								<li>3.查找方便，可以根据不同系统，不同分辨率快速查找设备，大大减少人力损耗；</li>
								<li>4.可远程调试手机，只需要浏览器即可远程控制手机进行任何常规操作，外出办公时，可以方便的使用任何连接上系统的机型，进行远程遥控手机进行测试，不需要携带大量机型外出，增强公司资产安全；</li>
								<li>5.不需要调试即可快速连接大量手机，节约了每次连接都需要的USB调试时间，更快更好的调试安装应用；</li>
								<li>6.可视化操作，操作学习成本低，新人也能很快的学习如何操作，实时的日志抓取，更加快捷的找到问题所在；</li>
							</ul>
						</div>
						<div className="imgAn"></div>
						<div className='commonNone'>
							<ul>
								<li>STF平台系统需求</li>
								<li>定使用Ubuntu系统进行STF的主机搭建：</li>
								<li>STF必备环境：</li>
								<li>Node.js （6.9以上版本即可，最新的稳定版本优先）</li>
								<li>ADB</li>
								<li>RethinkDB （2.2以上版本）</li>
								<li>GraphicsMagick </li>
								<li>ZeroMQ </li>
								<li>Protocol Buffers </li>
								<li>yasm installed </li>
								<li>pkg-config </li>
							</ul>
						</div>
						<ul className='bottomPer'>
							<li className='jise'>STF平台安装教程-1</li>
							<li>#安装node.js</li>
							<li>curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash –sudo apt-get install -y nodejs</li>
							<li>#安装ADB</li>
							<li>sudo apt-get install android-tools-adb</li>
							<li>#安装RethinkDB</li>
							<li>source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list</li>
							<li>wget -qO- https://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -sudo apt-get update
							</li>
							<li>sudo apt-get install rethinkdb</li>
							<li>#安装GraphicsMagick</li>
							<li>sudo apt-get install graphicsmagick</li>
							<li>#安装ZeroMQ</li>
							<li>sudo apt-get install libzmq3-dev</li>
							<li>#安装Protocol Buffers</li>
							<li>sudo apt-get install libprotobuf-dev</li>
							<li>#安装yasm</li>
							<li>sudo apt-get install yasm</li>
							<li>#安装pkg-config</li>
							<li>sudo apt-get install pkg-config</li>
							<li>#STF平台安装</li>
							<li>sudo npm install -g stf</li>
						</ul>
					</div>
				</div>
				{/* <Footer></Footer> */}
			</div>
		);
	}
}
export default ToolDetails;
