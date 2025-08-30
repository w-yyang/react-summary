import React from 'react';
import { Provider, connect } from 'react-redux';

import store from '../stores/use-react-redux/store';
import { addAction, subAction } from '../stores/use-react-redux/reducer';

const mapStateToProps = state => {
	return state;
};

const mapDispatchToProps = dispatchEvent => {
	return {
		sendAddAction: () => dispatchEvent(addAction()),
		sendSubAction: () => dispatchEvent(subAction()),
	};
};

type PropsType = {
  sendAddAction: () => void;
  sendSubAction:  () => void;
  count: number;
};

const PkgCountDemo: React.ComponentType<any> = connect(mapStateToProps, mapDispatchToProps)(class CountDemo extends React.Component<PropsType>{
	constructor(props){
		super(props);
		console.log('this.props.sendAddAction();', this.props);
	}

	add(){
		this.props.sendAddAction();
	};

	subtract(){
		this.props.sendSubAction();
	};

	render(){
		return (
			<div className="count">
				<button onClick={()=>this.add()}>+</button>
				{/* @ts-ignore */}
				<span>{this.props.testReducer.count}</span>
				<button onClick={()=>this.subtract()}>-</button>
			</div>
		);
	}
});

export default function() {
	return (
		<>
			<Provider store={store}>
				<PkgCountDemo />
			</Provider>
		</>
	);
};