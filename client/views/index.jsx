import './index.scss';
// 重置样式
import 'css/reset.css';
import ReactDOM from 'react-dom';
import React from 'react';
import RoutesConfig from './routes';
import { AppContainer } from 'react-hot-loader';
const mountNode = document.getElementById('root');

import 'antd/dist/antd.css';

// ReactDOM.render(
// 	<RoutesConfig />
// 	mountNode
// );

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		mountNode
	);
};

render(RoutesConfig);

if (module.hot) {
	module.hot.accept('./routes', (err) => {
		ReactDOM.unmountComponentAtNode(mountNode);
		render(RoutesConfig);
	});
}


