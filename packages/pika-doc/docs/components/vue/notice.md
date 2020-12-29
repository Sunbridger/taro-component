---
componentType: 'vue'
demoPath: '/#/pages/components/views/notice/index'
---

# Notice 步骤条

如果需要按需引入, 则:

```js
import { PkNotice } from '@souche/pika-vue';
```

## 使用案例

### 基础样式

```html
<pk-notice>提示文案</pk-notice>
<pk-notice >让我掉下眼泪的 不止昨夜的酒让我依依不舍的 不止你的温柔余路还要走多久 你攥着我的手</pk-notice>
```

### 带跳转样式

```html
<pk-notice icon="arrow-right">提示文案</pk-notice>
<pk-notice icon="arrow-right">让我掉下眼泪的 不止昨夜的酒让我依依不舍的 不止你的温柔余路还要走多久 你攥着我的手</pk-notice>
<pk-notice prefixIcon="close" icon="arrow-right">提示文案</pk-notice>
```

### 自定义右侧样式

```html
<pk-notice>
    让我掉下眼泪的 不止昨夜的酒让我依依不舍的 不止你的温柔余路还要走多久 你攥着我的手
    <template v-slot:right>
        <pk-button>按钮</pk-button>
    </template>
</pk-notice>
<pk-notice @click="fn" text="好的" :textStyle="styleObj">自定义右侧文本 并且支持修改右侧文本样式</pk-notice>
```

### 跑马灯效果

```html
<pk-notice :scroll="true">让我掉下眼泪的 不止昨夜的酒让我依依不舍的 不止你的温柔余路还要走多久 你攥着我的手</pk-notice>
```


## API

| 属性 | 类型 | 默认值 | 必填 | 可选值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| icon | string |  | 否 | 参考IconType | 右侧icon |
| prefixIcon | string |  | 否 | 参考IconType | 左侧icon |
| text | string |  | 否 |  | 右侧文本按钮 |
| textStyle | Object |  | 否 |  | 右侧文本样式 |
| scroll | Boolean | false | 否 |  | 是否启用跑马灯效果 |
| duration | Number, String | 10 | 否 |  | 动画周期时间 |



#### Events

| 事件 | 说明 | 返回参数 |
| --- | --- | --- |
| click | 右侧点击事件 | event |
| click-prefix | 左侧点击事件 | event |

#### Slots

| 名称 | 描述 |
| --- | --- |
| default | 提示文本 |
| right | 右侧插槽 |


## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
