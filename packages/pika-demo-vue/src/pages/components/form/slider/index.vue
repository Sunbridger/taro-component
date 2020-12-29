<template>
    <view class="pg-slider">
        <layout title="Slider 滑动条">
            <item title="基础使用">
                <view class="pg-slider__desc">step=1</view>
                <pk-slider :step="1"></pk-slider>
            </item>
            <item title="显示当前value">
                <view class="pg-slider__desc">show-value=true</view>
                <pk-slider :show-value="true"></pk-slider>
            </item>
            <item title="设置最大最小值">
                <view class="pg-slider__desc">step=1, min=50, max=200</view>
                <pk-slider :show-value="true" :min="50" :max="200"></pk-slider>
            </item>
            <item title="自定义样式">
                <view class="pg-slider__desc">block-size=24, step=5</view>
                <pk-slider :show-value="true" :block-size="24" :step="5"></pk-slider>
            </item>
            <item title="禁用状态">
                <view class="pg-slider__desc">block-size=24</view>
                <pk-slider :block-size="24" disabled></pk-slider>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkSlider } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgSlider',
    components: {
        PkSlider,
        Layout,
        Item,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss">
.pg-slider {
    &__desc {
        margin: 10px 0;
        margin-left: 15px;
        font-size: 22px;
        color: #aaa;
    }
}
</style>
