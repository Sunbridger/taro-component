export default {
    model: {
        prop: 'show',
        event: 'change',
    },
    props: {
        title: String,
        content: String,
        // 取消按钮的文本
        cancelText: {
            type: String,
            default: '取消',
        },
        // 确定按钮的文本
        confirmText: {
            type: String,
            default: '确定',
        },
        // 点击浮层直接关闭
        closeOnClickOverlay: {
            type: Boolean,
            default: true,
        },
        show: {
            type: Boolean,
            default: false,
        },
        noCancel: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onClose(): void {
            this.$emit('change', false);
            this.$emit('close', false);
        },
        onCancel(): void {
            this.$emit('change', false);
            this.$emit('cancel', false);
        },
        onConfirm(): void {
            this.$emit('change', false);
            this.$emit('confirm', true);
        },
    },
};
