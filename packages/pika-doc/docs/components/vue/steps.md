---
componentType: 'vue'
demoPath: '/#/pages/components/views/steps/index'
---

# Steps 步骤条

如果需要按需引入, 则:

```js
import { PkSteps } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-steps :items="items" :current.sync="current1"></pk-steps>
<pk-steps :items="items2" :current.sync="current2"></pk-steps>
<pk-steps :items="items3" :current.sync="current3"></pk-steps>
```

### 交互式使用

```html
<pk-steps canClick :items="items4" :current.sync="current4"></pk-steps>
```

## API

| 属性 | 类型 | 默认值 | 必填 | 可选值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| items | Array<{title: string}> |  | 是 |  | 节点数组 |
| current | Number | 0 | 否 |  | 当前处于的节点 |
| canClick | Boolean | false | 否 |  | 是否启用交互，会emit('update:current')事件 |

#### Events

| 事件 | 说明 | 返回参数 |
| --- | --- | --- |
| change | 当前索引发生变化时触发 | 当前索引 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
