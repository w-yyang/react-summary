import React from 'react';

import '../assets/ctx-header.less';

type StateType = {
  count: number;
  user: {
    name: string;
    age: number;
  };
};

export default class extends React.Component<'', StateType> {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			user: {
				name: 'aaa',
				age: 11,
			},
		};
		this.syncHandleClick = this.syncHandleClick.bind(this);
	}

	handleClick = () => {
		const { count } = this.state;
		console.log('老的count值', count);
		this.setState({
			count: count + 1
		}, () => {
			console.log('最新count值', this.state.count);
		});
	};

	syncHandleClick() {
		const { count } = this.state;
		this.setState((oldState, oldProps) => {
			console.log(oldState, oldProps);
			return {
				count: count + 2
			};
		});
	}

	render(): React.ReactNode {
		const { count } = this.state;
		return (
			<>
				<h3 className='ctx-title'>类中state使用</h3>
				<p>{ count }</p>
				<button onClick={() =>this.handleClick()}>同步执行</button>
				<button onClick={() => this.syncHandleClick()}>异步执行</button>
			</>
		);
	}
};

// state更新可能异步 更改为同步传递函数执行
// 利用setState回调函数做更新值马上处理的操作