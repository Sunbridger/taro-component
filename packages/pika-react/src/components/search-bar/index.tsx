import React from 'react';
import { Input, Text, View } from '@tarojs/components';
import { CommonEvent } from '@tarojs/components/types/common';
import { PkSearchBarProps, PkSearchBarState } from './interface';
import { classNames } from '../../helper/common/className';
import PKComponent from '../common/component';

type ExtendEvent = {
    target: {
        value: string;
    };
};

export default class PkSearchBar extends PKComponent<
    PkSearchBarProps,
    PkSearchBarState
> {
    public static defaultProps: PkSearchBarProps;
    public defaultProps = {
        value: '',
        placeholder: '搜索',
        maxLength: 140,
        fixed: false,
        focus: false,
        disabled: false,
        showActionButton: false,
        actionName: '搜索',
        inputType: 'text',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange: () => {},
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onFocus: () => {},
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onBlur: () => {},
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onConfirm: () => {},
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onActionClick: () => {},
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onClear: () => {},
    };
    state: any;
    props: any;

    public constructor(props: PkSearchBarProps) {
        super(props);
        this.state = {
            isFocus: !!props.focus,
        };
    }

    private handleFocus = (event: CommonEvent): void => {
        this.setState({
            isFocus: true,
        });
        this.props.onFocus?.(event);
    };

    private handleBlur = (event: CommonEvent): void => {
        this.setState({
            isFocus: false,
        });
        this.props.onBlur?.(event);
    };

    private handleChange = (e: CommonEvent & ExtendEvent): void => {
        this.props.onChange(e.target.value, e);
    };

    private handleClear = (event: CommonEvent): void => {
        if (this.props.onClear) {
            this.props.onClear(event);
        } else {
            this.props.onChange('', event);
        }
    };

    private handleConfirm = (event: CommonEvent): void => {
        this.props.onConfirm?.(event);
    };

    private handleActionClick = (event: CommonEvent): void => {
        this.props.onActionClick?.(event);
    };

    public render(): JSX.Element {
        const {
            value,
            placeholder,
            maxLength,
            fixed,
            disabled,
            showActionButton,
            actionName,
            inputType, // 处理issue#464
            className,
            customStyle,
        } = this.props;
        const { isFocus } = this.state;
        const rootCls = classNames(
            'pk-search-bar',
            {
                'pk-search-bar--fixed': fixed,
            },
            className
        );
        const placeholderWrapStyle: React.CSSProperties = {};
        const actionStyle: React.CSSProperties = {};
        // if (isFocus || (!isFocus && value)) {
        //     actionStyle.opacity = 1;
        //     actionStyle.marginRight = `0`;
        //     placeholderWrapStyle.flexGrow = 0;
        // } else if (!isFocus && !value) {
        //     placeholderWrapStyle.flexGrow = 1;
        //     actionStyle.opacity = 0;
        //     actionStyle.marginRight = `-${
        //         (actionName!.length + 1) * fontSize + fontSize / 2 + 10
        //     }px`;
        // }
        if (showActionButton) {
            actionStyle.display = 'block';
            actionStyle.opacity = 1;
            actionStyle.marginRight = `0`;
        }

        const clearIconStyle: React.CSSProperties = { display: 'flex' };
        const placeholderStyle: React.CSSProperties = { visibility: 'hidden' };
        if (!value.length) {
            clearIconStyle.display = 'none';
            placeholderStyle.visibility = 'visible';
        }

        return (
            <View className={rootCls} style={customStyle}>
                <View className='pk-search-bar__input-cnt'>
                    <View
                        className='pk-search-bar__placeholder-wrap'
                        style={placeholderWrapStyle}
                    >
                        <Text className='pk-icon pk-icon-search'></Text>
                        <Text
                            className='pk-search-bar__placeholder'
                            style={placeholderStyle}
                        >
                            {isFocus ? '' : placeholder}
                        </Text>
                    </View>
                    <Input
                        className='pk-search-bar__input'
                        type={inputType}
                        confirmType='search'
                        value={value}
                        focus={isFocus}
                        disabled={disabled}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        maxLength={maxLength}
                        onInput={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onConfirm={this.handleConfirm}
                    />
                    <View
                        className='pk-search-bar__clear'
                        style={clearIconStyle}
                        onTouchStart={this.handleClear}
                    >
                        <Text className='pk-icon pk-icon-circle-close' />
                    </View>
                </View>
                <View
                    className='pk-search-bar__action'
                    style={actionStyle}
                    onClick={this.handleActionClick}
                >
                    {actionName}
                </View>
            </View>
        );
    }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
PkSearchBar.defaultProps = {
    value: '',
    placeholder: '搜索',
    maxLength: 140,
    fixed: false,
    focus: false,
    disabled: false,
    showActionButton: false,
    actionName: '搜索',
    inputType: 'text',
};
