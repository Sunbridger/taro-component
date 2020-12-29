import Taro from '@tarojs/taro';

export function isIosFullScreen(): Promise<boolean> {
    return new Promise(resolve => {
        Taro.getSystemInfo({
            success: res => {
                const modelmes = res.model;
                if (
                    modelmes.search('iPhone X') !== -1 ||
                    modelmes.search('iPhone 11') !== -1
                ) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            },
        });
    });
}

let blackHeight;
export function getBottomBlackHeight(): number {
    if (blackHeight === undefined) {
        const sysInfo = Taro.getSystemInfoSync();
        blackHeight = sysInfo.screenHeight - sysInfo.safeArea.bottom;
    }
    return blackHeight;
}
