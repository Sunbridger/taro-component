export interface Ilist {
    title: string;
    titleRender: (active: boolean) => JSX.Element;
    childRender: () => JSX.Element;
}

export interface IsideBarProps {
    list: Ilist[];
}

export interface IsideBarState {
    current: number;
}
