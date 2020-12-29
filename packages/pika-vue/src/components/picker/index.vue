<template>
    <view
        :class="{
            'pk-picker': true,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <view
            :class="{
                'pk-picker__trigger': true,
                'pk-picker__trigger--disabled': disabled,
            }"
            @tap="triggerPicker"
        >
            <slot></slot>
        </view>
        <popup
            v-model="pickerShow"
            position="bottom"
            :class="{
                'pk-picker__popup--hidden': initHidden,
            }"
        >
            <view class="pk-picker-box">
                <view class="pk-picker-box__title">
                    <view class="pk-picker-box__title__cancel" @tap="onCancel"
                        >取消</view
                    >
                    <view class="pk-picker-box__title__title">{{ title }}</view>
                    <view class="pk-picker-box__title__ok" @tap="onOk"
                        >确认</view
                    >
                </view>
                <view class="pk-picker-box__content">
                    <picker-view
                        v-if="mode === 'selector'"
                        :value="[value]"
                        indicator-class="pk-picker__current"
                        class="pk-picker-box__view"
                        @change="pickerViewChange"
                    >
                        <picker-view-column>
                            <view
                                v-for="(item, index) in range"
                                :key="index"
                                class="pk-picker-box__item"
                            >
                                <!-- 由于小程序的限制, 这里需要多套一层 -->
                                <view>{{ getShowValue(item) }}</view>
                            </view>
                        </picker-view-column>
                    </picker-view>
                    <picker-view
                        v-else
                        :value="value"
                        indicator-class="pk-picker__current"
                        class="pk-picker-box__view"
                        @change="pickerViewChangeMult"
                    >
                        <picker-view-column
                            v-for="(rangeList, idx) in range"
                            :key="idx"
                        >
                            <view
                                v-for="(item, idy) in rangeList"
                                :key="`${idx}-${idy}`"
                                class="pk-picker-box__item"
                            >
                                <!-- 由于小程序的限制, 这里需要多套一层 -->
                                <view>{{ getShowValue(item) }}</view>
                            </view>
                        </picker-view-column>
                    </picker-view>
                </view>
            </view>
        </popup>
    </view>
</template>

<script>
import '../../style/components/picker.css';
import Common from '../../utils/commonMixin';
import Picker from './main';
import Popup from '../popup';

export default {
    name: 'PkPicker',
    components: {
        Popup,
    },
    mixins: [Picker, Common],
};
</script>
