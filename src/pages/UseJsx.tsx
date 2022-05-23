import React from 'react';

import logo from '../components/header/logo.svg';

const name = 'aaaaa';
const show = false;
const arr = ['a','b','c'];
const obj = {
  first: 'asdf',
  last: 'csadw'
};
const good = (
  <h1>great</h1>
);
const jsx = (
  <div>
      hello react, {name}
      <h2>{formatName(obj)}</h2>
      {good}
      {show ? good : 'qqqq'}
      {
        show && good
      }
      <ul>
        {/* diff时首先比较type 其次比较key 同级同类型元素 key必须唯一 */}
        {
          arr.map(item => {
            return (<li key={item}>{item}</li>)
          })
        }
      </ul>
      <img src={logo} className="logo" style={{width: '50px', height: '40px'}}/>
  </div>
);

function formatName(name){
  return name.first + ' ' + name.last;
}

