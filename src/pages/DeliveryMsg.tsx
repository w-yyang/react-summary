import React from 'react';

type StateType = {
  number: number;
};

const Child = (props) => {
  const { handleClick } = props;
  return (
    <div className='child'>
      <button onClick={() => handleClick(4)}>+4</button>
    </div>
  );
};

export default class extends React.Component<any, StateType> {
  constructor(props){
    super(props);
    this.state = {
        number: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(data){
    this.setState((prev) => ({
      number: data + prev.number
    }));
  }

  render(){
    return (
      <div className="parent">
        <h4>number: {this.state.number}</h4>
        <Child handleClick={this.handleClick}/>
      </div>
    )
  }
}