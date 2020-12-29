<template>
    <view class="pg-fab">
        <layout title="Fab 悬浮按钮">
            <item title="normal" contentStyle="group__content1 group__content">
                <view class="flex flex-just relative">
                    <pk-fab size="normal" position="bottomRight">
                        <pk-icon type="heart" color="red" size="26"></pk-icon>
                        赞
                    </pk-fab>
                    <pk-fab size="small" position="bottom" @click="fn">赞</pk-fab>
                </view>
            </item>
            <item title="position" contentStyle="group__content">
                <view class="relative position-box">
                    <pk-fab size="normal" position="bottomRight">br</pk-fab>
                    <pk-fab size="normal" position="bottomLeft">bl</pk-fab>
                    <pk-fab size="normal" position="topRight">tr</pk-fab>
                    <pk-fab size="normal" position="topLeft">tl</pk-fab>
                </view>
            </item>
            <item title="position 2" contentStyle="group__content">
                <view class="relative position-box">
                    <pk-fab size="normal" position="bottom">bottom</pk-fab>
                    <pk-fab size="normal" position="top">top</pk-fab>
                </view>
            </item>
            <scroll-view
                class="scroll-view-box"
                :scroll-y="true"
                :scroll-top="scrollTop"
                @scroll="scrollFn"
            >
                <item title="click" contentStyle="group__content group__content2">
                滚动该区域试试吧...
                    <view class="relative position-box">
                        <pk-fab @click="fn">上去</pk-fab>
                    </view>
                </item>
            </scroll-view>
        </layout>

    </view>
</template>

<script>

import { PkFab, PkIcon } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PkFab',
    components: {
        PkFab,
        Layout,
        Item,
        PkIcon
    },
    data() {
        return {
            scrollTop: 0
        };
    },
    methods: {
        fn() {
            console.log(1);
            this.scrollTop = 80;
        },
        scrollFn(e) {
            this.scrollTop = 0;
        }
    }
};
</script>

<style lang="scss">
.pg-fab {
    .group__content {
        height: 400px;
        width: 100%;
        transform: scale(1);
    }
    .group__content1 {
        height: 100px;
    }
    .group__content2 {
        background-color: #fcfcfc;
    }
    .scroll-view-box {
        height: 278px;
    }
    // padding: 80px;
    .relative {
        position: relative;
        margin-top: 80px;
    }
    .title {
        display: block;
        font-size: 32px;
        color: #1B1C33;
        font-weight: bold;
        margin: 30px 0;
    }
    .flex {
        display: flex;
        button {
            margin: 0;
        }
    }
    .flex-just {
        justify-content: space-between;
    }
    .position-box {
        margin-top: 80px;
        height: 333px;
        width: 100%;
        // background-color: #ccc;
    }
}
</style>
