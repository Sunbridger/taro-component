---
componentType: 'vue'
demoPath: '/#/pages/components/form/slider/index'
---

# Slide 滑动条

如果需要按需引入, 则: 

```js
import { PkSlider } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-slider :step="1"></pk-slider>
```

### 显示当前value

```html
<pk-slider :show-value="true"></pk-slider>
```

### 设置最大最小值

```html
<pk-slider :show-value="true" :min="50" :max="200"></pk-slider>
```

### 自定义滑块大小

```html
<pk-slider :block-size="24"></pk-slider>
```

## API

### Props

| 参数             | 说明                                           | 类型    | 可选值 | 默认值     |
| ---------------- | ---------------------------------------------- | ------- | ------ | ---------- |
| min              | 最小值                                         | Number  | -      | 0          |
| max              | 最大值                                         | Number  | -      | 100        |
| step             | 步长，取值必须大于0，并且可被 `max - min` 整除 | Number  | -      | 1          |
| disabled         | 是否禁用                                       | Boolean | -      | false      |
| value（v-model） | 当前取值                                       | Number  | -      | 0          |
| active-color     | 已选择的颜色                                   | Color   | -      | 主题色     |
| background-color | 背景条的颜色                                   | Color   | -      | 默认背景色 |
| block-size       | 滑块的大小，取值范围为 12-28                   | Number  | -      | 28         |
| block-color      | 滑块的颜色                                     | Color   | -      | #ffffff    |
| show-value       | 是否显示当前的 Value                           | Boolean | -      | false      |



### Events
| 事件名称 | 说明                                                          | 返回参数 |
| -------- | ------------------------------------------------------------- | -------- |
| change   | 完成一次拖动后触发的事件，event.detail = {'{ value: value }'} | value    |
| changing | 拖动过程中触发的事件，event.detail = {'{ value: value }'}     | value    |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

1. 支付宝下显示样式不一致, 后续版本会重写该组件

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)