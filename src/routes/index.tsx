import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import { routeList } from './routeItem';
import asyncComponent from '../components/asyncComponent';

interface IRouteList {
  path: string;
  component: any;
};

const routesList: IRouteList[] = routeList.map(item => {
  return {
    path: item.path,
    component: asyncComponent(() => require(`../pages/${item.name}`)),
  };
});

export const RouteList = () => {
  return (
    <Routes>
      { 
        routesList.map(item => {
          return <Route key={item.path} path={item.path} element={item.component ? <item.component /> : null} />;
        }) 
      }
    </Routes>
  );
};