import React, {useState, useEffect} from 'react';

export default function(props: any) {
  //相当于this.state
  const [date, setDate] = useState(new Date());
  //相当于setState
  useEffect(() => {
    //相当于componentDidMount componentDidUpdate  componentWillUnmount的集合
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  //定义一个count的state变量
  const [count, setCount] = useState(0);//不能写在循环 条件 。。。中
  // const [date, setDate] = useState(new Date());
  //副作用  相当于didMount 和didUpdate 注意书写位置
  useEffect(() => {
      console.log('count effect');
      //只需在count改变时执行
      document.title = `点击了${count}次`;
  }, [count]);//添加依赖项 仅。。。执行

  // useEffect(() => {
  //     //仅需要在didMount时执行
  //     console.log('date effect')
  //     const timer = setInterval(() => {
  //         setDate(new Date());
  //     }, 1000);
  //     //清除定时器 willUnMount
  //     return () => clearInterval(timer);
  // }, []);


  //[]此为依赖项
  return (
    <div>
      <h3>FuncCom</h3>
      <p>{date.toLocaleTimeString()}</p>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>ADD</button>
      {/* <p>{date.toLocaleTimeString()}</p> */}
    </div>
  );
};