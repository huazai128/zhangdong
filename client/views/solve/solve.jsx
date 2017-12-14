import React from 'react';
import './solve.scss';
import { Link } from 'react-router';
import 'js/lib/swiper.css';
import Common from '../common/comonOur.jsx';


class Sovle extends React.Component {
	componentDidMount() {
		setTimeout(() => {
			var mySwiper = new window.Swiper('.swiper-container', {
				direction: 'vertical',
				slidesPerView: 1,
				spaceBetween: 30,
				mousewheel: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		}, 100);
	}
	render() {
		return <div id='solve'>
			<div className="swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						{/* <div className="topBox">
							<div className="content">
								<div className="box">
									<div className="twocontent">
										<div className="flex">
											<ul className="flex-vcenter flex-g-1">
												<li className='liOne'><a href="javascript:void(0);"><img src={require('img/logo.png')} alt="" /></a></li>
												<li className="item"><Link to="/service">产品与服务</Link></li>
												<li className="item"><Link to="/solve">解决方案</Link></li>
												<li className="item"><Link to="/new">新闻动态</Link></li>
												<li className="item"><Link to="/our">关于我们</Link></li></ul>
											<ul className="topBoxright flex-vcenter">
												<li><Link to='/main'>注册</Link></li><li><Link to='/login'>登陆</Link></li><li className="blueBtn"><Link to='/creative'>测试者社区</Link></li>
											</ul>
										</div>
										<div className="count flex-center ">
											<Link to='/app'><p>查看案例</p></Link>
										</div>

									</div>
								</div>
							</div>
						</div> */}
						<div className="boxContentOne">
							<Common bgCls="solve" />
							<div className='countOne' style={{ zIndex: 1000, position: 'absolute', top: '88%', left: '50%' }}>
								<Link to='/app'><p>查看案例</p></Link>
							</div>

						</div>
					</div>
					<div className="swiper-slide">		<div className="content">
						<div className="box">
							<div className="boxcontent">
								<div className="count flex-center bbb">
									<Link to='/hardware'><p >查看案例</p></Link>
								</div>
							</div>
						</div>
					</div></div>
					<div className="swiper-slide">	<div className="content ">
						<div className="box">
							<div className="threecont">
								<div className="count flex-center aaa">
									<Link to='/education'><p>查看案例</p></Link>
								</div>
							</div>
						</div>
					</div></div>
					<div className="swiper-slide">	<div className="content ">
						<div className="box">
							<div className="fourcont">
								<div className="count flex-center ccc">
									<Link to='/lab'><p>查看案例</p></Link>
								</div>
							</div>
						</div>
					</div></div>

				</div>
				<div className="swiper-pagination"></div>
			</div>
		</div>;
	}
}
export default Sovle;
