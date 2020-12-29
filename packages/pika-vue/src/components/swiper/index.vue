<template>
    <view
        :class="{
            'pk-swiper': true,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <swiper
            :class-name="className"
            :indicator-dots="indicatorDots"
            :indicator-color="indicatorColor"
            :indicator-active-color="indicatorActiveColor"
            :autoplay="autoplay"
            :interval="interval"
            :duration="duration"
            :current="current"
            :vertical="vertical"
            :circular="circular"
            :bindchange="onChange"
            :bindanimationfinish="onAnimationfinish"
            :easing-function="easingFunction"
        >
            <slot></slot>
        </swiper>
    </view>
</template>

<script>
import '../../style/components/swiper.css';
import Common from '../../utils/commonMixin';
import Swiper from './main';

export default {
    name: 'PkSwiper',
    components: {},
    mixins: [Swiper, Common],
};
</script>
