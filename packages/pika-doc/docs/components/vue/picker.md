# Picker 选择器

如果需要按需引入, 则: 

```js
import { PkPicker } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-picker
    mode="selector"
    :range="array"
    :value="index"
    @change="change1"
    @column-change="columnChange"
    title="单选"
>
    <pk-button class="cus-button"
        >单选: {{ array[index] }}</pk-button
    >
</pk-picker>
```

### 多项选择

```html
 <pk-picker
    mode="multiSelector"
    :range="multArray"
    v-model="index2"
    @column-change="columnChange"
>
    <pk-button class="cus-button"
        >多选:
        {{
            `${multArray[0][index2[0]]}年${
                multArray[1][index2[1]]
            }月${multArray[2][index2[2]]}日`
        }}</pk-button
    >
</pk-picker>
```

## API

### Props

| 参数     | 说明                                                                                                                           | 类型                           | 可选值                  | 默认值   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ | ----------------------- | -------- |
| mode     | 选择器的模式                                                                                                                   | String                         | selector, multiSelector | selector |
| title    | 弹出层中的标题                                                                                                                 | String                         | -                       | ''       |
| range    | mode 为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数据，如[['a','b'], ['c','d']] | 二维 Array / 二维 Object Array | -                       | []       |
| rangeKey | 当 range 是一个 二维 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容                                | String                         | -                       | -        |
| value    | value 的值表示选择了 range 中的第几个（下标从 0 开始）                                                                         | Array                          | -                       | []       |
| disabled | 是否禁用                                                                                                                       | Boolean                        | -                       | false    |

### Events

| 事件名称      | 说明                     | 返回参数     |
| ------------- | ------------------------ | ------------ |
| change        | 点击确定的时候触发的事件 | 当前的选择值 |
| column-change | 选项改变时触发的时间     | 当前的选择值 |
| cancel        | 点击取消的时候触发的事件 |              |

### Slot

| 名称    | 描述                                     |
| ------- | ---------------------------------------- |
| default | picker触发器，可以是文本或者其他任何东西 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ❌   |      |      |

## 相关问题

1. H5不支持PickerView


> [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)