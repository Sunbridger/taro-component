---
componentType: 'vue'
demoPath: '/#/pages/components/views/sticky/index'
---

# Sticky 粘性布局

如果需要按需引入, 则:

```js
import { PkSticky } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-sticky>这是填充内容</pk-sticky>
```
### 自定义top、zIndex

```html
<pk-sticky :offsetTop="200">这是填充内容</pk-sticky>
<pk-sticky :zIndex="2">这是填充内容</pk-sticky>
```

## API

| 属性 | 类型 | 默认值 | 必填 | 可选值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| offsetTop | Number |  0 | 否 |  | top值	 |
| zIndex | Number | 99 | 否 |  | zIndex值	 |


#### Slot
| 名称 | 描述 |
| --- | --- |
| default | 默认填充内容 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
