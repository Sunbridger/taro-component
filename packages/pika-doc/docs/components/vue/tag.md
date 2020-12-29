---
componentType: 'vue'
demoPath: '/#/pages/components/views/tag/index'
---

# Tag 标签

如果需要按需引入, 则:

```js
import { PkTag } from '@souche/pika-vue';
```

## 使用案例

### normal

```html
<pk-tag>normal</pk-tag>
<pk-tag filled>normal选中</pk-tag>
<pk-tag disable>norma禁止</pk-tag>
```

### primary

```html
<pk-tag type="primary">primary</pk-tag>
<pk-tag filled type="primary">primary选中</pk-tag>
<pk-tag disable type="primary">primary禁止</pk-tag>
```

### 活动标签

```html

<pk-tag type="active-primary">直降5000</pk-tag>
<pk-tag type="active-default">含购置税</pk-tag>
<pk-tag type="active-fill">满3000返200</pk-tag>
```

### 状态标签

```html
<pk-tag type="status-success">上新</pk-tag>
<pk-tag type="status-warning">库存紧张</pk-tag>
<pk-tag type="status-danger">暂时缺货</pk-tag>
```


## API

| 属性 | 类型 | 默认值 | 必填 | 可选值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| type | String | default | 否 | primary, default,active-default,active-primary,active-fill,status-waring,status-success,status-danger | 标签类型 |
| filled | Boolean | false | 否 |  | 是否填充选中 |
| disable | Boolean | false | 否 |  | 是否禁止 |



## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
