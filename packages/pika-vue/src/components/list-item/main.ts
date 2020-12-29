import { EventHandler } from '@tarojs/components';
import { enumValidate } from '../../utils/common';

enum ARROW_TYPE {
    right = 'right',
    top = 'top',
    bottom = 'bottom',
}

export default {
    props: {
        // 标题
        title: {
            type: String,
        },
        // 禁用
        disabled: {
            type: Boolean,
            default: false,
        },
        // 描述信息
        note: {
            type: String,
        },
        // 缩略图
        thumb: {
            type: String,
        },
        // 箭头方向
        arrow: {
            type: String,
            validator: enumValidate(ARROW_TYPE),
        },
        // 额外的文字
        extraText: {
            type: String,
        },
        // 是否有下边框
        hasBorder: {
            type: Boolean,
            default: true,
        },
        // 图标信息
        iconInfo: {
            type: Object,
        },
    },
    computed: {
        IconClassName(): string | boolean {
            switch (this.arrow) {
                case 'right':
                    return 'arrow-right';
                case 'bottom':
                    return 'arrow-down';
                case 'top':
                    return 'arrow-up';
                default:
                    return false;
            }
        },
    },
    methods: {
        click(event: EventHandler): void {
            if (!this.disabled) {
                this.$emit('click', event);
            }
        },
    },
};
