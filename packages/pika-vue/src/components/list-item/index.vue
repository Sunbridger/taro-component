<template>
    <view
        :class="{
            'pk-list-item': true,
            'pk-list-item--border': hasBorder,
            'pk-list-item--disabled': disabled,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
        @tap="click"
    >
        <view v-if="$slots.left" class="pk-list-item__left">
            <slot name="left"></slot>
        </view>
        <view v-else class="pk-list-item__left">
            <image
                v-if="thumb"
                class="pk-list-item__left_icon"
                :src="thumb"
            ></image>
            <pk-icon
                v-if="!thumb && iconInfo"
                class="pk-list-item__left_icon"
                :type="iconInfo.type"
                :size="iconInfo.size || 20"
                :color="iconInfo.color"
                :class-name="iconInfo.className"
                :spin="iconInfo.spin"
            ></pk-icon>
            <view
                :class="{
                    'pk-list-item__title': true,
                    'pk-list-item__title--offset': thumb || iconInfo,
                }"
            >
                {{ title }}
            </view>
            <!-- 补充文案 -->
            <view
                v-if="note"
                :class="{
                    'pk-list-item__note': true,
                    'pk-list-item__note--offset': thumb || iconInfo,
                }"
            >
                {{ note }}
            </view>
        </view>
        <view v-if="$slots.right" class="pk-list-item__right">
            <slot name="right"></slot>
        </view>
        <view v-else class="pk-list-item__right">
            <view
                v-if="extraText"
                :class="{
                    'pk-list-item__extra-text': true,
                    'pk-list-item__extra-text--offset': IconClassName,
                }"
            >
                {{ extraText }}
            </view>
            <pk-icon
                v-if="IconClassName"
                class="pk-list-item__right-icon"
                color="#BCBDC5"
                :type="IconClassName"
            ></pk-icon>
        </view>
    </view>
</template>

<script>
import '../../style/components/list-item.css';
import Common from '../../utils/commonMixin';
import ListItem from './main';
import PkIcon from '../icon';

export default {
    name: 'PkListItem',
    components: {
        PkIcon,
    },
    mixins: [ListItem, Common],
};
</script>
