export interface IinputProps {
    name?: string;
    className?: string | Array<string>;
    customStyle?: string | object;
    value: string | undefined;
    password?: boolean | undefined;
    placeholder?: string;
    placeholderStyle?: string;
    placeholderClass?: string;
    title: string;
    confirmType?: 'done' | 'send' | 'search' | 'next' | 'go' | undefined;
    cursor?: number | undefined;
    selectionStart?: number | undefined;
    selectionEnd?: number | undefined;
    adjustPosition?: boolean;
    cursorSpacing?: number | undefined;
    maxLength?: string | number;
    type?:
        | 'number'
        | 'text'
        | 'idcard'
        | 'digit'
        | 'password'
        | 'phone'
        | undefined;
    disabled?: boolean;
    border?: boolean;
    editable?: boolean;
    error?: boolean;
    clear?: boolean;
    autoFocus?: boolean;
    focus?: boolean;
    onChange?: (value, event) => void;
    onFocus?: (value, event) => void;
    onBlur?: (value, event) => void;
    onConfirm?: (value, event) => void;
    onErrorClick?: (event) => void;
    onKeyboardHeightChange?: (event) => void;
    onClick?: (event) => void;
    required?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IinputState {}
