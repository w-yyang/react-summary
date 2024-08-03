import React, { useState, useEffect } from 'react';

export default function(props: any) {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);
  let timer;

  // 相当于componentDidMount componentDidUpdate  componentWillUnmount的集合
  useEffect(() => {
    timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => timer && clearInterval(timer);
  }, []);

  useEffect(() => {
      console.log('count effect');
      document.title = `点击了${count}次`;
  }, [count]);

  return (
    <div>
      <p>{date.toLocaleTimeString()}</p>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>ADD</button>
    </div>
  );
};