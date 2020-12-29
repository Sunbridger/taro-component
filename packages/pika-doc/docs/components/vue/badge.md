---
componentType: 'vue'
demoPath: '/#/pages/components/views/badge/index'
---

# Badge 徽标

如果需要按需引入, 则:

```js
import { PkBadge } from '@souche/pika-vue';
```

## 使用案例

### 基础样式

```html
<pk-badge dot />
<pk-badge value="29" maxValue="99" />
<pk-badge value="1234" maxValue="99" />
<pk-badge value="1234" maxValue="999" />
```

### 红点badge

```html
<pk-badge dot>
    <pk-button type="linear">按钮</pk-button>
</pk-badge>
```

### 超出Badge

```html
<pk-badge value="1234" maxValue="99">
    <pk-button type="linear">按钮</pk-button>
</pk-badge>
```

### 未超出Badge

```html
<pk-badge value="19">
    <pk-button type="linear">按钮</pk-button>
</pk-badge>
```


## API

| 属性 | 类型 | 默认值 | 必填 | 可选值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| dot | Boolean | false | 否 |  | 是否展示为红点 |
| value | Number、String |  | 否 |  | 显示值 |
| maxValue | Number、String | 99 | 否 |  | 最大值 |


#### Slots

| 名称 | 描述 |
| --- | --- |
| default | wrapper |


## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
