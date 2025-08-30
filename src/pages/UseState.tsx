import React, { useState } from "react";

import '../assets/ctx-header.less';

export default function() {
	const [data, setData] = useState({
		count: 0
	});
	const initCountFunc = () => {
		return 0;
	};
	// 函数初始化状态
	const [count] = useState(initCountFunc);
	return (
		<>
			<h3 className="ctx-title">useState使用</h3>
			<div className="example">
				<p>count: {data.count}--{count}</p>
				{/* 当前状态变更与上一次状态有关，传递函数变更，参数为上次状态 */}
				<button onClick={() => setData(data => ({ count: data.count + 1 }))}>+1</button>
			</div>
		</>
	);
};