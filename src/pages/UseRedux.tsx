import React from 'react';

import store from '../stores/use-redux/store';
import { sendAction } from '../stores/use-redux/action-types';

// 有问题 待修复
export default class extends React.Component{

  componentDidMount() {
    store.subscribe(() => {
      console.log(store.getState());
    });
  }

  handleClick = () => {
    const action = sendAction();
    store.dispatch(action);
    this.setState({});
  };

  render(){
      return (
        <>
          <button onClick={this.handleClick}>点击</button>
          <div>{ store.getState().value }</div>
        </>
      )
  }
}