import { enumValidate, addPreZero } from '../../utils/common';
import dayjs from 'dayjs';

enum FIELDS_CLASS {
    year = 'year',
    month = 'month',
    day = 'day',
}

interface DateObj {
    year: number;
    month: number;
    day: number;
}

export default {
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        value: {
            type: String,
            default: dayjs().format('YYYY-MM-DD'),
        },
        start: {
            type: String,
            default: '1900-01-01',
        },
        end: {
            type: String,
            default: '2100-12-31',
        },
        fields: {
            type: String,
            validator: enumValidate(FIELDS_CLASS),
            default: FIELDS_CLASS.day,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    mounted(): void {
        const dateObj = this.transDate(this.value);
        // 需要逐步确定年月日才能确定序列位置, 待优化
        this.$nextTick(() => {
            this.$set(this.indexs, 0, dateObj.year - this.years[0]);
            this.$nextTick(() => {
                this.$set(this.indexs, 1, dateObj.month - this.months[0] + 1);
                this.$nextTick(() => {
                    this.$set(this.indexs, 2, dateObj.day - this.days[0]);
                });
            });
        });
    },
    data(): any {
        return {
            indexs: [0, 0, 0],
            yearUnit: '年',
            monthUnit: '月',
            dayUnit: '日',
        };
    },
    computed: {
        // 将输入的起始时间转化为对象
        startObj(): DateObj {
            return this.transDate(this.start);
        },
        // 将输入的结束时间转化为对象
        endObj(): DateObj {
            return this.transDate(this.end);
        },
        // 年份列表
        years(): number[] {
            const startYear = this.startObj.year;
            const endYear = this.endObj.year;
            const length = endYear - startYear + 1;
            if (length > 0) {
                const yearList = Array.from(
                    Array(length),
                    (_v, k) => startYear + k
                );
                return yearList;
            } else {
                return [];
            }
        },
        // 月份列表, 动态计算
        months(): number[] {
            const monthList = Array.from(Array(12), (_v, k) => k + 1);
            let startIndex = 0;
            let endIndex = 12;

            if (this.indexs[0] === 0) {
                startIndex = this.startObj.month;
            }

            if (this.indexs[0] === this.years.length - 1) {
                endIndex = this.endObj.month + 1;
            }

            return monthList.slice(startIndex, endIndex);
        },
        // 日期列表, 动态计算
        days(): number[] {
            const curDay = `${this.years[this.indexs[0]]}-${addPreZero(
                this.months[this.indexs[1]],
                2
            )}`;
            const dayNumber = dayjs(curDay).daysInMonth();
            const dayList = Array.from(Array(dayNumber), (_v, k) => k + 1);

            let startIndex = 0;
            let endIndex = dayNumber;

            if (this.start.includes(curDay)) {
                startIndex = this.startObj.day - 1;
            }

            if (this.end.includes(curDay)) {
                endIndex = this.endObj.day;
            }

            return dayList.slice(startIndex, endIndex);
        },
        // 用于picker的范围数值
        range(): string[][] {
            switch (this.fields) {
                case FIELDS_CLASS.year:
                    return [this.years.map(i => i + this.yearUnit)];
                case FIELDS_CLASS.month:
                    return [
                        this.years.map(i => i + this.yearUnit),
                        this.months.map(i => i + this.monthUnit),
                    ];
                case FIELDS_CLASS.day:
                default:
                    return [
                        this.years.map(i => i + this.yearUnit),
                        this.months.map(i => i + this.monthUnit),
                        this.days.map(i => i + this.dayUnit),
                    ];
            }
        },
    },
    methods: {
        transDate(dateStr): DateObj {
            const obj = dayjs(dateStr);
            return {
                year: +obj.get('year'),
                month: +obj.get('month'),
                day: +obj.get('date'),
            };
        },
        dateChange(value): void {
            this.indexs = value;
        },
        // 抛出的数据参数
        change(value): void {
            let dateStr;
            switch (this.fields) {
                case FIELDS_CLASS.year:
                    this.$emit('change', this.years[value[0]] + '');
                    return;
                case FIELDS_CLASS.month:
                    dateStr = `${this.years[value[0]]}-${
                        this.months[value[1]]
                    }`;
                    this.$emit('change', dayjs(dateStr).format('YYYY-MM'));
                    return;
                case FIELDS_CLASS.day:
                    dateStr = `${this.years[value[0]]}-${
                        this.months[value[1]]
                    }-${this.days[value[2]]}`;
                    this.$emit('change', dayjs(dateStr).format('YYYY-MM-DD'));
                    return;
                default:
            }
        },
    },
};
