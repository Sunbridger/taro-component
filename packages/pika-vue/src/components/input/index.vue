<template>
    <view
        :class="{
            'pk-input': true,
            'pk-input--border': border,
            'pk-input--disabled': disabled,
            'pk-input--error': error,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
        @tap="click"
    >
        <label
            v-if="title"
            :class="{
                'pk-input__label': true,
                'pk-input__label--required': required,
            }"
            :for="name"
        >
            {{ title }}
        </label>
        <view class="pk-input__input">
            <input
                v-model="localValue"
                class="pk-inpit__input__item"
                :name="name"
                :type="actualProps.type"
                :password="actualProps.password"
                :placeholder="placeholder"
                :maxlength="actualProps.maxlength"
                :confirm-type="confirmType"
                :cursor="cursor"
                :cursor-spacing="cursorSpacing"
                :adjust-position="adjustPosition"
                :disabled="disabled"
                :focus="focus"
                :placeholder-style="placeholderStyle"
                :placeholder-class="placeholderClass"
                :hold-keyboard="holdKeyboard"
                :selection-start="selectionStart"
                :selectionEnd="selectionEnd"
                @input="onInput"
                @focus="onFocus"
                @blur="onBlur"
                @confirm="onConfirm"
                @keyboardHeightChange="onKeyboardHeightChange"
            />
        </view>
        <view class="pk-input__status">
            <pk-icon
                v-show="error"
                color="#f01d24"
                type="warning"
                :size="16"
                @click="errorClick"
            ></pk-icon>
            <!-- FIXME: 支付宝环境下无法清理input内容, `controlled`也存在问题 -->
            <pk-icon
                v-if="clear && localValue.length && !isAlipay"
                color="#8d8e99"
                :size="16"
                type="circle-close"
                class="circle-close-icon"
                @click="clearInput"
            ></pk-icon>
        </view>
        <view class="pk-input__right">
            <slot></slot>
        </view>
    </view>
</template>

<script>
import '../../style/components/input.css';
import Common from '../../utils/commonMixin';
import Input from './main';
import PkIcon from '../icon';

export default {
    name: 'PkInput',
    components: {
        PkIcon,
    },
    mixins: [Input, Common],
};
</script>
