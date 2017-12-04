import { Router, hashHistory } from 'react-router';
import React from 'react';


const routes = [
    {
        path: '/',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {//按需加载
                cb(null, require('views/main/main').default)
            }, 'main')//main表示在调试工具network中显示的名字
        },
        childRoutes: [

        ]
    },
    {
        path: '/service',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/service/service').default)
            }, 'service')
        }
    },
    {//配置路由
        path: '/function',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/function/function').default)
            }, 'function')
        }


    },
    {
        path:'/app',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/app/app').default)
            }, 'app')
        }
    },
    {
        path:'/solve',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/solve/solve').default)
            }, 'solve')
        }
    },
    {
        path:'/new',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/new/new').default)
            }, 'new')
        }
    },
    {
        path:'/compatible',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/compatible/compatible').default)
            }, 'compatible')
        }
    },
    {//性能
        path:'/property',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/property/property').default)
            }, 'property')
        }
    },
    {//格兰仕
        path:'/reliability',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/reliability/reliability').default)
            }, 'reliability')
        }
    },
    {//智慧灯
        path:'/wisdom',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/wisdom/wisdom').default)
            }, 'wisdom')
        }
    },
     {//angle
        path:'/angle',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/angle/angle').default)
            }, 'angle')
        }
    },
    {//CMA
        path:'/CMA',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/CMA/CMA').default)
            }, 'CMA')
        }
    },
    {//CNAS
        path:'/CNAS',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/CNAS/CNAS').default)
            }, 'CNAS')
        }
    },
     {//hardware
        path:'/hardware',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/hardware/hardware').default)
            }, 'hardware')
        }
    },
    {//education
        path:'/education',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/education/education').default)
            }, 'education')
        }
    },
    {//lab
        path:'/lab',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('views/lab/lab').default)
            }, 'lab')
        }
    },
];

class RouterConfig extends React.Component {
    render() {
        return <Router history={hashHistory} routes={routes} />
    }
}

export default RouterConfig;