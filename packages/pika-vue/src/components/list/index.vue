<template>
    <view
        :class="{
            'pk-list': true,
            'pk-list--border': hasBorder,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <slot></slot>
    </view>
</template>

<script>
import '../../style/components/list.css';
import Common from '../../utils/commonMixin';
import List from './main';

export default {
    name: 'PkList',
    components: {},
    mixins: [List, Common],
};
</script>
