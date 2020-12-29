<template>
    <view
        class="pk-sticky"
        :style="{
            zIndex,
            top,
        }"
    >
        <slot></slot>
    </view>
</template>

<script>
import '../../style/components/sticky.css';
import Sticky from './main';

export default {
    name: 'PkSticky',
    components: {},
    mixins: [Sticky],
};
</script>
