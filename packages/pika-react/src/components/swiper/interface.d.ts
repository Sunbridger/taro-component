import { IpkBaseFunctionCompProps } from '../../common/types';
import { SwiperProps } from '@tarojs/components/types/Swiper';

export interface IswiperProps extends SwiperProps, IpkBaseFunctionCompProps {
    height?: string;
    width?: string;
}

export interface IswiperState {
    disable: boolean;
}
