---
componentType: 'vue'
demoPath: '/#/pages/components/feedback/toast/index'
---

# Toast 轻提示

## 按需引入

```js
import { PkToast } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-toast
    :show="toastShow"
    :text="text"
    @close="onClose"
></pk-toast>
```

### 自定义图片

```html
<pk-toast
    v-model="toastShow2"
    image="http://img.souche.com/f2e/ed44375c983a6c2cdd5d662ef3850fa4.png"
    text="自定义图片"
></pk-toast>
```

### 使用图标

```html
<pk-toast
    v-model="toastShow3"
    icon="heart"
    text="使用图标"
></pk-toast>
```

### 状态

```html
<pk-button @click="showStatus('success')">成功</pk-button>
<pk-button @click="showStatus('error')">失败</pk-button>
<pk-button @click="showStatus('loading')">加载中</pk-button>
<pk-toast
    v-model="toastShow4"
    :status="toastStatus"
    :text="toastStatus"
></pk-toast>
```

## API

### Props

| 参数     | 说明                                      | 类型    | 可选值                        | 默认值  |
| -------- | ----------------------------------------- | ------- | ----------------------------- | ------- |
| text     | 元素的内容                                | String  | -                             | -       |
| icon     | icon 的类型                               | String  | -                             | -       |
| image    | 元素展示的图片                            | String  | -                             | -       |
| status   | 元素的状态                                | String  | `error`, `loading`, `success` | -       |
| show     | 是否展示元素                              | Boolean | -                             | `false` |
| duration | 元素持续的事件（设置为 0 将不会自动消失） | Number  | -                             | `3000`  |
| hasMask  | 是否存在底部遮罩层(无法点击底部的内容区)  | Boolean | -                             | -       |



### Events

| 事件名称 | 说明                    | 返回参数 |
| -------- | ----------------------- | -------- |
| click    | 点击toast内容触发事件   |          |
| close    | 当toast关闭时触发的事件 |          |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)