export type layoutMode = 'normal' | 'hump';

export interface ItabList {
    name: string;
    icon: string;
    iconActive: string;
    showIconImg: boolean; // 是否显示该图标
    iconSize: number;
    image: string;
    imageActive: string;
    dot: boolean;
    info: number;
    max: number;
    boxShadow: string;
}

export interface ItabBarProps {
    tabList: ItabList[];
    current: string | number; // 当前选中标签的索引
    fixed: boolean; // 是否固定在底部
    shadow: boolean; // 是否展示阴影
    zIndex: number; // 元素 z-index
    activeColor: string; // 选中标签的颜色
    inactiveColor: string; // 未选中标签的颜色
    backgroundColor: string; // 背景色
    layoutMode: layoutMode; // 布局模式
    onChange: (tab: ItabList) => void; // 切换事件
}

export interface ItabBarState {
    bottomBlackHeight: number;
}
