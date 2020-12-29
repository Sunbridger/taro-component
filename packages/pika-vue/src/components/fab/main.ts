import { EventHandler } from '@tarojs/components';
import { enumValidate } from '../../utils/common';

enum SIZE_CLASS {
    normal = 'normal',
    small = 'small',
}

enum POSCLASS {
    bottom = 'bottom',
    top = 'top',
    bottomRight = 'bottomRight',
    bottomLeft = 'bottomLeft',
    topRight = 'topRight',
    topLeft = 'topLeft',
}

export default {
    props: {
        size: {
            type: String,
            validator: enumValidate(SIZE_CLASS),
            default: SIZE_CLASS.normal,
        },
        position: {
            type: String,
            validator: enumValidate(POSCLASS),
            default: POSCLASS.bottomRight,
        },
    },
    methods: {
        click(e: EventHandler): void {
            this.$emit('click', e);
        },
    },
};
