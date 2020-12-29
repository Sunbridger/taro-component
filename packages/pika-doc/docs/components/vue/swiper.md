---
componentType: 'vue'
demoPath: '/#/pages/components/views/swiper/index'
---

# Swiper 滑动视图容器

如果需要按需引入, 则:

```js
import { PkSwiper } from '@souche/pika-vue';
```

## 使用案例

### 基础使用

```html
<pk-swiper
    className="test-swp"
    :indicatorDots="true"
>
    <pk-swiper-item>
        <view class="cls1 bgc1">
            这是第一张
        </view>
    </pk-swiper-item>
    <pk-swiper-item>
        <view class="cls1 bgc2">
            这是第二张
        </view>
    </pk-swiper-item>
    <pk-swiper-item>
        <view class="cls1 bgc3">
            这是第三张
        </view>
    </pk-swiper-item>
    <pk-swiper-item>
        <view class="cls1 bgc4">
            这是第四张
        </view>
    </pk-swiper-item>
</pk-swiper>
```

### 自动轮播

```html
<pk-swiper
    className="test-swp"
    :autoplay="true"
    :indicatorDots="true"
>
    <pk-swiper-item>
        <view class="cls1 bgc1">
            这是第一张
        </view>
    </pk-swiper-item>
    <pk-swiper-item>
        <view class="cls1 bgc2">
            这是第二张
        </view>
    </pk-swiper-item>
    <pk-swiper-item>
        <view class="cls1 bgc3">
            这是第三张
        </view>
    </pk-swiper-item>
    <pk-swiper-item>
        <view class="cls1 bgc4">
            这是第四张
        </view>
    </pk-swiper-item>
</pk-swiper>
```



## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
