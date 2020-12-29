---
componentType: 'react'
demoPath: '/pages/components/navBar/navBar'
---

# NavBar(React)

### 说明
#### 组件介绍
React版本顶部导航栏,用于自定义导航栏,需要设置navigationStyle:custom
#### 开发人员
章政

### 引入
#### 组件
import {PkNavBar} from '@souche/pika-react';
**组件依赖的样式文件（仅按需引用时需要）**
@import "~@souche/pika-react/dist/style/components/navBar.scss";


### 代码演示
#### 1. 基本使用
```jsx
class Demo extends Component {
  handleBackClick() {
  	// 执行返回事件或者其他逻辑
  }
	render() {
  	return (
    	<View>
     		<PkNavBar @onLeftClick={this.handleBackClick}/>
      </View>
    )
  }
}
```
#### 2. 无返回文字
```jsx
class Demo extends Component {
  handleBackClick() {
  	// 执行返回事件或者其他逻辑
  }
	render() {
  	return (
    	<View>
     		<PkNavBar leftText='' @onLeftClick={this.handleBackClick}/>
      </View>
    )
  }
}
```
#### 3. 自定义左侧内容
```jsx
class Demo extends Component {
  handleBackClick() {
  	// 执行返回事件或者其他逻辑
  }
  renderLeft() {
    return (
            <View className='navBarExample-self-left'>
                <Text>省份</Text>
                <PkIcon
                    className='navBarExample-self-left-icon'
                    type='arrow-down'
                    size='14'
                />
            </View>
        );
  }
	render() {
  	return (
    	<View>
     		<PkNavBar leftRender={renderLeft} @onLeftClick={this.handleBackClick}/>
      </View>
    )
  }
}
```
#### 自定义标题内容
```jsx
class Demo extends Component {
  handleBackClick() {
  	// 执行返回事件或者其他逻辑
  }
  renderTitle() {
    return (
            <View className='navBarExample-self-title'>
                <PkIcon
                    className='navBarExample-self-title-icon'
                    type='search'
                    size='14'
                />
                <Text>想买什么车</Text>
            </View>
        );
  }
	render() {
  	return (
    	<View>
     		<PkNavBar titleRender={renderTitle} @onLeftClick={this.handleBackClick}/>
      </View>
    )
  }
}
```
#### 设置背景色和字体颜色
```jsx
class Demo extends Component {
  handleBackClick() {
  	// 执行返回事件或者其他逻辑
  }
	render() {
  	return (
    	<View>
     		<PkNavBar backgroundColor='#000' textColor='#fff' @onLeftClick={this.handleBackClick}/>
      </View>
    )
  }
}
```
#### 点击事件
```jsx
class Demo extends Component {
  handleClick() {
  	// 执行返回事件或者其他逻辑
  }
	render() {
  	return (
    	<View>
     		<PkNavBar 
          onLeftClick={this.handleClick.bind(this, '左侧')}
          onTitleClick={this.handleClick.bind(this, '标题')}/>
      </View>
    )
  }
}
```
#### 置顶
```jsx
class Demo extends Component {
	render() {
  	return (
    	<View>
     		<PkNavBar fixed={true}/>
      </View>
    )
  }
}
```
#### 点击回到顶部
```jsx
class Demo extends Component {
	render() {
  	return (
    	<View>
     		<PkNavBar dbClickToTop={true}/>
      </View>
    )
  }
}
```
### 
### API
#### PkNavBar Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | --- | --- | --- | --- |
| title | 标题 | string |  | '' |
| titleRender | 标题自定义内容(会覆盖title属性) | Element |  | - |
| leftText | 左侧文案 | string |  | '返回' |
| leftRender | 左侧自定义内容(会覆盖leftText属性) | Element |  | - |
| backgroundColor | 背景色 | string |  | '#fff' |
| textColor | 文字颜色 | string |  | '#000' |
| fixed | 是否顶部固定 | boolean | false|true | true |
| dbClickToTop | 点击是否置顶, 函数为到顶部的回调事件 | boolean|function | false|true|() => {} | false |
| zIndex | z-index值 | number |  | 1000 |

#### PkNavBar Events
| 事件 | 说明 | 返回参数 |
| --- | --- | --- |
| onLeftClick | 左侧键点击 |  |
| onTitleClick | 标题点击 |  

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      | ✅    |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)



