import { IpkBaseComponentProps } from '../../common/types';

export interface IbadgeProps extends IpkBaseComponentProps {
    dot: boolean;
    value: string | number;
    maxValue: number;
    x: string;
    y: string;
}

export interface IbadgeState {
    [name: string]: any;
}
