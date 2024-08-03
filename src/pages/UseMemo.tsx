// input输入以及count变化均会触发
// 但仅与count有关 使用useMemo count改变执行,
// 类似vue计算属性，依赖项变化，自动重新计算
// 返回值可为函数，类似useCallback

import React, {useState, useMemo} from 'react';

export default function(props) {
  const [count, setCount] = useState(0);

  const expensive = useMemo(() => {
    console.log('computed');
    let sum = 0;
    for(let i = 0;i < count;i++){
      sum += i;
    }
    return sum;
  }, [count]); // 此处为依赖项

  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>{count}</p>
      <p>{expensive}</p>
      <button onClick={ ()=>setCount(count+1) }>ADD</button>
    </div>
  );
};