// useRef在多次渲染间共享数据
// 在类组件中我们定义类的成员变量，以便能够在对象上通过成员属性去保存一些数据。但是在函数组件中，是没有这样一个空间去保存数据的。因此，React让useRef来提供这样的功能。
// 返回的 ref 对象在组件的整个生命周期内持续存在。
// 我们可以吧useRef看作是函数组件之外创建的一个容器空间。在这个容器上，我们可以通过唯一的current属性设置一个值，从而在函数组件的多次渲染之间共享这个值。
import React, { useRef } from 'react';

// 利用useRef暂存值
export function useMethods<T extends Record<string, (...args: any[]) => any>>(methods: T) {
	const { current } = React.useRef({
		methods,
		func: undefined as T | undefined,
	});
	current.methods = methods;

	// 只初始化一次
	if (!current.func) {
		const func = Object.create(null);
		Object.keys(methods).forEach((key) => {
			// 包裹 function 转发调用最新的 methods
			func[key] = (...args: unknown[]) => current.methods[key].call(current.methods, ...args);
		});
		// 返回给使用方的变量
		current.func = func;
	}

	return current.func as T;
}

export default function () {
	const inpRef = useRef<HTMLInputElement>(null);
	// 可控制dom元素，.current为捕获的dom元素实例

	return (
		<div>
			<h3>useRef</h3>
			<div>
				<input type="text" ref={inpRef} />
				<button onClick={() => inpRef.current && inpRef.current.focus()}>聚焦</button>
			</div>
		</div>
	);
};
