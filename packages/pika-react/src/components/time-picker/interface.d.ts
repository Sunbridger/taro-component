export interface ItimePickerProps {
    value?: string;
    start?: string;
    end?: string;
    title?: string;
    disabled?: boolean;
    onColumnChange?: (date: string) => void;
    showTooBar?: boolean;
    onConfirm?: (val: string) => void;
    onCancel?: () => void;
}
