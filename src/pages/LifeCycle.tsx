import React, {Component} from 'react';
import PropTypes from 'prop-types';

type StateType = {
  count: number;
};

export default class LifeCyclePage extends Component<any, StateType>{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        console.log('constructor');
    }

    static defaultProps = {
        msg: 'wyy'
    };

    static propTypes = {
        msg: PropTypes.string.isRequired
    };

    //新加生命周期
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
        const {count} = state;
        return count > 5 ? {count: 0} : null;
        // return null;//需要返回值
        //render方法之前调用 初始挂载及后续更新时被调用
        //应返回一个对象来更新state 返回null则不更新任何内容
    }

    // componentWillMount(){
    //     console.log('componentWillMount');
    // }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        const {count} = nextState;
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;//必须有返回值 表示是否更新
    }

    //新加生命周期
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        return {
            msg: 'mmmmmmm'
        };
        // return null;  
        //在render之后 componentDidUpdate之前
        //在最近一次渲染输出之前调用此生命周期任何返回值将作为参数传给componentDidUpdate(prevProps, prevState, snapshot)
    }

    // componentWillUpdate(){
    //     console.log('componentWillUpdate');
    // }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState, snapshot);//第三个参数依据getSnapshotBeforeUpdate变动
    }
    //react声明周期可能有变动 查看官网
    //componentWillMount
    //componentWillReceiveProps
    //componentWillUpdate三个生命周期已废除 使用需加UNSAFE_前缀 不报警告
    //新版本生命周期与废除的生命周期会产生冲突

    setCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render(){
        console.log('render', this.props);
        const {count} = this.state;
        return (
            <div>
                <h3>LifeCyclePage</h3>
                <p>{count}</p>
                <button onClick={this.setCount}>{this.state.count}</button>
                {count % 2 && <Child count={count}/>}
            </div>
        );
    }
}

class Child extends Component<{ count: number }>{
    //初次渲染的时候不会执行 只有在以挂载的组件接受新的props时才会执行
    // componentWillReceiveProps(nextProps){
    //     console.log('componentWillReceiveProps', nextProps);
    // }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render(){
        const {count} = this.props;
        return (
            <div>
                <h3>child</h3>
                <p>{count}</p>
            </div>
        );
    }
}

// type StateType = {
//   opacity: number;
// };

// export default class extends React.Component<any, StateType> {
//   intervalId: any;
//   constructor(props: any){
//     super(props)
//     this.state = {
//       opacity: 0
//     };
//   }

//   componentDidMount(){
//     //启动循环定时器  点击按钮后未销毁 内存泄漏
//     this.intervalId = setInterval(function(){
//       let { opacity } = this.state;
//       //setInterval this是window
//       opacity -= 0.1
//       if(opacity <= 0){
//       opacity = 1
//       }
//       this.setState({opacity})
//     }.bind(this),200)
//   }

//   componentWillUnmount(){
//     //清理定时器
//     clearInterval(this.intervalId);
//   }

//   render() {
//     const {opacity} = this.state;
//     return (
//       <div>
//         <h2 style={{opacity:opacity}}></h2>
//       </div>
//     )
//   }
// };

/**
 *  1.ReactDOM.render() 第一次初始化渲染显示
    constructor() 创建对象初始化state
    componentWillMount() 将要插入回调
    render() 用于插入虚拟DOM回调
    componentDidMount() 已经插入回调

    2.state:this.setState()
    componentWillUpdate() 将要更新回调
    render() 更新（重新渲染）
    componentDidUpdate() 已经更新回调

    3.ReactDOM.unmountComponentAtNode(containerDom)移除组件
    componentWillUnmount()组件将要被移除回调

    render初始化渲染或更新渲染调用
    componentDidMount开启监听，发送ajax请求
    componentWillUnmount做收尾工作
    componentWillReceiveProps
 */