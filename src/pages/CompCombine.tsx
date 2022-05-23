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
          //this.props.todos.map((todo,index) => <li key={index}>{todo}</li>)
          todos.map((todo,index) => {return <li key={index}>{todo}</li>})
        }
      </ul>
    )
  }
}

List.propTypes = {
  todos:PropTypes.array.isRequired
}

//静态组件 动态组件
/*数据保存在哪个组件
  看数据是某个组件需要（给他） 还是某些组件需要（给共同的父亲）

  需要在子组件中改变父组件状态
  子组件中不可直接改变父组件状态
  状态在哪个组建，更新状态的行为就应该在哪个组建
  解决：父组件定义函数，传递给子组件，子组件调用

  组件化编写功能流程
  1拆分组件
  2实现静态组件（无动态数据和交互）
  3实现动态组件
    （1）实现初始化数据动态显示
    （2）实现交互功能
*/