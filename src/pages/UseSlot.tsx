import React, {Component, ReactElement} from 'react';

const TopBar = () => {
  return (
    <>
      <h1>顶部导航</h1>
    </>
  );
};

const BottomBar = () => {
  return (
    <>
      <h1>底部导航</h1>
    </>
  );
};

type PropType = {
  showTopBar: boolean;
  showBottomBar: boolean;
  title: string;
  children: any;
};

class Layout extends Component<PropType> {
  componentDidMount(){
    const { title="商城" } = this.props;
    document.title = title;
  }

  render(){
    const { children, showTopBar, showBottomBar } = this.props;
    console.log(children);
    return (
      <div>
        {showTopBar ? <TopBar /> : null}
        <h1>layout</h1>
        {/* {children} */}
        {children[1].content} 
        {children[1].txt}
        {/* 具名插槽 类似vue  传递过来是数组 */}
        {/* 插槽作用 */}
        <button onClick={children[1].btnClick}>按钮</button>
        {showBottomBar ? <BottomBar /> : null}
      </div>
    );
  }
};

export default class extends Component{
    render(){
        return (
            <Layout showTopBar={false} showBottomBar={true} title="wyy">
                <h3>HomePage</h3>
                {{
                    content: (
                        <div>
                            <h1>www</h1>
                        </div>
                    ),
                    txt: 'asdasdsadsa',
                    btnClick: () => {
                        console.log('btnClick事件传递')
                    }
                }}
            </Layout>
        );
    }
}