---
componentType: 'react'
demoPath: '/pages/components/notice/notice'
---
# Notice 提示文字
> Notice 提示文字

## 引入
```js
import { PkNotice } from '@souche/pika-react';
```
组件依赖的样式文件（仅按需引入时需要）：
```js
@import "~@souche/pika-react/dist/style/components/notice.scss";
```
## 代码演示

::: details 点击查看代码

```js
//基本使用
<PkNotice text='default'></PkNotice>
<PkNotice type='info' text='info'></PkNotice>
<PkNotice type='success' text='success'></PkNotice>
<PkNotice type='warn' text='warn'></PkNotice>

//跑马灯
<PkNotice
  duration={8}
  scroll
  text='这是 Notice 提示文字，这是 Notice 提示文字，这是 Notice
  提示文字这是 Notice 提示文字，这是 Notice 提示文字，这是
  Notice 提示文字'
></PkNotice>

//图标
<PkNotice
  icon='heart'
  single
  text='[单行]这是 Notice 提示文字，这是 Notice 提示文字，这是 Notice
  提示文字这是 Notice 提示文字，这是 Notice 提示文字，这是
  Notice 提示文字'
></PkNotice>
<PkNotice
  type='info'
  icon='heart'
  text='[多行]这是 Notice 提示文字，这是 Notice 提示文字，这是
  Notice 提示文字这是 Notice 提示文字，这是 Notice
  提示文字，这是 Notice 提示文字'
></PkNotice>

//关闭
<PkNotice
  single
  close
  text='[单行]这是 Notice 提示文字，这是 Notice 提示文字，这是
  Notice 提示文字这是 Notice 提示文字，这是 Notice
  提示文字，这是 Notice 提示文字'
></PkNotice>
<PkNotice
  type='info'
  close
  text='[多行]这是 Notice 提示文字，这是 Notice 提示文字，这是
  Notice 提示文字这是 Notice 提示文字，这是 Notice
  提示文字，这是 Notice 提示文字'
></PkNotice>

//更多操作
<PkNotice
  icon='heart'
  close
  single
  text='[单行]这是 Notice 提示文字，这是 Notice 提示文字，这是
  Notice 提示文字这是 Notice 提示文字，这是 Notice
  提示文字，这是 Notice 提示文字'
>
  <Button
    style={{
           width: '96rpx',
           height: '48rpx',
           fontSize: '20rpx',
           lineHeight: '48rpx',
          }}
    onClick={()=>{/*自定义操作*/}}
  >
    按钮
  </Button>
</PkNotice>
<PkNotice
  icon='heart'
  type='info'
  close
  text='[多行]这是 Notice 提示文字，这是 Notice 提示文字，这是
  Notice 提示文字这是 Notice 提示文字，这是 Notice
  提示文字，这是 Notice 提示文字'
>
  <Text
    style={{
       fontSize: '24rpx',
       lineHeight: 1.5,
       verticalAlign: 'middle',
      }}
      onClick={()=>{/*自定义操作*/}}
  >
    更多
  </Text>
</PkNotice>
```
:::

## API
### Props
| 参数          | 说明           | 类型   | 可选值         | 默认值 | 可选或必填 |
| ------------- |:-------------:| -----:|:-------------:| -----:| --------:|
| type          | 样式类型       | string | default, info, warn, success | default | 可选 |
| text          | 展示文字       | string |    -    |    -   | 必填 |
| icon          | 提示文字右边的icon类型 | string | 见Icon组件的type属性 | - | 可选 |
| single        | 是否单行       | boolean | true, false  |   false | 可选 |
| close         | 是否可关闭     | boolean | true, false  | false | 可选 |
| scroll        | 是否展示跑马灯（值为true，则只支持单行模式）| boolean | true, false   |  false  | 可选 |
| duration      | 跑马灯周期     | number |     -      |  10（单位：s）  | 可选 |
| className     | 定制样式类名    | array/string |   -   | - | 可选 |
| style         | 定制样式style  | object | -      |  -  | 可选 |

### Events
| 事件          | 说明           | 返回参数             |
| ------------- |:-------------:| -------------------:|
| onClose       | 关闭事件    | 当前事件对象 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)