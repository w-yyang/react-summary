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

    setCount = () => {
        this.setState({
            count: 100,
            obj: {
                num: 1000
            }
        });
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