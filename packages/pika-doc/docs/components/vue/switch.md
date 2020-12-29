---
componentType: 'vue'
demoPath: '/#/pages/components/form/switch/index'
---

# Switch 开关

如果需要按需引入, 则: 

```js
import { PkSwitch } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-switch title="开关文本" :checked="checked" @change="change"></pk-switch>
```

### 禁用状态

```html
<pk-switch disabled title="禁用状态" checked></pk-switch>
```

### 自定义颜色

```html
<pk-switch color="#6190e8" :title="自定义颜色"></pk-switch>
```


## API

#### Props
| 参数     | 说明               | 类型    | 可选值 | 默认值   |
| -------- | ------------------ | ------- | ------ | -------- |
| title    | 标签名             | String  | -      | -        |
| color    | 背景颜色           | String  | -      | `主题色` |
| checked  | 是否显示开启       | Boolean | -      | false    |
| disabled | 是否禁止点击       | Boolean | -      | false    |
| border   | 是否显示下划线边框 | Boolean | -      | true     |

#### Events
| 事件名称 | 说明                 | 返回参数            |
| -------- | -------------------- | ------------------- |
| change   | 开关改变时触发的时间 | Boolean：开关的状态 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
