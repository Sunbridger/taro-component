<template>
    <view
        :class="{
            'pk-badge': true,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <slot></slot>
        <view
            :class="{
                'pk-badge__dot': dot,
                'pk-badge__norm': showText,
            }"
        >
            {{ showText }}
        </view>
    </view>
</template>

<script>
import '../../style/components/badge.css';
import Common from '../../utils/commonMixin';
import Badge from './main';

export default {
    name: 'PkBadge',
    mixins: [Badge, Common],
};
</script>
