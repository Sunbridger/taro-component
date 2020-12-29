---
componentType: 'vue'
demoPath: '/#/pages/components/views/avatar/index'
---

# Avatar 头像

如果需要按需引入, 则:

```js
import { PkAvatar } from '@souche/pika-vue';
```

## 使用案例

### 圆角矩形头像

```html
<pk-avatar size="large" :image="Header" />
<pk-avatar size="normal" :image="Header" />
<pk-avatar size="small" :image="Header" />
```

### 圆形头像

```html
 <pk-avatar size="large" :image="Header" circle />
 <pk-avatar size="normal" :image="Header" circle />
 <pk-avatar size="small" :image="Header" circle />
```

### 圆角矩形头像(支持文字)

```html
<pk-avatar size="large" text="Large" />
<pk-avatar size="normal" text="Normal" />
<pk-avatar size="small" text="Small" />
```

### 圆形头像(支持文字)

```html
<pk-avatar size="large" circle text="Large" />
<pk-avatar size="normal" circle text="Normal" />
<pk-avatar size="small" circle text="Small" />
```


## API

| 属性 | 类型 | 默认值 | 必填 | 可选值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| size | String | normal | 否 | large, normal, small | 头像大小	 |
| circle | Boolean | false | 否 |  | 头像是否圆形	 |
| image | String |  | 否 |  | 头像图片地址	 |
| text | String |  | 否 |  | 以文字形式展示头像	 |
| openData | Object | {'{ type: \'userAvatarUrl\'}'} | 否 |  | 参考微信开放数据	 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
