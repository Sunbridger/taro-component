import { CommonEvent } from '@tarojs/components';

export default {
    props: {
        reportSubmit: {
            type: Boolean,
            default: false,
        },
        reportSubmitTimeout: {
            type: Number,
            default: 0,
        },
    },
    methods: {
        onSubmit(event: CommonEvent): void {
            this.$emit('submit', event);
        },
        onReset(event: CommonEvent): void {
            this.$emit('reset', event);
        },
    },
};
