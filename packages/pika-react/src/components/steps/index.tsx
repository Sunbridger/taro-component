import classNames from 'classnames';
import PropTypes, { InferProps } from 'prop-types';
import React, { Component } from 'react';
import { Text, View } from '@tarojs/components';
import { CommonEvent } from '@tarojs/components/types/common';
import { IstepsProps } from './interface.d';
import PkIcon from '../icon';

export default class PkSteps extends Component<IstepsProps> {
    public static defaultProps: IstepsProps;
    public static propTypes: InferProps<IstepsProps>;

    private handleClick(current: number, event: CommonEvent): void {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(current, event);
        }
    }

    public render(): JSX.Element {
        const { style, className, items, current } = this.props;

        return (
            <View className={classNames('pk-steps', className)} style={style}>
                {!!items &&
                    items.map((item, i) => (
                        <View
                            key={item.title}
                            className={classNames({
                                'pk-steps__item': true,
                                'pk-steps__item--active': i === current,
                                'pk-steps__item--inactive': i !== current,
                                [`pk-steps__item--${item.status}`]: item.status,
                            })}
                            onClick={this.handleClick.bind(this, i)}
                        >
                            <View className='pk-steps__circular-wrap'>
                                {i !== 0 && (
                                    <View className='pk-steps__left-line'></View>
                                )}
                                <View className='pk-steps__circular'>
                                    {item.status === 'failed' ||
                                    item.status === 'success' ? (
                                        <PkIcon
                                            size={12}
                                            color='#fff'
                                            type={
                                                item.status === 'failed'
                                                    ? 'close'
                                                    : 'check'
                                            }
                                        />
                                    ) : item.icon ? (
                                        <PkIcon
                                            size={item.icon.size || 12}
                                            type={item.icon.type}
                                            color={
                                                current === i
                                                    ? item.icon.activeColor ||
                                                      '#fff'
                                                    : item.icon.inactiveColor ||
                                                      '#999'
                                            }
                                        />
                                    ) : (
                                        <Text className='pk-steps__num'>
                                            {item.showIndex ? i + 1 : ''}
                                        </Text>
                                    )}
                                </View>
                                {/* {i !== items.length - 1 && (
                                    <View className='pk-steps__right-line'></View>
                                )} */}
                            </View>
                            <View className='pk-steps__title'>
                                {item.title}
                            </View>
                            <View className='pk-steps__desc'>{item.desc}</View>
                        </View>
                    ))}
            </View>
        );
    }
}

PkSteps.defaultProps = {
    style: {},
    className: '',
    items: [],
};

PkSteps.propTypes = {
    style: PropTypes.object,
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    current: PropTypes.number,
    items: PropTypes.array,
    onChange: PropTypes.func,
};
