<template>
    <view
        :class="{
            'pk-tab-pane': true,
            'pk-tab-pane--vertical': tabs.isVertical,
            'pk-tab-pane--hidden': hidden,
            'pk-tab-pane--enter-left': enterLeft,
            'pk-tab-pane--leave-left': leaveLeft,
            'pk-tab-pane--enter-right': enterRight,
            'pk-tab-pane--leave-right': leaveRight,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
        @touchstart="touchStart"
        @touchend="touchEnd"
    >
        <slot></slot>
    </view>
</template>

<script>
import '../../style/components/tab-pane.css';
import Common from '../../utils/commonMixin';
import TabPane from './main';

export default {
    name: 'PkTabPane',
    components: {},
    mixins: [TabPane, Common],
};
</script>
