import { number } from 'prop-types';
import React, {PureComponent} from 'react';

type StateType = {
  count: number;
  obj: { num: number };
};

export default class extends PureComponent<any, StateType>{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            obj: {
                num: 0
            }
        };
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return nextState.count != this.state.count;
    //     // 有条件渲染 优化性能
    // }

    setCount = () => {
        this.setState({
            count: 100,
            obj: {
                num: 1000
            }
        });
        // purecomponent state为对象时 setState会不断触发render
        // 原因：比较方法为浅比较，仅比较一层 
    };

    render(){
        const {count} = this.state;
        console.log('render');
        return (
            <div>
                <h3>PureComponentPage</h3>
                <button onClick={this.setCount}>{count}</button>
            </div>
        );
    }
}

/**
 * 使用PureComponent不用使用shouldComponentUpdate 内置 已实现 Component为实现
 * 会自动优化
 */