<template>
    <view class="pg-icon">
        <layout title="Icon 图标">
            <item title="" contentStyle="group__content">
                <view class="flex flex-just">
                    <pk-icon type="delete" color="red"></pk-icon>
                    <pk-icon type="directory" color="red"></pk-icon>
                    <pk-icon type="thumbtack" color="red"></pk-icon>
                </view>
                <view class="flex flex-just mt40">
                    <pk-icon type="sort-arrow-up" color="red"></pk-icon>
                    <pk-icon type="heart" color="red"></pk-icon>
                    <pk-icon type="sort-arrow-down" color="red"></pk-icon>
                </view>
                <view class="flex flex-just mt40">
                    <pk-icon type="edit" color="red"></pk-icon>
                    <pk-icon type="more" color="red"></pk-icon>
                    <pk-icon type="help" color="red"></pk-icon>
                </view>
                <view class="flex flex-just mt40">
                    <pk-icon type="load" color="red" spin></pk-icon>
                    <pk-icon type="address" color="red"></pk-icon>
                    <pk-icon type="star" color="red"></pk-icon>
                </view>
                <view class="flex flex-just mt40">
                    <pk-icon type="filter" color="red"></pk-icon>
                    <pk-icon type="information" color="red"></pk-icon>
                    <pk-icon type="check" color="red"></pk-icon>
                </view>
                <view class="flex flex-just mt40">
                    <pk-icon type="loading" color="red" spin></pk-icon>
                    <pk-icon type="arrow-down" color="red"></pk-icon>
                    <pk-icon type="warning" color="red"></pk-icon>
                </view>
                <view class="flex flex-just mt40">
                    <pk-icon type="arrow-up" color="red"></pk-icon>
                    <pk-icon type="arrow-left" color="red"></pk-icon>
                    <pk-icon type="circle" color="red"></pk-icon>
                </view>
                <view class="flex flex-just mt40">
                    <pk-icon type="arrow-right" color="red"></pk-icon>
                    <pk-icon type="caret-top" color="red"></pk-icon>
                    <pk-icon type="circle-check" color="red"></pk-icon>
                </view>
                <view class="flex flex-just mt40">
                    <pk-icon type="search" color="red"></pk-icon>
                    <pk-icon type="caret-bottom" color="red"></pk-icon>
                    <pk-icon type="calendar" color="red"></pk-icon>
                </view>
                <view class="flex flex-just mt40">
                    <pk-icon type="close" color="red"></pk-icon>
                    <pk-icon type="circle-close" color="red"></pk-icon>
                </view>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkIcon } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgIcon',
    components: {
        PkIcon,
        Layout,
        Item
    }
};
</script>

<style lang="scss">
.pg-icon {
    .title {
        display: block;
        font-size: 32px;
        color: #1B1C33;
        font-weight: bold;
        margin: 30px 0;
    }
    .mt40 {
        margin-top: 40px;
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
}
</style>
