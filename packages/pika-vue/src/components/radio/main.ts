export default {
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        value: {
            type: [String, Number],
            default: 0,
        },
        options: {
            type: Array,
            default: (): any => [],
        },
        checkIcon: {
            type: String,
            default: 'check',
        },
        unCheckIcon: {
            type: String,
            default: '',
        },
        preSetIcon: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        changeCheck(value): void {
            if (value !== this.value) {
                this.$emit('change', value);
            }
        },
    },
};
