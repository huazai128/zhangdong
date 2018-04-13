
import React from 'react';
import './comonOur.scss';
import { Link, hashHistory } from 'react-router';
import NavLink from '../component/navLink';
import NavBox from './nav';
import { get, post } from "js/api/fetch";
import FormComponent from './form';
import { inject, observer } from 'mobx-react';

class SolveTop extends React.Component {
		render() {
			return (
				<div className='soleTop'>
					<div className="tokenContent flex">
						<div className="tokenLeft">
							<div className="tokenImg">
								<img src={require('img/token1.png')} />
							</div>
						</div>
						<div className='flex-col-3'></div>
						<div className="tokenRight">
							<div className="tokenRightContent">
								<div className="tokenHeader">APP软件测试解决方案</div>
								<div className='tokenContentImg'>
									<div>
										<ul className='tokenContentUl flex'>
											<li className='flex-col-5'><img src={require('img/token2.png')} />
												<p>功能测试</p>
											</li>
											<li className='flex-col-5'><img src={require('img/token3.png')} />
												<p>兼容测试</p></li>
											<li className='flex-col-5'><img src={require('img/token4.png')} />
												<p>性能测试</p></li>
										</ul>
									</div>
									<div>
										<ul className='tokenContentUl flex tokenTwo'>
											<li className='flex-col-7'><img src={require('img/token5.png')} />
												<p>压力测试</p></li>
											<li className='flex-col-7'><img src={require('img/token6.png')} />
												<p>安全测试</p></li>
										</ul>
									</div>
								</div>

								<div className="tokenButton" onClick={() => hashHistory.push('/app')}>
									查看案例
							</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
const navs = [
	{
		title: '产品与服务', path: '/service', data: [
			{ icon: require('img/index04.png'), title: '软件测试', path: '/service?one=one' },
			{ icon: require('img/index03.png'), title: '硬件测试', path: '/service?one=two' },
			{ icon: require('img/index02.png'), title: '认证', path: '/service?one=three' },
		]
	},
	{
		title: '解决方案', path: '/solve', data: [
			{ icon: require('img/index04.png'), title: 'APP软件测试解决方案', path: '/solve?four=0' },
			{ icon: require('img/index03.png'), title: '智能硬件测试解决方案', path: '/solve?four=1' },
			{ icon: require('img/index01.png'), title: '教育行业测试解决方案', path: '/solve?four=2' },
			{ icon: require('img/index05.png'), title: '运营商测试解决方案', path: '/solve?four=3' },
		]
	},
	{ title: '新闻动态', path: '/new' },
	{ title: '关于我们', path: '/our' },
];



@inject("login")
@observer
class Common extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			curNavs: [],
			title: '',
			bgUrl: ''
		};
		this.store = this.props.login;
	}
	onChange = (e, flag) => {
		this.setState({
			curNavs: [],
			show: false,
			title: '',
		});
	}
	componentWillUpdate() {
		this.store.expireToken();
	}

	render() {
		const { curNavs, show, title, bgUrl } = this.state;
		const isBolck = this.props.bgCls === 'solve';
		const isOther = this.props.bgCls == 'service';
		return <div id="common">
			<div className={`${this.props.bgCls} topBox`}>
				<div className="common-nav">
					<div id='navTop' className="flex common-top">
						<ul className="ulBox">
							<li className='liTwo flex-vcenter'><Link to="/"><img src={require('img/logo.png')} alt="" /></Link></li>
						</ul>
						<ul className="flex-g-1 flex-vcenter" >
							{navs && navs.map((item, index) => {
								return (
									<NavLink key={index} url={this.props.location.pathname} onMouseEnter={(e) => {
										this.setState({
											curNavs: item.data ? item.data : [],
											show: true,
											title: item.title
										});
									}} to={item.path}>{item.title}</NavLink>
								);
							})}
						</ul>
						<ul className="topBoxright flex-vcenter">
							<li className="blueBtn flex-center"><Link to='/creative'>测试者社区</Link></li>
						</ul>
					</div>
				</div>
				{curNavs.length > 0 && <NavBox data={curNavs} classStyle={show ? 'navs-action' : 'navs-hide'} title={title} change={this.onChange}></NavBox>}
				{this.props.bgCls !== 'main' ? (
					<div className="content">
						{isOther ? <div className="bottomContent">
							{this.props.bgCls === 'solve' || this.props.bgCls === 'main' || this.props.bgCls === 'new' || this.props.bgCls === 'our' || this.props.bgCls === 'app' || this.props.bgCls === 'hardware' || this.props.bgCls === 'education' ||
								this.props.bgCls === 'lab' || this.props.bgCls === 'female' || this.props.bgCls === 'alliance' || this.props.bgCls === 'provides' || this.props.bgCls === 'watch' || this.props.bgCls === 'newdetail' || this.props.bgCls === 'newdetailTwo' ? null : <FormComponent />}
						</div> : ''}
						<div className="count"></div>
						<div className='blockContent'>
							{isBolck ? <SolveTop /> : ''}
						</div>
					</div>
				) : null}
			</div>
		</div>;
	}
}
export default Common;
