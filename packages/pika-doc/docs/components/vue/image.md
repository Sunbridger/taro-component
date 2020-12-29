---
componentType: 'vue'
demoPath: '/#/pages/components/basic/image/index'
---

# Image 图片

如果需要按需引入, 则:

```js
import { PkImage } from '@souche/pika-vue';
```

## 使用案例

### 基础样式

```html
<pk-badge dot />
<pk-badge value="29" maxValue="99" />
<pk-badge value="1234" maxValue="99" />
<pk-badge value="1234" maxValue="999" />
```

### 红点badge

```html
<pk-badge dot>
    <pk-button type="linear">按钮</pk-button>
</pk-badge>
```

### 超出Badge

```html
<pk-badge value="1234" maxValue="99">
    <pk-button type="linear">按钮</pk-button>
</pk-badge>
```

### 未超出Badge

```html
<pk-badge value="19">
    <pk-button type="linear">按钮</pk-button>
</pk-badge>
```


## API

| 属性 | 类型 | 默认值 | 必填 | 可选值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| mode | String | scaleToFill | 否 | scaleToFill、aspectFit、aspectFill widthFix、heightFix、top、bottom、center、left、right、 'top left'、'top right'、'bottom left' 、'bottom right' | 图片模式 [参考](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) |
| src | String |  | 是 |  | 图片url |
| lazyLoad | Boolean | false |  |  | 是否懒加载 |
| binderror | Function |  |  |  | 图片加载失败触发 |
| bindload | Function |  |  |  | 图片加载成功触发 |
| params | String |  |  |  | [参数](https://help.aliyun.com/document_detail/48884.html?spm=a2c4g.11186623.6.754.6e341e4289huXu) |



## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
