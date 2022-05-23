import React, { useState } from "react";
import { Link } from "react-router-dom";

import { routeList } from "../../routes/routeItem";
import './aside.less';

export const AppAside = () => {
  const [active, setActive] = useState(-1);
  const handleActive = (index: number) => {
    if (active != index) {
      setActive(index);
    }
  };
  
  return (
    <aside>
      <ul>
        {
          routeList.map((routeItem, index) => {
            return (
              <li className={index === active ? 'active' : ''} key={routeItem.title} onClick={() => handleActive(index)}>
                <Link to={routeItem.path}>{routeItem.title}</Link>
              </li>
            );
          })
        }
      </ul>
    </aside>
  );
};