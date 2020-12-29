<template>
    <view
        :class="{
            'pk-skeleton': true,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <view
            v-if="avatar"
            class="pk-skeleton-avatar"
            :class="{ 'pk-skeleton-animation': animation }"
            :style="{
                width: `${avatarSize}px`,
                height: `${avatarSize}px`,
                borderRadius: avatarShape === 'squzre' ? '4px' : '50%',
            }"
        ></view>
        <view class="pk-skeleton-normal">
            <view
                v-for="(row, index) in rowWidth"
                :key="index"
                class="pk-skeleton-line"
                :class="{ 'pk-skeleton-animation': animation }"
                :style="{ width: row }"
            ></view>
        </view>
    </view>
</template>

<script>
import '../../style/components/skeleton.css';
import Common from '../../utils/commonMixin';
import Skeleton from './main';

export default {
    name: 'PkSkeleton',
    components: {},
    mixins: [Skeleton, Common],
};
</script>
