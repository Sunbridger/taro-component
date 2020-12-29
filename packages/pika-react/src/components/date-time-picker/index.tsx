import React, { useState } from 'react';
import { View } from '@tarojs/components';
import PkPicker from '../picker';
import { IdateTimePickerProps } from './interface.d';
import {
    verifyDate,
    getDateRange,
    getHourRange,
    getMRange,
    getHour,
    get24Hour,
    getMinutesRange,
    getDetailDate,
    isSameDay,
} from './utils';

export default function PkDateTimePicker(
    props: IdateTimePickerProps
): JSX.Element {
    const {
        value = '',
        start = '',
        end = '',
        disabled = false,
        onColumnChange,
        onCancel,
        onConfirm,
        title = '时间',
        showTooBar = true,
    } = props;
    const _value = verifyDate(value) || new Date(); // 没传值或值的合法性错误默认今天时间
    const _start = verifyDate(start);
    const _end = verifyDate(end);
    const [current, setCurrent] = useState(() => {
        if (_start && _start.getTime() > _value.getTime()) {
            return _start;
        } else if (_end && _end.getTime() < _value.getTime()) {
            return _end;
        } else {
            return _value;
        }
    });
    const [dateRange, setDateRange] = useState(() =>
        getDateRange(current, _start, _end)
    );
    const [mRange, setMRange] = useState(() =>
        getMRange(current, _start, _end)
    );
    const [hourRange, setHourRange] = useState(() =>
        getHourRange(
            current,
            _start,
            _end,
            current.getHours() >= 12 ? '下午' : '上午'
        )
    );
    const [minutesRange, setMinutesRange] = useState(() =>
        getMinutesRange(current, _start, _end)
    );
    const getRange = () => {
        return [dateRange[0], mRange, hourRange, minutesRange];
    };
    const [valueIndex, setValueIndex] = useState([
        dateRange[0].indexOf(getDetailDate(current.getTime())),
        mRange.indexOf(current.getHours() >= 12 ? '下午' : '上午'),
        hourRange.indexOf(getHour(current)),
        minutesRange.indexOf(
            current.getMinutes() < 10
                ? `0${current.getMinutes()}`
                : String(current.getMinutes())
        ),
    ]);
    const handleChange = val => {
        const currentYear = new Date(dateRange[1][val[0]]).getFullYear();
        const currentMonth = new Date(dateRange[1][val[0]]).getMonth() + 1;
        const currentDate = new Date(dateRange[1][val[0]]).getDate();
        let currentHour = get24Hour(mRange[val[1]], hourRange[val[2]]);
        let currentMinutes = minutesRange[val[3]];
        if (
            (_start && isSameDay(new Date(dateRange[1][val[0]]), _start)) ||
            (_end && isSameDay(new Date(dateRange[1][val[0]]), _end)) ||
            (_start && isSameDay(current, _start)) ||
            (_end && isSameDay(current, _end))
        ) {
            const newMRange = getMRange(
                new Date(currentYear, currentMonth - 1, currentDate),
                _start,
                _end
            );
            val[1] =
                newMRange.indexOf(mRange[val[1]]) === -1
                    ? newMRange.length - 1
                    : newMRange.indexOf(mRange[val[1]]);
            const newHourRange = getHourRange(
                new Date(currentYear, currentMonth - 1, currentDate),
                _start,
                _end,
                newMRange[val[1]]
            );
            val[2] =
                newHourRange.indexOf(hourRange[val[2]]) === -1
                    ? newHourRange.length - 1
                    : newHourRange.indexOf(hourRange[val[2]]);
            currentHour = get24Hour(newMRange[val[1]], newHourRange[val[2]]);
            const newMinutesRange = getMinutesRange(
                new Date(
                    currentYear,
                    currentMonth - 1,
                    currentDate,
                    currentHour
                ),
                _start,
                _end
            );
            val[3] =
                newMinutesRange.indexOf(minutesRange[val[3]]) === -1
                    ? newMinutesRange.length - 1
                    : newMinutesRange.indexOf(minutesRange[val[3]]);
            currentMinutes = newMinutesRange[val[3]];
            setMRange(newMRange);
            setHourRange(newHourRange);
            setMinutesRange(newMinutesRange);
        }
        setCurrent(
            new Date(
                `${currentYear}/${currentMonth}/${currentDate} ${currentHour}:${currentMinutes}`
            )
        );
        if (val[0] === 0 || val[0] === dateRange[0].length - 1) {
            const newDateRange = getDateRange(
                new Date(`${currentYear}/${currentMonth}/${currentDate}`),
                _start,
                _end
            );
            val[0] = newDateRange[1].indexOf(
                new Date(
                    `${currentYear}/${currentMonth}/${currentDate}`
                ).getTime()
            );
            setDateRange(newDateRange);
        }
        setValueIndex(val);
        if (onColumnChange) {
            onColumnChange(
                `${currentYear}-${currentMonth}-${currentDate} ${currentHour}:${currentMinutes}`
            );
        }
    };
    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm(
                `${current.getFullYear()}-${
                    current.getMonth() + 1
                }-${current.getDate()} ${current.getHours()}:${current.getMinutes()}`
            );
        }
    };
    return (
        <View className='pkDate-Time-Picker'>
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
                columnWidth={[2]}
            />
        </View>
    );
}
