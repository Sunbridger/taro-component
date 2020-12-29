---
componentType: 'react'
demoPath: '/pages/components/tabBar/tabBar'
---

# TabBar(React)

### 说明
#### 组件说明
标签栏组件，主要用于底部导航，方便用户在不同功能模块之间进行快速切换，建议标签数量控制在3～5个
#### 开发人员
章政

### 引入
#### 组件
import {PkTabBar} from '@souche/pika-react';
**组件依赖的样式文件（仅按需引用时需要）**
@import "~@souche/pika-react/dist/style/components/tabBar.scss";


### 代码演示
#### 文本标签
```jsx
const list = [
		{
        name: 'Home',
        showIconImg: false,
        dot: false,
    },
    {
        name: 'Buy',
        showIconImg: false,
        dot: false,
    },
    {
        name: 'User',
        showIconImg: false,
        dot: false,
    },
]

<PkTabBar
  current='Home'
  tabList={list}
  onChange={this.handleChange.bind(this)}
  />
```


#### 带icon标签
```jsx
const list = [
    {
        name: 'Customer',
        icon: 'directory',
        iconActive: 'directory',
        showIconImg: true,
        image: '',
        dot: false,
        info: '',
    },
    {
        name: 'Buy',
        icon: '',
        iconActive: '',
        showIconImg: true,
        image: '//img.souche.com/f2e/42076a6c10b5e59a90418c8b4bfc60dc.png',
        dot: false,
        info: '222',
    },
    {
        name: 'User',
        icon: '',
        iconActive: '',
        showIconImg: true,
        image: '//img.souche.com/f2e/b284343a0680ee669b845fb28790b5d1.png',
        imageActive:
            '//img.souche.com/f2e/7b1ecaec1df64f7d4e7e3bac9e479181.png',
        dot: true,
        info: '',
    },
];

<PkTabBar
  current='Customer'
  tabList={list}
  onChange={this.handleChange.bind(this)}
  />
```


#### 自定义图片, 字体颜色, 背景
```jsx
<PkTabBar
  current='Customer'
  tabList={list}
  activeColor={activeColor}
  inactiveColor={inactiveColor}
  backgroundColor={backgroundColor}
  onChange={this.handleChange.bind(this)}
  />
```


#### 固定底部
```jsx
<PkTabBar
  current={current}
  tabList={list}
  fixed
  onChange={this.handleChange.bind(this)}
  />
```


#### 驼峰布局模式
```jsx
<PkTabBar
  current={current}
  tabList={list}
  layoutMode='hump'
  onChange={this.handleChange.bind(this)}
  />
```


### API
#### PkTabBar Props
###### TabBar部分
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| current | 当前选中标签的name | string | tabList[0].name |
| fixed | 是否固定在底部 | boolean | true |
| shadow | 是否展示阴影 | boolean | true |
| zIndex | 元素 z-index | number | 1 |
| activeColor | 选中标签的颜色 | string | #1989fa |
| inactiveColor | 未选中标签的颜色 | string | #7d7e80 |
| backgroundColor | 背景色 | string | #fff |
| tabList | 子tab元素 | 见tabList属性 | [] |
| layoutMode | 布局模式, hump模式下若数组为奇数, 会取中间元素为中间button, 若数组为偶数,则改成normal模式 | 'normal' | 'hump' | normal |

###### tabList属性
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| name | 标签名称(用于标识唯一性) | string | - |
| icon | 未选中icon名称 | string | - |
| iconActive | 选中icon名称 |  | - |
| showIconImg | 是否显示icon/image | boolean | true |
| image | 未选中图片地址 | string | - |
| imageActive | 选中图片地址 | string | - |
| dot | 是否显示小红点 | boolean | - |
| info | 图标右上角提示信息 | number &#124; string | - |
| max | info数值的最大值,超过最大值会显示max+ | number | 99 |
| boxShadow
 | hump模式下的中间按钮的阴影 | string | 9px 7px 10px rgba(255, 54, 67, 0.24); |

#### PkTabBar Events
| 事件 | 说明 | 返回参数 |
| --- | --- | --- |
| onChange | tab切换 | 当前tabItem |


## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      | ✅    |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)


