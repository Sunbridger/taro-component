import { enumValidate } from '../../utils/common';

enum StatusTypeEnum {
    error = 'error',
    loading = 'loading',
    success = 'success',
}

export default {
    model: {
        prop: 'show',
        event: 'close',
    },
    props: {
        // 元素的内容
        text: String,
        // icon的类型
        icon: String,
        // 元素展示的图片
        image: String,
        // 元素的状态
        status: {
            type: String,
            validator: enumValidate(StatusTypeEnum),
        },
        // 是否展示元素
        show: {
            type: Boolean,
            default: false,
        },
        // 元素持续的时间(设置为0时不会自动消失)
        duration: {
            type: Number,
            default: 2000,
        },
        // 是否存在遮罩无法点击内容区
        hasMask: {
            type: Boolean,
            default: false,
        },
    },
    data(): any {
        return {};
    },
    watch: {
        show(value: boolean): void {
            if (value) {
                if (this.duration !== 0) {
                    setTimeout(() => {
                        this.$emit('close', false);
                    }, this.duration);
                }
            }
        },
    },
    methods: {
        onClick(): void {
            this.$emit('click');
        },
    },
    computed: {
        width(): string {
            if (this.text.length < 10) {
                return 'auto';
            } else {
                return '10em';
            }
        },
    },
};
