export interface IpickerProps {
    mode?: string;
    value?: number[];
    range: any[];
    rangeKey?: string;
    disabled?: boolean;
    title?: string;
    showTooBar?: boolean;
    onColumnChange?: (val: number[]) => void;
    onCancel?: () => void;
    onConfirm?: (val: number[]) => void;
    columnWidth?: number[];
}
