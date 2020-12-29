<template>
    <view
        :class="{
            'pk-notice': true,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <view v-if="prefixIcon" @tap="e => $emit('click-prefix', e)">
            <pk-icon class="pk-notice-tip-icon" :type="prefixIcon"> </pk-icon>
        </view>
        <view class="pk-notice-scroll-box">
            <view
                v-if="scroll"
                ref="marquee"
                class="pk-notice-marquee"
                :style="{ 'animation-duration': duration + 's' }"
            >
                <slot></slot>
            </view>
            <view v-else>
                <slot></slot>
            </view>
        </view>
        <view
            v-if="icon || text"
            class="pk-notice-right-btn-box"
            @tap="e => $emit('click', e)"
        >
            <pk-icon v-if="icon" :type="icon" class="pk-notice-icon-btn">
            </pk-icon>
            <view v-if="text" :style="textStyle">
                {{ text }}
            </view>
        </view>
        <view v-else @tap="e => $emit('click', e)">
            <slot name="right"></slot>
        </view>
    </view>
</template>

<script>
import '../../style/components/notice.css';
import Common from '../../utils/commonMixin';
import Notice from './main';
import PkIcon from '../icon';

export default {
    name: 'PkNotice',
    components: {
        PkIcon,
    },
    mixins: [Notice, Common],
    emits: ['click'],
};
</script>
