import React from 'react';
import { PkComponent } from '../button/interface';

export interface PkToastProps extends PkComponent {
    children?: React.ReactNode;
    duration?: number;
    icon?: React.ReactNode;
    text?: string;
    type?: 'succeed' | 'failed' | 'loading';
    visible?: boolean;
    zIndex?: number;
    onClose?: () => void;
}
