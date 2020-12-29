<template>
    <layout title="Avatar 头像">
        <item title="圆角矩形头像" contentStyle="group__content">
            <pk-avatar size="large" :image="Header" />
            <pk-avatar size="normal" :image="Header" />
            <pk-avatar size="small" :image="Header" />
        </item>
        <item title="圆形头像" contentStyle="group__content">
            <pk-avatar size="large" :image="Header" circle />
            <pk-avatar size="normal" :image="Header" circle />
            <pk-avatar size="small" :image="Header" circle />
        </item>
        <item title="圆角矩形头像(支持文字)" contentStyle="group__content">
            <pk-avatar size="large" text="Large" />
            <pk-avatar size="normal" text="Normal" />
            <pk-avatar size="small" text="Small" />
        </item>
        <item title="圆形头像(支持文字)" contentStyle="group__content">
            <pk-avatar size="large" circle text="Large" />
            <pk-avatar size="normal" circle text="Normal" />
            <pk-avatar size="small" circle text="Small" />
        </item>
    </layout>
</template>

<script>
import { PkAvatar } from '@souche/pika-vue';
import Header from '@/assets/header.png';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgAvatar',
    components: {
        PkAvatar,
        Layout,
        Item,
    },
    data() {
        return {
            Header,
        };
    },
};
</script>

<style lang="scss">
.group__content {
    display: flex;
    justify-content: space-around;
    padding: 30px;
}
</style>
