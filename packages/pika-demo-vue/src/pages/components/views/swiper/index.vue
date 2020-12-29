<template>
    <view class="pg-swiper">
        <layout title="Swiper 滑动视图容器">
            <item title="基础使用">
                <pk-swiper
                    className="test-swp"
                    :indicatorDots="true"
                >
                    <pk-swiper-item>
                        <view class="cls1 bgc1">
                            这是第一张
                        </view>
                    </pk-swiper-item>
                    <pk-swiper-item>
                        <view class="cls1 bgc2">
                            这是第二张
                        </view>
                    </pk-swiper-item>
                    <pk-swiper-item>
                        <view class="cls1 bgc3">
                            这是第三张
                        </view>
                    </pk-swiper-item>
                    <pk-swiper-item>
                        <view class="cls1 bgc4">
                            这是第四张
                        </view>
                    </pk-swiper-item>
                </pk-swiper>
            </item>
            <view class="mt20"></view>
            <item title="自动轮播">
                <pk-swiper
                    className="test-swp"
                    :autoplay="true"
                    :indicatorDots="true"
                >
                    <pk-swiper-item>
                        <view class="cls1 bgc1">
                            这是第一张
                        </view>
                    </pk-swiper-item>
                    <pk-swiper-item>
                        <view class="cls1 bgc2">
                            这是第二张
                        </view>
                    </pk-swiper-item>
                    <pk-swiper-item>
                        <view class="cls1 bgc3">
                            这是第三张
                        </view>
                    </pk-swiper-item>
                    <pk-swiper-item>
                        <view class="cls1 bgc4">
                            这是第四张
                        </view>
                    </pk-swiper-item>
                </pk-swiper>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkSwiper, PkSwiperItem } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgSwiper',
    components: {
        PkSwiper,
        PkSwiperItem,
        Layout,
        Item,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss">
.pg-swiper {
    .mt20 {
        margin: 20px;
    }
    .cls1 {
        text-align: center;
        width: 100%;
        height: 100%;
    }
    .bgc1 {
        background-color: aquamarine;
    }
    .bgc2 {
        background-color: red;
    }
    .bgc3 {
        background-color: pink;
    }
    .bgc4 {
        background-color: yellow;
    }
}
</style>
