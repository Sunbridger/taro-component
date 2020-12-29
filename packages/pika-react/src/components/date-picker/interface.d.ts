export interface IdatePickerProps {
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

export interface CurrentDate<T> {
    currentYear: T;
    currentMonth: T;
    currentDay: T;
}
