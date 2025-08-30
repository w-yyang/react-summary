import React from 'react';

import store from '../stores/use-redux/store';
import { changeVal } from '../stores/use-redux/reducer';

// 有问题 待修复
export default class extends React.Component<unknown, { value: string }> {
	constructor(props) {
		super(props);

		this.state = {
			value: store.getState().value
		};
	}

	componentDidMount() {
		store.subscribe(() => {
			console.log('监听函数', store.getState());
			this.setState({
				value: store.getState().value
			});
		});
	}

	handleClick = () => {
		store.dispatch(changeVal('asdfsgdhfjg'));
	};

	render(){
		return (
			<>
				<button onClick={this.handleClick}>点击</button>
				<div>{ this.state.value }</div>
			</>
		);
	}
}