import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { mergeStyle, pxTransform } from '../../utils/common';

const defaultIconInfo = {
    customStyle: '',
    className: '',
    prefixClass: 'pk-icon',
    value: '',
    color: '',
    size: Taro.getEnv() === 'WEB' ? 12 : 24,
};

export default {
    name: 'AtNavBar',
    props: {
        customStyle: {
            type: [Object, String],
            default: '',
        },
        className: {
            type: [Array, String],
            default: '',
        },
        fixed: {
            type: Boolean,
            default: false,
        },
        border: {
            type: Boolean,
            default: true,
        },
        color: {
            type: String,
            default: '',
        },
        leftIconType: {
            type: [String, Object],
            default: '',
        },
        leftText: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        onClickLeftIcon: {
            type: Function,
        },
        onClickRgIconSt: {
            type: Function,
        },
        onClickRgIconNd: {
            type: Function,
        },
        rightFirstIconType: {
            type: [String, Object],
            default: '',
        },
        rightSecondIconType: {
            type: [String, Object],
            default: '',
        },
    },
    data() {
        return {
            iosBarHeight: 48,
            androidBarHeight: 44,
            offsetLeaveCapsule: 6,
            offsetLeaveTop: 4,
            mainStyle: {},
        };
    },
    computed: {
        linkStyle() {
            const { color } = this;
            return { color };
        },
        rootCls() {
            const { fixed, border, className } = this;
            return classNames(
                {
                    'pk-nav-bar': true,
                    'pk-nav-bar--fixed': fixed,
                    'pk-nav-bar--no-border': !border,
                },
                className
            );
        },
        leftIconInfo() {
            const { leftIconType } = this;
            const leftIconInfo =
                leftIconType instanceof Object
                    ? { ...defaultIconInfo, ...leftIconType }
                    : { ...defaultIconInfo, value: leftIconType };
            return leftIconInfo;
        },
        leftIconClass() {
            const { leftIconInfo } = this;
            return classNames(
                leftIconInfo.prefixClass,
                {
                    [`${leftIconInfo.prefixClass}-${leftIconInfo.value}`]: leftIconInfo.value,
                },
                leftIconInfo.className
            );
        },
        rightFirstIconInfo() {
            const { rightFirstIconType } = this;
            const rightFirstIconInfo =
                rightFirstIconType instanceof Object
                    ? { ...defaultIconInfo, ...rightFirstIconType }
                    : { ...defaultIconInfo, value: rightFirstIconType };
            return rightFirstIconInfo;
        },
        rightFirstIconClass() {
            const { rightFirstIconInfo } = this;
            return classNames(
                rightFirstIconInfo.prefixClass,
                {
                    [`${rightFirstIconInfo.prefixClass}-${rightFirstIconInfo.value}`]: rightFirstIconInfo.value,
                },
                rightFirstIconInfo.className,
                'pk-icon'
            );
        },
        rightSecondIconInfo() {
            const { rightSecondIconType } = this;
            const rightSecondIconInfo =
                rightSecondIconType instanceof Object
                    ? { ...defaultIconInfo, ...rightSecondIconType }
                    : { ...defaultIconInfo, value: rightSecondIconType };
            return rightSecondIconInfo;
        },
        rightSecondIconClass() {
            const { rightSecondIconInfo } = this;
            return classNames(
                rightSecondIconInfo.prefixClass,
                {
                    [`${rightSecondIconInfo.prefixClass}-${rightSecondIconInfo.value}`]: rightSecondIconInfo.value,
                },
                rightSecondIconInfo.className,
                'pk-icon'
            );
        },
        leftIconStyle() {
            const { leftIconInfo } = this;
            return mergeStyle(
                {
                    color: leftIconInfo.color,
                    fontSize: `${pxTransform(
                        parseInt(leftIconInfo.size.toString()) * 2
                    )}`,
                },
                leftIconInfo.customStyle
            );
        },
        rightSecondIconStyle() {
            const { rightSecondIconInfo } = this;
            return mergeStyle(
                {
                    color: rightSecondIconInfo.color,
                    fontSize: `${pxTransform(
                        parseInt(rightSecondIconInfo.size.toString()) * 2
                    )}`,
                },
                rightSecondIconInfo.customStyle
            );
        },
        rightFirstIconStyle() {
            const { rightFirstIconInfo } = this;
            return mergeStyle(
                {
                    color: rightFirstIconInfo.color,
                    fontSize: `${pxTransform(
                        parseInt(rightFirstIconInfo.size.toString()) * 2
                    )}`,
                },
                rightFirstIconInfo.customStyle
            );
        },
    },
    methods: {
        classNames,
        /**
         *
         * @param {event} event
         */
        handleClickLeftView(event) {
            this.onClickLeftIcon && this.onClickLeftIcon(event);
        },
        /**
         *
         * @param {event} event
         */
        handleClickSt(event) {
            this.onClickRgIconSt && this.onClickRgIconSt(event);
        },
        /**
         *
         * @param {event} event
         */
        handleClickNd(event) {
            this.onClickRgIconNd && this.onClickRgIconNd(event);
        },
        setCustomNavigationBarInfo() {
            const menuInfo: any = Taro.getMenuButtonBoundingClientRect?.() || {
                top: 0,
                height: 0,
            };
            const sysInfo = Taro.getSystemInfoSync();
            if (!menuInfo.top) {
                menuInfo.top = sysInfo.statusBarHeight + this.offsetLeaveTop;
                if (sysInfo.platform.toLowerCase() === 'android') {
                    menuInfo.top += this.offsetLeaveTop;
                }
            }
            if (!menuInfo.height) {
                menuInfo.height =
                    sysInfo.platform.toLowerCase() === 'android'
                        ? this.androidBarHeight
                        : this.iosBarHeight;
            }
            this.mainStyle = {
                paddingRight: this.fixed
                    ? sysInfo.windowWidth - menuInfo.left + 'px'
                    : 'normal',
                height: this.fixed
                    ? menuInfo.height + menuInfo.bottom / 2 + 'px'
                    : 'normal',
                paddingTop: this.fixed ? menuInfo.bottom / 2 + 'px' : 'normal',
            };
        },
    },
    mounted() {
        this.setCustomNavigationBarInfo();
    },
};
