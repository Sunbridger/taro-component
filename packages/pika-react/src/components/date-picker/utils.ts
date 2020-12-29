/**
 * 校验日期合法性，返回合法性和日期数组
 */
export function verifyDate(dateStr: string) {
    if (!dateStr) return false;
    const date = new Date(dateStr.replace(/-/g, '/'));
    return isNaN(date.getMonth()) ? false : date;
}

/**
 * 获取当月最大天数
 */
function getMaxDay(year: number, month: number) {
    if (month === 4 || month === 6 || month === 9 || month === 11) return 30;
    if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return 29;
        else return 28;
    }
    return 31;
}

/**
 * 获取时间数组
 */
function getDateRange(start: number, end: number) {
    const range: number[] = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}

/**
 * 获取年份区间数组
 */
export function getYearRange(start: number, end: number) {
    return getDateRange(start, end);
}

/**
 * 获取月份区间数组
 */
export function getMonthRange(start: Date, end: Date, year: number) {
    let rangeStart = 1;
    let rangeEnd = 12;

    // 当前年份等于开始年份，由开始对应的月份约束开始值
    if (start.getFullYear() === year) {
        rangeStart = start.getMonth() + 1;
    }

    // 当前年份等于结束年份，由结束对应的月份约束结束值
    if (end.getFullYear() === year) {
        rangeEnd = end.getMonth() + 1;
    }
    return getDateRange(rangeStart, rangeEnd);
}

/**
 * 获取日期区间数组
 */
export function getDayRange(
    start: Date,
    end: Date,
    year: number,
    month: number
) {
    let rangeStart = 1;
    let rangeEnd = getMaxDay(year, month);

    if (start.getFullYear() === year && start.getMonth() + 1 === month) {
        rangeStart = start.getDate();
    }

    if (end.getFullYear() === year && end.getMonth() + 1 === month) {
        rangeEnd = end.getDate();
    }

    return getDateRange(rangeStart, rangeEnd);
}

/**
 * 转换数据
 */

export function getSelectValue(val: string[], fields: string) {
    let str;
    if (fields === 'year') {
        str = val
            .slice(0, 1)
            .map(i => parseInt(i))
            .join('-');
    } else if (fields === 'month') {
        str = val
            .slice(0, 2)
            .map(i => parseInt(i))
            .join('-');
    } else {
        str = val
            .slice(0, 3)
            .map(i => parseInt(i))
            .join('-');
    }
    return str;
}
