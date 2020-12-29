import { EventHandler } from '@tarojs/components';
import { enumValidate } from '../../utils/common';
// import Taro from '@tarojs/taro';

enum SIZE_CLASS {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

enum TYPE_CLASS {
    primary = 'primary', // 重要
    secondary = 'secondary', // 次要
    linear = 'linear', //
    text = 'text', // 文字
    hollow = 'hollow',
    other = 'other',
}

export default {
    props: {
        type: {
            type: String,
            validator: enumValidate(TYPE_CLASS),
            default: TYPE_CLASS.primary,
        },
        size: {
            type: String,
            validator: enumValidate(SIZE_CLASS),
            default: SIZE_CLASS.small,
        },
        circle: {
            type: Boolean,
            default: true,
        },
        full: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        group: {
            type: Boolean,
            default: false,
        },
        flex: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        hoverClass(): string {
            return `pk-button-${this.type}-pressed`;
        },
    },
    methods: {
        click(e: EventHandler): void {
            this.$emit('click', e);
        },
    },
};
