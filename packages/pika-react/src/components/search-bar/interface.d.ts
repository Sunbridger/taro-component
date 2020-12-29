export interface PkSearchBarProps {
    value: string;
    placeholder?: string;
    maxLength?: number;
    fixed?: boolean;
    focus?: boolean;
    disabled?: boolean;
    showActionButton?: boolean;
    actionName?: string;
    inputType: 'text' | 'number' | 'idcard' | 'digit';
    onChange: func;
    onFocus: (value, event) => void;
    onBlur: (value, event) => void;
    onConfirm: (value, event) => void;
    onActionClick: (value, event) => void;
    onClear: (value, event) => void;
}

export interface PkSearchBarState {
    isFocus: boolean;
}
