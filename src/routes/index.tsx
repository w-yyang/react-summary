import React, { ReactElement, Suspense } from 'react';
import {
	Routes,
	Route
} from 'react-router-dom';

import { routeList, IRouteList } from './routeItem';

const CompWrapper = ({ comp }: { comp: ReactElement | null }) => {
	return (
		<Suspense fallback={<div>组件加载中......</div>}>
			{ comp }
		</Suspense>
	);
};

const transformRouteConfig = (routeListItem: IRouteList, parentDir?: string) => {
	const Comp = routeListItem.component;
	if (!routeListItem.children) {
		return (
			<Route
				key={`${routeListItem.path}_no_child`}
				path={routeListItem.path}
				element={ <CompWrapper comp={Comp ? <Comp /> : null} /> }
			/>
		);
	} else {
		return (
			<Route 
				key={`${routeListItem.path}_has_child`} 
				path={routeListItem.path}
				element={ <CompWrapper comp={Comp ? <Comp /> : null} /> }
			>
				{
					routeListItem.children.map(rItem => transformRouteConfig(rItem, routeListItem.name))
				}
			</Route>
		);
	}
};

export const RouteList = () => {
	return (
		<Routes>
			{ 
				routeList.map(rItem => transformRouteConfig(rItem)) 
			}
		</Routes>
	);
};