import React from 'react';
import { Link, hashHistory } from 'react-router';

// 根据路由判断
export default ({ children, to, url, ...rest }) => {
	const urlList=url.split('/')[1];
	const isActive = to === `/${urlList}`;//跳转到router判断url
	const style = isActive ? {borderBottom:'2px solid #3ea2fa',height:'48px !important'} : {};
	return <li {...rest} style={style} className="item"><Link to={to}>{children}</Link></li>;
};
