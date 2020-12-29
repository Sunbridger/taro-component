/**
 * 星期枚举
 */
export const enumDay = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
};
/**
 * 校验日期合法性，返回合法性和日期数组
 */
export function verifyDate(dateStr: string) {
    if (!dateStr) return false;
    const date = new Date(dateStr.replace(/-/g, '/'));
    return isNaN(date.getMonth()) ? false : date;
}

/**
 * 校验当前日期是否超过开始结束日期范围内
 */
export function verifyStartRange(currentTime: number, start: Date | false) {
    if (start) {
        return (
            currentTime >=
            new Date(
                `${new Date(currentTime).getFullYear()}/${
                    new Date(currentTime).getMonth() + 1
                }/${new Date(currentTime).getDate()}`
            ).getTime()
        );
    } else {
        return true;
    }
}
export function verifyEndRange(currentTime: number, end: Date | false) {
    if (end) {
        return (
            new Date(
                `${end.getFullYear()}/${end.getMonth() + 1}/${end.getDate()}`
            ).getTime() >= currentTime
        );
    } else {
        return true;
    }
}
/**
 * 获取区间
 */
function getRange(start: number, end: number) {
    const range: number[] = [];
    if (start === 12 && end !== 12) {
        for (let i = 1; i <= end; i++) {
            range.push(i);
        }
        range.unshift(12);
    } else {
        for (let i = start; i <= end; i++) {
            range.push(i);
        }
    }
    return range;
}
export function getTimeRange(begin: number, end: number) {
    const range: string[] = [];
    for (let i = begin; i <= end; i++) {
        range.push(`${i < 10 ? '0' : ''}${i}`);
    }
    return range;
}
/**
 * 获取12小时下的小时
 */
export function getHour(date: Date) {
    return date.getHours() - 12 === -12 || date.getHours() - 12 === 0
        ? 12
        : date.getHours() - 12 > 0
        ? date.getHours() - 12
        : date.getHours();
}
export function get24Hour(str: string, val: number) {
    if (str === '上午') {
        return val === 12 ? 0 : val;
    } else {
        return val === 12 ? 12 : val + 12;
    }
}
/**
 * 将日期显示成xx月xx日周x
 */
export function getDetailDate(time: number) {
    const current = new Date(time);
    const currentMonth = current.getMonth() + 1;
    const currentDate = current.getDate();
    const currentDay = current.getDay();
    return `${currentMonth}月${currentDate}日周${enumDay[currentDay]}`;
}
/**
 * 获取当前时间前30天，后30天
 */
export function getDateRange(
    current: Date,
    start: Date | false,
    end: Date | false
) {
    const currentTime = new Date(
        new Date(current).setHours(0, 0, 0, 0)
    ).getTime();
    const result: number[] = [currentTime];
    for (let i = 1; i <= 30; i++) {
        const addTime = 1000 * 60 * 60 * 24;
        if (verifyEndRange(currentTime + addTime * i, end)) {
            result.push(currentTime + addTime * i);
        }
        if (verifyStartRange(currentTime - addTime * i, start)) {
            result.unshift(currentTime - addTime * i);
        }
    }
    return [result.map(getDetailDate), result] as const;
}

/**
 * 是否是同一天
 */
export function isSameDay(day: Date, day1: Date) {
    return (
        day.getFullYear() === day1.getFullYear() &&
        day.getMonth() + 1 === day1.getMonth() + 1 &&
        day.getDate() === day1.getDate()
    );
}
/**
 * 是否是同一天同一小时
 */
export function isSameDayHour(day: Date, day1: Date) {
    return (
        day.getFullYear() === day1.getFullYear() &&
        day.getMonth() + 1 === day1.getMonth() + 1 &&
        day.getDate() === day1.getDate() &&
        day.getHours() === day1.getHours()
    );
}
export function getMRange(
    current: Date,
    start: Date | false,
    end: Date | false
) {
    if (start && isSameDay(start, current)) {
        return start.getHours() < 12 ? ['上午', '下午'] : ['下午'];
    }
    if (end && isSameDay(end, current)) {
        return end.getHours() >= 12 ? ['上午', '下午'] : ['上午'];
    }
    return ['上午', '下午'];
}
/**
 * 获取小时区间数组
 */
export function getHourRange(
    current: Date,
    start: Date | false,
    end: Date | false,
    str: string
) {
    let rangeStart = 12;
    let rangeEnd = 11;
    if (start && isSameDay(start, current)) {
        if (
            (start.getHours() >= 12 && str === '下午') ||
            (start.getHours() < 12 && str === '上午')
        )
            rangeStart = getHour(start);
    }
    if (end && isSameDay(end, current)) {
        if (
            (end.getHours() >= 12 && str === '下午') ||
            (end.getHours() < 12 && str === '上午')
        )
            rangeEnd = getHour(end);
    }
    return getRange(rangeStart, rangeEnd);
}

/**
 * 获取小时区间数组
 */
export function getMinutesRange(
    current: Date,
    start: Date | false,
    end: Date | false
) {
    let rangeStart = 0;
    let rangeEnd = 59;
    if (start) {
        if (isSameDayHour(start, current)) {
            rangeStart = start.getMinutes();
        }
    }
    if (end) {
        if (isSameDayHour(end, current)) {
            rangeEnd = end.getMinutes();
        }
    }
    return getTimeRange(rangeStart, rangeEnd);
}
