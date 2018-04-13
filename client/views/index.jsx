import './index.scss';
// 重置样式
import 'css/reset.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import React from 'react';
import RoutesConfig from './routes';
import { Provider } from 'mobx-react';
import stores from 'stores';
import { AppContainer } from 'react-hot-loader';
const mountNode = document.getElementById('root');
console.log(stores)
const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Provider {...stores}>
				<Component />
			</Provider>
		</AppContainer>,

		mountNode
	);
};




browserRedirect();
function browserRedirect() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/IPHONE os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
		window.location.href = "http://www.h5.appstest.cn/";
	} else {
		render(RoutesConfig);
	}
}



if (module.hot) {
	module.hot.accept('./routes', (err) => {
		ReactDOM.unmountComponentAtNode(mountNode);
		render(RoutesConfig);
	});
}


