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

// import React, {Component} from 'react';
// import {connect} from 'react-redux';

// export default connect(
//     //mapStateProps  将state映射到props上
//     state => ({num: state}),
//     //mapDispatchProps 将dispatch映射到props上
//     {
//         add: () => ({type: 'ADD'})
//     }
// )(
//     class ReactReduxPage extends Component{
//         render(){
//             console.log('props', this.props);
//             const {num, dispatch, add} = this.props;
//             return (
//                 <div>
//                     <h3>ReactReduxPage</h3>
//                     <p>{num}</p>
//                     {/* <button onClick={()=>dispatch({type: 'ADD'})}>add</button> */}
//                     <button onClick={add}>add</button>
//                 </div>
//             );
//         }
//     }
// );
