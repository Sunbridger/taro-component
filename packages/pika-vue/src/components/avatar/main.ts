import Taro from '@tarojs/taro';
import { enumValidate } from '../../utils/common';

enum SIZE_CLASS {
    large = 'large',
    normal = 'normal',
    small = 'small',
}

export default {
    props: {
        // 头像大小
        size: {
            type: String,
            validator: enumValidate(SIZE_CLASS),
            default: SIZE_CLASS.normal,
        },
        // 头像是否圆形
        circle: {
            type: Boolean,
            default: false,
        },
        // 头像图片地址
        image: {
            type: String,
            default: '',
        },
        // 以文字形式展示头像
        text: {
            type: String,
            default: '',
        },
        // open-data
        openData: {
            type: Object,
        },
    },
    data(): any {
        return {
            isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
        };
    },
    computed: {
        letter(): string {
            return this.text ? this.text[0] : '';
        },
    },
};
