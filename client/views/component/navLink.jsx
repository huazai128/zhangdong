import React from 'react';
import { Link, hashHistory } from 'react-router';

// 根据路由判断
export default ({ children, to, url }) => {
	const urlList=url.split('/')[1];
	const isActive = to === `/${urlList}`;//跳转到router判断url
	const style = isActive ? { borderBottom: '2px solid #3FA3FB', paddingBottom: '2px' } : {};
	return <li style={style} className="item"><Link to={to}>{children}</Link></li>;
};
