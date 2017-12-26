import React from 'react';
import './solve.scss';
import { Link, hashHistory } from 'react-router';
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
		// console.log(this.props)
		return <div id='solve'>
			<div className="swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className="boxContentOne">
							<Common bgCls="solve" {...this.props} />
							<div className='countOne' style={{ zIndex: 1000, position: 'absolute', top: '88%', left: '50%', marginLeft: '-100px' }}>
								<p onClick={() => hashHistory.push('/app')}>查看案例</p>
							</div>

						</div>
					</div>
					<div className="swiper-slide">		<div className="content">
						<div className="box">
							<div className="boxcontent">
								<div className="count flex-center bbb">
									{/* <Link to='/hardware'><p >查看案例</p></Link> */}
									<p onClick={() => hashHistory.push('/hardware')}>查看案例</p>
								</div>
							</div>
						</div>
					</div></div>
					<div className="swiper-slide">	<div className="content ">
						<div className="box">
							<div className="threecont">
								<div className="count flex-center aaa">
									{/* <Link to='/education'><p>查看案例</p></Link> */}
									<p onClick={() => hashHistory.push('/education')}>查看案例</p>
								</div>
							</div>
						</div>
					</div></div>
					<div className="swiper-slide">	<div className="content ">
						<div className="box">
							<div className="fourcont">
								<div className="count flex-center ccc">
									{/* <Link to='/lab'><p>查看案例</p></Link> */}
									<p onClick={() => hashHistory.push('/lab')}>查看案例</p>
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
