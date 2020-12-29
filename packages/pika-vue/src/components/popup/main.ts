// import Taro from '@tarojs/taro';
import { enumValidate, mergeStyle } from '../../utils/common';

/**
 * popup 弹出层组件
 * 目前的动画形式是兼容性比较好的(setTimeout在某些端上表现有问题), 不足之处在于退出的时候没有动画
 */
export enum POSITION_CLASS {
    center = 'center',
    right = 'right',
    left = 'left',
    top = 'top',
    bottom = 'bottom',
}

export default {
    model: {
        prop: 'show',
        event: 'close',
    },
    props: {
        // 是否展示
        show: {
            type: Boolean,
            default: false,
        },
        // 是否显示遮罩层
        overlay: {
            type: Boolean,
            default: true,
        },
        // 弹出位置
        position: {
            type: String,
            validator: enumValidate(POSITION_CLASS),
            default: POSITION_CLASS.bottom,
        },
        // 动画时长(毫秒)
        duration: {
            type: Number,
            default: 300,
        },
        // 是否显示圆角
        round: {
            type: Boolean,
            default: true,
        },
        // 自定义弹出层样式
        customStyle: {
            type: [Object, String],
            default: '',
        },
        // 自定义弹出层类名
        customClass: {
            type: String,
            default: '',
        },
        // 自定义遮罩层样式
        overlayStyle: {
            type: [Object, String],
            default: '',
        },
        // 自定义遮罩层类名
        overlayClass: {
            type: String,
            default: '',
        },
        // 是否点击遮罩关闭
        closeOnClickOverlay: {
            type: Boolean,
            default: true,
        },
    },
    data(): any {
        return {
            needHidden: false,
            exitAnimation: false,
        };
    },
    computed: {
        // 处理内置样式和外部传入的样式
        innerContentStyle(): string | any {
            return mergeStyle(
                {
                    animationDuration: `${this.duration}ms`,
                },
                this.customStyle
            );
        },
        innerMaskStyle(): string | any {
            return mergeStyle(
                {
                    animationDuration: `${this.duration}ms`,
                },
                this.overlayStyle
            );
        },
    },
    methods: {
        clickMask(): void {
            if (this.closeOnClickOverlay) {
                this.$emit('close', false);
            }
        },
    },
};
