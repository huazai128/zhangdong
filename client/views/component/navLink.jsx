import React from 'react';
import { Link, hashHistory } from 'react-router';

// 根据路由判断
export default ({ children, to, url }) => {
	const isActive = to === url;//跳转到router判断url
	const style = isActive ? { borderBottom: '2px solid #3FA3FB',paddingBottom:'4px' } : {};
	return <li style={style} className="item"><Link to={to}>{children}</Link></li>;
};
