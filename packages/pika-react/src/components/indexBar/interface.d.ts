import { IpkBaseComponentProps } from '../../common/types';

export interface Iitem {
    name: string; // 标题名称
    render?: JSX.Element;
    [propName: string]: any;
}

export interface IlistItem {
    title: string; // 列表标题
    noTitle: boolean; // 是否显示标题
    key: string; // 右侧导航标题
    items: Array<Iitem>; // 列表项
}

export interface IindexBarProps extends IpkBaseComponentProps {
    animation?: boolean; // 是否开启跳转过渡动画
    isVibrate?: boolean; // 是否切换 key 的震动
    isShowToast?: boolean; // 是否用弹框显示当前 key
    sticky?: boolean; // 标题置顶
    list: IlistItem[]; // 子列表项;
    onClick?: (item: Item) => void; // 点击列表项触发事件
    onScrollIntoView?: (fn: (key: string) => void) => void; // 获取跳转事件跳转到指定 key
}

export interface IindexBarState {
    currentKey: string;
    scrollIntoView: string;
    scrollTop: number;
    tipText: string;
    isShowToast: boolean;
    isWEB: boolean;
}
