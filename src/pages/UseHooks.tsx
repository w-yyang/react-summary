import React, {useState, useEffect} from 'react';

//自定义hook命名要以use开头  达到组件抽离的作用
function useClock(){
  const [date, setDate] = useState(new Date());

  useEffect(() => {
      //仅需要在didMount时执行
      console.log('date effect')
      const timer = setInterval(() => {
          setDate(new Date());
      }, 1000);
      //清除定时器 willUnMount
      return () => clearInterval(timer);
  }, []);
  return date;
}

export default function() {
  const date = useClock();
  return (
    <>
      <p>{date.toLocaleTimeString()}</p>
    </>
  );
};

/**
* Hook 一个特殊的函数 可以钩入react特性
*  当需要在函数组件中添加state时使用
* 
* Hook使用规则
*      JavaScript函数
*      1.只能在函数最外层调用Hook，不要在循环 条件 或子函数中调用
*      2.只能在react的函数组件中调用Hook，不要在其他js函数中调用。
*      3.可在自定义的Hook中调用Hook
*/

// Hooks示例

// import { useState, useEffect } from 'react';

// // 获取横向，纵向滚动条位置
// const getPosition = () => {
//   return {
//     x: document.body.scrollLeft,
//     y: document.body.scrollTop,
//   };
// };
// const useScroll = () => {
//   // 定一个 position 这个 state 保存滚动条位置
//   const [position, setPosition] = useState(getPosition());
//   useEffect(() => {
//     const handler = () => {
//       setPosition(getPosition(document));
//     };
//     // 监听 scroll 事件，更新滚动条位置
//     document.addEventListener("scroll", handler);
//     return () => {
//       // 组件销毁时，取消事件监听
//       document.removeEventListener("scroll", handler);
//     };
//   }, []);
//   return position;
// };


// import React, { useCallback } from 'react';
// import useScroll from './useScroll';

// function ScrollTop() {
//   const { y } = useScroll();

//   const goTop = useCallback(() => {
//     document.body.scrollTop = 0;
//   }, []);

//   const style = {
//     position: "fixed",
//     right: "10px",
//     bottom: "10px",
//   };
//   // 当滚动条位置纵向超过 300 时，显示返回顶部按钮
//   if (y > 300) {
//     return (
//       <button onClick={goTop} style={style}>
//         Back to Top
//       </button>
//     );
//   }
//   // 否则不 render 任何 UI
//   return null;
// }



