import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import store from '../stores/use-react-redux/store';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
      sendAddAction: () => {
          dispatch({
              type: 'add_action'
          });
      },
      sendSubAction: () => {
          dispatch({
              type: 'sub_action'
          });
      }
  };
};

type PropsType = {
  sendAddAction: () => void;
  sendSubAction:  () => void;
  count: number;
};

const PkgCountDemo: React.ComponentType<any> = connect(mapStateToProps, mapDispatchToProps)(class CountDemo extends React.Component<PropsType>{
  constructor(props){
		super(props);
		console.log(this.props);
  }

  add(){
    this.props.sendAddAction();
  };

  subtract(){
    this.props.sendSubAction();
  };

  render(){
    return (
      <div className="count">
        <button onClick={()=>this.add()}>+</button>
        <span>{this.props.count}</span>
        <button onClick={()=>this.subtract()}>-</button>
      </div>
    )
  }
});

export default function(props) {
  return (
    <>
      <Provider store={store}>
				<PkgCountDemo />
      </Provider>
    </>
  );
};