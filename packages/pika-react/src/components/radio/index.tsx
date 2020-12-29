import React from 'react';
import { PkRadioProps, RadioOption } from './interface';
import { View } from '@tarojs/components';
import { CommonEvent } from '@tarojs/components/types/common';
import { classNames } from '../../helper/common/className';
import PKComponent from '../common/component';

export default class PkRadio extends PKComponent<PkRadioProps<any>> {
    props: any;
    constructor(props: PkRadioProps<any>) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        super(props);
    }
    public static defaultProps: PkRadioProps<any>;
    public defaultProps = {
        customStyle: '',
        className: '',
        value: '',
        options: [],
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onClick: () => {},
    };

    private handleClick(option: RadioOption<any>, event: CommonEvent): void {
        if (option.disabled) return;
        this.props.onClick(option.value, event);
    }

    public render(): JSX.Element {
        const { customStyle, className, options, value, title } = this.props;

        return (
            <View
                className={`pk-radio__container ${classNames(className)}`}
                style={customStyle}
            >
                <View className='pk-radio__title'>{title}</View>
                <View className='pk-radio__option-wrap'>
                    {options.map(option => (
                        <View
                            key={option.value}
                            onClick={this.handleClick.bind(this, option)}
                            className={classNames({
                                'pk-radio__option': true,
                                'pk-radio__option--disabled': option.disabled,
                            })}
                        >
                            <View>
                                <View className='pk-radio__option-container'>
                                    <View
                                        className={`${classNames({
                                            'pk-radio__icon': true,
                                            'pk-radio__icon--checked':
                                                value === option.value,
                                            'pk-radio__icon--disabled':
                                                option.disabled,
                                        })}`}
                                    >
                                        <View className='pk-radio__button__inner' />
                                    </View>
                                    <View className='pk-radio__label'>
                                        {option.label}
                                    </View>
                                </View>
                                {option.desc && (
                                    <View className='pk-radio__desc'>
                                        {option.desc}
                                    </View>
                                )}
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}
