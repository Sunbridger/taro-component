/**
 * Props 校验器: 枚举类型
 * @param Obj
 */
export function enumValidate(Obj: any) {
    return function (val: string): boolean {
        return Obj[val] === val;
    };
}

/**
 * 数字前面补0
 */
export function addPreZero(num: number, length: number): string {
    return ('000000000' + num).slice(-length);
}

/**
 * object style to string style
 * @param style
 */
const objectToString = (style: object | string): string => {
    if (style && typeof style === 'object') {
        let styleStr = '';
        Object.keys(style).forEach(key => {
            const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            styleStr += `${lowerCaseKey}:${style[key]};`;
        });
        return styleStr;
    } else if (style && typeof style === 'string') {
        return style;
    }
    return '';
};

/**
 * merge style
 * @param style1
 * @param style2
 */
export function mergeStyle(
    style1: object | string,
    style2: object | string
): object | string {
    if (
        style1 &&
        typeof style1 === 'object' &&
        style2 &&
        typeof style2 === 'object'
    ) {
        return Object.assign({}, style1, style2);
    }
    return objectToString(style1) + objectToString(style2);
}

/**
 * pxTransform
 * @param size
 */
export function pxTransform(size: number): string {
    if (!size) return '';
    const designWidth = 750;
    const deviceRatio = {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
    };
    return `${size / deviceRatio[designWidth]}rpx`;
}
