import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import Button, { getPrefixedClassName, mergeStyle } from '../button';
import Overlay from '../overlay';
import { PkDialogProps } from './interface';

export default function PkDialog(props: PkDialogProps): JSX.Element | null {
    const {
        cancelText = '取消',
        className,
        confirmText = '确认',
        content,
        maskClosable = true,
        needCancel = true,
        needMask = true,
        style,
        title,
        visible: initialVisible = false,
        zIndex,
        onCancel,
        onConfirm,
        onClose,
    } = props;
    const [visible, setVisible] = useState(false);
    const prefixedClassName = getPrefixedClassName('dialog');
    const mergedClassName = classnames(
        prefixedClassName,
        className,
        visible ? `${prefixedClassName}-show` : `${prefixedClassName}-hide`
    );
    const mergedStyle =
        typeof style === 'string'
            ? mergeStyle(style, `z-index: ${zIndex}`)
            : { ...style, zIndex };
    function handleClickCancel(): void {
        setVisible(false);
        onCancel && onCancel();
        onClose && onClose();
    }
    function handleClickConfirm(): void {
        setVisible(false);
        onConfirm && onConfirm();
        onClose && onClose();
    }
    function handleClickMask(): void {
        if (!maskClosable) {
            return;
        }
        setVisible(false);
        onClose && onClose();
    }
    useEffect(() => {
        setVisible(initialVisible);
    }, [initialVisible]);
    return (
        <View className={mergedClassName} style={mergedStyle}>
            {needMask && (
                <Overlay visible={visible} onClick={handleClickMask} />
            )}
            <View className='container'>
                {title && <View className='title'>{title}</View>}
                {content && <View className='content'>{content}</View>}
                <View className='button-wrap'>
                    {needCancel && (
                        <Button
                            className='button'
                            size='large'
                            type='secondary'
                            onClick={handleClickCancel}
                        >
                            {cancelText}
                        </Button>
                    )}
                    {
                        <Button
                            className='button'
                            size='large'
                            onClick={handleClickConfirm}
                        >
                            {confirmText}
                        </Button>
                    }
                </View>
            </View>
        </View>
    );
}
