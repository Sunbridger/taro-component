import classNames from 'classnames';
import React from 'react';
import { Form } from '@tarojs/components';
import { IformProps } from './interface.d';

export default function PkForm(props: IformProps) {
    const {
        onSubmit,
        onReset,
        customStyle = '',
        className = '',
        reportSubmit,
    } = props;
    function handleSubmit(): void {
        if (onSubmit) onSubmit(arguments as any);
    }

    function handleReset(): void {
        onReset && onReset(arguments as any);
    }
    const rootCls = classNames('pkForm', className);
    return (
        <Form
            className={rootCls}
            style={customStyle}
            onSubmit={handleSubmit}
            reportSubmit={reportSubmit}
            onReset={handleReset}
        >
            {props.children}
        </Form>
    );
}
