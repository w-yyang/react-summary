import React, {Component} from 'react';
import {
    // BrowserRouter as Router,
    Link,
    Route,
    Routes
} from 'react-router-dom';

// 有问题，待修改
export default class RouterPage extends Component{
    render(){
        return (
            <div>
                <h3>RouterPage</h3>
                {/* <Router> */}
                    <Link to="/use/router">首页</Link>
                    <Link to="/use/router/user">用户中心</Link>
                    {/* a标签 */}
                    <Routes>
                        <Route 
                            // exact
                            path="/use/router" 
                            element={HomePage}
                            children={()=><div>children</div>}
                          />
                        {/* 优先级 children->component->render
                            children func
                            render func
                            render={()=><div>render</div>}
                        */}
                        <Route path="/user" element={UserPage}/>
                        <Route element={EmptyPage}/>
                        {/* 仅匹配一个 */}
                    </Routes>
                    {/* 由上至下匹配路由 */}
                {/* </Router> */}
            </div>
        );
    }
}

class HomePage extends Component{
    render(){
        return (
            <div>
                <h3>HomePage</h3>
            </div>
        );
    }
}

class UserPage extends Component{
    render(){
        return (
            <div>
                <h3>UserPage</h3>
            </div>
        );
    }
}

class EmptyPage extends Component{
    render(){
        return (
            <div>
                <h3>EmptyPage 404</h3>
            </div>
        );
    }
}

/**
 * react-router包含三个库
 *      react-router react-router-dom react-router-native
 *      react-router提供最基本功能实际使用不会直接安装此插件一般作为依赖项自动安装
 *      浏览器中react-router-dom
 *      ReactNative中react-router-native
 * 安装时自动安装react-router
 */