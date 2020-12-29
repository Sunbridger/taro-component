---
componentType: 'vue'
demoPath: '/#/pages/components/form/input/index'
---

# Input 输入框

如果需要按需引入, 则: 

```js
import { PkInput } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-input title="标准六个文字" placeholder="标准六个文字" clear />
```

### 自动聚焦

```html
<pk-input
    title="自动聚焦"
    :focus="true"
    placeholder="自动聚焦请在实机中查看"
/>
```

### 不同的输入框类型

```html
<pk-input title="文本" type="text" placeholder="单行文本" />
<pk-input title="数字" type="number" placeholder="数字" />
<pk-input title="密码" type="password" placeholder="密码" />
<pk-input title="身份证" type="idcard" placeholder="身份证号码" />
<pk-input title="小数" type="digit" placeholder="小数" />
<pk-input title="手机号码" type="phone" placeholder="手机号码" />
```

### 不同的输入框状态

```html
<pk-input
    @click="disabledClick"
    disabled
    title="禁用"
    type="text"
    placeholder="禁用"
/>
<pk-input
    title="错误"
    type="text"
    placeholder="错误"
    error
    @error-click="errorClick"
/>
<pk-input
    title="清除"
    type="text"
    placeholder="清除输入"
    clear
    value="清理这里的内容"
/>
<pk-input
    title="必填项"
    type="text"
    placeholder="必填项"
    required
/>
<pk-input
    @keyboard-height-change="onKeyboardHeightChange"
    title="键盘高度"
    type="text"
    placeholder="监听键盘高度变化"
/>
```

### 自定义右侧内容

```html
<pk-input title="文本" type="text" placeholder="单行文本">
    <view class="custom-text">输入验证码</view>
</pk-input>
```


## API

| 参数              | 说明                                                                                                                               | 类型    | 可选值                                              | 默认值 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------- | ------ |
| value（v-model）  | 输入框当前值                                                                                                                       | String  | -                                                   | -      |
| name              | 输入框的唯一标识，有传入点击 title 会聚焦输入框                                                                                    | String  | -                                                   | -      |
| type              | 输入框类型                                                                                                                         | String  | `text`,`number`,`password`,`phone`,`idcard`,`digit` | `text` |
| max-length        | 最大长度                                                                                                                           | Number  | -                                                   | 140    |
| placeholder       | 占位符                                                                                                                             | String  | -                                                   | -      |
| placeholder-style | 指定 placeholder 的样式，只在小程序有效                                                                                            | String  | -                                                   | -      |
| placeholder-class | 指定 placeholder 的样式类，只在小程序有效                                                                                          | String  | -                                                   | -      |
| title             | 输入框左侧标题，若传入为空，则不显示标题                                                                                           | String  | -                                                   | -      |
| cursor            | 指定 focus 时的光标位置                                                                                                            | Number  | -                                                   | -      |
| cursor-spacing    | 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离,只在微信小程序有效 | Number  | -                                                   | 50     |
| adjust-position   | 键盘弹起时，是否自动上推页面                                                                                                       | Boolean | -                                                   | true   |
| disabled          | 是否禁止输入，禁止点击按钮                                                                                                         | Boolean | -                                                   | false  |
| border            | 是否显示下划线边框                                                                                                                 | Boolean | -                                                   | true   |
| confirm-type      | 设置键盘右下角按钮的文字                                                                                                           | String  | send, search,next,go,done                           | done   |
| selection-start   | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用                                                                          | Number  | -                                                   | -1     |
| selection-end     | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用                                                                        | Number  | -                                                   | -1     |
| error             | 是否出现错误                                                                                                                       | Boolean | -                                                   | false  |
| clear             | 是否显示清除按钮，需要传入 onChange 事件来改变value                                                                                | Boolean | -                                                   | false  |
| focus             | 是否聚焦                                                                                                                           | Boolean | -                                                   | false  |
| required          | 是否必填                                                                                                                           | Boolean | -                                                   | false  |
| hold-keyboard     | focus时，点击页面的时候不收起键盘                                                                                                  | boolean | -                                                   | false  |

#### Events

| 事件名称 | 说明 | 返回参数 |
| --- | --- | --- |
| input | 输入框内容改变是触发的事件 | (value,event) => void |
| focus | 输入框被选中时触发的事件 | (value,event) => void |
| blur | 输入框失去焦点时触发的事件 | (value,event) => void |
| confirm | 点击完成按钮时触 | (value,event) => void |
| error-click | 点击错误按钮触发的事件 | () => void |
| click | 当组件为disabled时，点击组件触发的事件 | () => void |
| keyboard-height-change | 键盘高度发生变化的时候触发此事件 | (event) => void |

#### Slot

| 名称 | 描述 |
| --- | --- |
| default | 输入框自定义右侧内容 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

1. alipay下输入框无法清除内部内容

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)