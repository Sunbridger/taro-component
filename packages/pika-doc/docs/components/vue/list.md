---
componentType: 'vue'
demoPath: '/#/pages/components/layout/list/index'
---

# List 列表

如果需要按需引入, 则: 

```js
import { PkList, PkListItem } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```vue
<template>
    <pk-list-item
        title="标题文字标题文字标题文字标题文字标题文字"
    ></pk-list-item>
</template>
```

## API

### Prop

#### list

| 参数      | 说明           | 类型    | 可选值 | 默认值 |
| --------- | -------------- | ------- | ------ | ------ |
| hasBorder | 表格是否有边框 | boolean | -      | false  |

#### list-item

| 参数       | 说明             | 类型                         | 可选值                 | 默认值  |
| ---------- | ---------------- | ---------------------------- | ---------------------- | ------- |
| title      | 元素的标题       | String                       | -                      | -       |
| disabled   | 是否禁用         | Boolean                      | -                      | `false` |
| note       | 元素的描述信息   | String                       | -                      | -       |
| thumb      | 元素的主要缩略图 | String                       | -                      | -       |
| arrow      | 箭头的方向       | String                       | `right`,`top`,`bottom` | -       |
| extraText  | 额外信息的文本   | String                       | -                      | -       |
| extraThumb | 额外信息的缩略图 | String                       | -                      | -       |
| hasBorder  | 是否有边框       | Boolean                      | -                      | `true`  |
| iconInfo   | icon 信息        | {'{ type , size? , color?}'} | -                      | `true`  |
| isEllipsis | 是否单行文字     | Boolean                      | -                      | `true`  |

### Events
| 事件名称 | 说明             | 返回参数 |
| -------- | ---------------- | -------- |
| click    | 列表点击事件触发 | event    |

### Slot
| 名称  | 描述         |
| ----- | ------------ |
| left  | 自定义左边栏 |
| right | 自定义右边栏 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)