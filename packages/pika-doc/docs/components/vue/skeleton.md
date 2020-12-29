---
componentType: 'vue'
demoPath: '/#/pages/components/views/skeleton/index'
---

# Skeleton 骨架屏

如果需要按需引入, 则:

```js
import { PkSkeleton } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-skeleton></pk-skeleton>
```

### 带头像

```html
<pk-skeleton avatar></pk-skeleton>
```

### 不带动画

```html
<pk-skeleton avatar :animation="false"></pk-skeleton>
```

### 自定义行数及宽度

```html
<pk-skeleton :rowWidth="rowWidth1" avatar></pk-skeleton>
```
### 自定义头像大小及形状

```html
<pk-skeleton avatar :animation="true" avatarSize="44" avatarShape="squzre"></pk-skeleton>
<pk-skeleton avatar :animation="true" avatarSize="44" avatarShape="round"></pk-skeleton>
```


## API

| 属性 | 类型 | 默认值 | 必填 | 可选值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| avatar | Boolean | false | 否 | large, normal, small | 是否展示头像	 |
| avatarShape | String | round | 否 | round、squzre | 头像形状	 |
| avatarSize | Number |  | 32 |  | 头像大小	 |
| animation | Boolean | true | 否 |  | 是否启用动画效果 |
| rowWidth | Array | ['40%', '100%', '100%', '60%'] | 否 |  | 行数及宽度	 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
