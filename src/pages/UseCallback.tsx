import React, { useCallback, useState } from "react";

export default function() {
	const [countState, setCountState] = useState(0);

	const handleClick = useCallback((baseNum: number) => {
		setCountState(prev => prev + baseNum);
	}, []);

	return (
		<div>
			{ countState }
			<div>
				<button onClick={() => handleClick(5)}>+{5}</button>
			</div>
		</div>
	);
}