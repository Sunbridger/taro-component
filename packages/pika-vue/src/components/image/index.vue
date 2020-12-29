<template>
    <view class="pk-image">
        <image
            :class="actualClassName"
            :style="customStyle"
            :src="nowSrc"
            :lazy-load="lazyLoad"
            :binderror="binderror"
            :bindload="bindload"
            :mode="mode"
        ></image>
    </view>
</template>

<script>
import '../../style/components/image.css';
import Common from '../../utils/commonMixin';
import Image from './main';

export default {
    name: 'PkImage',
    mixins: [Image, Common],
};
</script>
