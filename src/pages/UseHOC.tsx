import React from 'react';

// 返回组件无状态
function HOC1(WrappedComponent) {
	const newProps = {
		name: "HOC1"
	};
	return props => <WrappedComponent {...props} {...newProps}/>;
}

// 返回组件有状态
function HOC2(WrappedComponent) {
	return class extends React.Component {
		render() {
			const newProps = { type: "HOC2" };
			return (
				<WrappedComponent {...this.props} {...newProps}/>
			);
		}
	};
}

function HOC3(WrappedComponent) {
	return class extends React.Component {
		state: { name: string };

		constructor(props) {
			super(props);
			this.state = {
				name: ""
			};
			this.onChange = this.onChange.bind(this);
		}

		onChange = (event) => {
			this.setState({
				name: event.target.value
			});
		};

		render() {
			const newProps = {
				name: {
					value: this.state.name,
					onChange: this.onChange
				}
			};

			return <WrappedComponent {...this.props} {...newProps}/>;
		}
	};
}

// 获取refs引用
function HOC4(WrappedComponent) {
	let inputElement: null | HTMLInputElement = null;

	function handleClick() {
		(inputElement as HTMLInputElement).focus();
	}

	return (props) => {
		return (
			<div>
				<WrappedComponent 
					inputRef={(el) => inputElement = el}
					{...props}
				/>
				<input 
					type="button"
					value="调用子组件static"
					onClick={handleClick}/>
			</div>
		);
	};
}

// 反向继承
const HOC5 = (WrappedComponent) => {
	return class extends WrappedComponent {
		render() {
			return super.render();
		}
	};
};

// 劫持原组件生命周期
function HOC6(WrappedComponent) {
	const didMount = WrappedComponent.prototype.componentDidMount;

	return class extends WrappedComponent {
		constructor(props) {
			super(props);
		}

		componentDidMount() {
			console.log(WrappedComponent.prototype);
			if(didMount) {
				didMount.apply(this);
				console.log('componentDidMount方法被劫持');
			}
			// ...
		}

		render() {
			console.log('劫持组件的render');
			return super.render();
		}
	};
}

// 读取、操作原组件state
function HOC7(WrappedComponent) {
	const didMount = WrappedComponent.prototype.componentDidMount;
	// 继承了传入组件
	return class HOC extends WrappedComponent {
		async componentDidMount(){
			if (didMount) {
				await didMount.apply(this);
			}
			// 将 state 中的 number 值修改成 2
			this.setState({ number: 2 });
		}

		render(){
			//使用 super 调用传入组件的 render 方法
			return super.render();
		}
	};
}

// 条件渲染
const HOC8 = (WrappedComponent) =>
	class extends WrappedComponent {
		constructor(props) {
			super(props);
		}

		render() {
			console.log('render', this.props.isRender);
			if (this.props.isRender) {
				return super.render();
			} else {
				return <div>暂无数据</div>;
			}
		}
	};

// 修改React元素树
function HOC9(WrappedComponent) {
	return class extends WrappedComponent {
		render() {
			const tree = super.render();
			const newProps: { value?: string } = {};
			if (tree && tree.type === 'input') {
				newProps.value = 'something here';
			}
			const props = {
				...tree.props,
				...newProps,
			};
			const newTree = React.cloneElement(tree, props, tree.props.children);
			return newTree;
		}
	};
}

const TestComp = (props) => {
	console.log('props', props);

	return (
		<div>
      testComp
			<input
				ref={el => {
					if (props.inputRef) {
						props.inputRef(el); // 调用父组件传入的ref回调函数
					}
				}}
			/>
		</div>
	);
};

class TestC extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount(): void {
		console.log('test组件的componentDidMount');
	}

	render(): React.ReactNode {
		console.log('state', this.state);

		return (
			<div>ttttt</div>
		);
	}
}

const Hoc1C = HOC1(TestComp);
const Hoc2C = HOC2(TestComp);
const Hoc3C = HOC3(TestComp);
const Hoc4C = HOC4(TestComp);
const Hoc5C = HOC5(TestComp);
const Hoc6C = HOC6(TestC);
const Hoc7C = HOC7(TestC);
const Hoc8C = HOC8(TestComp); // ???有问题
const Hoc9C = HOC9(TestComp); // ???有问题

export default function() {
	return (
		<div>
			<Hoc1C />
			<hr />
			<Hoc2C />
			<hr />
			<Hoc3C />
			<hr />
			{/* @ts-ignores */}
			<Hoc4C />
			<hr />
			{/* @ts-ignores */}
			<Hoc5C />
			<hr />
			{/* @ts-ignores */}
			<Hoc6C />
			<hr />
			{/* @ts-ignores */}
			<Hoc7C />
			<hr />
			{/* @ts-ignores */}
			<Hoc8C />
			<hr />
			{/* @ts-ignores */}
			<Hoc9C />
		</div>
	);
}