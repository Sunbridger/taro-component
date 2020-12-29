<template>
    <pk-popup
        :class="`pk-dialog ${actualClassName}`"
        :show="show"
        :style="customStyle"
        position="center"
        :close-on-click-overlay="closeOnClickOverlay"
        custom-class="pk-dialog__content"
        @close="onClose"
    >
        <view class="pk-dialog__text-content">
            <view class="pk-dialog__title">
                <slot name="title"></slot>
                <view v-if="!$slots.title">
                    {{ title }}
                </view>
            </view>
            <view class="pk-dialog__text">
                <slot name="content"></slot>
                <view v-if="!$slots.content">
                    {{ content }}
                </view>
            </view>
        </view>
        <view class="pk-dialog__footer">
            <pk-button
                v-if="!noCancel"
                size="large"
                class="pk-dialog__cancel"
                type="secondary"
                @click="onCancel"
            >
                {{ cancelText || '取消' }}
            </pk-button>
            <pk-button
                size="large"
                class="pk-dialog__confirm"
                @click="onConfirm"
            >
                {{ confirmText || '确定' }}
            </pk-button>
        </view>
    </pk-popup>
</template>

<script>
import '../../style/components/dialog.css';
import Dialog from './main';
import Common from '../../utils/commonMixin';
import PkPopup from '../popup';
import PkButton from '../button';

export default {
    name: 'PkDialog',
    components: {
        PkPopup,
        PkButton,
    },
    mixins: [Dialog, Common],
};
</script>
