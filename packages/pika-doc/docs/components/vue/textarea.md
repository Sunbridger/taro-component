---
componentType: 'vue'
demoPath: '/#/pages/components/form/textarea/index'
---

# Textarea 文本域

如果需要按需引入, 则: 

```js
import { PkTextarea } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-textarea value="内容内容内容"></pk-textarea>
```

### 自定义高度

```html
<pk-textarea :height="120" placeholder="自定义内容高度120"></pk-textarea>
```

### 关闭字数统计

```html
<pk-textarea :count="false"></pk-textarea>
```

### 最大输入字数

```html
<pk-textarea max-length="160"></pk-textarea>
```

### 自定义内容说明/操作

```html
<!-- 自定义提示 -->
<pk-textarea v-model="value" max-length="140">
    <view class="cus_tip" slot="tip">车况描述包含以下敏感词，请修改：发票发票贩毒毒品，贩毒</view>
</pk-textarea>

<!-- 自定义操作 -->
<pk-textarea v-model="value" :count="false">
    <view slot="ctrl" class="cus_ctrl">
        <pk-button type="text">清除</pk-button>
        <pk-button>识别</pk-button>
    </view>
</pk-textarea>
```

## API

### Props

| 参数                  | 说明                                                                                                              | 类型    | 可选值 | 默认值 |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------ |
| value（v-model）      | 文本内容                                                                                                          | string  | -      | -      |
| placeholder           | 提示文本                                                                                                          | string  | -      | 请输入 |
| count                 | 是否显示字数， 支付宝平台不可控制                                                                                 | Boolean | -      | true   |
| placeholderStyle      | 指定 placeholder 的样式，只在小程序有效                                                                           | String  | -      | -      |
| placeholderClass      | 指定 placeholder 的样式类，只在小程序有效                                                                         | String  | -      | -      |
| disabled              | 是否禁用                                                                                                          | String  | -      | false  |
| maxLength             | 最大长度                                                                                                          | Number  | -      | 140    |
| autoFocus             | 是否自动聚焦                                                                                                      | Boolean | -      | false  |
| focus                 | 获取焦点                                                                                                          | Boolean | -      | false  |
| height                | 输入框高度                                                                                                        | Number  | -      | 100    |
| autoHeight            | 是否自动增高，设置 autoHeight 时，style.height不生效                                                              | Boolean | -      | false  |
| fixed                 | 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true                                      | Boolean | -      | false  |
| cursorSpacing         | 指定光标与键盘的距离，单位 px 。取 Textarea 距离底部的距离和 cursorSpacing 指定的距离的最小值作为光标与键盘的距离 | Number  | -      | 50     |
| cursor                | 指定 focus 时的光标位置                                                                                           | Number  | -      | -1     |
| showConfirmBar        | 是否显示键盘上方带有”完成“按钮那一栏                                                                              | Boolean | -      | true   |
| selectionStart        | 光标起始位置，自动聚集时有效，需与 selectionEnd 搭配使用                                                          | Number  | -      | -1     |
| selectionEnd          | 光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用                                                        | Number  | -      | -1     |
| adjustPosition        | 键盘弹起时，是否自动上推页面                                                                                      | Boolean | -      | true   |
| holdKeyboard          | focus 时，点击页面的时候不收起键盘                                                                                | Boolean | -      | false  |
| disableDefaultPadding | 是否去掉 iOS 下的默认内边距                                                                                       | Boolean | -      | false  |

### Events

| 事件名称               | 说明                                                                                                                    | 返回参数     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------ |
| focus                  | 获得焦点是触发                                                                                                          | common event |
| blur                   | 失去焦点是触发                                                                                                          | common event |
| lineChange             | 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}                                            | common event |
| input                  | 当键盘输入时，触发 input 事件，event.detail = {value, cursor, keyCode} onInput 处理函数的返回值并不会反映到 textarea 上 | common event |
| onConfirm              | 点击完成时， 触发 confirm 事件，event.detail = {value: value}                                                           | common event |
| onKeyboardHeightChange | 键盘高度发生变化的时候触发此事件                                                                                        | common event |

### Slot

| 名称 | 描述               |
| ---- | ------------------ |
| tip  | 文本上方的描述信息 |
| ctrl | 文本下方的控制信息 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

1. 字数统计现存问题, taro3.1.0之后会修复

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)