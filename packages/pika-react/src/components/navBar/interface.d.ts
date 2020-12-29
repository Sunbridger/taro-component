export interface InavBarInfo {
    top: number;
    height: number;
    menuCovering: number;
}

export interface InavBarProps {
    prefixCls: string; // classname前缀
    title: string; // 标题
    titleRender: () => JSX.Element; // 标题占位元素
    leftText: string; // 左侧文字
    leftRender: () => JSX.Element; // 左侧占位元素
    fixed: boolean; // 是否固定
    dbClickToTop: boolean | (() => void); // 双击是否回到顶部
    zIndex: number; // 图层z-index
    backgroundColor: string; // tabBar背景颜色
    textColor: string; // tabBar字体颜色
    onLeftClick: () => void; // 左侧返回按钮点击事件
    onTitleClick: () => void; // 标题点击事件
}

export interface InavBarState {
    navBarInfo: InavBarInfo;
}
