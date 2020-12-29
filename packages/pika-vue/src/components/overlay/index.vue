<template>
    <view
        v-if="show"
        :class="{
            'pk-overlay': true,
            [actualClassName]: actualClassName,
        }"
        :style="actStyle"
        @tap="clickOver"
    >
        <view class="pk-overlay__content">
            <view
                :class="{
                    'pk-overlay__close': true,
                    [`pk-overlay__close--${closePosition}`]: true,
                }"
                @tap.stop="closeClick"
            >
                <pk-icon
                    :type="iconName"
                    :color="iconColor"
                    :size="iconSize"
                ></pk-icon>
            </view>
            <slot></slot>
        </view>
    </view>
</template>

<script>
import '../../style/components/overlay.css';
import Common from '../../utils/commonMixin';
import Overlay from './main';
import PkIcon from '../icon';

export default {
    name: 'PkOverlay',
    components: {
        PkIcon,
    },
    mixins: [Overlay, Common],
};
</script>
