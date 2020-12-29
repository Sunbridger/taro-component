export default {
    model: {
        prop: 'checked',
        event: 'change',
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '',
        },
        checked: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        border: {
            type: Boolean,
            default: true,
        },
    },
    data(): any {
        return {};
    },
    methods: {
        change(): void {
            if (this.disabled) return;
            this.$emit('change', !this.checked);
        },
    },
};
