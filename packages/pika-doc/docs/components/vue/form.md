---
componentType: 'vue'
demoPath: '/#/pages/components/form/form/index'
---

# Form 表单

如果需要按需引入, 则: 

```js
import { PkForm } from '@souche/pika-vue';
```

## 基础使用

```html
<pk-form @submit="onSubmit" @reset="onReset">
    <pk-input
        title="用户名"
        type="text"
        v-model="username"
    ></pk-input>
    <pk-input
        title="密码"
        type="password"
        v-model="password"
    ></pk-input>
    <view class="ctrl-group">
        <pk-button form-type="submit">提交</pk-button>
        <pk-button form-type="reset">重置</pk-button>
    </view>
</pk-form>
```

## API

### Props

| 参数                | 说明                                                                                                                                                                                                                                                 | 类型    | 可选值 | 默认值 |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------ |
| reportSubmit        | 是否返回 formId 用于发送模板消息。                                                                                                                                                                                                                   | Boolean | -      | false  |
| reportSubmitTimeout | 等待一段时间（毫秒数）以确认formId是否生效。如果未指定这个参数，formId 有很小的概率是无效的（如遇到网络失败的情况）。指定这个参数将可以检测formId是否有效，以这个参数的时间作为这项检测的超时时间。如果失败，将返回requestFormId:fail 开头的formId。 | Number  | -      | 0      |


### Events

| 事件名称 | 说明                                                                                        | 返回参数    |
| -------- | ------------------------------------------------------------------------------------------- | ----------- |
| submit   | 携带 form 中的数据触发 submit 事件 event.detail = { value : { name': 'value'}, formId: '' } | commomEvent |
| reset    | 表单重置时会触发 reset 事件                                                                 | commomEvent |



### Slot

| 名称    | 描述     |
| ------- | -------- |
| default | 表单内容 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)