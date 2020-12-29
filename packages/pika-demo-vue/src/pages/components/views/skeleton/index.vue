<template>
    <view class="pg-skeleton">
        <layout title="Skeleton 骨架屏">
            <item title="基础使用">
                <pk-skeleton></pk-skeleton>
            </item>
            <item title="带头像">
                <pk-skeleton avatar></pk-skeleton>
            </item>
            <item title="无动画">
                <pk-skeleton avatar :animation="false"></pk-skeleton>
            </item>
            <item title="自定义行数及宽度">
                <pk-skeleton :rowWidth="rowWidth1" avatar :animation="false"></pk-skeleton>
            </item>
            <item title="自定义头像大小及形状">
                <pk-skeleton avatar :animation="true" avatarSize="44" avatarShape="squzre"></pk-skeleton>
                <pk-skeleton avatar :animation="true" avatarSize="44" avatarShape="round"></pk-skeleton>
            </item>
            <!-- avatarSize}px`,
            borderRadius: avatarShape -->

        </layout>
    </view>
</template>

<script>
import { PkSkeleton } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgSkeleton',
    components: {
        PkSkeleton,
        Layout,
        Item,
    },
    data() {
        return {
            rowWidth1: ['40%', '50%', '60%', '70%', '80%', '100%']
        };
    },
};
</script>

<style lang="scss">
.pg-skeleton {
}
</style>
