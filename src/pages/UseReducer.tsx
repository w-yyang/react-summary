import React, { useReducer } from 'react';

const initState = {
  name: '',
  count: 0
};

function initFunc(count) {
  return {
    count,
    name: ''
  };
}

function reducer(state, action) {
  switch(action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1
      };
    case "sub":
      return {
        ...state,
        count: state.count - 1
      };
    case "strchange":
      return {
        ...state,
        name: action.value
      };
    default: 
      return new Error("未定义动作");
  }
}

export default function () {
  // const [state, dispatch] = useReducer(reducer, initState);
  const [state, dispatch] = useReducer(reducer, 5, initFunc);
  // 三个参数 reducer 初始化state 函数初始化
  // useReducer类似useState
  return (
    <div>
      <h3>useReducer</h3>
      {state.count}
      <ul>
        <li onClick={() => dispatch({type: "add"})}>+1</li>
        <li onClick={() => dispatch({type: "sub"})}>-1</li>
        <li>
          <input 
            type="text" 
            value={state.name} 
            onChange={event => dispatch({type: "strchange", value: event.target.value})}/>
        </li>
      </ul>
    </div>
  );
};