import { IpkBaseComponentProps } from '../../common/types';

export interface IavatarProps extends IpkBaseComponentProps {
    size?: 'large' | 'normal' | 'small';
    circle?: boolean;
    text?: string;
    image?: string;
    className?: array | string;
    style?: object;
    openData?: { type: 'userAvatarUrl' }; //只支持这一种type
}

export interface IavatarState {
    isWEAPP: boolean;
}
