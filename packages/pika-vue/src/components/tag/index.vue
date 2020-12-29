<template>
    <view
        :class="{
            'pk-tag': true,
            [`pk-tag-${type}`]: type,
            [`pk-tag-${type}-fill`]: filled,
            [`pk-tag-disable`]: disable,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <slot></slot>
    </view>
</template>

<script>
import '../../style/components/tag.css';
import Common from '../../utils/commonMixin';
import Tag from './main';

export default {
    name: 'PkTag',
    components: {},
    mixins: [Tag, Common],
};
</script>
