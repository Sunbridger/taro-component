<template>
    <view class="pk-popup">
        <!-- mask -->
        <view
            v-if="overlay"
            :class="{
                'pk-popup__mask': true,
                'pk-popup__mask--hidden': !show,
                [overlayStyle]: true,
            }"
            :style="innerMaskStyle"
            @tap="clickMask"
        ></view>
        <view
            :class="{
                'pk-popup__content': true,
                'pk-popup__content--round': round,
                'pk-popup__content--hidden': !show,
                [`pk-popup__content--${position}`]: position,
                [customClass]: true,
            }"
            :style="innerContentStyle"
        >
            <slot></slot>
        </view>
    </view>
</template>

<script>
import '../../style/components/popup.css';
import Popup from './main';

export default {
    name: 'PkPopup',
    components: {},
    mixins: [Popup],
};
</script>
