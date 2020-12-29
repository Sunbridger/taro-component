---
componentType: 'vue'
demoPath: '/#/pages/components/layout/popup/index'
---

# Popup 弹出层

如果需要按需引入, 则: 

```js
import { PkPopup } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-popup
    :show="show" :position="position"
>
    <view class="white-box">{{ cusStyle }}</view>
</pk-popup>

<script>
export default {
    data: {
        show: true,
        position: 'center'
    }
}
</script>
```

## API

### Prop

| 参数                | 说明                   | 类型           | 可选值                           | 默认值 |
| ------------------- | ---------------------- | -------------- | -------------------------------- | ------ |
| show                | 展示或隐藏             | Boolean        | -                                | false  |
| overlay             | 是否展示遮罩层         | Boolean        | -                                | true   |
| position            | 滑出位置               | string         | right, left, top, bottom，center | bottom |
| duration            | 动画时长（毫秒）       | Number         | -                                | 300    |
| round               | 是否显示圆角           | Boolean        | -                                | true   |
| customStyle         | 自定义弹出层样式       | Object，String | -                                | -      |
| overlayStyle        | 自定义遮罩层样式       | Object，String | -                                | -      |
| closeOnClickOverlay | 是否点击遮罩层样式关闭 | Boolean        | -                                | true   |

#### Events
| 事件名称 | 说明     | 返回参数 |
| -------- | -------- | -------- |
| close    | 关闭事件 | -        |

#### Slot
| 名称    | 描述           |
| ------- | -------------- |
| default | 弹出框内部内容 |


## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)