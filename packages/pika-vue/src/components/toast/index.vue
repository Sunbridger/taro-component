<template>
    <view
        v-if="show"
        :class="{
            'pk-toast': true,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <pk-overlay
            :show="hasMask"
            close-position="none"
            color="rgba(0,0,0,0)"
        ></pk-overlay>
        <view
            :class="{
                'pk-toast__content': true,
                'pk-toast__content--icon': icon || image || status,
            }"
            :style="{
                width: width,
            }"
            @tap="onClick"
        >
            <view v-if="icon" class="pk-toast__icon">
                <pk-icon :size="36" :type="icon"></pk-icon>
            </view>
            <image
                v-else-if="image"
                class="pk-toast__image"
                :src="image"
            ></image>
            <view v-else-if="status" class="pk-toast__icon">
                <pk-icon
                    v-if="status === 'success'"
                    :size="36"
                    type="check"
                ></pk-icon>
                <pk-icon
                    v-if="status === 'error'"
                    :size="36"
                    type="circle-close"
                ></pk-icon>
                <pk-icon
                    v-if="status === 'loading'"
                    :size="36"
                    type="loading"
                    spin
                ></pk-icon>
            </view>
            <view class="pk-toast__text">{{ text }}</view>
        </view>
    </view>
</template>

<script>
import '../../style/components/toast.css';
import Common from '../../utils/commonMixin';
import Toast from './main';
import PkOverlay from '../overlay';
import PkIcon from '../icon';

export default {
    name: 'PkToast',
    components: {
        PkOverlay,
        PkIcon,
    },
    mixins: [Toast, Common],
};
</script>
