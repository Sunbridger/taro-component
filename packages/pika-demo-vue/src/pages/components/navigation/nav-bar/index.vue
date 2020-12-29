<template>
    <view class="pg-nav-bar">
        <layout title="NavBar 导航栏">
            <item title="基础使用">
                <pk-nav-bar
                :onClickRgIconSt="handleClick"
                :onClickRgIconNd="handleClick"
                :onClickLeftIcon="handleClick"
                color='#000'
                title="这是标题"
                leftText='返回'
                rightFirstIconType="more"></pk-nav-bar>
            </item>

            <item title="左侧icon使用">
                <pk-nav-bar
                :onClickRgIconSt="handleClick"
                :onClickRgIconNd="handleClick"
                :onClickLeftIcon="handleClick"
                color='#000'
                title="这是标题"
                leftIconType="arrow-left"
                rightFirstIconType="more"></pk-nav-bar>
            </item>

            <item title="修改颜色">
                <pk-nav-bar
                :onClickRgIconSt="handleClick"
                :onClickRgIconNd="handleClick"
                :onClickLeftIcon="handleClick"
                color='red'
                title="这是标题"
                leftText='返回'
                leftIconType="arrow-left"
                rightFirstIconType="more"></pk-nav-bar>
            </item>

            <item title="右侧两个icon">
                <pk-nav-bar
                :onClickRgIconSt="handleClick"
                :onClickRgIconNd="handleClick"
                :onClickLeftIcon="handleClick"
                title="这是标题"
                leftText='返回'
                leftIconType="arrow-left"
                rightSecondIconType="arrow-down"
                rightFirstIconType="more"></pk-nav-bar>
            </item>

            <item title="自定义原生导航栏样式">
                <view>
                    <pk-switch title="深色模式" :checked="changeMode" @change="change('changeMode')"></pk-switch>
                </view>
                <view>
                    <pk-switch title="去除省份" :checked="moveLeft" @change="change('moveLeft')"></pk-switch>
                </view>
                <view>
                    <pk-switch title="自定义标题" :checked="cusMiddle" @change="change('cusMiddle')"></pk-switch>
                </view>
            </item>

            <pk-nav-bar :fixed="true" v-if="changeMode" :customStyle="bgcStyle1">
                <template v-slot:left v-if="!moveLeft && !cusMiddle">
                    <view class="flex white">省份<pk-icon color="#fff" type="arrow-down" :size="15"></pk-icon></view>
                </template>
                <template v-slot:default>
                    <view class="llll">
                        <pk-search-bar v-if="!cusMiddle"></pk-search-bar>
                        <view v-else class="ml73 white">这是标题</view>
                    </view>
                </template>
            </pk-nav-bar>
            <pk-nav-bar :fixed="true" v-else :customStyle="bgcStyle2">
                <template v-slot:left v-if="!moveLeft && !cusMiddle">
                    <view class="flex">省份<pk-icon color="black" type="arrow-down" :size="15"></pk-icon></view>
                </template>
                <template v-slot:default>
                    <view class="llll">
                        <pk-search-bar v-if="!cusMiddle"></pk-search-bar>
                        <view v-else class="ml73">这是标题</view>
                    </view>
                </template>=
            </pk-nav-bar>
        </layout>
    </view>
</template>

<script>
import { PkNavBar, PkIcon, PkSearchBar, PkSwitch } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgNavBar',
    components: {
        PkNavBar,
        Layout,
        Item,
        PkIcon,
        PkSearchBar,
        PkSwitch
    },
    data() {
        return {
            changeMode: false,
            moveLeft: false,
            cusMiddle: false,
            bgcStyle1: {
                backgroundColor: '#000'
            },
            bgcStyle2: {
                backgroundColor: '#fff'
            }
        };
    },
    methods: {
        handleClick() {
            console.log('click');
        },
        change(type) {
            this[type] = !this[type];
        }
    }
};
</script>

<style lang="scss">
.pg-nav-bar {
    .co-layout .co-layout__title {
        background-color: #fff;
    }
    height: 4999px;
    .co-layout-item__title {
        background-color: #ccc!important;
    }
    .flex {
        display: flex;
        font-size: 15Px;
        align-items: center;
    }
    .white {
        color: white;
    }
    .ml73 {
        margin-left: 73Px;
    }
    .pk-search-bar {
        margin-bottom: 17Px;
    }

}
</style>
