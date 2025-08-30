import React from "react";

class PropsComp extends React.Component<{ test: string }, null> {
	constructor(props) {
		super(props);
	}

	render(): React.ReactNode {
		const { test } = this.props;

		console.log('propsParam', test);

		return (
			<div>{ test }</div>
		);
	}
}

export default function() {
	return (
		<div>
			<PropsComp test='1234567' />
		</div>
	);
}