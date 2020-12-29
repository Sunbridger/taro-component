---
componentType: 'react'
demoPath: '/pages/components/badge/badge'
---

# Badge(React)

### 说明
#### 组件说明
在元素右上角展示消息提醒，可用于按钮等组件。
#### 开发人员
章政

### 引入
#### 组件
import {PkBadge} from '@souche/pika-react';
**组件依赖的样式文件（仅按需引用时需要）**
@import "~@souche/pika-react/dist/style/components/badge.scss";


### 代码演示
#### 小红点
```jsx
<PkBadge dot>
  <Button>按钮</Button>
</PkBadge>
```


#### 数值
```jsx
<PkBadge value={80}>
  <Button>按钮</Button>
</PkBadge>
```
### 
#### 最大数值
```jsx
 <PkBadge value={180} maxValue={100}>
  <Button>按钮</Button>
</PkBadge>
<PkBadge value={90} maxValue={100}>
  <Button>按钮</Button>
</PkBadge>
```
### API
#### PkBage Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value | 显示数值大小 | number | - | NaN |
| maxValue | 最大显示数值大小 | number | - | NaN |
| dot | 显示红点 | boolean | false/true | false |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      | ✅    |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)


