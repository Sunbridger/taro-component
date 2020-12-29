---
componentType: 'vue'
demoPath: '/#/pages/components/basic/button/index'
---

# Button 按钮

如果需要按需引入, 则:

```js
import { PkButton } from '@souche/pika-vue';
```

## 使用案例

### 主按钮

```html
<pk-button size="large">按钮</pk-button>
<pk-button size="medium">medium</pk-button>
<pk-button size="small" disabled>small</pk-button>
```
### 线性按钮

```html
<pk-button size="medium" type="linear">linear</pk-button>
<pk-button size="medium" type="linear" disabled>linear</pk-button>
```

### 次要按钮

```html
<pk-button size="medium" type="secondary">secondary</pk-button>
<pk-button size="medium" type="secondary" disabled>secondary</pk-button>
```

### 文字按钮

```html
<pk-button size="medium" type="text">text</pk-button>
<pk-button size="medium" type="text" disabled>text</pk-button>
```
### 禁用按钮

```html
<pk-button size="medium" disabled>disabled</pk-button>
<pk-button size="medium" type="secondary" disabled>disabled</pk-button>
```
### 自定义通栏、圆角

```html
<pk-button full size="large">full</pk-button>
<pk-button full :circle="false"  size="medium">full</pk-button>
<pk-button full>full</pk-button>
```
### 按钮组

```html
<pk-button group>
    <pk-button size="medium" type="secondary">secondary</pk-button>
    <pk-button size="medium">medium</pk-button>
</pk-button>
<pk-button group flex>
    <pk-button size="medium">secondary</pk-button>
    <pk-button size="medium">medium</pk-button>
</pk-button>
```
### 其他按钮

```html
<pk-button type="other">other</pk-button>
<pk-button type="other" size="large">other</pk-button>
```
## API

| 属性 | 类型 | 默认值 | 必填 | 可选值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| type | string | primary | 否 | primary, secondary, linear, text, hollow, other | 按钮类型 |
| size | string | small | 否 | small, medium, large | 按钮大小 |
| circle | boolean | true | 否 |  | 是否是圆角按钮 |
| full | boolean | false | 否 |  | 是否为通栏按钮 |
| disabled | boolean | false | 否 |  | 是否可点击 |
| group | boolean | false | 否 |  | 是否为按钮组 |
| flex | boolean | false | 否 |  | 按钮组是否平均占位 |

#### Events

| 事件 | 说明 | 返回参数 |
| --- | --- | --- |
| click | 点击触发 | event 对象 |

#### Slot
| 名称 | 描述 |
| --- | --- |
| default | 按钮或按钮组显示的内容 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
