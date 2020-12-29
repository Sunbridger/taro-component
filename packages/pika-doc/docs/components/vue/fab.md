---
componentType: 'vue'
demoPath: '/#/pages/components/basic/fab/index'
---

# Fab 悬浮按钮

如果需要按需引入, 则:

```js
import { PkFab } from '@souche/pika-vue';
```

## 使用案例

### 基础样式

```html
<pk-fab size="small" position="bottom" @click="fn">赞</pk-fab>
```

### 自定义slot

```html
<pk-fab size="normal" position="bottomRight">
    <pk-icon type="heart" color="red" size="26"></pk-icon>
    赞
</pk-fab>
```

## API

| 属性 | 类型 | 默认值 | 必填 | 可选值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| size | String | normal | 否 | normal、small | 按钮大小 |
| position | String | bottomRight | 否 | topLeft、topRight、bottomLeft、bottomRight、top、bottom| 显示值 |


#### Slots

| 名称 | 描述 |
| --- | --- |
| default | 按钮内容 |


## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
