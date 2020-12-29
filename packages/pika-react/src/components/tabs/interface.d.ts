import { CSSProperties } from 'react';

export const EtabDirection: ITabDirection = {
    horizontal: 0, // 水平
    vertical: 1, // 垂直
};

export interface ItabDirection {
    horizontal: number;
    vertical: number;
}

export interface ItabsProps {
    tabDirection: number; // Tab 方向
    tabList: { title: string }[]; // tab 列表
    current: number; // 当前选中的标签索引值
    color?: string; // 自定义字体颜色
    activeColor?: string; // 自定义激活字体颜色
    commonStyle?: CSSProperties; // 自定义非激活字体样式
    activeStyle?: CSSProperties; // 自定义激活字体样式
    lineColor?: string; // 自定下划线颜色
    zIndex?: number;
    // lineWidth?: number;
    // lineHeight?: number;
    scrollable?: boolean; // 是否滚动，当标签太多时，建议使用
    swipeable?: boolean; // 是否手势切换
    animated?: boolean; // 是否开启动画
    sticky?: boolean; // 是否置顶
    lazyRender?: boolean; // 是否延迟渲染
    height: string; // 高度, 当tabDirection 等于 1时需要设置高度
    betweenPadding: string; // 两边tab距离两边的距离
    onChange: (key: number) => void; // tab切换触发
}

export interface ItabsState {
    tabsScrollLeft: number;
    tabScrollIntoView: string;
}

export interface ItabContentProps {
    active: boolean;
}
