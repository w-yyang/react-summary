import { createStore } from 'redux';

import { reducer } from './reducer'; 

const store = createStore(reducer);

export default store;

//redux:
//      创建初始的initState，创建reducer，reducer拥有两个参数，
//      初始的state以及接受的action，action拥有两个属性，type以及数据payload
//      reducer内部可使用switch case语句依据action的type属性判断执行相应事件，
//      reducer过多时可使用combineReducer进行合并导出
//      利用createStore包裹创建的reducer并导出作为store