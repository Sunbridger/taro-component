import classNames from 'classnames';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { View, PickerViewColumn, PickerView } from '@tarojs/components';
import { IpickerProps } from './interface.d';

export default function PkPicker(props: IpickerProps) {
    const {
        mode = 'selector',
        value = [],
        range = [],
        rangeKey,
        title = '',
        disabled = false,
        showTooBar = true,
        onColumnChange,
        onCancel,
        onConfirm,
        columnWidth = [],
    } = props;
    const rootCls = classNames('pk-picker', {
        'pk-picker__disabled': disabled,
    });
    const [preValue, setPreValue] = useState(value);
    const [preRange, setPreRange] = useState(range);
    const currentValue = useRef(value);
    const [, setCount] = useState(0);
    if (preRange !== range) {
        setPreRange(range);
    }
    if (preValue !== value) {
        setPreValue(value);
    }
    useEffect(() => {
        const timer = setTimeout(() => setCount(g => ++g), 0);
        return () => clearTimeout(timer);
    }, [preRange]);
    const handleChange = e => {
        currentValue.current = e.detail.value;
        if (onColumnChange) {
            onColumnChange(e.detail.value);
        }
    };
    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm(currentValue.current);
        }
    };
    const _renderSelector = useCallback(
        () => (
            <PickerView
                className='pk-picker__view'
                indicator-class='pk-picker__current'
                onChange={e => handleChange(e)}
                value={preValue}
            >
                <PickerViewColumn>
                    {preRange.map((item, idx) => (
                        <View key={`${idx}${item}`} className='pk-picker__item'>
                            {typeof item === 'function'
                                ? item()
                                : rangeKey
                                ? item[rangeKey]
                                : item}
                        </View>
                    ))}
                </PickerViewColumn>
            </PickerView>
        ),
        [preRange, preValue]
    );
    const _renderMultiSelector = useCallback(
        () => (
            <PickerView
                className='pk-picker__view'
                indicator-class='pk-picker__current'
                onChange={e => handleChange(e)}
                value={preValue}
            >
                {preRange.map((listItem, idx) => (
                    <PickerViewColumn
                        key={idx}
                        className='test'
                        style={{
                            flex: columnWidth[idx] ? columnWidth[idx] : 1,
                        }}
                    >
                        {listItem.map((item, idx) => (
                            <View
                                key={`${idx}${item}`}
                                className='pk-picker__item'
                            >
                                {typeof item === 'function'
                                    ? item()
                                    : rangeKey
                                    ? item[rangeKey]
                                    : item}
                            </View>
                        ))}
                    </PickerViewColumn>
                ))}
            </PickerView>
        ),
        [preValue, preRange]
    );
    return (
        <View className={rootCls}>
            {showTooBar ? (
                <View className='toolbar'>
                    <View className='btn_cancel' onClick={onCancel}>
                        取消
                    </View>
                    <View className='title'>{title}</View>
                    <View className='btn_confirm' onClick={handleConfirm}>
                        确定
                    </View>
                </View>
            ) : null}
            {mode === 'selector' ? _renderSelector() : _renderMultiSelector()}
        </View>
    );
}
