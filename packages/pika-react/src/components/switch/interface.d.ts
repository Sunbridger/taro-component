export interface PkSwitchProps {
    /* 单独一个switch */
    alone?: boolean;
    customStyle?: string;
    className?: string;
    title?: string;
    color?: string;
    border?: boolean;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (value: boolean) => void;
}
