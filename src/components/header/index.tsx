import React from "react";

import './header.less';
import logo from './logo.svg';

export const AppHeader = () => {
	return (
		<header>
			<img src={logo} alt="" />
			<h2>react示例合集</h2>
		</header>
	);
};