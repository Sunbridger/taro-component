---
componentType: 'vue'
demoPath: '/#/pages/components/navigation/nav-bar/index'
---

# NavBar 导航栏

如果需要按需引入, 则:

```js
import { PkNavBar } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-nav-bar
    :onClickRgIconSt="handleClick"
    :onClickRgIconNd="handleClick"
    :onClickLeftIcon="handleClick"
    color='#000'
    title="这是标题"
    leftText='返回'
    rightFirstIconType="more"></pk-nav-bar>
```
### 左侧icon使用

```html
<pk-nav-bar
    :onClickRgIconSt="handleClick"
    :onClickRgIconNd="handleClick"
    :onClickLeftIcon="handleClick"
    color='#000'
    title="这是标题"
    leftIconType="arrow-left"
    rightFirstIconType="more"></pk-nav-bar>
```

### 修改颜色

```html
<pk-nav-bar
    :onClickRgIconSt="handleClick"
    :onClickRgIconNd="handleClick"
    :onClickLeftIcon="handleClick"
    color='red'
    title="这是标题"
    leftText='返回'
    leftIconType="arrow-left"
    rightFirstIconType="more"></pk-nav-bar>
```

### 右侧两个icon

```html
<pk-nav-bar
    :onClickRgIconSt="handleClick"
    :onClickRgIconNd="handleClick"
    :onClickLeftIcon="handleClick"
    title="这是标题"
    leftText='返回'
    leftIconType="arrow-left"
    rightSecondIconType="arrow-down"
    rightFirstIconType="more"></pk-nav-bar>
```
### 自定义原生导航栏样式

```html
<pk-nav-bar :fixed="true">
    你的世界啊
</pk-nav-bar>
```

## API

| 属性 | 类型 | 默认值 | 必填 | 可选值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| fixed | boolean | false | 否 |  | 是否启用原生导航栏 |
| color | String | false | 否 |  | icon及文字颜色 |
| leftIconType | String | false | 否 |  | 左侧Icon |
| rightFirstIconType | String | false | 否 |  | 左侧Icon |
| leftIconType | String | false | 否 |  | 右侧第一个Icon |
| rightSecondIconType | String | false | 否 |  | 右侧第二个Icon |
| title | String | false | 否 |  | title标题 |
| customStyle | Object |  | 否 |  | 自定义样式 |
| className | Array, String |  | 否 |  | 自定义类名 |

#### Events

| 事件 | 说明 | 返回参数 |
| --- | --- | --- |
| onClickLeftIcon | 左侧点击触发 | event 对象 |
| onClickRgIconSt | 右侧第一个icon点击触发 | event 对象 |
| onClickRgIconNd | 右侧第二个icon点击触发 | event 对象 |

## Slot
| 名称 | 描述 |
| --- | --- |
| default | 中间内容 |
| left | 左侧内容 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
