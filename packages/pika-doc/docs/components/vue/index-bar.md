---
componentType: 'vue'
demoPath: '/#/pages/components/navigation/index-bar/index'
---

# IndexBar 索引列表

## 按需引入

```js
import { PkIndexBar } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-index-bar
    ref="indexBar"
    v-if="indexShow"
    :list="itemList"
    topKey="*"
>
    <!-- 自定义内容 -->
    <view class="indexes-custom">
        <view class="indexes-custom__close" @tap="closeIndexes">
            <pk-icon type="arrow-left"></pk-icon>
        </view>
        <view class="indexed-custom__search">
            <pk-search-bar @confirm="onConfirm"></pk-search-bar>
        </view>
    </view>
</pk-index-bar>
```

## API

### Props

| 参数        | 说明                                                              | 类型    | 可选值 | 默认值 |
| ----------- | ----------------------------------------------------------------- | ------- | ------ | ------ |
| animation   | 是否开启跳转过渡动画                                              | Boolean | -      | false  |
| isVibrate   | 是否切换 key 的震动，只在微信小程序有效                           | Boolean | -      | true   |
| isShowToast | 是否用弹框显示当前 key                                            | Boolean | -      | true   |
| topKey      | 右侧导航第一个名称                                                | String  | -      | Top    |
| list        | `[ {title:列表标题,key:右侧导航标题,items:[{name: 列表项内容}]}]` | Array   | -      | -      |



### Events

| 事件名称                | 说明                            | 返回参数  |
| ----------------------- | ------------------------------- | --------- |
| click                   | 列表项点击事件                  | 列表项    |
| $emit('jumpToKey', key) | 主动触发跳转到某个key所在的列表 | key: 名称 |



### Slot

| 名称    | 描述               |
| ------- | ------------------ |
| default | 列表顶部自定义区域 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
