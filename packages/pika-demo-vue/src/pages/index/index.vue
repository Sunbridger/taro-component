<template>
    <view class="index">
        <view class="index__title">
            <view class="index__logo__box">
                <image :src="Logo" class="index__logo"></image>
            </view>
            <text>Pika UI Vue</text>
        </view>
        <accordian
            v-for="(menu, i) in menus"
            :key="i"
            :title="menu.name"
            :items="menu.items"
            :pre-path="menu.path"
            :list-show="curShow === i"
            @change="toggleShow(i)"
        ></accordian>
    </view>
</template>

<script>
import './index.scss';
import Accordian from '@/components/accordian';
import components from '@/components.json';
import Logo from '@/assets/logo.png';

export default {
    components: { Accordian },
    data() {
        return {
            Logo,
            menus: components,
            curShow: -1,
        };
    },
    methods: {
        toggleShow(i) {
            if (this.curShow === i) {
                this.curShow = -1;
            } else {
                this.curShow = i;
            }
        },
    },
};
</script>