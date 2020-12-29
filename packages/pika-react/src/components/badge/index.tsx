import React, { Component, CSSProperties } from 'react';
// import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { IbadgeProps, IbadgeState } from './interface.d';

export default class PkBadge extends Component<IbadgeProps, IbadgeState> {
    public static defaultProps: Partial<IbadgeProps>;
    constructor(props: IbadgeProps) {
        super(props);
    }
    private formatValue(
        value: string | number | undefined,
        maxValue: number
    ): string | number {
        if (value === '' || value === null || typeof value === 'undefined')
            return '';
        const numValue = +value;
        if (Number.isNaN(numValue)) {
            return value;
        }
        return numValue > maxValue ? `${maxValue}+` : numValue;
    }

    render(): JSX.Element {
        const { dot, value, maxValue = 99, x, y } = this.props;
        const relVal = this.formatValue(value, maxValue);

        const commonStyle: CSSProperties = {};

        if (x) {
            commonStyle.right = x;
        }

        if (y) {
            commonStyle.top = y;
        }

        return (
            <View className='pkBadge'>
                {this.props.children}
                {dot ? (
                    <View className='pkBadge-dot' style={commonStyle} />
                ) : (
                    relVal !== '' && (
                        <View className='pkBadge-info' style={commonStyle}>
                            {relVal}
                        </View>
                    )
                )}
            </View>
        );
    }
}

PkBadge.defaultProps = {
    dot: false,
    value: '',
    maxValue: 99,
};
