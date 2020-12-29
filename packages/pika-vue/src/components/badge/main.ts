export default {
    props: {
        dot: {
            type: Boolean,
            default: false,
        },
        value: {
            type: [Number, String],
        },
        maxValue: {
            type: [Number, String],
            default: 99,
        },
    },
    computed: {
        showAdd(): boolean {
            return Number(this.value) > Number(this.maxValue);
        },
        showText(): string {
            if (this.dot) {
                return '';
            }
            if (this.showAdd) {
                return `${this.maxValue}+`;
            }
            if (typeof this.value === 'string') {
                return this.value;
            }
            return this.value;
        },
    },
};
