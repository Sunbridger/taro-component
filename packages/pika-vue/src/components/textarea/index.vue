<template>
    <view
        :class="{
            'pk-textarea': true,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <view class="pk-textarea__tip">
            <slot name="tip"></slot>
        </view>
        <view
            :class="{
                'pk-textarea__content': true,
                'pk-textarea__content--disabled': disabled,
                'pk-textarea__content--nocount': !count || isAlipay,
                'pk-textarea__content--in-ali': isAlipay, // FIXME
            }"
        >
            <textarea
                class="pk-textarea__textarea"
                :style="{
                    height: `${textAreaHeight}px`,
                    maxWidth: '100%',
                }"
                :value="factValue"
                :placeholder="placeholder"
                :placeholder-style="placeholderStyle"
                :placeholder-class="placeHolderClassString"
                :disabled="disabled"
                :maxlength="Number.parseInt(maxLength)"
                :auto-focus="autoFocus"
                :focus="focus"
                :auto-height="autoHeight"
                :fixed="fixed"
                :cursor-spacing="cursorSpacing"
                :cursor="cursor"
                :show-confirm-bar="showConfirmBar"
                :selection-start="selectionStart"
                :selection-end="selectionEnd"
                :adjust-position="adjustPosition"
                :hold-keyboard="holdKeyboard"
                :disable-default-padding="disableDefaultPadding"
                :show-count="false"
                v-bind="$attrs"
                @focus="onFocus"
                @blur="onBlur"
                @lineChange="onLineChange"
                @input="onInput"
                @confirm="onConfirm"
                @keyboardHeightChange="onKeyboardHeightChange"
            ></textarea>
            <!-- FIXME: show-count 在3.1.0开始生效, 目前需要先关闭计数器 -->
            <view v-if="count && !isAlipay" class="pk-textarea__count">
                {{ controlled ? value.length : localValue.length }}/{{
                    maxLength
                }}
            </view>
            <view
                v-if="isAlipay && $slots.ctrl"
                class="pk-count-coverset"
            ></view>
            <slot name="ctrl"></slot>
        </view>
    </view>
</template>

<script>
import '../../style/components/textarea.css';
import Common from '../../utils/commonMixin';
import Textarea from './main';

export default {
    name: 'PkTextarea',
    components: {},
    mixins: [Textarea, Common],
};
</script>
