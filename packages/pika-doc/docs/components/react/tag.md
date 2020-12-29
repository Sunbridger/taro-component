---
componentType: 'react'
demoPath: '/pages/components/tag/tag'
---
# Tag 标签
> Tag 标签

## 引入
```js
import { PkTag } from '@souche/pika-react';
```
组件依赖的样式文件（仅按需引入时需要）：
```js
@import "~@souche/pika-react/dist/style/components/tag.scss";
```
## 代码演示

::: details 点击查看代码

```js
// 基本使用
<PkTag>小圆角标签</PkTag>
<PkTag circle>大圆角标签</PkTag>
<PkTag active>选中状态</PkTag>
<PkTag disabled>禁用状态</PkTag>

// 小标签
<PkTag size='small'>标签 --</PkTag>
<PkTag type='primary' size='small'>标签 --</PkTag>
<PkTag size='small' circle>标签 --</PkTag>

// 实心标签
<PkTag filled>标签 ++</PkTag>
<PkTag type='primary' filled>标签 ++</PkTag>
<PkTag circle filled>标签 ++</PkTag>

// 带icon的标签
<PkTag icon='warning' type='primary'>
  icon 标签
</PkTag>

// 可关闭的标签
<PkTag close onClose={(name, event)=>{console.log(name, event);}}>closable</PkTag>
```
:::

## API
### Props
| 参数          | 说明           | 类型   | 可选值         | 默认值 | 可选或必填 |
| ------------- |:-------------:| -----:|:-------------:| -----:| --------:|
| size          | 标签大小       | string | normal, small | normal |  可选   |
| type          | 样式类型       | string | default, primary | default |  可选   |
| circle        | 标签是否大圆角  | boolean | true, false  |   false |  可选   |
| filled        | 是否实心       | boolean | true, false  |   false |  可选   |
| name          | 标签名字       | string |       -       | - |  可选   |
| close         | 是否可关闭     | boolean | true, false  | false |  可选   |
| active        | 是否选中状态   | boolean | true, false   |  false  |  可选   |
| disabled      | 是否禁用态     | boolean | true, false   |  false  |  可选   |
| icon          | 标签右边的icon类型 | string | 见Icon组件的type属性 | - |  可选   |
| className     | 定制样式类名    | array/string |   -   | - |  可选   |
| style         | 定制样式style  | object | -      |  -  |  可选   |

### Events
| 事件          | 说明           | 返回参数             |
| ------------- |:-------------:| -------------------:|
| onClick       | 标签点击事件    | 当前标签name 和 事件对象event |
| onClose       | 标签关闭事件    | 当前标签name 和 事件对象event |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)