import React from 'react';
import { PkComponent } from '../button/interface';

export interface PkPopupProps extends PkComponent {
    children?: React.ReactNode;
    maskClosable?: boolean;
    needMask?: boolean;
    position?: 'top' | 'right' | 'bottom' | 'left';
    visible?: boolean;
    zIndex?: number;
    onClick?: (e: CommonEvent) => void;
    onClose?: () => void;
}
