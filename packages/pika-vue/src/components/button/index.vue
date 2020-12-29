<template>
    <button
        v-if="!group"
        :class="{
            'pk-button': true,
            [`pk-button--${type}`]: type,
            [`pk-button--${size}`]: size,
            'pk-button--nocircle': !circle,
            'pk-button--full': full,
            [`pk-button--${type}--disabled`]: disabled,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
        :hoverClass="hoverClass"
        :disabled="disabled"
        @tap="click"
    >
        <slot></slot>
    </button>
    <view
        v-else
        :class="{
            'pk-button-group': true,
            'pk-button-group-flex': flex,
        }"
    >
        <slot></slot>
    </view>
</template>

<script>
import '../../style/components/button.css';
import Common from '../../utils/commonMixin';
import PKButton from './main';

export default {
    name: 'PKButton',
    mixins: [PKButton, Common],
};
</script>
