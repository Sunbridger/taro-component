---
componentType: 'react'
demoPath: '/pages/components/avatar/avatar'
---
# Avatar 用户头像
> Avatar 用户头像

## 引入
```js
import { PkAvatar } from '@souche/pika-react';
```
组件依赖的样式文件（仅按需引入时需要）：
```js
@import "~@souche/pika-react/dist/style/components/avatar.scss";
```
## 代码演示

::: details 点击查看代码

```js
//基本使用
<PkAvatar
  size='small'
  image='https://cdn.nlark.com/yuque/0/2020/png/268745/1599026954312-2ad8f0e2-2631-41a3-87af-298c64051693.png'
></PkAvatar>

//文字头像
<PkAvatar size='small' text='皮卡组件库'></PkAvatar>

//圆形头像
<PkAvatar
  circle
  image='https://cdn.nlark.com/yuque/0/2020/png/268745/1599026954312-2ad8f0e2-2631-41a3-87af-298c64051693.png'
></PkAvatar>

//open-data
<PkAvatar openData={{ type: 'userAvatarUrl' }}></PkAvatar>

//自定义样式
<PkAvatar
  style={{ background: 'red' }}
  text='皮卡组件库'
></PkAvatar>
<PkAvatar
  className='my-class'
  circle
  text='皮卡组件库'
></PkAvatar>
<PkAvatar
  className={['my-class']}
  circle
  text='皮卡组件库'
></PkAvatar>

```
:::

## API
### Props
| 参数          | 说明           | 类型   | 可选值         | 默认值 | 可选或必填 |
| ------------- |:-------------:| -----:|:-------------:| -----:| --------:|
| size          | 头像大小       | string | large, normal, small | normal | 可选 |
| circle        | 是否圆形头像    | boolean | true, false   |    false  | 可选 |
| image         | 头像图片url    | string | - | - | 可选 |
| text          | 文字头像       | string |  -  |   -   | 可选 |
| openData      | 参考[微信开放数据](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html) | object | {'{ type: \'userAvatarUrl\'}'}  | - | 可选 |
| className     | 定制样式类名    | array/string |   -   | - | 可选 |
| style         | 定制样式style  | object | -      |  -  | 可选 |

注：openData / image / text 的优先级从高到底

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)