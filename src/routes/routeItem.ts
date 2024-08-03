interface IRouteList {
  path: string;
  title: string;
  name: string;
};

export const routeList: IRouteList[] = [
  {
    path: '/',
    title: '主页',
    name: 'Home'
  },
  {
    path: '/use/useState',
    title: 'useState使用',
    name: 'UseState'
  },
  {
    path: '/use/useEffect',
    title: 'useEffect使用',
    name: 'UseEffect'
  },
  {
    path: '/use/useCallback',
    title: 'useCallback使用',
    name: 'UseCallback'
  },
  {
    path: '/use/useMemo',
    title: 'useMemo使用',
    name: 'UseMemo'
  },
  {
    path: '/use/useContext',
    title: 'useContext使用',
    name: 'UseContext'
  },
  {
    path: '/use/useReducer',
    title: 'useReducer使用',
    name: 'UseReducer'
  },
  {
    path: '/use/useRef',
    title: 'useRef使用',
    name: 'UseRef'
  },
  {
    path: '/use/useHOC',
    title: '高阶组件使用',
    name: 'UseHOC'
  },
  {
    path: '/use/useRefs',
    title: 'Refs转发',
    name: 'UseRefs'
  },
  {
    path: '/use/lifeCycle',
    title: '生命周期',
    name: 'LifeCycle'
  },
  {
    path: '/use/useProps',
    title: 'Props使用',
    name: 'UseProps'
  },
  {
    path: '/use/useHooks',
    title: '自定义Hooks',
    name: 'UseHooks'
  },
  {
    path: '/use/useClassState',
    title: '类中state使用',
    name: 'UseClassState'
  },
  {
    path: '/use/controlComp',
    title: '受控组件使用',
    name: 'ControlComp'
  },
  {
    path: '/use/compCombine',
    title: '组件组合使用',
    name: 'CompCombine'
  },
  {
    path: '/use/reactRedux',
    title: 'react-redux使用',
    name: 'ReactRedux'
  },
  {
    path: '/use/useRedux',
    title: 'redux使用',
    name: 'UseRedux'
  },
  {
    path: '/use/bindThis',
    title: 'this绑定方式',
    name: 'BindThis'
  },
  {
    path: '/use/deliveryMsg',
    title: '子向父传递数据',
    name: 'DeliveryMsg'
  },
  {
    path: '/use/router/*',
    title: '路由基础',
    name: 'UseRouter'
  },
  {
    path: '/use/pureComponent',
    title: 'PureComponent使用',
    name: 'PureComponent'
  },
  {
    path: '/use/useSlot',
    title: '插槽使用',
    name: 'UseSlot'
  },
  {
    path: '/use/baseJsx',
    title: 'jsx基础',
    name: 'UseJsx'
  },
  {
    path: '/use/useImperativeHandle',
    title: 'useImperativeHandle',
    name: 'UseImperativeHandle'
  }
];