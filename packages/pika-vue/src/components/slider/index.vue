<template>
    <view
        :class="{
            'pk-slider': true,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <slider
            :min="min"
            :max="max"
            :step="step"
            :disabled="disabled"
            :value="value"
            :background-color="backgroundColor"
            :active-color="activeColor"
            :block-size="blockSize"
            :block-color="blockColor"
            :show-value="showValue"
            @change="onChange"
            @changing="onChanging"
        ></slider>
    </view>
</template>

<script>
/**
 * TODO:该组件在支付宝平台显示有样式差异问题, 后续需要重写
 */
import '../../style/components/slider.css';
import Common from '../../utils/commonMixin';
import Slider from './main';

export default {
    name: 'PkSlider',
    components: {},
    mixins: [Slider, Common],
};
</script>
