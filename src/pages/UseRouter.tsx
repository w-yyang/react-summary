import React, { useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation, useSearchParams, useParams } from "react-router-dom";

const getRandomNum = () => {
	return Number(Math.random().toFixed(1)) * 10;
};

export default function Comp() {
	const navigate = useNavigate();
	const { a } = useParams();
	const [searchParams] = useSearchParams();
	const location = useLocation();

	const routerTestList = [
		{
			path: '/use/router/test1',
			name: 'UseRouter1'
		},
		{
			path: '/use/router/test2',
			name: 'UseRouter2'
		},
		{
			path: '/use/router/test3',
			name: 'UseRouter3'
		}
	];

	const handleJump = (path: string) => {
		navigate(`${path}?a=${getRandomNum()}`, { state: { rIdP: getRandomNum() } });
	};

	useEffect(() => {
		console.log('locationInstance', location);
	}, [location]);

	useEffect(() => {
		console.log('searchParams', searchParams.get('a'));
	}, [searchParams]);

	useEffect(() => {
		console.log('useParams', a);
	}, [a]);

	return (
		<div>
			<div>
				<p>标签路由</p>
				{
					routerTestList.map(rItem => <Link key={`${rItem.path}_link`} to={`${rItem.path}/${getRandomNum()}`}>{ rItem.name }</Link>)
				}
			</div>
			<div>
				<p>编程路由</p>
				{
					routerTestList.map(rItem => <button key={`${rItem.path}_code`} onClick={() => handleJump(rItem.path)}>{rItem.name}</button>)
				}
			</div>
			<Outlet></Outlet>
		</div>
	);
}