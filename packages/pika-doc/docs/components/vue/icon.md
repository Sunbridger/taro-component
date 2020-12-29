---
componentType: 'vue'
demoPath: '/#/pages/components/basic/icon/index'
---

# Icon 图标

如果需要按需引入, 则:

```js
import { PkIcon } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-icon type="delete"></pk-icon>
<pk-icon type="directory"></pk-icon>
<pk-icon type="thumbtack"></pk-icon>
```
### 自定义颜色

```html
<pk-icon type="delete" color="red"></pk-icon>
<pk-icon type="directory" color="red"></pk-icon>
<pk-icon type="thumbtack" color="red"></pk-icon>
```
### 自定义大小

```html
<pk-icon type="delete" size="24"></pk-icon>
<pk-icon type="directory" size="24"></pk-icon>
<pk-icon type="thumbtack" size="24"></pk-icon>
```
### 自定义旋转

```html
<pk-icon type="delete" spin></pk-icon>
```

## API

| 属性 | 类型 | 默认值 | 必填 | 可选值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| type | String |  | 是 |  | icon类型 |
| className | String |  |  |  | icon自定义类名 |
| color | String |  |  |  | icon颜色 |
| size | Number、String | 16 |  |  | icon大小 |
| spin | Boolean | false |  |  | 是否旋转 |


## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
