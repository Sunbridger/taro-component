import classNames from 'classnames';
import React, { useMemo } from 'react';
import { View } from '@tarojs/components';
import { PkSwitchProps } from './interface.d';

export default function PkSwitch(props: PkSwitchProps) {
    const {
        /* 单独一个switch */
        alone = false,
        customStyle = '',
        className = '',
        disabled = false,
        border = true,
        title = '',
        checked = true,
        color = '',
    } = props;
    const rootCls = classNames(
        'pk-switch-list-item',
        {
            'pk-switch-list-item--without-border': !border,
        },
        className
    );
    const containerCls = classNames('pk-switch__container', {
        'pk-switch__container--disabled': disabled,
    });
    const switchCls = classNames('pk-switch', {
        'pk-switch--checked': checked,
    });
    const switchChange = () => {
        !disabled && props.onChange?.(!checked);
    };
    const style = useMemo(() => {
        if (checked && !!color) {
            return `backgroundColor: ${color}; borderColor: ${color}`;
        }
        return '';
    }, [color, checked]);
    const _renderALoneSwitch = () => (
        <View className={containerCls}>
            <View className='pk-switch__mask'></View>
            <View className={switchCls} style={style} onClick={switchChange} />
        </View>
    );
    const _renderListSwitch = () => (
        <View className={rootCls} style={customStyle}>
            <View className='pk-switch-list-item__title'>{title}</View>
            {_renderALoneSwitch()}
        </View>
    );
    return alone ? _renderALoneSwitch() : _renderListSwitch();
}
