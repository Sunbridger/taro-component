export interface IrangeProps {
    trackStyle: object;
    value: Array;
    min?: number;
    max?: number;
    name: string;
    unit: string;
    scale?: Array;
    disabled?: boolean;
    onChange: (param: Array<number>) => void;
    onAfterChange?: (param: Array<number>) => void;
}

export interface IrangeState {
    aX: number;
    bX: number;
    showValue: string;
    [name: string]: number | string;
}
