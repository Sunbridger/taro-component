import React from 'react';
import { PkComponent } from '../button/interface';

export interface PkOverlayProps extends PkComponent {
    children?: React.ReactNode;
    maskClosable?: boolean;
    visible?: boolean;
    zIndex?: number;
    onClick?: (e: CommonEvent) => void;
    onClose?: () => void;
}
