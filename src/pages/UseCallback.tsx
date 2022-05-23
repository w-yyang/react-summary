import React, {useState, useCallback, PureComponent} from 'react';

export default function(){
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const addClick = useCallback(() => {
    let sum = 0;
    for(let i = 0;i < count;i++){
        sum += i;
    }
    return sum;
  }, [count]);//依赖项
  return (
    <div>
      <h3>UseCallBackPage</h3>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>ADD</button>
      <input type="text" value={value} onChange={event=>setValue(event.target.value)}/>
      <Child addClick={addClick}/>
      {/* count改变 child render 
            input改变child render
              没有必要 使用useCallBack 配合PureComponent
              达到优化目的 input触发不render child
      */}
    </div>
  );
}

type PropsType = {
  addClick: () => number;
};

class Child extends PureComponent<PropsType> {
  render(){
    console.log('child render');
    const {addClick} = this.props;
    return (
      <div>
        <h3>Child</h3>
        <button onClick={()=>console.log(addClick())}>Add</button>
      </div>
    );
  }
}