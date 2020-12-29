export default {
    model: {
        prop: 'show',
        event: 'close',
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        overlay: {
            type: Boolean,
            default: true,
        },
        width: {
            type: String,
            default: '230px',
        },
        right: {
            type: Boolean,
            default: false,
        },
        items: {
            type: Array,
            default: (): any[] => [],
        },
    },
    data(): any {
        return {
            cusStyle: {
                width: this.width,
            },
        };
    },
    methods: {
        closePopup(): void {
            this.$emit('close', false);
        },
        itemClick(item): void {
            this.$emit('item-click', item);
        },
    },
};
