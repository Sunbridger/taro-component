<template>
    <view class="co-layout-item">
        <view class="co-layout-item__title">{{ title }}</view>
        <view :class="`co-layout-item__content ${contentStyle}`">
            <slot></slot>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        contentStyle: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="less">
.co-layout-item {
    margin-top: 32px;
    margin-bottom: 64px;

    .co-layout-item__title {
        font-size: 32px;
        margin-left: 30px;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            display: block;
            top: 25%;
            left: -20px;
            width: 6px;
            border-radius: 3px;
            height: 50%;
            background-color: #f01d24;
        }
    }
}
</style>