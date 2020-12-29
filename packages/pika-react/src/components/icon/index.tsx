import React from 'react';
import { View, CommonEvent } from '@tarojs/components';
import classnames from 'classnames';
import { getPrefixedClassName, mergeStyle } from '../button';
import { PkIconProps } from './interface.d';

export default function PkIcon(props: PkIconProps): JSX.Element {
    const {
        className,
        color,
        rotate = 0,
        size = 'unset',
        spin = false,
        style,
        type,
        onClick,
    } = props;
    const prefixedClassName = getPrefixedClassName('icon');
    const mergedClassName = classnames(
        prefixedClassName,
        className,
        { [`${prefixedClassName}-${type}`]: type },
        { [`${prefixedClassName}-spin`]: spin }
    );
    const mergedStyle =
        typeof style === 'string'
            ? mergeStyle(
                  style,
                  `color: ${color}`,
                  `transform: rotate(${rotate}deg)`,
                  `fontSize: ${Number.isNaN(Number(size)) ? size : `${size}px`}`
              )
            : {
                  ...style,
                  color,
                  transform: `rotate(${rotate}deg)`,
                  fontSize: Number.isNaN(Number(size)) ? size : `${size}px`,
              };
    function handleClick(e: CommonEvent): void {
        onClick && onClick(e);
    }
    return (
        <View
            className={mergedClassName}
            style={mergedStyle}
            onClick={handleClick}
        />
    );
}
