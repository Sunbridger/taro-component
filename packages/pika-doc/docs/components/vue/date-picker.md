# Date Picker 日期选择器

如果需要按需引入, 则: 

```js
import { PkDatePicker } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-date-picker :value="date" @change="getDate">
    日期: {{ date }}
</pk-date-picker>
```

### 限定起始时间和结束时间

```html
<pk-date-picker start="2019-02-03" end="2021-10-16">
    2019/02/03 ~ 2021/10/16
</pk-date-picker>
```

### 单独选取 年 / 月

```html
<pk-date-picker fields="year" v-model="pickYear">
    选取年: {{ pickYear }}
</pk-date-picker>
<pk-date-picker fields="month" v-model="pickMonth">
    选取月: {{ pickMonth }}
</pk-date-picker>
```

## API

### Props

| 参数             | 说明           | 类型    | 可选值                 | 默认值     |
| ---------------- | -------------- | ------- | ---------------------- | ---------- |
| value（v-model） | 当前选中的日期 | String  | 默认为YYYY-MM-DD格式   | 当前的日期 |
| start            | 限定开始的日期 | String  | 默认为YYYY-MM-DD格式   | 1900-01-01 |
| end              | 限定结束的日期 | String  | 默认为YYYY-MM-DD格式   | 2100-12-31 |
| fields           | 单独选择年月日 | String  | ‘year’，‘month’，‘day’ | day        |
| disabled         | 是否禁用       | Boolean | -                      | false      |

### Events

| 事件名称 | 说明               | 返回参数   |
| -------- | ------------------ | ---------- |
| change   | 日期选择触发的事件 | YYYY-MM-DD |

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
