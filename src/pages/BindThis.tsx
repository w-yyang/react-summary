import React from 'react';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.event3 = this.event3.bind(this);
  }

  event1 = () => {
    console.log('事件触发1')
  };

  event2(){
    console.log('事件触发2');
  }

  event3(){
    console.log('事件触发3');
  }

  render(){
    return (
      <div className="bind-this">
        <h4>this绑定</h4>
        <button onClick={this.event1}>触发1</button>
        <button onClick={()=>this.event2()}>触发2</button>
        <button onClick={this.event3}>触发3</button>
      </div>
    );
  }
}