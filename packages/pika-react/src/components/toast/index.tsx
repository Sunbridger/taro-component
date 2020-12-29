import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { getPrefixedClassName, mergeStyle } from '../button';
import PkIcon from '../icon';
import { PkToastProps } from './interface';

export default function PkToast(props: PkToastProps): JSX.Element | null {
    const {
        children,
        className,
        duration,
        icon: iconProp,
        style,
        text,
        type,
        visible: initialVisible = false,
        zIndex,
        onClose,
    } = props;
    const [visible, setVisible] = useState(false);
    const prefixedClassName = getPrefixedClassName('toast');
    const mergedClassName = classnames(
        prefixedClassName,
        className,
        visible ? `${prefixedClassName}-show` : `${prefixedClassName}-hide`
    );
    const mergedStyle =
        typeof style === 'string'
            ? mergeStyle(style, `z-index: ${zIndex}`)
            : { ...style, zIndex };
    const hasIcon =
        type === 'failed' ||
        type === 'loading' ||
        type === 'succeed' ||
        iconProp;
    let icon = iconProp;
    switch (type) {
        case 'failed': {
            icon = <PkIcon color='#fff' type='close' />;
            break;
        }
        case 'loading': {
            icon = <PkIcon color='#fff' spin type='loading' />;
            break;
        }
        case 'succeed': {
            icon = <PkIcon color='#fff' type='check' />;
            break;
        }
        default: {
            break;
        }
    }
    useEffect(() => {
        let timeId;
        if (initialVisible && duration) {
            timeId = setTimeout(() => {
                setVisible(false);
                if (typeof onClose === 'function') {
                    onClose();
                }
            }, duration);
        }
        setVisible(initialVisible);
        return (): void => {
            clearTimeout(timeId);
        };
    }, [initialVisible, duration, onClose]);
    return (
        <View className={mergedClassName} style={mergedStyle}>
            <View className='mask' />
            <View
                className={classnames('container', {
                    'container-icon': hasIcon || !text,
                })}
            >
                {hasIcon && <View className='icon'>{icon}</View>}
                {text && <View className='text'>{text}</View>}
                {children}
            </View>
        </View>
    );
}
