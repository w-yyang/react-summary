import React from 'react';
import PropTypes from 'prop-types';

type StateTypes = {
  todos: string[];
};

export default class extends React.Component<any, StateTypes> {
  constructor(props){
    super(props)
    //初始化
    this.state = {
      todos:['吃饭','睡觉','打代码']
    }

    this.addTodo = this.addTodo.bind(this)
  }
  
  addTodo(todo){
    const {todos} = this.state
    todos.unshift(todo)
    //更新状态
    this.setState({todos})
  }

  render(){
  //return只可有一个跟标签
    const {todos} = this.state
    return (
      <div>
        <h2>Simple todo list</h2>
        <Add count={todos.length} addTodo={this.addTodo}/>
        <List todos={todos}/>
      </div>
    )
  }
}

type AddPropTypes = {
  addTodo: (todo: string) => void;
  count: number;
}

class Add extends React.Component<AddPropTypes>{
  todoInput: any;
  static propTypes: { count: PropTypes.Validator<number>; addTodo: PropTypes.Validator<(...args: any[]) => any>; };
  constructor(props){
    super(props)
    this.add = this.add.bind(this)
  }

  add(){
    //读取输入数据
    //检查合法性
    //添加
    const todo = this.todoInput.value.trim()
    if(!todo){
      return
    }
    this.props.addTodo(todo)

    //清楚输入
    this.todoInput.value = ''
  }

  render(){
    return(
      <div>
        <input type="text" ref={input => this.todoInput = input}/>
        <button onClick={this.add}>add #{this.props.count+1}</button>
      </div>
    )
  }
}

Add.propTypes = {
  count:PropTypes.number.isRequired,
  addTodo:PropTypes.func.isRequired
}

type ListPropTypes = {
  todos: string[];
};

class List extends React.Component<ListPropTypes>{
  static propTypes: { todos: PropTypes.Validator<any[]>; };
  render(){
    const {todos} = this.props
    return(
      <ul>
        {
          todos.map((todo,index) => {return <li key={index}>{todo}</li>})
        }
      </ul>
    )
  }
}

List.propTypes = {
  todos:PropTypes.array.isRequired
}