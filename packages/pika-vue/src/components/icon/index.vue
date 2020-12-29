<template>
    <view
        :class="{
            [`pk-icon`]: true,
            [`pk-icon-${type}`]: true,
            [className]: className,
            [`pk-icon-spin`]: spin,
            [actualClassName]: actualClassName,
        }"
        :style="actualStyle"
        @tap="click"
    >
    </view>
</template>

<script>
import '../../style/components/icon.css';
import Common from '../../utils/commonMixin';
import Icon from './main';

export default {
    name: 'PkIcon',
    components: {},
    mixins: [Icon, Common],
};
</script>
