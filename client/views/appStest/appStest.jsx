import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import './appStest.scss';
export default class Tab extends React.Component {
	render() {
		return (
			<div className='appStest'>
				<div className="nav flex">
					<div className="navText flex"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/itcontent">优质帖子</Link></div>
				</div>
				<div className="boxIt">
					<div className='boxItTop'>掌测AppSTest|连接兼容测试</div>
					<div className="itTop">
						<div className="textContentOne">
							<div>随着智能设备越来越智能，智能穿戴设备也越来越流行起来。由于市面上存在各式各样操作系统平台，智能穿戴设备需要对不同操作系统兼容，因此兼容测试显得越来越重要。</div>
							<div>掌测对于智能穿戴设备的兼容测试有着丰富的测试经验和资源。在兼容测试方面，拥有50人以上的测试团队，上千款真机测试，以人工手工测试、自动化脚步测试、人工审核测试结果为主。致力做最全面、最深度的兼容测试。</div>
							<div className='ziImgOne'>
								<div>
									<div>
										<img src={require('img/lian1.jpg')} />
										<img src={require('img/lian2.jpg')} />
									</div>
									<div>
										<img src={require('img/lian3.jpg')} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='ceBottom'>
						<div className='boxItTop'>测试真机</div>
						<div>掌测兼容测试团队成立至今，已为近百款智能设备和app做兼容测试服务。而且一致得到产品商家对测试服务的质量和态度的认可。</div>
						<div className='ceJi'>
							<img src={require('img/lian4.jpg')} />
							<img src={require('img/lian5.jpg')} />
						</div>
					</div>
					<div className='ceContent'>
						<div className='boxItTop'>测试产品</div>
						<div>本公司兼容测试以手工测试为主，自动化测试为辅助相结合。结合手工测试对数据的准确性、业务流程的符合、人性判断的优点和自动化测试节省大量重复性和回归测试的优势，以优质的兼容测试为服务的宗旨。</div>
					</div>
				</div>
			</div>
		);
	}
}
