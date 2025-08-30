import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const DemoComp = forwardRef(function(props, ref) {
	const inpRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => {
		return {
			focus() {
				inpRef.current?.focus();
			},
			setValue() {
			  inpRef.current.value = 'sadfghj';
			},
			domInstance: inpRef
		};
	}, []);

	return (
		<div>
			<input ref={inpRef} type="text" />
		</div>
	);
});

export default function() {
	const domRef = useRef();

	useEffect(() => {
		console.log('domRef.current', domRef.current);
		(domRef.current as unknown as HTMLInputElement)?.focus();
	}, []);

	return (
		<div>
			<DemoComp ref={domRef} />
		</div>
	);
}