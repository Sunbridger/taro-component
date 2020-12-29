import React from 'react';
import { View } from '@tarojs/components';
import { classNames } from '../../helper/common/className';
import { PKCheckboxProps } from './interface';
import PKComponent from '../common/component';

export default class PkCheckbox extends PKComponent<PKCheckboxProps<any>> {
    props: any;
    constructor(props: PKCheckboxProps<any>) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        super(props);
    }
    public static defaultProps: PKCheckboxProps<any>;
    public defaultProps = {
        customStyle: '',
        className: '',
        options: [],
        selectedList: [],
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange: () => {},
    };

    private handleClick(idx: number): void {
        const { selectedList, options } = this.props;
        const option = options[idx];
        const { disabled, value } = option;
        if (disabled) return;

        const selectedSet = new Set(selectedList);
        if (!selectedSet.has(value)) {
            selectedSet.add(value);
        } else {
            selectedSet.delete(value);
        }
        this.props.onChange && this.props.onChange([...selectedSet]);
    }

    public render(): JSX.Element {
        const { customStyle, className, options, selectedList } = this.props;

        const rootCls = classNames('pk-checkbox', className);

        return (
            <View className={rootCls} style={customStyle}>
                {options.map((option, idx) => {
                    const { value, disabled, label, desc } = option;
                    const optionCls = classNames('pk-checkbox__option', {
                        'pk-checkbox__option--disabled': disabled,
                        'pk-checkbox__option--selected': selectedList.includes(
                            value
                        ),
                    });

                    return (
                        <View
                            className={optionCls}
                            key={value}
                            onClick={this.handleClick.bind(this, idx)}
                        >
                            <View className='pk-checkbox__option-wrap'>
                                <View className='pk-checkbox__option-cnt'>
                                    <View className='pk-checkbox__icon-cnt' />
                                    {/*<View className='pk-checkbox__icon-cnt'>*/}
                                    {/*    <Text className='pk-icon pk-icon-check' />*/}
                                    {/*</View>*/}
                                    <View className='pk-checkbox__title'>
                                        {label}
                                    </View>
                                </View>
                                {desc && (
                                    <View className='pk-checkbox__desc'>
                                        {desc}
                                    </View>
                                )}
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    }
}
