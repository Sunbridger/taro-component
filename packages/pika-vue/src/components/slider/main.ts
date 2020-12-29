import { CommonEvent } from '@tarojs/components';

export default {
    props: {
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 100,
        },
        step: {
            type: Number,
            default: 1,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        value: {
            type: Number,
            default: 0,
        },
        // 背景条的颜色
        backgroundColor: {
            type: String,
            default: '#ededf0',
        },
        // 已选择的颜色
        activeColor: {
            type: String,
            default: '#f01d24',
        },
        // 滑块的大小
        blockSize: {
            type: Number,
            default: 28,
        },
        // 滑块的颜色
        blockColor: {
            type: String,
            default: '#ffffff',
        },
        // 是否显示当前的value
        showValue: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onChange(event: CommonEvent): void {
            this.$emit('change', event);
        },
        onChanging(event: CommonEvent): void {
            this.$emit('changing', event);
        },
    },
};
