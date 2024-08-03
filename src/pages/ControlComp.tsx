import React, { useState } from 'react';

import '../assets/ctx-header.less';

export default function() {
  const [content, setContent] = useState('');
  const [element, setElement] = useState(null);
  const handleSubmit = (event) => {
    console.log('提交元素', event);
    event.preventDefault();
    console.log('用户1', element.value);
    console.log('用户2', content);
  };
  const handleChange = (event) => {
    console.log('获取的dom元素', event);
    setContent(event.target.value);
  };

  return (
    <>
      <h3 className='ctx-title'>受控组件使用</h3>
      <div className="example">
        <form action="" onSubmit={handleSubmit}>
          用户1：<input type="text" ref={input => setElement(input)} /><br/>
          用户2：<input type="text" value={content} onChange={handleChange}/><br/>
          <input type="submit" value="提交"/>
        </form>
      </div>
    </>
  );
};