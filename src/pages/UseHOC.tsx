import React from 'react';

// 返回组件无状态
function HOC1(WrappedComponent) {
  const newProps = {
    type: "asdasd"
  };
  return props => <WrappedComponent {...props} {...newProps}/>
}

// 返回组件有状态
function HOC2(WrappedComponent) {
  return class extends React.Component {
    render() {
      const newProps = { type: "asdasdsa" }
      return (
        <WrappedComponent {...this.props} {...newProps}/>
      );
    }
  };
}

function HOC3(WrappedComponent) {
  return class extends React.Component {
    state: { name: string }

    constructor(props) {
      super(props);
      this.state = {
        name: ""
      };
      this.onChange = this.onChange.bind(this);
    }

    onChange = (event) => {
      this.setState({
        name: event.target.value
      });
    };

    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onChange
        }
      };

      return <WrappedComponent {...this.props} {...newProps}/>
    }
  };
}

// HOC3使用
// @HOC
// class Example extends Component {
//   render() {
//     return <input name="name" {...this.props.name} />;
//   }
// }

// 获取refs引用
// import * as styles from './index.module.less';

// function HOC4(WrappedComponent) {
//   let inputElement = null;

//   function handleClick() {
//     inputElement.focus();
//   }

//   function wrappedComonentStatic() {
//     WrappedComponent.sayHello();
//   }

//   return (props) => {
//     <div className={styles.hocWrapper}>
//       <WrappedComponent 
//         inputRef={(el) => inputElement = el}
//         {...props}/>
//       <input 
//         type="button"
//         value="调用子组件static"
//         onClick={wrappedComonentStatic}/>
//     </div>
//   };
// }

// HOC4使用示例
// class User extends React.Component<IProps> {
//   private inputElement: any ;

//   static sayHello () {
//     console.error('hello world'); // tslint:disable-line
//   }

//   constructor (props: IProps) {
//     super(props);
//     this.focus = this.focus.bind(this);
//     this.onChange = this.onChange.bind(this);
//   }

//   state = {
//     name: '',
//     age: 0,
//   };

//   componentDidMount () {
//     this.setState({
//       name: this.props.name,
//       age: this.props.age,
//     });
//   }

//   onChange = (e: any) => {
//     this.setState({
//       age: e.target.value,
//     });
//   }

//   focus () {
//     this.inputElement.focus();
//   }

//   render () {
//     return (
//       <div className={styles.wrapper}>
//         <div className={styles.nameWrapper}>姓名：{this.state.name}</div>
//         <div className={styles.ageWrapper}>
//           年龄:
//             <input
//               className={styles.input}
//               value={this.state.age}
//               onChange={this.onChange}
//               type="number"
//               ref={input => {
//                 if (this.props.inputRef) {
//                   this.props.inputRef(input); // 调用父组件传入的ref回调函数
//                 }
//                 this.inputElement = input;
//               }}
//             />
//         </div>
//         <div>
//           <button
//             className={styles.button}
//             onClick={this.focus}
//           >
//             获取输入框焦点
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// 反向继承
const HOC5 = (WrappedComponent) => {
  return class extends WrappedComponent {
    render() {
      return super.render();
    }
  }
};

// 劫持原组件生命周期
function HOC6(WrappedComponent) {
  const didMount = WrappedComponent.prototype.componentDidMount;

  return class extends WrappedComponent {
    componentDidMount() {
      if(didMount) {
        didMount.apply(this);
      }
      // ...
    }

    render() {
      return super.render();
    }
  };
}

// 读取、操作原组件state
function HOC7(WrappedComponent) {
  const didMount = WrappedComponent.prototype.componentDidMount;
  // 继承了传入组件
  return class HOC extends WrappedComponent {
    async componentDidMount(){
      if (didMount) {
        await didMount.apply(this);
      }
      // 将 state 中的 number 值修改成 2
      this.setState({ number: 2 });
    }

    render(){
      //使用 super 调用传入组件的 render 方法
      return super.render();
    }
  }
}

// 条件渲染
const HOC8 = (WrappedComponent) =>
  class extends WrappedComponent {
    render() {
      if (this.props.isRender) {
        return super.render();
      } else {
        return <div>暂无数据</div>;
      }
    }
  }

// 修改React元素树
// function HOC9(WrappedComponent) {
//   return class extends WrappedComponent {
//     render() {
//       const tree = super.render();
//       const newProps = {};
//       if (tree && tree.type === 'input') {
//         newProps.value = 'something here';
//       }
//       const props = {
//         ...tree.props,
//         ...newProps,
//       };
//       const newTree = React.cloneElement(tree, props, tree.props.children);
//       return newTree;
//     }
//   };
// }


export default HOC1(function (props) {
  const { type } = props;
  return (
    <div>
      <h3>useHOC</h3>
      <p>{type}</p>
    </div>
  );
});