---
componentType: 'vue'
demoPath: '/#/pages/components/feedback/dialog/index'
---

# Dialog 对话框

## 按需引入

```js
import { PkDialog } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-dialog v-model="show">
    <view slot="title">标题</view>
    <view slot="content">
        这里是正文内容, 这里是正文内容, 这里是正文内容, 这里是正文内容.
    </view>
</pk-dialog>
```

### 单个按钮

```html
<pk-dialog v-model="show" :noCancel="true">
    <view slot="title">标题</view>
    <view slot="content">
        这里是正文内容, 这里是正文内容, 这里是正文内容, 这里是正文内容.
    </view>
</pk-dialog>
```

### 缺省内容

```html
<!-- 有正文无标题 -->
<pk-dialog v-model="show2">
    <view slot="content">
        这里是正文内容, 这里是正文内容, 这里是正文内容, 这里是正文内容.
    </view>
</pk-dialog>

<!-- 有标题无正文 -->
<pk-dialog v-model="show3">
    <view slot="title">这里是标题内容, 这里是标题内容</view>
</pk-dialog>
```

## API

### Props

| 参数                | 说明                       | 类型    | 可选值 | 默认值  |
| ------------------- | -------------------------- | ------- | ------ | ------- |
| title               | 元素的标题                 | String  | -      | -       |
| content             | 元素的内容                 | String  | -      | -       |
| cancelText          | 取消按钮的文本             | String  | -      | -       |
| confirmText         | 确认按钮的文本             | String  | -      | -       |
| closeOnClickOverlay | 点击浮层的时候时候自动关闭 | Boolean | -      | `true`  |
| show                | 是否显示模态框             | Boolean | -      | `false` |
| noCancel            | 是否显示取消按钮           | Boolean | -      | `false` |



### Events

| 事件名称 | 说明                   | 返回参数 |
| -------- | ---------------------- | -------- |
| change   | 对话框关闭时触发的事件 | false    |
| close    | 关闭事件               | false    |
| cancel   | 点击取消触发的事件     |          |
| confirm  | 点击确定触发的事件     |          |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
