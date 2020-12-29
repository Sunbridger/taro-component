export interface IstickyProps {
    top: number; // 距离顶部的高度
    compatibilityMode?: boolean; // 兼容模式
    noSticky?: boolean; // 是否固定
    onChange?: (state: boolean) => void; // 状态改变
}

export interface IstickyState {
    isStickPos: boolean;
    stickState: boolean;
}
