import { CommonEvent } from '@tarojs/components/types/common';
import { ReactNode } from 'react';

declare type FormFunction = (event: CommonEvent) => void;
export interface IformProps {
    reportSubmit?: boolean;
    onSubmit?: FormFunction;
    onReset?: FormFunction;
    customStyle?: string;
    className?: string;
    children?: ReactNode;
}
