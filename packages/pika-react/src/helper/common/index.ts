import Taro from '@tarojs/taro';
import { SelectorQuery } from '@tarojs/taro/types/index';
import * as platform from './platform';
import zIndex from './zIndex';

interface EventDetail {
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
    offsetX: number;
    offsetY: number;
    x: number;
    y: number;
}

function getBoundingClientRect(dom: string): Promise<any> {
    return new Promise(resolve => {
        const query = Taro.createSelectorQuery();
        query.selectViewport().scrollOffset();
        query
            .select(dom)
            .boundingClientRect()
            .exec(function (res) {
                resolve({
                    ...res[0],
                    ...res[1],
                });
            });
    }).catch();
}

function delay(delayTime = 25): Promise<null> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, delayTime);
    });
}

function delayQuerySelector(
    selectorStr: string,
    delayTime = 500
): Promise<any[]> {
    return new Promise(resolve => {
        const selector: SelectorQuery = Taro.createSelectorQuery();
        delay(delayTime).then(() => {
            selector
                .select(selectorStr)
                .boundingClientRect()
                .exec((res: any[]) => {
                    resolve(res);
                });
        });
    });
}

function getEventDetail(event): EventDetail {
    let detail: EventDetail;
    switch (Taro.getEnv()) {
        case Taro.ENV_TYPE.WEB:
            detail = {
                pageX: event.pageX,
                pageY: event.pageY,
                clientX: event.clientX,
                clientY: event.clientY,
                offsetX: event.offsetX,
                offsetY: event.offsetY,
                x: event.x,
                y: event.y,
            };
            break;

        case Taro.ENV_TYPE.WEAPP:
            detail = {
                pageX: event.touches[0].pageX,
                pageY: event.touches[0].pageY,
                clientX: event.touches[0].clientX,
                clientY: event.touches[0].clientY,
                offsetX: event.target.offsetLeft,
                offsetY: event.target.offsetTop,
                x: event.target.x,
                y: event.target.y,
            };
            break;

        case Taro.ENV_TYPE.ALIPAY:
            detail = {
                pageX: event.target.pageX,
                pageY: event.target.pageY,
                clientX: event.target.clientX,
                clientY: event.target.clientY,
                offsetX: event.target.offsetLeft,
                offsetY: event.target.offsetTop,
                x: event.target.x,
                y: event.target.y,
            };
            break;

        case Taro.ENV_TYPE.SWAN:
            detail = {
                pageX: event.changedTouches[0].pageX,
                pageY: event.changedTouches[0].pageY,
                clientX: event.target.clientX,
                clientY: event.target.clientY,
                offsetX: event.target.offsetLeft,
                offsetY: event.target.offsetTop,
                x: event.detail.x,
                y: event.detail.y,
            };
            break;

        default:
            detail = {
                pageX: 0,
                pageY: 0,
                clientX: 0,
                clientY: 0,
                offsetX: 0,
                offsetY: 0,
                x: 0,
                y: 0,
            };
            console.warn('getEventDetail暂未支持该环境');
            break;
    }
    return detail;
}

function uuid(len = 8, radix = 16): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
        ''
    );
    const value: string[] = [];
    let i = 0;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) value[i] = chars[0 | (Math.random() * radix)];
    } else {
        // rfc4122, version 4 form
        let r;

        // rfc4122 requires these characters
        /* eslint-disable-next-line */
        value[8] = value[13] = value[18] = value[23] = '-'
        value[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!value[i]) {
                r = 0 | (Math.random() * 16);
                value[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return value.join('');
}

export {
    platform,
    zIndex,
    getBoundingClientRect,
    delayQuerySelector,
    getEventDetail,
    uuid,
};
