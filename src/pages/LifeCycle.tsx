import React from "react";

export default class extends React.Component<null, { num: number }> {
	constructor(props) {
		super(props);
		console.log('constructor', props);

		this.state = {
			num: 0
		};
	}

	add = () => {
		this.setState((prev) => ({ num: prev.num + 1 }));
	};

	static getDerivedStateFromProps(props, state) {
		console.log('getDerivedStateFromProps', props, state);

		return state;
	}

	shouldComponentUpdate(nextProps, nextState, newContext) {
		console.log('shouldComponentUpdate', nextProps, nextState, newContext);
		return true;
	}

	render() {
		const { num } = this.state;

		return (
			<>
				<div>123456</div>
				<p>{ num }</p>
				<button onClick={this.add}>+1</button>
			</>
		);
	}

	componentDidMount(...args) {
		console.log('componentDidMount', args);
	}

	// 返回快照信息
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('getSnatShotBeforeUpdate', prevProps, prevState);

		return {
			test: '1111'
		};
	}

	// snapShot getSnatShotBeforeUpdate返回的快照
	componentDidUpdate(prevProps, prevState, snapShot) {
		console.log('componentDidUpdate', prevProps, prevState, snapShot);
	}

	componentWillUnmount(...args) {
		console.log('componentWillUnmount', args);
	}

	componentDidCatch(error, info) {
		console.log('componentDidCatch', error, info);
	}

	static getDerivedStateFromError(error) {
		console.log('getDerivedStateFromError', error);
	}
}