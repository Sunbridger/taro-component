---
componentType: 'react'
demoPath: '/pages/components/steps/steps'
---
# Steps 步骤条
> Steps 步骤条

## 引入
```js
import { PkSteps } from '@souche/pika-react';
```
组件依赖的样式文件（仅按需引入时需要）：
```js
@import "~@souche/pika-react/dist/style/components/steps.scss";
```
## 代码演示

::: details 点击查看代码

```js
//基本使用
const items = [
  {
    title: '步骤一',
    desc: '这里是额外的信息，最多两行',
    showIndex: true,
    // status: 'done',
  },
  {
    title: '步骤二',
    showIndex: true,
    desc: '这里是额外的信息，最多两行',
  },
  {
    title: '步骤三',
    desc: '这里是额外的信息，最多两行',
    showIndex: true,
    // status: 'disabled',
  },
];
<PkSteps items={items} current={1} />

//onChange改变当前步骤索引
const items = [
  {
    title: '步骤一',
    desc: '这里是额外的信息，最多两行',
    showIndex: true,
  },
  {
    title: '步骤二',
    showIndex: true,
    desc: '这里是额外的信息，最多两行',
  },
  {
    title: '步骤三',
    desc: '这里是额外的信息，最多两行',
    showIndex: true,
  },
];
<PkSteps
  items={items}
  current={this.state.current}
  onChange={index => this.setState({ current: index })}
/>

//自定义图标步骤条
const items_icon = [
  {
    title: '步骤一',
    icon: {
      type: 'heart',
      activeColor: '#fff',
      inactiveColor: '#999',
      size: 12,
    },
  },
  {
    title: '步骤二',
    icon: {
      type: 'close',
      activeColor: '#fff',
      inactiveColor: '#999',
      size: 12,
    },
  },
  {
    title: '步骤三',
    icon: {
      type: 'check',
      activeColor: '#fff',
      inactiveColor: '#999',
      size: 12,
    },
  },
];
<PkSteps items={items_icon} current={2} />

//状态步骤条
  const items_status = [
    {
      title: '成功',
      status: 'success',
    },
    {
      title: '选中',
      status: 'done',
    },
    {
      title: '失败',
      status: 'failed',
    },
    {
      title: '禁用',
      status: 'disabled',
    },
    {
      title: '默认',
    },
];
<PkSteps items={items_status} />

```
:::

## API
### Props
| 参数          | 说明           | 类型   | 可选值         | 默认值 | 可选或必填 |
| ------------- |:-------------:| -----:|:-------------:| -----:| --------:|
| current       | 当前步骤索引值  | number |    -     |    -    | 可选 |
| items        | 步骤条数据列表, 具体字段详见 items 字段说明 | array |   -   |   []  | 必填 |
| className     | 定制样式类名    | array/string |   -   | - | 可选 |
| style         | 定制样式style  | object | -      |  -  | 可选 |

### items字段说明
| 参数          | 说明           | 类型   | 可选值         | 默认值 | 可选或必填 |
| ------------- |:-------------:| -----:|:-------------:| -----:| --------:|
| title        | 步骤标题   | string |    -     |    -    | 可选 |
| desc         | 步骤描述文字 | string |   -   |   -  | 可选 |
| icon         | 步骤图标信息，具体字段见 icon 字段说明 | object |   -   | - | 可选 |
| status       | 步骤的状态  | string | 'success', 'failed', 'done', 'disabled' |  -  | 可选 |
| showIndex    | 是否展示步骤索引（自定义icon 或 status为success / failed 的时候无效）| boolean | true, false | false | 可选 |

### icon字段说明
| 参数          | 说明           | 类型   | 可选值         | 默认值 | 可选或必填 |
| ------------- |:-------------:| -----:|:-------------:| -----:| --------:|
| type        | icon类型   | string |  见Icon组件 type属性  |    -    | 必填 |
| activeColor | icon激活态颜色 | string |   -   |   #fff  | 可选 |
| inactiveColor | icon非激活态颜色 | string |   -   |   #999  | 可选 |
| size       | icon大小  | number |  -  |  12  | 可选 |

### Events
| 事件          | 说明           | 返回参数             |
| ------------- |:-------------:| -------------------:|
| onChange      | 点击事件, 当用户需要点击步骤做相关操作时传入 | 点击步骤的索引和当前事件对象 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)