/**
 * 默认入口文件
 */

import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {


  /**
   * 项目配置
   * 主要参考微信小程序的全局配置而来，在编译成小程序时，这一部分配置将会被抽离成 app.json，而编译成其他端，亦会有其他作用。
   * 微信小程序的全局配置：https://developers.weixin.qq.com/miniprogram/dev/framework/config.html
   */

  config = {
    // 指定需要渲染展示的页面。指定页面具体的 js 文件，可以不带后缀
    pages: [
      'pages/index/index'
    ],
    // 全局的默认窗口表现
    window: {
      navigationBarBackgroundColor: '#fff',  // 导航栏背景颜色
      navigationBarTitleText: '不知道显示在哪里', // 导航栏标题文字内容
      navigationBarTextStyle: 'black', // 导航栏标题颜色，仅支持 black / white
      backgroundTextStyle: 'light', // 下拉 loading 的样式，仅支持 dark / light
    },
    // 底部 tab 栏的表现
    // tabBar: {
    //   list: [
    //     {
    //       pagePath: 'pages/index/index',
    //       text: '首页'
    //     },
    //     {
    //       pagePath: 'pages/logs/logs',
    //       text: '日志'
    //     }
    //   ]
    // },
  }


  /**
   * 生命周期
   */

  // NOTE: 程序被载入，在微信小程序中对应 app 的 onLaunch。
  componentWillMount () {
  // NOTE: 微信小程序中 onLaunch 通常带有一个参数 options，在 Taro 中你可以在所有生命周期和普通事件方法中通过 this.$router.params 访问到，在其他端也适用。
    console.log(this.$router.params)
  }

  // NOTE: 程序被载入，在微信小程序中对应 app 的 onLaunch，在 componentWillMount 后执行。
  componentDidMount () {}

  // NOTE: 程序展示出来，在微信小程序中对应 onShow，在 H5 中同样实现。
  componentDidShow () {}

  // NOTE: 程序被隐藏，在微信小程序中对应 onHide，在 H5 中同样实现。
  componentDidHide () {}

  componentCatchError () {}

  // NOTE: 错误监听函数，在微信小程序中对应 onError。
  componentDidCatchError () {}

  // NOTE: 页面不存在监听函数，在微信小程序中对应 onPageNotFound。
  componentDidNotFound () {}
  

  /**
   * 微信小程序专属的方法成员
   * 注意：暂时只有微信小程序端支持这些方法，编译到 H5 端后这些方法均会失效。
   */

  // onPullDownRefresh	页面相关事件处理函数--监听用户下拉动作，需要在页面配置中开启 enablePullDownRefresh
  // onReachBottom	页面上拉触底事件的处理函数
  // onShareAppMessage	用户点击右上角转发
  // onPageScroll	页面滚动触发事件的处理函数
  // onTabItemTap	当前是 tab 页时，点击 tab 时触发
  // componentWillPreload	预加载，只在微信小程序中可用


  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  // NOTE: 不要在入口文件中的 render 方法里写逻辑及引用其他页面、组件，因为编译时 render 方法的内容会被直接替换掉，你的逻辑代码不会起作用。
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
