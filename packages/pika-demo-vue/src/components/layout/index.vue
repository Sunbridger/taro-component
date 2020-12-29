<template>
    <view class="co-layout">
        <view class="co-layout__title">
            <view class="co-layout__text">{{ title }}</view>
        </view>
        <view class="co-layout__content">
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
    },
};
</script>

<style lang="scss">
.co-layout {
    .co-layout__title {
        height: 300px;
        font-size: 40px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #efefef;

        .co-layout__text {
            position: relative;
            &::after {
                content: '';
                height: 6px;
                width: 100%;
                border-radius: 3px;
                background-color: #f01d24;
                position: absolute;
                bottom: -6px;
                left: 0;
            }
        }
    }

    .co-layout__content {
        padding: 15px;
    }
}
</style>