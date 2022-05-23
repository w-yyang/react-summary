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

// export default class ReduxPage extends Component{
//   componentDidMount(){
//       // 给予通知
//       store.subscribe(() => {
//           console.log('state发生变化了');
//           //页面重新渲染
//           this.forceUpdate();
//           //强制刷新
//       });
//   }

//   render(){
//       console.log(store);
//       return (
//           <div>
//               <h3>ReduxPage</h3>
//               <p>{store.getState()}</p>
//               <button onClick={()=>store.dispatch({type: 'ADD'})}>add</button>
//               {/* state变更了 但页面未刷新 需要通知*/}
//           </div>
//       );
//   }
// }