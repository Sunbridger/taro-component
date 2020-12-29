<template>
    <view
        :class="{
            'pk-fab': true,
            [`pk-fab-${size}`]: size,
            [`pk-fab-${position}`]: true,
            [actualClassName]: actualClassName,
        }"
        @tap="click"
    >
        <slot></slot>
    </view>
</template>

<script>
import '../../style/components/fab.css';
import Common from '../../utils/commonMixin';
import PKFab from './main';

export default {
    name: 'PKFab',
    mixins: [PKFab, Common],
};
</script>
