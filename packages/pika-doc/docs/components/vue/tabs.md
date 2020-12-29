---
componentType: 'vue'
demoPath: '/#/pages/components/navigation/tabs/index'
---

# Tabs 标签页

## 按需引入

```js
import { PkTabs, PkTabPane } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-tabs :tab-list="tabList4" v-model="current6">
    <pk-tab-pane :index="0" class="panel-content">
        标签内容1
    </pk-tab-pane>
    <pk-tab-pane :index="1" class="panel-content">
        标签内容2
    </pk-tab-pane>
</pk-tabs>

<script>
export default {
    data() {
        return {
            tabList: [
                { title: '标签页1' },
                { title: '标签页2' },
                { title: '标签页3' },
                { title: '标签页4' },
            ],
            current: 0,
        }
    }
}
</script>
```

### 垂直模式

```html
<pk-tabs
    :scroll="true"
    tabDirection="vertical"
    :tab-list="tabList"
    v-model="current"
>
    <pk-tab-pane :index="0" class="panel-content">
        标签内容1
    </pk-tab-pane>
    <pk-tab-pane :index="1" class="panel-content">
        标签内容2
    </pk-tab-pane>
    <pk-tab-pane :index="2" class="panel-content">
        标签内容3
    </pk-tab-pane>
    <pk-tab-pane :index="3" class="panel-content">
        标签内容4
    </pk-tab-pane>
    <pk-tab-pane :index="4" class="panel-content">
        标签内容5
    </pk-tab-pane>
    <pk-tab-pane :index="5" class="panel-content">
        标签内容6
    </pk-tab-pane>
</pk-tabs>

<script>
export default {
    data() {
        return {
            tabList: [
                { title: '标签页1' },
                { title: '标签页2' },
                { title: '标签页3' },
                { title: '标签页4' },
                { title: '标签页5' },
                { title: '标签页6' },
            ],
            current: 0,
        }
    }
}
</script>
```

### 禁止切换动画

```html
 <pk-tabs
    :animated="false"
    :tab-list="tabList"
    v-model="current"
>
    <pk-tab-pane :index="0" class="panel-content">
        标签内容1
    </pk-tab-pane>
    <pk-tab-pane :index="1" class="panel-content">
        标签内容2
    </pk-tab-pane>
    <pk-tab-pane :index="2" class="panel-content">
        标签内容3
    </pk-tab-pane>
    <pk-tab-pane :index="3" class="panel-content">
        标签内容4
    </pk-tab-pane>
</pk-tabs>
```

## API

### Props

| 参数         | 说明                                                                                                           | 类型    | 可选值                   | 默认值       |
| ------------ | -------------------------------------------------------------------------------------------------------------- | ------- | ------------------------ | ------------ |
| tabDirection | Tab 方向                                                                                                       | String  | 'horizontal'，'vertical' | 'horizontal' |
| height       | Tab 高度，当 tabDirection='vertical'时，需要设置；当 tabDirection='horizontal'时，会自动根据内容撑开，请勿设置 | String  | -                        | -            |
| current      | 当前选中的标签索引值，从0计数，开发者需要通过 onClick 事件来改变 current，从而切换 tab                         | Number  | -                        | 0            |
| scroll       | 是否滚动，当标签太多时，建议使用。否则会出现部分标签被隐藏                                                     | Boolean | -                        | false        |
| swipeable    | 是否支持手势滑动切换内容页，当 tabDirection='vertical'时，无论是否设置，都不支持手势滑动切换内容页             | Boolean | -                        | true         |
| animated     | 是否开启切换动画                                                                                               | Boolean | -                        | true         |
| tabList      | tab 列表 object 详细字段看下表                                                                                 | Array   | -                        | -            |



#### tab-list

| 参数  | 说明 | 类型   | 可选值 | 默认值 | 可选或必填 |
| ----- | ---- | ------ | ------ | ------ | ---------- |
| title | 标题 | String | -      | 0      | 必填       |



#### tab-pane

| 参数  | 说明     | 类型   | 可选值 | 默认值 | 可选或必填 |
| ----- | -------- | ------ | ------ | ------ | ---------- |
| index | 唯一索引 | Number | -      | -      | 必填       |



### Events

| 事件名称 | 说明                   | 返回参数 |
| -------- | ---------------------- | -------- |
| change   | 点击或者滑动触发的事件 |          |



### Slot

| 名称    | 描述       |
| ------- | ---------- |
| default | 标签页内容 |


## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
