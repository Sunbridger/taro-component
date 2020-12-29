import React, { useEffect, useState } from 'react';
import { View, CommonEvent } from '@tarojs/components';
import classnames from 'classnames';
import { getPrefixedClassName, mergeStyle } from '../button';
import Overlay from '../overlay';
import { PkPopupProps } from './interface';

export default function PkPopup(props: PkPopupProps): JSX.Element | null {
    const {
        children,
        className,
        maskClosable = true,
        needMask = true,
        position = 'top',
        style,
        visible: initialVisible = false,
        zIndex,
        onClick,
        onClose,
    } = props;
    const [visible, setVisible] = useState(initialVisible);
    const prefixedClassName = getPrefixedClassName('popup');
    const mergedClassName = classnames(
        prefixedClassName,
        className,
        visible ? `${prefixedClassName}-show` : `${prefixedClassName}-hide`
    );
    const mergedStyle =
        typeof style === 'string'
            ? mergeStyle(style, `z-index: ${zIndex}`)
            : { ...style, zIndex };
    function handleClick(e: CommonEvent): void {
        onClick && onClick(e);
    }
    function handleClickMask(): void {
        if (!maskClosable) {
            return;
        }
        setVisible(false);
        onClose && onClose();
    }
    useEffect(() => {
        setVisible(initialVisible);
    }, [initialVisible]);
    return (
        <View className={mergedClassName} style={mergedStyle}>
            {needMask && (
                <Overlay visible={visible} onClick={handleClickMask} />
            )}
            <View
                className={classnames(
                    'container',
                    `container-${position}`,
                    visible ? `container-${position}-show` : 'container-hide'
                )}
                onClick={handleClick}
            >
                {children}
            </View>
        </View>
    );
}
