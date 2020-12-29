import { PkComponent } from '../button/interface';

export interface PkDialogProps extends PkComponent {
    cancelText?: string;
    confirmText?: string;
    content?: string;
    maskClosable?: boolean;
    needCancel?: boolean;
    needMask?: boolean;
    title?: string;
    visible?: boolean;
    zIndex?: number;
    onCancel?: () => void;
    onClose?: () => void;
    onConfirm?: () => void;
}
