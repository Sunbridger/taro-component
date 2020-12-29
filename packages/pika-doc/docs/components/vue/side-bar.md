---
componentType: 'vue'
demoPath: '/#/pages/components/navigation/side-bar/index'
---

## Side Bar 侧边栏

## 按需引入

```js
import { PkSideBar } from '@souche/pika-vue';
```

## 使用示例

### 基础使用

默认左侧弹出, 通过参数可以调整右侧弹出

```html
<pk-side-bar
    @item-click="itemClick"
    :right="isRight"
    v-model="popShow"
    :items="list"
></pk-side-bar>

<script>
export default {
    data() {
        return {
            popShow: false,
            isRight: false,
            list: [
                {
                    title: '菜单1',
                },
                {
                    title: '菜单2',
                },
            ],
        }
    }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| show | 展示或隐藏 | Boolean | - | false |
| overlay | 是否需要遮罩 | Boolean | - | true |
| width | 抽屉宽度 | String | 合法的 CSS 宽度单位 | 230px |
| right | 是否从右侧滑出 | Boolean | - | false |
| items | 菜单列表 | Array | - | - |



### Events

| 事件名称 | 说明 | 返回参数 |
| --- | --- | --- |
| item-click | 菜单点击事件 | item，菜单项 |
| close | 抽屉关闭时触发的事件 | false |



### Slot

| 名称 | 描述 |
| --- | --- |
| default | 不传入list的时候可以自定义菜单内容 |


## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)