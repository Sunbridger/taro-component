import { IconProps } from '@tarojs/components/types/Icon';
import { PkComponent } from '../button/interface';

export interface PkIconProps
    extends PkComponent,
        Omit<IconProps, 'color' | 'size' | 'type'> {
    color?: string; // icon 的颜色，同 css 的 color
    rotate?: number | string; // 图标旋转角度（ie9 无效）
    size?: number | string; // icon 的大小
    spin?: boolean; // 是否有旋转动画
    type?: string; // icon 的类型
    onClick?: (e: CommonEvent) => void; // 点击事件
}
