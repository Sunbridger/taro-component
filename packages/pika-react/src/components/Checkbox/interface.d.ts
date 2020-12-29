import { CSSProperties } from 'react';

interface AtComponent {
    className?: string;

    customStyle?: string | CSSProperties;
}

interface CheckObject<T> {
    value: T;
    label: string;
    desc?: string;
    disabled?: boolean;
}

export interface PKCheckboxProps<T> extends AtComponent {
    customStyle: string;
    className: string;
    options: Array<CheckObject<T>>;
    selectedList: Array<string>;
    onChange?: (selectedList: Array<T>) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PKCheckboxState {}
