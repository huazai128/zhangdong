import { Router, hashHistory } from 'react-router';
import React from 'react';


const routes = [
	{
		path: '/',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {//按需加载
				cb(null, require('views/main/main').default);
			}, 'main');//main表示在调试工具network中显示的名字
		},
		childRoutes: [

		]
	},
	// serivce单页面刷新 path: '/service(/:id)',
	{
		path: '/service',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/service/service').Service);
			}, 'service');
		},
		indexRoute: {//子组件
			getComponent: (nextState, cb) => {
				require.ensure([], (require) => {
					cb(null, require('views/service/service').ServiceContent);
				}, 'serviceContent');
			}
		},
		childRoutes: [
			{
				path: 'function',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/function/function').default);
					}, 'function');
				}
			},
			{
				path: 'compatible',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/compatible/compatible').default);
					}, 'compatible');
				}
			},
			{//性能
				path: 'property',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/property/property').default);
					}, 'property');
				}
			},
			{//格兰仕
				path: 'reliability',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/reliability/reliability').default);
					}, 'reliability');
				}
			},
			{//智慧灯
				path: 'wisdom',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/wisdom/wisdom').default);
					}, 'wisdom');
				}
			},
			{//angle
				path: 'angle',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/angle/angle').default);
					}, 'angle');
				}
			},
			{//CMA
				path: 'CMA',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/CMA/CMA').default);
					}, 'CMA');
				}
			},
			{//CNAS
				path: 'CNAS',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/CNAS/CNAS').default);
					}, 'CNAS');
				}
			},
		]
	},
	{//newDetail
		path: '/newdetail',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/newdetail/newdetail').default);
			}, 'newdetail');
		}
	},
	{//alliance
		path: '/alliance',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/alliance/alliance').default);
			}, 'alliance');
		}
	},
	{//provides
		path: '/provides',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/provides/provides').default);
			}, 'provides');
		}
	},
	{//female
		path: '/female',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/female/female').default);
			}, 'female');
		}
	},
	{//watch
		path: '/watch',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/watch/watch').default);
			}, 'watch');
		}
	},
	{//newdetailTwo
		path: '/newdetailTwo',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/newdetailTwo/newdetailTwo').default);
			}, 'newdetailTwo');
		}
	},
	{
		path: '/app',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/app/app').default);
			}, 'app');
		}
	},
	{
		path: '/solve',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/solve/solve').default);
			}, 'solve');
		}
	},
	// {//单页面
	// 	path: '/new',
	// 	getComponent: (nextState, cb) => {
	// 		require.ensure([], (require) => {
	// 			cb(null, require('views/new/new').New);
	// 		}, 'new');
	// 	},
	// 	indexRoute:{//子组件
	// 		getComponent: (nextState, cb) => {
	// 			require.ensure([], (require) => {
	// 				cb(null, require('views/service/service').ServiceContent);
	// 			}, 'serviceContent');
	// 		}
	// 	},
	// 	childRoutes:[

	// 	]
	// },
	{//new
		path: '/new',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/new/new').default);
			}, 'new');
		}
	},
	{
		path: '/cloud(/:id)',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/cloud/cloud').default);
			}, 'cloud');
		}
	},

	{//hardware
		path: '/hardware',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/hardware/hardware').default);
			}, 'hardware');
		}
	},
	{//education
		path: '/education',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/education/education').default);
			}, 'education');
		}
	},
	{//lab
		path: '/lab',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/lab/lab').default);
			}, 'lab');
		}
	},
	{//our
		path: '/our',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/our/our').default);
			}, 'our');
		}
	},
	{//登陆页面
		path: '/login',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/login/login').default);
			}, 'login');
		}
	},
	{// 实现单页面刷新   社区集市
		path: '/creative',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('views/creative/creative').Creative);
			}, 'creative');
		},
		indexRoute: {//子组件
			getComponent: (nextState, cb) => {
				require.ensure([], (require) => {
					cb(null, require('views/creative/creative').CreativeContent);
				}, 'creativeContent');
			}
		},
		childRoutes: [
			{//测试社区  注意路径
				path: 'orderTaking',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/orderTaking/orderTaking').default);
					}, 'orderTaking');
				}
			},
			{
				path: 'auditing',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/auditing/auditing').default);
					}, 'auditing');
				}
			},
			{
				path: 'receipt',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/receipt/receipt').default);
					}, 'receipt');
				}
			},
			{
				path: 'completed',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/completed/completed').default);
					}, 'completed');
				}
			},
			{//创新科技
				path: 'community',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/community/community').default);
					}, 'community');
				}
			},
			{//知识库
				path: 'knowledge',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/knowledge/knowledge').default);
					}, 'knowledge');
				}
			},
			{//个人中心
				path: 'personal',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/personal/personal').default);
					}, 'personal');
				}
			},
			{//富文本编辑器 --》发表评论
				path: 'quill',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/quill/quill').default);
					}, 'quill');
				}
			},
			{//贴吧详情
				path: 'barDel',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/barDel/barDel').default);
					}, 'barDel');
				}
			},
			{
				path: 'itcontent',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/itcontent/itcontent').default);
					}, 'itcontent');
				}
			},
			{
				path: 'gelan',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/gelan/gelan').default);
					}, 'gelan');
				}
			},
			{
				path: 'zhangce',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/zhangce/zhangce').default);
					}, 'zhangce');
				}
			},
			{
				path: 'appStest',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/appStest/appStest').default);
					}, 'appStest');
				}
			},
			{
				path: 'sound',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/sound/sound').default);
					}, 'sound');
				}
			},
			{
				path: 'ziDong',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/ziDong/ziDong').default);
					}, 'ziDong');
				}
			},
			{//工具详情
				path: 'tooldetails',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/tooldetails/tooldetails').default);
					}, 'tooldetails');
				}
			},
			{
				path: 'mantis',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/mantis/mantis').default);
					}, 'mantis');
				}
			},
			{
				path: 'testlink',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/testlink/testlink').default);
					}, 'testlink');
				}
			},
			{
				path: 'zentaoPMS',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/zentaoPMS/zentaoPMS').default);
					}, 'zentaoPMS');
				}
			},
			{
				path: 'stfGuan',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/stfGuan/stfGuan').default);
					}, 'stfGuan');
				}
			},
			{
				path: 'platform',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/platform/platform').default);
					}, 'platform');
				}
			},
			{
				path: 'ability',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/ability/ability').default);
					}, 'ability');
				}
			},
			{
				path: 'standard',
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('views/standard/standard').default);
					}, 'standard');
				}
			},
		]
	}

];

class RouterConfig extends React.Component {
	render() {
		return <Router history={hashHistory} routes={routes} />;
	}
}

export default RouterConfig;
