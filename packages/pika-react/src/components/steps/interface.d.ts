import { CommonEvent } from '@tarojs/components/types/common';

export interface Icon {
    type: string;
    activeColor?: string;
    inactiveColor?: string;
    size?: number;
}
export interface Item {
    title?: string;
    desc?: string;
    icon?: Icon;
    showIndex?: boolean;
    status?: 'success' | 'failed' | 'done' | 'disabled';
}
export interface IstepsProps {
    current?: number;
    items: Array<Item>;
    style?: object;
    className?: Array<string> | string;
    onChange?: (current: number, event: CommonEvent) => void;
}
