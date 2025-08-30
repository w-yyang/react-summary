import React, { createContext, useContext, useState } from "react";

const initValObj = {
	num: 0,
	add: (num: number) => null,
};

const GlobalContext = createContext(initValObj);

const GlobalProvider = ({ children }) => {
	const [numState, setNumState] = useState(0);

	const valueObj = {
		num: numState,
		add: (baseNum: number) => {
			setNumState(prev => prev + baseNum);
		}
	};

	return (
		<GlobalContext.Provider value={valueObj}>
			{ children }
		</GlobalContext.Provider>
	);
};

const ChildElem = () => {
	const globalObj = useContext(GlobalContext);

	console.log('globalObj', globalObj);
  
	return (
		<div>
			<span>{ globalObj.num }</span>
			<button onClick={() => globalObj.add(4)}>add func</button>
		</div>
	);
};

export default function() {
	return (
		<div>
			<GlobalProvider>
				<ChildElem />
			</GlobalProvider>
		</div>
	);
}