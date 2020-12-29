import { enumValidate } from '../../utils/common';

enum TYPE_EASING {
    default = 'default',
    linear = 'linear',
    easeInCubic = 'easeInCubic',
    easeOutCubic = 'easeOutCubic',
    easeInOutCubic = 'easeInOutCubic',
}

export default {
    props: {
        className: {
            type: String,
        },
        indicatorDots: {
            type: Boolean,
            default: false,
        },
        indicatorColor: {
            type: String,
            default: 'rgba(0, 0, 0, .3)',
        },
        indicatorActiveColor: {
            type: String,
            default: '#000',
        },
        autoplay: {
            type: Boolean,
            default: false,
        },
        interval: {
            type: Number,
            default: 5000,
        },
        duration: {
            type: Number,
            default: 500,
        },
        current: {
            type: Number,
            default: 0,
        },
        vertical: {
            type: Boolean,
            default: false,
        },
        circular: {
            type: Boolean,
            default: false,
        },
        onChange: {
            type: Function,
        },
        onAnimationfinish: {
            type: Function,
        },
        easingFunction: {
            type: String,
            validator: enumValidate(TYPE_EASING),
            default: TYPE_EASING.default,
        },
    },
    data() {
        return {};
    },
};
