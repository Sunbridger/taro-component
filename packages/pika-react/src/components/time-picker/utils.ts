interface DayTime {
    hour: number;
    minutes: number;
}
/**
 * 校验时间合法性，返回合法性和日期数组
 */
export function verifyTime(dateStr: string) {
    if (!dateStr) return false;
    const [hour, minutes] = dateStr.split(':');
    if (
        parseInt(hour) <= 23 &&
        parseInt(hour) >= 0 &&
        parseInt(minutes) >= 0 &&
        parseInt(minutes) <= 59
    ) {
        return { hour: parseInt(hour), minutes: parseInt(minutes) };
    } else {
        return false;
    }
}
/**
 * 时间数组
 */
export function getTimeRange(begin: number, end: number) {
    const range: string[] = [];
    for (let i = begin; i <= end; i++) {
        range.push(`${i < 10 ? '0' : ''}${i}`);
    }
    return range;
}

/**
 * 获取小时区间数组
 */
export function getHourRange(start: number, end: number) {
    const rangeStart = start ? start : 0;
    const rangeEnd = end ? end : 23;
    return getTimeRange(rangeStart, rangeEnd);
}

/**
 * 获取小时区间数组
 */
export function getMinutesRange(start: DayTime, end: DayTime, currentHour) {
    let rangeStart = 0;
    let rangeEnd = 59;
    // 当前小时等于开始小时，由开始对应的分钟约束开始值
    if (start.hour === currentHour) {
        rangeStart = start.minutes;
    }

    // 当前小时等于结束小时，由结束对应的分钟约束结束值
    if (end.hour === currentHour) {
        rangeEnd = end.minutes;
    }

    return getTimeRange(rangeStart, rangeEnd);
}
