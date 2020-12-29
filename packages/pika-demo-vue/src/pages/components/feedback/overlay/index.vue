<template>
    <view class="pg-overlay">
        <layout title="Overlay 遮罩层">
            <item title="基础使用">
                <pk-button @click="defaultOpen">默认显示</pk-button>
            </item>
            <item title="自定义颜色">
                <pk-button @click="setColor('rgba(0,0,0,0)', '#000')"
                    >透明遮罩</pk-button
                >
            </item>
            <item title="自定义关闭按钮位置">
                <pk-button @click="setPosition('top')">top</pk-button>
                <pk-button @click="setPosition('top-right')"
                    >top-right</pk-button
                >
                <pk-button @click="setPosition('top-left')">top-left</pk-button>
                <pk-button @click="setPosition('bottom')">bottom</pk-button>
                <pk-button @click="setPosition('bottom-left')"
                    >bottom-left</pk-button
                >
                <pk-button @click="setPosition('bottom-right')"
                    >bottom-right</pk-button
                >
            </item>
        </layout>

        <pk-overlay
            :show="overlayShow"
            :color="color"
            :icon-color="iconColor"
            :close-position="closePosition"
            @close-click="closeOverLay"
            @overlay-click="closeOverLay"
        >
            <image
                src="https://taro-ui.jd.com/h5/static/images/curtain.png"
            ></image>
        </pk-overlay>
    </view>
</template>

<script>
import { PkOverlay, PkButton } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgOverlay',
    components: {
        PkOverlay,
        PkButton,
        Layout,
        Item,
    },
    data() {
        return {
            overlayShow: false,
            color: 'rgba(0,0,0,0.8)',
            iconColor: '#fff',
            closePosition: 'none',
        };
    },
    methods: {
        reset() {
            this.color = 'rgba(0,0,0,0.8)';
            this.iconColor = '#fff';
            this.closePosition = 'none';
        },
        setColor(color, iconColor) {
            this.reset();
            this.color = color;
            this.iconColor = iconColor;
            this.showOverlay();
        },
        setPosition(position) {
            this.reset();
            this.closePosition = position;
            this.showOverlay();
        },
        showOverlay() {
            this.overlayShow = true;
        },
        closeOverLay() {
            this.overlayShow = false;
        },
        defaultOpen() {
            this.reset();
            this.showOverlay();
        }
    },
};
</script>

<style lang="scss">
.pg-overlay {
}
</style>
