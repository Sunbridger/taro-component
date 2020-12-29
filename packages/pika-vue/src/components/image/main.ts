import { enumValidate } from '../../utils/common';

enum MODE_CLASS {
    scaleToFill = 'scaleToFill',
    aspectFit = 'aspectFit',
    aspectFill = 'aspectFill',
    widthFix = 'widthFix',
    heightFix = 'heightFix',
    top = 'top',
    bottom = 'bottom',
    center = 'center',
    left = 'left',
    right = 'right',
    'top left' = 'top left',
    'top right' = 'top right',
    'bottom left' = 'bottom left',
    'bottom right' = 'bottom right',
}

export default {
    props: {
        mode: {
            type: String,
            validator: enumValidate(MODE_CLASS),
            default: MODE_CLASS.scaleToFill,
        },
        src: {
            type: String,
        },
        lazyLoad: {
            type: Boolean,
            default: false,
        },
        binderror: {
            type: Function,
        },
        bindload: {
            type: Function,
        },
        params: {
            type: String,
        },
    },
    computed: {
        nowSrc(): string {
            return this.params ? `${this.src}?${this.params}` : this.src;
        },
    },
};
