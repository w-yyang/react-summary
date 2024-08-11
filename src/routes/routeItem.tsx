// @ts-nocheck
import React, { ReactElement } from 'react';

interface IRouteListChild {
  path: string;
  name: string;
  title: string;
  children?: IRouteListChild[];
  component: any;
}

export interface IRouteList {
  path: string;
  title: string;
  name: string;
  component: any;
  children?: IRouteListChild[];
};

export const routeList: IRouteList[] = [
  {
    path: '/',
    title: '主页',
    name: 'Home',
    component: React.lazy(() => import('../pages/Home'))
  },
  {
    path: '/use/useState',
    title: 'useState使用',
    name: 'UseState',
    component: React.lazy(() => import('../pages/UseState'))
  },
  {
    path: '/use/useEffect',
    title: 'useEffect使用',
    name: 'UseEffect',
    component: React.lazy(() => import('../pages/UseEffect'))
  },
  {
    path: '/use/useCallback',
    title: 'useCallback使用',
    name: 'UseCallback',
    component: React.lazy(() => import('../pages/UseCallback'))
  },
  {
    path: '/use/useMemo',
    title: 'useMemo使用',
    name: 'UseMemo',
    component: React.lazy(() => import('../pages/UseMemo'))
  },
  {
    path: '/use/useContext',
    title: 'useContext使用',
    name: 'UseContext',
    component: React.lazy(() => import('../pages/UseContext'))
  },
  {
    path: '/use/useReducer',
    title: 'useReducer使用',
    name: 'UseReducer',
    component: React.lazy(() => import('../pages/UseReducer'))
  },
  {
    path: '/use/useRef',
    title: 'useRef使用',
    name: 'UseRef',
    component: React.lazy(() => import('../pages/UseRef'))
  },
  {
    path: '/use/useHOC',
    title: '高阶组件使用',
    name: 'UseHOC',
    component: React.lazy(() => import('../pages/UseHOC'))
  },
  {
    path: '/use/useRefs',
    title: 'Refs转发',
    name: 'UseRefs',
    component: React.lazy(() => import('../pages/UseRefs'))
  },
  {
    path: '/use/lifeCycle',
    title: '生命周期',
    name: 'LifeCycle',
    component: React.lazy(() => import('../pages/LifeCycle'))
  },
  {
    path: '/use/useProps',
    title: 'Props使用',
    name: 'UseProps',
    component: React.lazy(() => import('../pages/UseProps'))
  },
  {
    path: '/use/useHooks',
    title: '自定义Hooks',
    name: 'UseHooks',
    component: React.lazy(() => import('../pages/UseHooks'))
  },
  {
    path: '/use/useClassState',
    title: '类中state使用',
    name: 'UseClassState',
    component: React.lazy(() => import('../pages/UseClassState'))
  },
  {
    path: '/use/controlComp',
    title: '受控组件使用',
    name: 'ControlComp',
    component: React.lazy(() => import('../pages/ControlComp'))
  },
  {
    path: '/use/compCombine',
    title: '组件组合使用',
    name: 'CompCombine',
    component: React.lazy(() => import('../pages/CompCombine'))
  },
  {
    path: '/use/reactRedux',
    title: 'react-redux使用',
    name: 'ReactRedux',
    component: React.lazy(() => import('../pages/ReactRedux'))
  },
  {
    path: '/use/useRedux',
    title: 'redux使用',
    name: 'UseRedux',
    component: React.lazy(() => import('../pages/UseRedux'))
  },
  {
    path: '/use/bindThis',
    title: 'this绑定方式',
    name: 'BindThis',
    component: React.lazy(() => import('../pages/BindThis'))
  },
  {
    path: '/use/deliveryMsg',
    title: '子向父传递数据',
    name: 'DeliveryMsg',
    component: React.lazy(() => import('../pages/DeliveryMsg'))
  },
  {
    path: '/use/router',
    title: '路由使用',
    name: 'UseRouter',
    component: React.lazy(() => import('../pages/UseRouter')),
    children: [
      {
        path: 'test1',
        title: '路由1',
        name: 'UseRouter1',
        component: React.lazy(() => import('../pages/components/UseRouter/UseRouter1'))
      },
      {
        path: 'test1/:a',
        title: '路由1',
        name: 'UseRouter1',
        component: React.lazy(() => import('../pages/components/UseRouter/UseRouter1'))
      },
      {
        path: 'test2',
        title: '路由2',
        name: 'UseRouter2',
        component: React.lazy(() => import('../pages/components/UseRouter/UseRouter2'))
      },
      {
        path: 'test2/:a',
        title: '路由2',
        name: 'UseRouter2',
        component: React.lazy(() => import('../pages/components/UseRouter/UseRouter2'))
      },
      {
        path: 'test3',
        title: '路由3',
        name: 'UseRouter3',
        component: React.lazy(() => import('../pages/components/UseRouter/UseRouter3'))
      },
      {
        path: 'test3/:a',
        title: '路由3',
        name: 'UseRouter3',
        component: React.lazy(() => import('../pages/components/UseRouter/UseRouter3'))
      }
    ]
  },
  {
    path: '/use/pureComponent',
    title: 'PureComponent使用',
    name: 'PureComponent',
    component: React.lazy(() => import('../pages/PureComponent'))
  },
  {
    path: '/use/useSlot',
    title: '插槽使用',
    name: 'UseSlot',
    component: React.lazy(() => import('../pages/UseSlot'))
  },
  {
    path: '/use/baseJsx',
    title: 'jsx基础',
    name: 'UseJsx',
    component: React.lazy(() => import('../pages/UseJsx'))
  },
  {
    path: '/use/useImperativeHandle',
    title: 'useImperativeHandle',
    name: 'UseImperativeHandle',
    component: React.lazy(() => import('../pages/UseImperativeHandle'))
  },
  {
    path: '/use/httptest',
    title: 'Http请求打通',
    name: 'TestRequest',
    component: React.lazy(() => import('../pages/TestRequest'))
  },
  {
    path: '/use/singlefileupload',
    title: '单文件上传',
    name: 'SingleFileUpload',
    component: React.lazy(() => import('../pages/SingleFileUpload'))
  }
];