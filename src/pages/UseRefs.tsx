import React from 'react';

const ControlBtn = React.forwardRef<HTMLButtonElement, any>((props, ref) => (
  <button ref={ref} {...props}>
      {props.children}
  </button>
));
//通过forwardRef来传入创建的ref并获取内部要操控的dom  forwardRef可以精确定位 ref不可
//通过ref来获取内部的dom组件

class RefsComp extends React.Component {
  btnRef = React.createRef<HTMLButtonElement>();

  btnClick = () => {
    console.log(this.btnRef.current);
  };

  render() {
    return (
      <>
        <h3 className='ctx-title'>Refs转发</h3>
        <div className='example'>
          <ControlBtn ref={this.btnRef} onClick={this.btnClick}>click</ControlBtn>
        </div>
      </>
    );
  }
};