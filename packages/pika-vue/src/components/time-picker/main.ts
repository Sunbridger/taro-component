import { addPreZero } from '../../utils/common';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

interface TimeObj {
    hour: number;
    minute: number;
}

export default {
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        value: {
            type: String,
            default: dayjs().format('HH:mm'),
        },
        start: {
            type: String,
            default: '00:00',
        },
        end: {
            type: String,
            default: '23:59',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data(): any {
        return {
            indexs: [0, 0],
            hourUnit: '时',
            minuteUnit: '分',
        };
    },
    computed: {
        startObj(): TimeObj {
            return this.transDate(this.start);
        },
        endObj(): TimeObj {
            return this.transDate(this.end);
        },
        hours(): number[] {
            const startHour = this.startObj.hour;
            const endHour = this.endObj.hour;
            const length = endHour - startHour + 1;
            if (length > 0) {
                const hourList = Array.from(
                    Array(length),
                    (_v, k) => startHour + k
                );
                return hourList;
            } else {
                return [];
            }
        },
        minutes(): number[] {
            const minuteList = Array.from(Array(60), (_v, k) => k);
            let startIndex = 0;
            let endIndex = 60;
            if (this.indexs[0] === 0) {
                startIndex = this.startObj.minute;
            }

            if (this.indexs[0] === this.hours.length - 1) {
                endIndex = this.endObj.minute + 1;
            }

            return minuteList.slice(startIndex, endIndex);
        },
        range(): string[][] {
            return [
                this.hours.map(i => addPreZero(i, 2) + this.hourUnit),
                this.minutes.map(i => addPreZero(i, 2) + this.minuteUnit),
            ];
        },
    },
    mounted(): void {
        const timeObj = this.transDate(this.value);
        // 逐步确定时分
        this.$nextTick(() => {
            this.$set(this.indexs, 0, timeObj.hour - this.hours[0]);
            this.$nextTick(() => {
                this.$set(this.indexs, 1, timeObj.minute - this.minutes[0]);
            });
        });
    },
    methods: {
        transDate(dateStr): TimeObj {
            const obj = dayjs(dateStr, 'HH:mm');
            return {
                hour: +obj.get('hour'),
                minute: +obj.get('minute'),
            };
        },
        dateChange(value): void {
            this.indexs = value;
        },
        change(value): void {
            const dateStr = `${this.hours[value[0]]}:${this.minutes[value[1]]}`;
            this.$emit('change', dayjs(dateStr, 'HH:mm').format('HH:mm'));
        },
    },
};
