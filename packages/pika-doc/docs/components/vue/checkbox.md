---
componentType: 'vue'
demoPath: '/#/pages/components/form/checkbox/index'
---

# CheckBox 多选框

## 按需引入

```js
import { PkCheckbox } from '@souche/pika-vue';
```

## 使用案例

## 基础使用

```html
<pk-checkbox
    check-icon="circle-check"
    un-check-icon="circle"
    pre-set-icon
    :options="options1"
    v-model="value1"
></pk-checkbox>

<script>
export default {
    data() {
        return {
            value1: [],
            options1: [
                {
                    value: 'list1',
                    label: 'iPhone X',
                },
                {
                    value: 'list2',
                    label: 'HUAWEI P20',
                },
                {
                    value: 'list3',
                    label: 'OPPO Find X',
                },
                {
                    value: 'list4',
                    label: 'vivo NEX',
                },
            ],
        };
    },
}
</script>
```

## API

### Props

| 参数         | 说明                                                                                       | 类型  | 可选值 | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------ | ----- | ------ | ------ |
| selectedList | 被选中的选项列表 eg: `['list1']`，开发者需要通过 onChange 事件来更新 selectedList 值，必填 | Array | -      | -      |
| options      | object选项列表，object 字段详细看下表                                                      | Array | -      | -      |



#### options object

| 参数     | 说明                           | 类型    | 可选值 | 默认值 | 可选或必填 |
| :------- | :----------------------------- | :------ | :----- | :----- | :--------- |
| value    | 选项标识符，必须保证唯一       | String  | -      | -      | 必填       |
| label    | 选项标题                       | String  | -      | -      | 必填       |
| desc     | 选项描述，显示在标题下方的文字 | String  | -      | -      | 可选       |
| disabled | 是否禁止点击                   | Boolean | -      | false  | 可选       |



### Events

| 事件名称 | 说明                   | 返回参数 |
| -------- | ---------------------- | -------- |
| change   | 选中项改变时触发的事件 | event    |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)