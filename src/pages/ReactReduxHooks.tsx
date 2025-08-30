import React from "react";
import { Provider, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "../stores/use-react-redux/store";
import { addAction, subAction } from "../stores/use-react-redux/reducer";

function ReactReduxHooks() {
	const storeCount = useSelector<{ testReducer: { count: number } }, number>((state) => state.testReducer.count);
	const dispatch = useDispatch();

	const handleAdd = () => {
		dispatch(addAction());
	};

	const handleSub = () => {
		dispatch(subAction());
	};

	return (
		<div>
			<p>{ storeCount }</p>
			<button onClick={() => handleAdd()}>+1</button>
			<button onClick={() => handleSub()}>-1</button>
		</div>
	);
}

export default class extends React.Component {
	render(): React.ReactNode {
		return (
			<Provider store={store}>
				<ReactReduxHooks />
			</Provider>
		);
	}
}