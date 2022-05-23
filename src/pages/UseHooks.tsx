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
  return (
    <>
      <p>{useClock().toLocaleTimeString()}</p>
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