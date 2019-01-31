import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import PropTypes from 'prop-types';

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))


class Index extends Component {

  /** 
   * 【页面配置】
   * 注意：
   * 小程序专属
   */
  config = {
    navigationBarTitleText: '首页22',
    backgroundColor: 'red', // 窗口的背景色（配置无效）
  }

  /**
   * 【组件的构造函数，将会在装配之前被调用】
   * 注意：
   * 若你不初始化状态且不绑定方法，那你也不需要为你的 Taro 组件定义一个构造函数。
   * 当为一个 Taro.Component 子类定义构造函数时，你应该在任何其他的表达式之前调用 super(props)。否则，this.props 在构造函数中将是未定义，并可能引发异常。
   */
  constructor(props){
    super(props)
    /** 
     * 【属性 props】
     * 注意：
     * props 是只读的。
     * 永远不要直接改变 this.state，因为调用 setState()会替换你之前做的改变。
     */

    /** 
     * 【状态 state】
     * 注意：
     * 若你不在 render() 方法中使用它，那它就不应该被放在 state 中。（可以直接用 this 向类中添加其他字段。）
     * setState() 函数是唯一能够更新 this.state 的地方。永远不要直接改变 this.state，因为调用 setState()会替换你之前做的改变。
     * 状态更新一定是异步的。
     * 在 setState 的第二个参数传入一个 callback，在这里可以取到更新后的值。
     * Taro 可以将多个 setState() 调用合并（浅合并）成一个调用来提高性能。
     * （React 不一定总是异步的。但 Taro 会把待更新对象加入一个数组，然后在执行下一个 eventloop 的时候合并它们，一定是异步的。）
     */
    // 初始化状态
    this.state = { 
      date: new Date(),
    }
  }


  /**
   * 其他 API
   */
  // setState(){}
  // forceUpdate(){}


  /**
   * 生命周期
   */


  // 装载(Mounting)，这些方法会在组件实例被创建和插入 DOM 中时被调用：

  /**
   * 【在组件在装载发生前被立刻调用】
   * 注意：
   * 避免在该方法中引入任何的副作用或订阅。对于这些使用场景，推荐使用 constructor()来替代。
   */
  componentWillMount(){}

  // 在这里会调用 render()

  /**
   * 【在组件被装载后，即组件输出到 DOM 后，立即调用】
   * 注意：
   * 初始化使得 DOM 节点应该进行到这里。
   * 若你需要从远端加载数据，这是一个适合实现网络请求的地方。
   * 这是一个建立定时器的好地方。
   * 在该方法里 setState() 将会触发重新渲染。
   */
  componentDidMount(){
    // 关于 timerID ：如果需要存储不用于视觉输出的东西，则可以手动向类中添加其他字段。
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }


  // 更新(Updating)，属性或状态的改变会触发一次更新。当一个组件在被重新渲染时，这些方法将会被调用：

  /**
   * 【在已经装载的组件接收到新属性前调用】
   * @param {Object} nextProps
   * 注意：
   * 即使属性未有任何改变，Taro 可能也会调用该方法。
   * 若你需要更新状态响应属性改变，你可能需对比 this.props 和 nextProps 并在该方法中使用 this.setState() 处理状态改变。
   * 在装载期间，Taro 并不会调用带有初始属性的 componentWillReceiveProps 方法。调用 this.setState 通常不会触发。
   */
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  /**
   * 【当接收到新的 props 或 state 时，在渲染之前被调用。判断组件的输出是否不受当前变化的影响】
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean} 默认返回 true 
   * 注意：
   * 第一次渲染 或 forceUpdate() 时，不调用此方法。
   * 返回 false 不会阻止子组件在 state 更改时重新渲染。
   */
  shouldComponentUpdate(nextProps, nextState){}

  /**
   * 【当接收到新的 props 或 state 时，在渲染之前被调用。在更新发生之前，使用这个方法可以作为执行准备更新的一个好机会】
   * @param {Object} nextProps
   * @param {Object} nextState
   * 注意：
   * 第一次渲染时，不调用此方法。
   * 这里不能调用 this.setState() 。如果需要更新 state 以响应 props 更改，请改用 componentWillReceiveProps()。
   */
  componentWillUpdate(nextProps, nextState){}

  // 在这里会调用 render()

  /**
   * 【在更新发生后立即被调用】
   * 注意：
   * 第一次渲染时，不调用此方法。
   */
  componentDidUpdate(){}


  // 卸载(Unmounting)，当一个组件被从 DOM 中移除时，该方法被调用：

  /**
   * 【在一个组件被 卸载(unmounted) 和 销毁(destroyed) 之前立即被调用】
   * 在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求，清除一些可能会造成内存泄露的事件等
   * 注意：
   * 在小程序中，一个挂在到 Page 组件的组件并不会执行 componentWillUnmount() 方法，只有当他挂载的 Page 组件被销毁时，该组件才会执行 componentWillUnmount() 方法。
   */
  componentWillUnmount(){
    // 停止计时器
    clearInterval(this.timerID)
  }



  // 程序展示出来，在微信小程序中对应 onShow。
  componentDidShow () {}

  // 程序被隐藏，在微信小程序中对应 onHide。
  componentDidHide () {}


  /**
   * 【添加自定义方法】
   */

  tick () {
    this.setState({
      date: new Date()
    });
  }

  /**
   * 【渲染页面】
   * 注意：
   * 每个组件都必须有该方法。
   * render 方法必须返回一个 Taro 组件（可以是内置组件也可以是自定义组件）或一个 falsy的值。
   * 当 return 的值为 falsy 时，实际上会编译成小程序的 wx:if 标签。
   */
  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View>
          <Text>Hello, World</Text>
          <Text>现在的时间是 {this.state.date.toLocaleTimeString()}.</Text>
        </View>
      </View>
    )
  }
}

/**
 * 【类默认属性】
 * 注意：
 * 这对于未定义（undefined）的属性（props）来说有用，而对于设为空（null）的属性并没用
 */
Index.defaultProps = {
  name: 'index 类'
}

/**
 * 【默认属性类型检查】
 * 注意：
 * 需要导入 PropTypes from 'prop-types'。
 * 目前在小程序端还有些问题，但在 H5 端可以使用。
 */
Index.propTypes = {
  name: PropTypes.string
};

export default Index
