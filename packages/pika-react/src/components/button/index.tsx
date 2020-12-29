import React from 'react';
import { Button, View, CommonEvent } from '@tarojs/components';
import classnames from 'classnames';
import PkIcon from '../icon';
import { PkButtonProps } from './interface';

export function getPrefixedClassName(
    className: string,
    customizedPrefix?: string
): string {
    if (customizedPrefix) {
        return `${customizedPrefix}-${className}`;
    }
    return `pk-${className}`;
}
export function mergeStyle(...args: Array<any>): string {
    return Array.prototype.join.call(args, ';');
}
export default function PkButton(props: PkButtonProps): JSX.Element {
    const {
        appParameter,
        children,
        className,
        disabled = false,
        formType,
        hoverClass,
        hoverStartTime,
        hoverStayTime,
        hoverStopPropagation,
        hoverStyle,
        icon,
        lang,
        loading = false,
        openType,
        plain = false,
        scope,
        sendMessageImg,
        sendMessagePath,
        sendMessageTitle,
        sessionFrom,
        showMessageCard,
        size = 'medium',
        style,
        type = 'primary',
        onClick,
        onContact,
        onError,
        onGetAuthorize,
        onGetPhoneNumber,
        onGetRealnameAuthInfo,
        onGetUserInfo,
        onLaunchapp,
        onOpenSetting,
    } = props;
    const prefixedClassName = getPrefixedClassName('button');
    const mergedClassName = classnames(prefixedClassName, className, {
        [`${prefixedClassName}-${size}`]: size,
        [`${prefixedClassName}-${type}`]: type,
        [`${prefixedClassName}-${type}-disabled`]: disabled,
        [`${prefixedClassName}-plain`]: plain,
    });
    const mergedPressedClassName = !disabled
        ? classnames(`${prefixedClassName}-${type}-pressed`, hoverClass)
        : 'none';
    const pressedStyle = !disabled ? hoverStyle : 'none';
    function handleClick(e: CommonEvent): void {
        if (disabled) {
            return;
        }
        onClick && onClick(e);
    }
    return (
        <Button
            appParameter={appParameter}
            className={mergedClassName}
            formType={formType}
            hoverClass={mergedPressedClassName}
            hoverStartTime={hoverStartTime}
            hoverStayTime={hoverStayTime}
            hoverStopPropagation={hoverStopPropagation}
            hoverStyle={pressedStyle}
            lang={lang}
            openType={openType}
            scope={scope}
            sendMessageImg={sendMessageImg}
            sendMessagePath={sendMessagePath}
            sendMessageTitle={sendMessageTitle}
            sessionFrom={sessionFrom}
            showMessageCard={showMessageCard}
            style={style}
            onClick={handleClick}
            onContact={onContact}
            onError={onError}
            onGetAuthorize={onGetAuthorize}
            onGetPhoneNumber={onGetPhoneNumber}
            onGetRealnameAuthInfo={onGetRealnameAuthInfo}
            onGetUserInfo={onGetUserInfo}
            onLaunchapp={onLaunchapp}
            onOpenSetting={onOpenSetting}
        >
            {loading && <PkIcon className='icon' spin type='loading' />}
            {icon && <View className='icon'>{icon}</View>}
            {children}
        </Button>
    );
}
