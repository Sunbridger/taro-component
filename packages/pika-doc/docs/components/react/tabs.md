---
componentType: 'react'
demoPath: '/pages/components/tabs/tabs'
---
# Tabs

### 说明
#### 组件说明
标签页组件
#### 开发人员
章政

### 引入
#### 组件
import {PkTabs} from '@souche/pika-react';
**组件依赖的样式文件（仅按需引用时需要）**
@import "~@souche/pika-react/dist/style/components/tabs.scss";


### 代码演示
#### 基本使用
```jsx
<PkTabs
  tabList={this.tabList1}
  current={this.state.current1}
  onChange={index => {
    this.onTabChange('current1', index);
  }}
  >
  <View>111</View>
  <View>222</View>
  <View>333</View>
</PkTabs>
```


#### 置顶固定
```jsx
<PkTabs
  tabList={this.tabList2}
  current={this.state.current6}
  stickyd
  >
  <View>111</View>
  <View>222</View>
  <View>333</View>
  <View>444</View>
  <View>555</View>
  <View>666</View>
  <View>777</View>
</PkTabs>
```
#### 多列
```jsx
<PkTabs
  tabList={this.tabList2}
  current={this.state.current2}
  animated={false}
  >
  <View>111</View>
  <View>222</View>
  <View>333</View>
  <View>444</View>
  <View>555</View>
  <View>666</View>
  <View>777</View>
</PkTabs>
```
#### 禁止滑动切换
```jsx
<PkTabs
  tabList={this.tabList2}
  current={this.state.current3}
  swipeable={false}
  >
  <View>111</View>
  <View>222</View>
  <View>333</View>
  <View>444</View>
  <View>555</View>
  <View>666</View>
  <View>777</View>
</PkTabs>
```
#### 懒加载
```jsx
<PkTabs
  tabList={this.tabList2}
  current={this.state.current4}
  lazyRender
  >
  <View>111</View>
  <View>222</View>
  <View>333</View>
  <View>444</View>
  <View>555</View>
  <View>666</View>
  <View>777</View>
</PkTabs>
```


#### 自定义颜色
```jsx
<PkTabs
  tabList={this.tabList2}
  current={this.state.current5}
  color={'#efc71c'}
  activeColor={'#8d8e99'}
  lineWidth={100}
  >
  <View>111</View>
  <View>222</View>
  <View>333</View>
  <View>444</View>
  <View>555</View>
  <View>666</View>
  <View>777</View>
</PkTabs>
```


#### 禁止动画
```jsx
<PkTabs
  tabList={this.tabList2}
  current={this.state.current6}
  animated={false}
  >
  <View>111</View>
  <View>222</View>
  <View>333</View>
  <View>444</View>
  <View>555</View>
  <View>666</View>
  <View>777</View>
</PkTabs>
```


垂直模式
垂直模式需要设置高度height
```jsx
<PkTabs
  tabDirection={1}
  height={'400px'}
  tabList={this.tabList2}
  >
  <View>111</View>
  <View>222</View>
  <View>333</View>
  <View>444</View>
  <View>555</View>
  <View>666</View>
  <View>777</View>
</PkTabs>
```


### API
#### PkTabs Props
###### TabBar部分
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| current | 当前选中标签的标识符 | number | 0 |
| tabList | 标签列表 | array<TabList> | [] |
| color | 标签颜色 | string | #8d8e99 |
| activeColor | 标签激活颜色 | string | #000 |
| commonStyle | 标签未激活样式 | CSSProperties | {} |
| activeStyle | 标签激活样式 | CSSProperties | {} |
| zIndex | z-index 层级 | number | 系统设定 |
| scrollable | 是否可以自适应左右滚动 | boolean | true |
| animated | 是否使用动画切换 Tabs | boolean | false |
| sticky | 是否使用粘性定位布局 | boolean | false |
| swipeable | 是否开启手势滑动切换 | boolean | true |
| lazyRender | 是否开启标签页内容延迟渲染 | boolean | false |
| tabDirection | tab的方向, 0是水平模式, 1是垂直模式 | number | 0 |
| height | tabDirection为1时必填, 容器的高度 | number | 0 |

###### TabList部分
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 标题 | string | - |

#### PkTab Events
| 事件 | 说明 | 返回参数 |
| --- | --- | --- |
| onChange | tab切换 | 当前tabIPane的title |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)

