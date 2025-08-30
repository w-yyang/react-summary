import React from "react";
import { HashRouter } from "react-router-dom";

import { AppHeader } from './components/header';
import { AppAside } from './components/aside';
import { AppContent } from './components/content';
import './app.less';

export default function App() {
	return (
		<div className="app-container">
			<AppHeader />
			<div className="ctx-wrapper">
				<HashRouter>
					<AppAside />
					<AppContent />
				</HashRouter>
			</div>
		</div>
	);
};