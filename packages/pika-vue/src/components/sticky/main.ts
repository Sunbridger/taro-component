import Taro from '@tarojs/taro';

export default {
    props: {
        offsetTop: {
            type: Number,
            default: 0,
        },
        zIndex: {
            type: Number,
            default: 99,
        },
    },
    computed: {
        top() {
            return `${Taro.pxTransform(this.offsetTop)}`;
        },
    },
};
