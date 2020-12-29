import { CSSProperties } from 'react';

// 公共class组件props
export interface IpkBaseComponentProps {
    className?: string;

    style?: CSSProperties;
}

// 公共function组件props
export interface IpkBaseFunctionCompProps extends IpkBaseComponentProps {
    children?: JSX.Element | JSX.Element[] | null;
}
