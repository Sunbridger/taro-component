<template>
    <view class="pg-side-bar">
        <layout title="SideBar 侧边栏">
            <item title="基础使用">
                <pk-button @click="showPopShow">
                    基础调用
                </pk-button>
            </item>
            <item title="不同的位置">
                <pk-button @click="showPopShow2">
                    右边调出
                </pk-button>
            </item>
            <pk-side-bar
                :right="isRight"
                @item-click="itemClick"
                v-model="popShow"
                :items="list"
            ></pk-side-bar>
            <item title="自定义内容">
                <pk-button @click="showPopShow3">
                    自定义内容
                </pk-button>
            </item>
            <pk-side-bar v-model="popShow2">
                <view>这里是自定义内容</view>
            </pk-side-bar>
        </layout>
    </view>
</template>

<script>
import { PkSideBar, PkButton } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgSideBar',
    components: {
        PkSideBar,
        PkButton,
        Layout,
        Item,
    },
    data() {
        return {
            popShow: false,
            isRight: false,
            popShow2: false,
            list: [
                {
                    title: '菜单1',
                },
                {
                    title: '菜单2',
                },
            ],
        };
    },
    methods: {
        showPopShow() {
            this.isRight = false;
            this.popShow = true;
        },
        showPopShow2() {
            this.isRight = true;
            this.popShow = true;
        },
        showPopShow3() {
            this.popShow2 = true;
        },
        itemClick(item) {
            console.log('点击菜单:', item);
            this.popShow = false;
        },
    },
};
</script>

<style lang="scss">
.pg-side-bar {
}
</style>
