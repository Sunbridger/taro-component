import { CommonEvent } from '@tarojs/components/types/common';

export interface InoticeProps {
    className?: string | Array<string>;
    style?: object;
    text: string;
    type?: string;
    icon?: string;
    close?: boolean;
    single?: boolean;
    scroll?: boolean;
    duration?: number;
    onClose?: (event: CommonEvent) => void;
}

export interface InoticeState {
    show: boolean;
    animElemId: string;
    animationData: {
        actions: object[];
    };
    isWEAPP: boolean;
    isALIPAY: boolean;
    isWEB: boolean;
}
