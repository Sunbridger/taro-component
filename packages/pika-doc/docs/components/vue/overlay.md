---
componentType: 'vue'
demoPath: '/#/pages/components/feedback/overlay/index'
---

# Overlay 遮罩层

## 按需引入

```js
import { PkOverlay } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-overlay
    :show="overlayShow"
    :color="color"
    :icon-color="iconColor"
    :close-position="closePosition"
    @close-click="closeOverLay"
    @overlay-click="closeOverLay"
>
    <image
        src="https://taro-ui.jd.com/h5/static/images/curtain.png"
    ></image>
</pk-overlay>
```

## API

### Props

| 参数             | 说明         | 类型    | 可选值                                                                  | 默认值          |
| ---------------- | ------------ | ------- | ----------------------------------------------------------------------- | --------------- |
| show             | 是否显示     | Boolean | -                                                                       | false           |
| color            | 背景颜色     | String  | -                                                                       | rgba(0,0,0,0.8) |
| iconColor        | 图标颜色     | String  | -                                                                       | #fff            |
| closeBtnPosition | 关闭图标位置 | String  | 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right' | bottom          |
| zIndex           | zIndex属性   | String  | -                                                                       | 1000            |



### Events

| 事件名称      | 说明                 | 返回参数 |
| ------------- | -------------------- | -------- |
| overlay-click | 遮罩层点击触发事件   |          |
| close-click   | 点击关闭按钮触发事件 |          |



### Slot

| 名称    | 描述       |
| ------- | ---------- |
| default | 遮罩层内容 |


## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
