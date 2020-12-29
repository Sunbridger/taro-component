<template>
    <view
        :class="{
            'pk-avatar': true,
            [`pk-avatar--${size}`]: size,
            'pk-avatar--circle': circle,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <template
            v-if="openData && openData.type === 'userAvatarUrl' && isWEAPP"
        >
            <open-data :type="openData.type"></open-data>
        </template>
        <template v-else-if="image">
            <image :src="image" class="pk-avatar__img" />
        </template>
        <template v-else>
            <text class="pk-avatar__text">{{ letter }}</text>
        </template>
    </view>
</template>

<script>
import '../../style/components/avatar.css';
import Common from '../../utils/commonMixin';
import avatar from './main';

export default {
    name: 'PkAvatar',
    mixins: [avatar, Common],
};
</script>
