import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import './sound.scss';
export default class Tab extends React.Component {
	render() {
		return (
			<div className='sound'>
				<div className="nav flex">
					<div className="navText flex"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/itcontent">优质帖子</Link></div>
				</div>
				<div className="boxIt">
					<div className='boxItTop'>智能音箱</div>
					<div className="itTop">
						<div className="textContentOne">
							<div>"互联网+"是创新2.0下的互联网发展的新业态，是知识社会创新2.0推动下的互联网形态演进及其催生的经济社会发展新形态。智能音箱，结合互联网+的的理念创造而成，是一个音箱升级的产物智能音箱。但是同样作为一种新生产品，目前还有很多地方并不完善，需要不断的发现问题并改进问题，才能使产品越发成熟。</div>
							<div>掌测紧跟潮流，开创系统的智能音箱硬件测试流程并为之应用至实际项目之中。</div>
							<div className='ziImgOne'>
								<div>
									<div>
										<img src={require('img/yin1.jpg')} />
										<img src={require('img/yin1.jpg')} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
