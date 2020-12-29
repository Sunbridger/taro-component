import React, { Component } from 'react';
// import Taro, { Component } from '@tarojs/taro'
import Taro from '@tarojs/taro';
import { View, Textarea } from '@tarojs/components';
import { ItextareaProps, ItextareaState } from './interface';

function getMaxLength(maxLength, textOverflowForbidden): number {
    if (!textOverflowForbidden) {
        return maxLength + 500;
    }
    return maxLength;
}

export default class PkTextarea extends Component<
    ItextareaProps,
    ItextareaState
> {
    constructor(props) {
        super(props);

        this.state = {
            showTextArea: true,
        };
    }

    defaultProps = {
        customStyle: '', //自定义style
        className: '', //自定义类名
        value: '', //文本内容
        cursorSpacing: 100, // 指定光标与键盘的距离
        maxLength: 200, //最大长度
        placeholder: '', //占位符
        disabled: false, //是否禁用
        autoFocus: false, //是否自动聚焦
        focus: false, //获取焦点
        showConfirmBar: true, //是否显示键盘上方带有” 完成 “按钮那一栏
        selectionStart: -1, //光标起始位置，自动聚集时有效，需与 selection-end 搭配使用
        selectionEnd: -1, //光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用
        count: true, //是否显示字数
        fixed: false, //如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true
        height: '', //输入框高度
        textOverflowForbidden: true, //文字超出最大长度时是否禁止输入，若否，则还可以在 maxLength 的基础上输入500字符，并右下角红字提示
        isAdjustPosition: true, //设置adjust-position属性
    };

    handleInput = event => {
        this.props.onChange && this.props.onChange(event.target.value, event);
    };

    handleFocus = event => {
        this.props.onFocus && this.props.onFocus(event);
    };

    handleBlur = event => {
        this.setState({
            showTextArea: false,
        });
        this.props.onBlur && this.props.onBlur(event);
    };

    handleConfirm = event => {
        this.props.onConfirm && this.props.onConfirm(event);
    };

    handleLinechange = event => {
        this.props.onLinechange && this.props.onLinechange(event);
    };

    showTextArea = () => {
        this.setState({
            showTextArea: true,
        });
    };

    render(): JSX.Element {
        const {
            customStyle,
            className,
            value = '',
            cursorSpacing,
            placeholder,
            placeholderStyle,
            maxLength,
            count,
            disabled,
            autoFocus,
            focus,
            showConfirmBar,
            selectionStart,
            selectionEnd,
            fixed,
            textOverflowForbidden,
            height,
            isAdjustPosition,
        } = this.props;

        const _maxLength = parseInt(maxLength!.toString());
        const actualMaxLength = getMaxLength(_maxLength, textOverflowForbidden);
        const textareaStyle = height
            ? `height:${Taro.pxTransform(Number(height))}`
            : '';
        const rootCls = 'pkTextarea ' + className;
        const placeholderCls = 'placeholder';
        return (
            <View className={rootCls} style={customStyle}>
                <Textarea
                    className='at-textarea__textarea'
                    style={textareaStyle}
                    placeholderStyle={placeholderStyle}
                    placeholderClass={placeholderCls}
                    cursorSpacing={cursorSpacing}
                    value={value}
                    maxlength={actualMaxLength}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoFocus={autoFocus}
                    focus={focus}
                    showConfirmBar={showConfirmBar}
                    selectionStart={selectionStart}
                    selectionEnd={selectionEnd}
                    fixed={fixed}
                    onInput={this.handleInput}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onConfirm={this.handleConfirm}
                    onLineChange={this.handleLinechange}
                    adjust-position={isAdjustPosition}
                />
                {/*{showTextArea ? (*/}
                {/*    <Textarea*/}
                {/*        className='textarea__textarea'*/}
                {/*        style={textareaStyle}*/}
                {/*        placeholderStyle={placeholderStyle}*/}
                {/*        placeholderClass={placeholderCls}*/}
                {/*        cursorSpacing={cursorSpacing}*/}
                {/*        value={value}*/}
                {/*        maxlength={actualMaxLength}*/}
                {/*        placeholder={placeholder}*/}
                {/*        disabled={disabled}*/}
                {/*        autoFocus={autoFocus}*/}
                {/*        focus={focus}*/}
                {/*        showConfirmBar={showConfirmBar}*/}
                {/*        selectionStart={selectionStart}*/}
                {/*        selectionEnd={selectionEnd}*/}
                {/*        fixed={fixed}*/}
                {/*        onInput={this.handleInput}*/}
                {/*        onFocus={this.handleFocus}*/}
                {/*        onBlur={this.handleBlur}*/}
                {/*        onConfirm={this.handleConfirm}*/}
                {/*        onLineChange={this.handleLinechange}*/}
                {/*        adjust-position={isAdjustPosition}*/}
                {/*    />*/}
                {/*) : (*/}
                {/*    <View className='textarea-mask' onClick={this.showTextArea}>*/}
                {/*        {value ? (*/}
                {/*            value*/}
                {/*        ) : (*/}
                {/*            <View className='placeholder'>请输入</View>*/}
                {/*        )}*/}
                {/*    </View>*/}
                {/*)}*/}
                {count && (
                    <View className='textarea__counter'>
                        {value!.length}/{_maxLength}
                    </View>
                )}
            </View>
        );
    }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
PkTextarea.defaultProps = {
    customStyle: '', //自定义style
    className: '', //自定义类名
    value: '', //文本内容
    cursorSpacing: 100, // 指定光标与键盘的距离
    maxLength: 200, //最大长度
    placeholder: '', //占位符
    disabled: false, //是否禁用
    autoFocus: false, //是否自动聚焦
    focus: false, //获取焦点
    showConfirmBar: true, //是否显示键盘上方带有” 完成 “按钮那一栏
    selectionStart: -1, //光标起始位置，自动聚集时有效，需与 selection-end 搭配使用
    selectionEnd: -1, //光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用
    count: true, //是否显示字数
    fixed: false, //如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true
    height: '', //输入框高度
    textOverflowForbidden: true, //文字超出最大长度时是否禁止输入，若否，则还可以在 maxLength 的基础上输入500字符，并右下角红字提示
    isAdjustPosition: true, //设置adjust-position属性
};
