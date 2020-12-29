import React, { useCallback, useState } from 'react';
import { View } from '@tarojs/components';
import PkPicker from '../picker';
import { IdatePickerProps, CurrentDate } from './interface.d';
import {
    verifyDate,
    getYearRange,
    getMonthRange,
    getDayRange,
    getSelectValue,
} from './utils';

function getCurrentDate(_value, _start) {
    const currentYear =
        _start.getFullYear() > _value.getFullYear()
            ? `${_start.getFullYear()}年`
            : `${_value.getFullYear()}年`;
    const currentMonth =
        _start.getFullYear() > _value.getFullYear()
            ? `${_start.getMonth() + 1}月`
            : `${_value.getMonth() + 1}月`;
    const currentDay =
        _start.getFullYear() > _value.getFullYear()
            ? `${_start.getDate()}日`
            : `${_value.getDate()}日`;
    return { currentYear, currentMonth, currentDay };
}

export default function PkDatePicker(props: IdatePickerProps) {
    const {
        value = '',
        start = '',
        end = '',
        fields = 'day',
        disabled = false,
        onColumnChange,
        onCancel,
        onConfirm,
        title = '日期',
        showTooBar = true,
    } = props;
    const _value =
        verifyDate(value) || new Date(new Date().setHours(0, 0, 0, 0)); // 没传值或值的合法性错误默认今天时间
    const _start = verifyDate(start) || new Date('1970/01/01');
    const _end = verifyDate(end) || new Date('2099/01/01');
    const [currentDate, setCurrentDate] = useState<CurrentDate<string>>(() =>
        getCurrentDate(_value, _start)
    );
    const { currentYear, currentMonth, currentDay } = currentDate;
    const [yearRange] = useState(() =>
        getYearRange(_start.getFullYear(), _end.getFullYear()).map(
            el => `${el}年`
        )
    );
    const [monthRange, setMonthRange] = useState(() =>
        getMonthRange(_start, _end, parseInt(currentYear)).map(el => `${el}月`)
    );
    const [dayRange, setDayRange] = useState(() =>
        getDayRange(
            _start,
            _end,
            parseInt(currentYear),
            parseInt(currentMonth)
        ).map(el => `${el}日`)
    );
    const [valueIndex, setValueIndex] = useState(() => {
        const yearIndex = yearRange.indexOf(currentYear);
        const monthIndex = monthRange.indexOf(currentMonth);
        const dayIndex = dayRange.indexOf(currentDay);
        if (fields === 'month') {
            return [yearIndex, monthIndex];
        } else if (fields === 'year') {
            return [yearIndex];
        } else {
            return [yearIndex, monthIndex, dayIndex];
        }
    });
    const getRange = useCallback(() => {
        if (fields === 'month') {
            return [yearRange, monthRange];
        } else if (fields === 'year') {
            return [yearRange];
        } else {
            return [yearRange, monthRange, dayRange];
        }
    }, [yearRange, monthRange, dayRange]);
    const handleChange = val => {
        const isEqual = valueIndex
            .slice(0, val.length)
            .map((i, idx) => val[idx] === i);
        let newMonthRange;
        let newDayRange;
        if (isEqual[0] === false || isEqual[1] === false) {
            const preMonthVal = monthRange[val[1]];
            newMonthRange = getMonthRange(
                _start,
                _end,
                parseInt(yearRange[val[0]])
            ).map(el => `${el}月`);
            val[1] =
                newMonthRange.indexOf(preMonthVal) !== -1
                    ? newMonthRange.indexOf(preMonthVal)
                    : newMonthRange.length - 1;
            const preDayVal = dayRange[val[2]];
            newDayRange = getDayRange(
                _start,
                _end,
                parseInt(yearRange[val[0]]),
                parseInt(monthRange[val[1]])
            ).map(el => `${el}日`);
            val[2] =
                newDayRange.indexOf(preDayVal) !== -1
                    ? newDayRange.indexOf(preDayVal)
                    : newDayRange.length - 1;
            setMonthRange(newMonthRange);
            setDayRange(newDayRange);
        } else {
            newMonthRange = monthRange;
            newDayRange = dayRange;
        }
        setCurrentDate({
            currentYear: yearRange[val[0]],
            currentMonth: newMonthRange[val[1]],
            currentDay: newDayRange[val[2]],
        });
        setValueIndex(val);
        const currentVal = getSelectValue(
            [yearRange[val[0]], newMonthRange[val[1]], newDayRange[val[2]]],
            fields
        );
        if (onColumnChange) {
            onColumnChange(currentVal);
        }
    };
    const handleConfirm = () => {
        if (onConfirm) {
            const val = getSelectValue(
                [
                    currentDate.currentYear,
                    currentDate.currentMonth,
                    currentDate.currentDay,
                ],
                fields
            );
            onConfirm(val);
        }
    };
    return (
        <View className='pkDate-Picker'>
            <PkPicker
                range={getRange()}
                mode='multiSelector'
                value={valueIndex}
                disabled={disabled}
                onColumnChange={handleChange}
                onCancel={onCancel}
                onConfirm={handleConfirm}
                showTooBar={showTooBar}
                title={title}
            />
        </View>
    );
}
