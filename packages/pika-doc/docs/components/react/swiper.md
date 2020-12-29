---
componentType: 'react'
demoPath: '/pages/components/swiper/swiper'
---

# Swiper(React)

### 说明
#### 组件说明
滑块视图容器

#### 开发人员
章政

### 引入
#### 组件
import {PkSwiper} from '@souche/pika-react';
**组件依赖的样式文件（仅按需引用时需要）**
@import "~@souche/pika-react/dist/style/components/swiper.scss";


### 代码演示
#### 基本使用
```jsx
<PkSwiper
    height={Taro.pxTransform(360)}
    indicatorColor='#999'
    indicatorActiveColor='#333'
    current={current}
    duration={duration}
    interval={interval}
    circular={isCircular}
    autoplay={isAutoplay}
    indicatorDots={hasIndicatorDots}
    previousMargin='20'
>
    {imgUrls.map(item => {
        return (
            <Image
                className='slide-image'
                src={item}
                key={item}
            />
        );
    })}
</PkSwiper>

```


### API
#### PkSticky Props
> 其余参数参考 https://taro-docs.jd.com/taro/docs/components/viewContainer/swiper

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| height | swiper高度 | string | - | auto |
| width | swiper宽度 | string | - | auto |

#### Pksticky Events
> 其余事件参考 https://taro-docs.jd.com/taro/docs/components/viewContainer/swiper

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      | ✅    |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)



