import React, { useState } from 'react';
import PkPicker from '../picker';
import { View } from '@tarojs/components';
import { ItimePickerProps } from './interface.d';
import { verifyTime, getHourRange, getMinutesRange } from './utils';

export default function PkTimePicker(props: ItimePickerProps) {
    const {
        value = '',
        start = '',
        end = '',
        disabled = false,
        showTooBar = true,
        onColumnChange,
        onCancel,
        onConfirm,
        title = '时间',
    } = props;
    const _value = verifyTime(value) || {
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
    };
    const _start = verifyTime(start) || { hour: 0, minutes: 0 };
    const _end = verifyTime(end) || { hour: 23, minutes: 59 };
    const [currentTime, setCurrentTime] = useState(() => {
        const hour = _value.hour < _start.hour ? _start.hour : _value.hour;
        const minutes =
            _value.hour < _start.hour ? _start.minutes : _value.minutes;
        return { hour, minutes };
    });
    const hoursRange = getHourRange(_start.hour, _end.hour);
    const [minutesRange, setMinutesRange] = useState(() => {
        return getMinutesRange(_start, _end, currentTime.hour);
    });
    const range = [hoursRange, minutesRange];
    const [valueIndex, setValueIndex] = useState(() => {
        const hour =
            currentTime.hour < 10
                ? `0${currentTime.hour}`
                : String(currentTime.hour);
        const hourIndex = hoursRange.indexOf(hour);
        const minutes =
            currentTime.minutes < 10
                ? `0${currentTime.minutes}`
                : String(currentTime.minutes);
        const minutesIndex = minutesRange.indexOf(minutes);
        return [hourIndex, minutesIndex];
    });
    const handleChange = val => {
        const newHour = hoursRange[val[0]];
        const preMinutes = minutesRange[val[1]];
        const newMinutesRange = getMinutesRange(_start, _end, Number(newHour));
        val[1] =
            newMinutesRange.indexOf(preMinutes) !== -1
                ? newMinutesRange.indexOf(preMinutes)
                : newMinutesRange.length - 1;
        setMinutesRange(newMinutesRange);
        setCurrentTime({
            hour: parseInt(hoursRange[val[0]]),
            minutes: parseInt(newMinutesRange[val[1]]),
        });
        setValueIndex(val);
        if (onColumnChange) {
            onColumnChange(
                `${parseInt(hoursRange[val[0]])}:${parseInt(
                    minutesRange[val[1]]
                )}`
            );
        }
    };
    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm(`${currentTime.hour}:${currentTime.minutes}`);
        }
    };
    return (
        <View className='pkDate-Picker'>
            <PkPicker
                range={range}
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
