export interface IdateTimePickerProps {
    value?: string;
    start?: string;
    end?: string;
    fields?: string;
    disabled?: boolean;
    showTooBar?: boolean;
    title?: string;
    onColumnChange?: (date: string) => void;
    onCancel?: () => void;
    onConfirm?: (val: string) => void;
}
