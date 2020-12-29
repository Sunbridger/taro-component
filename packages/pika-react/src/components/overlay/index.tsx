import React, { useState, useEffect } from 'react';
import { View, CommonEvent } from '@tarojs/components';
import classnames from 'classnames';
import { getPrefixedClassName, mergeStyle } from '../button';
import { PkOverlayProps } from './interface';

export default function PkOverlay(props: PkOverlayProps): JSX.Element | null {
    const {
        children,
        className,
        maskClosable = true,
        style,
        visible: initialVisible = false,
        zIndex,
        onClick,
        onClose,
    } = props;
    const [visible, setVisible] = useState(false);
    const prefixedClassName = getPrefixedClassName('overlay');
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
        if (maskClosable) {
            setVisible(false);
            onClose && onClose();
        }
        onClick && onClick(e);
    }
    useEffect(() => {
        setVisible(initialVisible);
    }, [initialVisible]);
    return (
        <View
            className={mergedClassName}
            style={mergedStyle}
            onClick={handleClick}
        >
            {children}
        </View>
    );
}
