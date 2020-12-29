---
componentType: 'vue'
demoPath: '/#/pages/components/form/radio/index'
---

# Radio 单选框


## 按需引入

```js
import { PkRadio } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-radio :options="options1" v-model="value1"></pk-radio>

<script>
export default {
    data() {
        return {
            options1: [
                { label: '单选项一', value: 'option1' },
                { label: '单选项二', value: 'option2' },
                { label: '单选项三', value: 'option3' },
            ],
            value1: 'option1',
        }
    }
}
</script>
```

### 自定义图标

```html
<pk-radio
    check-icon="circle-check"
    un-check-icon="circle"
></pk-radio>
```

### 前置ICON

```html
<pk-radio
    check-icon="circle-check"
    un-check-icon="circle"
    :options="options1"
    pre-set-icon
    v-model="value5"
></pk-radio>
```

### 含有描述

```html
<pk-radio :options="options2" v-model="value2"></pk-radio>

<script>
export default {
    data() {
        return {
            options1: [
                { label: '单选项一', value: 'option1', desc: '单选项描述' },
                { label: '单选项二', value: 'option2', desc: '单选项描述' },
                { label: '单选项三', value: 'option3', desc: '单选项描述' },
            ],
            value1: 'option1',
        }
    }
}
</script>
```

## API

### Props

| 参数           | 说明                                                         | 类型   | 可选值 | 默认值 |
| -------------- | ------------------------------------------------------------ | ------ | ------ | ------ |
| value(v-model) | 输入框当前值，用户需要通过 onClick 事件来更新 value 值，必填 | String | -      | 0      |
| options        | object 选项列表，object 字段详细看下表                       | Array  | -      | -      |



#### option obejct

| 参数     | 说明                           | 类型    | 可选值 | 默认值 |
| -------- | ------------------------------ | ------- | ------ | ------ |
| value    | 选项标识符，必须保证唯一       | String  | 必填   | -      |
| label    | 选项标题                       | String  | 必填   | -      |
| desc     | 选项描述，显示在标题下方的文字 | String  | 可选   | -      |
| disabled | 是否禁止点击                   | Boolean | 可选   | false  |



### Events

| 事件名称 | 说明                | 返回参数 |
| -------- | ------------------- | -------- |
| change   | 修改value触发的事件 |          |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)