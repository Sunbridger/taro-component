import React, { Component } from 'react';
import {
    Input,
    ITouchEvent,
    BaseEventOrig,
    Label,
    Text,
    View,
} from '@tarojs/components';
import { IinputProps, IinputState } from './interface';
import { classNames } from '../../helper/common/className';

declare type InputBaseEventDetail = {
    /** 输入值 */
    value: string | number;
};
declare type InputEventDetail = InputBaseEventDetail & {
    /** 光标位置 */
    cursor: number;
    /** 键值 */
    keyCode: number;
};

declare type FocusEventDetail = InputBaseEventDetail & {
    /** 键盘高度 */
    height: number;
};

declare type BlurEventDetail = InputBaseEventDetail;

declare type ConfirmEventDetail = InputBaseEventDetail;

declare type KeyboardHeightEventDetail = {
    /** 键盘高度 */
    height: number;
    /** 持续时间 */
    duration: number;
};

type PickAtInputProps = Pick<
    IinputProps,
    'maxLength' | 'disabled' | 'password'
>;
type GetInputPropsReturn = PickAtInputProps & Pick<IinputProps, 'type'>;

function getInputProps(props: IinputProps): GetInputPropsReturn {
    const actualProps = {
        type: props.type,
        maxLength: props.maxLength,
        disabled: props.disabled,
        password: false,
    };

    switch (actualProps.type) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        case 'phone':
            actualProps.type = 'number';
            actualProps.maxLength = 11;
            break;
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        case 'password':
            actualProps.type = 'text';
            actualProps.password = true;
            break;
        default:
            break;
    }
    if (!props.disabled && !props.editable) {
        actualProps.disabled = true;
    }
    return actualProps as GetInputPropsReturn;
}

export default class PkInput extends Component<IinputProps, IinputState> {
    constructor(props: IinputProps) {
        super(props);
    }

    private inputClearing = false;

    private handleInput = (event: BaseEventOrig<InputEventDetail>): void =>
        this.props.onChange && this.props.onChange(event.detail.value, event);

    private handleFocus = (event: BaseEventOrig<FocusEventDetail>): void => {
        if (typeof this.props.onFocus === 'function') {
            this.props.onFocus(event.detail.value, event);
        }
    };

    private handleBlur = (event: BaseEventOrig<BlurEventDetail>): void => {
        if (typeof this.props.onBlur === 'function') {
            this.props.onBlur(event.detail.value, event);
        }
        if (event.type === 'blur' && !this.inputClearing) {
            this.props.onChange &&
                this.props.onChange(
                    event.detail.value,
                    event as BaseEventOrig<InputEventDetail>
                );
        }
        // 还原状态
        this.inputClearing = false;
    };

    private handleConfirm = (
        event: BaseEventOrig<ConfirmEventDetail>
    ): void => {
        if (typeof this.props.onConfirm === 'function') {
            this.props.onConfirm(event.detail.value, event);
        }
    };

    private handleClick = (event: ITouchEvent): void => {
        if (!this.props.editable && typeof this.props.onClick === 'function') {
            this.props.onClick(event);
        }
    };

    private handleClearValue = (event: ITouchEvent): void => {
        this.inputClearing = true;
        this.props.onChange && this.props.onChange('', event);
    };

    private handleKeyboardHeightChange = (
        event: BaseEventOrig<KeyboardHeightEventDetail>
    ): void => {
        if (typeof this.props.onKeyboardHeightChange === 'function') {
            this.props.onKeyboardHeightChange(event);
        }
    };

    private handleErrorClick = (event: ITouchEvent): void => {
        if (typeof this.props.onErrorClick === 'function') {
            this.props.onErrorClick(event);
        }
    };

    public render(): JSX.Element {
        const {
            className,
            customStyle,
            name,
            cursorSpacing,
            confirmType,
            cursor,
            selectionStart,
            selectionEnd,
            adjustPosition,
            border,
            title,
            error,
            clear,
            placeholder,
            placeholderStyle,
            placeholderClass,
            autoFocus,
            focus,
            value,
            required,
        } = this.props;
        const { type, maxLength, disabled, password } = getInputProps(
            this.props
        );

        const rootCls = classNames(
            'pk-input',
            {
                'pk-input--without-border': !border,
            },
            className
        );
        const containerCls = classNames('pk-input__container', {
            'pk-input--error': error,
            'pk-input--disabled': disabled,
        });
        const overlayCls = classNames('pk-input__overlay', {
            'pk-input__overlay--hidden': !disabled,
        });
        const placeholderCls = classNames('placeholder', placeholderClass);

        return (
            <View className={rootCls} style={customStyle}>
                <View className={containerCls}>
                    <View className={overlayCls} onClick={this.handleClick} />
                    {title && (
                        <Label
                            className={`pk-input__title ${
                                required && 'pk-input__title--required'
                            }`}
                            for={name}
                        >
                            {title}
                        </Label>
                    )}
                    <Input
                        className='pk-input__input'
                        id={name}
                        name={name}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        type={type}
                        password={password}
                        placeholderStyle={placeholderStyle}
                        placeholderClass={placeholderCls}
                        placeholder={placeholder}
                        cursorSpacing={cursorSpacing}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        maxlength={maxLength}
                        autoFocus={autoFocus}
                        focus={focus}
                        value={value}
                        confirmType={confirmType}
                        cursor={cursor}
                        selectionStart={selectionStart}
                        selectionEnd={selectionEnd}
                        adjustPosition={adjustPosition}
                        onInput={this.handleInput}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onConfirm={this.handleConfirm}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        onKeyboardHeightChange={this.handleKeyboardHeightChange}
                    />
                    {clear && value && (
                        <View
                            className='pk-input__icon'
                            onTouchEnd={this.handleClearValue}
                        >
                            <Text className='pk-icon pk-icon-circle-close pk-input__icon-close' />
                        </View>
                    )}
                    {error && (
                        <View
                            className='pk-input__icon'
                            onTouchStart={this.handleErrorClick}
                        >
                            <Text className='pk-icon pk-icon-circle-close pk-input__icon-alert' />
                        </View>
                    )}
                    <View className='pk-input__children'>
                        {this.props.children}
                    </View>
                </View>
            </View>
        );
    }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
PkInput.defaultProps = {
    className: '',
    customStyle: '',
    value: '',
    name: '',
    placeholder: '',
    placeholderStyle: '',
    placeholderClass: '',
    title: '',
    cursorSpacing: 50,
    confirmType: 'done',
    cursor: 0,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    maxLength: 140,
    type: 'text',
    disabled: false,
    border: true,
    editable: true,
    error: false,
    clear: false,
    autoFocus: false,
    focus: false,
    required: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onFocus: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onBlur: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onConfirm: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onErrorClick: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: () => {},
};
