<template>
    <view class="pg-tag">
        <layout title="Tag 标签">
            <item title="normal" contentStyle="group__content">
                <view class="flex flex-just">
                    <pk-tag>normal</pk-tag>
                    <pk-tag filled>normal选中</pk-tag>
                    <pk-tag disable>norma禁止</pk-tag>
                </view>
            </item>
            <item title="primary" contentStyle="group__content">
                <view class="flex flex-just">
                    <pk-tag type="primary">primary</pk-tag>
                    <pk-tag filled type="primary">primary选中</pk-tag>
                    <pk-tag disable type="primary">primary禁止</pk-tag>
                </view>
            </item>
            <item title="活动标签" contentStyle="group__content">
                <view class="flex flex-just">
                    <pk-tag type="active-primary">直降5000</pk-tag>
                    <pk-tag type="active-default">含购置税</pk-tag>
                    <pk-tag type="active-fill">满3000返200</pk-tag>
                </view>
            </item>
            <item title="状态标签" contentStyle="group__content">
                <view class="flex flex-just">
                    <pk-tag type="status-success">上新</pk-tag>
                    <pk-tag type="status-warning">库存紧张</pk-tag>
                    <pk-tag type="status-danger">暂时缺货</pk-tag>
                </view>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkTag } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgTag',
    components: {
        PkTag,
        Layout,
        Item
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss">
.pg-tag {
    .title {
        display: block;
        font-size: 32px;
        color: #1B1C33;
        font-weight: bold;
        margin: 30px 0;
    }
    .flex {
        display: flex;
        margin-top: 30px;
    }
    .flex-just {
        justify-content: space-between;
    }
}
</style>
