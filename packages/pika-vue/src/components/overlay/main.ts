import { enumValidate, mergeStyle } from '../../utils/common';

enum positionEnum {
    top = 'top',
    none = 'none',
    bottom = 'bottom',
    'top-left' = 'top-left',
    'top-right' = 'top-right',
    'bottom-left' = 'bottom-left',
    'bottom-right' = 'bottom-right',
}

export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: 'rgba(0,0,0,0.75)',
        },
        iconName: {
            type: String,
            default: 'close',
        },
        iconColor: {
            type: String,
            default: '#fff',
        },
        iconSize: {
            type: Number,
            default: 24,
        },
        closePosition: {
            type: String,
            validator: enumValidate(positionEnum),
            default: positionEnum.none,
        },
        zIndex: {
            type: String,
            default: '1000',
        },
    },
    methods: {
        clickOver(): void {
            this.$emit('overlay-click');
        },
        closeClick(): void {
            this.$emit('close-click');
        },
    },
    computed: {
        actStyle(): any {
            return mergeStyle(
                {
                    zIndex: this.zIndex,
                    backgroundColor: this.color,
                },
                this.customStyle
            );
        },
    },
};
