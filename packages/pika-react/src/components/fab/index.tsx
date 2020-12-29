import React from 'react';
import { View, CommonEvent } from '@tarojs/components';
import classnames from 'classnames';
import { getPrefixedClassName, mergeStyle } from '../button';
import { PkFabProps } from './interface.d';

export default function PkFab(props: PkFabProps): JSX.Element {
    const {
        children,
        className,
        hoverClass,
        icon,
        style,
        zIndex,
        onClick,
    } = props;
    const prefixedClassName = getPrefixedClassName('fab');
    const mergedClassName = classnames(prefixedClassName, className);
    const mergedStyle =
        typeof style === 'string'
            ? mergeStyle(style, `z-index: ${zIndex}`)
            : { ...style, zIndex };
    const mergedPressedClassName = classnames(
        `${prefixedClassName}-pressed`,
        hoverClass
    );
    function handleClick(e: CommonEvent): void {
        onClick && onClick(e);
    }
    return (
        <View
            className={mergedClassName}
            hoverClass={mergedPressedClassName}
            style={mergedStyle}
            onClick={handleClick}
        >
            {icon && <View className='icon'>{icon}</View>}
            {children}
        </View>
    );
}
