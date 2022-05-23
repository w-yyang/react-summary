/**   四块核心核心
  state状态
    DomainState 服务器返回的state
    UI State  关于当前组件的state
    App State  全聚德state
  Reducer
    本质就是函数
    响应发送过来的action
    函数接收两个参数 第一个是初始化的state 第二个是发送过来的action
    必须由return返回值
  Action事件
    本质就是一个js对象
    必须要包含type属性
    只是描述有事件发生，并没有描述如何更新state
  Store
    用来把action和reducer关联到一起
    通过createStore来构建store
    通过subscribe来注册监听

    < - - - - store.subscribe()的回调函数接受- - - - 
  component - - - ->        Reducer - - ->       Store
      store.dispatch(action)		通过return返回给store
      发送一个action

  创建action文件夹
    在该目录下创建index.js文件，用来构建Action	
    在action创建函数里利用return，返回一个action对象，注意携带type参数
    把action创建函数导出

  创建一个Reducer
    根目录下创建一个reducer文件夹
    在该目录下创建index.js文件，用来构建reducer，注意reducer要接受两个参数，第一个参数是默认状态， 第二个是action 可定义一个初始化的state，进行赋值
    在函数里判断第二个参数action的type值是否是我们发送的 如果是可以通过return返回新的state 最后导出reducer

  创建Store
    根目录下创建store文件夹
    在该目录下创建index.js文件，用来构建store，注意createStore函数里面第一个参数接受的是reducer	 */