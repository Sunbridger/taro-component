import { CommonEvent } from '@tarojs/components/types/common';

export interface PkTagProps {
    size?: 'normal' | 'small';
    type?: string;
    name?: string;
    style?: object;
    className?: string | Array<string>;
    circle?: boolean;
    filled?: boolean;
    close?: boolean; //是否可关闭
    disabled?: boolean;
    active?: boolean;
    icon?: string;
    onClick?: (name: string, event: CommonEvent) => void;
    onClose?: (name: string, event: CommonEvent) => void;
}
export interface PkTagState {
    show: boolean;
}
