import { mergeStyle } from '../../utils/common';

export default {
    props: {
        type: {
            type: String,
        },
        className: {
            type: String,
        },
        color: {
            type: String,
        },
        size: {
            type: [Number, String],
            default: 16,
        },
        spin: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        styleObj(): { color: string; fontSize: string } {
            return {
                color: this.color,
                fontSize: `${this.size}px`,
            };
        },
        actualStyle(): string | object {
            return mergeStyle(this.styleObj, this.customStyle);
        },
    },
    methods: {
        click(e): void {
            this.$emit('click', e);
        },
    },
};
