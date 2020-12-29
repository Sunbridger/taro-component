# Time Picker 时间选择器

如果需要按需引入, 则: 

```js
import { PkTimePicker } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-time-picker v-model="time">
    选择时间: {{ time }}
</pk-time-picker>
```

### 起始时间和结束时间

```html
<pk-time-picker start="10:20" end="16:50">
    10:20 ~ 16:50
</pk-time-picker>
```

## API

### Props

| 参数     | 说明                  | 类型    | 可选值       | 默认值       |
| -------- | --------------------- | ------- | ------------ | ------------ |
| value    | 时间的值，格式为HH:mm | String  | 合法的时间值 | 当前的时间值 |
| start    | 限定的开始时间        | String  | 合法的时间值 | 00:00        |
| end      | 限定的结束时间        | String  | 合法的时间值 | 00:00        |
| disabled | 是否禁用              | Boolean | -            | false        |
### Events

| 事件名称 | 说明           | 返回参数 |
| -------- | -------------- | -------- |
| change   | 修改时间的回调 | HH:mm    |
### Slot

| 名称    | 描述   |
| ------- | ------ |
| default | 触发器 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ❌   |      |      |

## 相关问题

1. H5不支持PickerView


> [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
