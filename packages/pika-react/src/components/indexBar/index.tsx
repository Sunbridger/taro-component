import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common';
import { View, ScrollView } from '@tarojs/components';
import { Decorators } from '@souche/taro-helper';
import classNames from 'classnames';
import { IindexBarProps, IindexBarState, Iitem } from './interface.d';
import { delayQuerySelector } from '../../helper/common';
import PkToast from '../toast';

const { autoBind } = Decorators;

export default class PkIndexBar extends Component<
    IindexBarProps,
    IindexBarState
> {
    public static defaultProps: IindexBarProps;

    private menuHeight: number;
    private startTop: number;
    private itemHeight: number;
    private currentIndex: number;
    private listId: string;
    private timeoutTimer: NodeJS.Timeout | number | undefined;
    private listRef: any;
    private listTops: { key: string; top: number; height: number }[];

    constructor(props: IindexBarProps) {
        super(props);
        this.state = {
            currentKey: '',
            scrollIntoView: '',
            scrollTop: 0,
            tipText: '',
            isShowToast: false,
            isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
        };
        // 右侧导航高度
        this.menuHeight = 0;
        // 右侧导航距离顶部高度
        this.startTop = 0;
        // 右侧导航元素高度
        this.itemHeight = 0;
        // 当前索引
        this.currentIndex = -1;
        // 列表各段高度
        this.listTops = [];
    }

    public componentDidMount(): void {
        if (process.env.TARO_ENV === 'web') {
            this.listRef = document.getElementById(this.listId);
        }
        this.initData();
    }

    private handleClick(item: Iitem): void {
        this.props.onClick && this.props.onClick(item);
    }

    @autoBind
    private handleTouchMove(event: ITouchEvent): void {
        event.stopPropagation();
        event.preventDefault();

        const { list } = this.props;
        const pageY = event.touches[0].pageY;
        const index = Math.floor((pageY - this.startTop) / this.itemHeight);

        if (index >= 0 && index <= list.length && this.currentIndex !== index) {
            this.currentIndex = index;
            const key = list[index - 1].key;
            const touchView = `pkIndexBar__list-${key}`;
            this.jumpTarget(touchView, index - 1);
        }
    }

    @autoBind
    private handleTouchEnd(): void {
        this.currentIndex = -1;
    }

    @autoBind
    private handleScroll(e: CommonEvent): void {
        let key;
        if (e && e.detail) {
            for (let i = 0; i < this.listTops.length; i++) {
                const item = this.listTops[i];
                if (
                    e.detail.scrollTop >= item.top &&
                    e.detail.scrollTop < item.height + item.top
                ) {
                    key = this.listTops[i].key;
                    break;
                }
            }
            this.setState({
                currentKey: key,
                scrollTop: e.detail.scrollTop,
            });
        }
    }

    private jumpTarget(scrollIntoView: string, idx: number): void {
        const { list } = this.props;
        const tipText = list[idx].title;

        if (process.env.TARO_ENV === 'web') {
            delayQuerySelector('.pkIndexBar', 0).then(rect => {
                const targetOffsetTop = this.listRef.childNodes[idx].offsetTop;
                const scrollTop = targetOffsetTop - rect[0].top;
                this.updateState({
                    scrollTop,
                    scrollIntoView,
                    tipText,
                });
            });
            return;
        }

        this.updateState({
            scrollIntoView,
            tipText,
        });
    }

    private updateState(state: Partial<IindexBarState>): void {
        const { isShowToast, isVibrate } = this.props;
        const { scrollIntoView, tipText, scrollTop } = state;
        this.setState(
            {
                scrollIntoView: scrollIntoView!,
                tipText: tipText!,
                scrollTop: scrollTop!,
                isShowToast: isShowToast!,
            },
            () => {
                clearTimeout(this.timeoutTimer as number);
                this.timeoutTimer = setTimeout(() => {
                    this.setState({
                        tipText: '',
                        isShowToast: false,
                    });
                }, 1000);
            }
        );

        if (isVibrate) {
            Taro.vibrateShort();
        }
    }

    private initData(): void {
        delayQuerySelector('.pkIndexBar__menu').then(rect => {
            const len = this.props.list.length;
            this.menuHeight = rect[0].height;
            this.startTop = rect[0].top;
            this.itemHeight = Math.floor(this.menuHeight / (len + 1));
        });
        this.props.list.forEach(dataList => {
            delayQuerySelector(`#pkIndexBar__list-${dataList.key}`, 1000).then(
                res => {
                    this.listTops.push({
                        key: dataList.key,
                        top: res[0].top,
                        height: res[0].height,
                    });
                }
            );
        });
    }

    public renderMenuList(): JSX.Element[] {
        const { list } = this.props;
        let { currentKey } = this.state;
        currentKey = currentKey || list[0].key;
        return list.map((dataList, i) => {
            const { title, key } = dataList;
            const targetView = `pkIndexBar__list-${key}`;
            const className = classNames('pkIndexBar__menu-item', {
                active: currentKey === key,
            });
            return (
                <View
                    className={className}
                    key={key}
                    onClick={this.jumpTarget.bind(this, targetView, i)}
                >
                    {title}
                </View>
            );
        });
    }

    public renderIndexesList(): JSX.Element[] | null {
        const { list, sticky } = this.props;
        const itemClassName = classNames('pkIndexBar__list-content-item', {
            sticky,
        });
        return list.map(dataList => (
            <View
                id={`pkIndexBar__list-${dataList.key}`}
                className='pkIndexBar__list'
                key={dataList.key}
            >
                {dataList.title && !dataList.noTitle && (
                    <View className='pkIndexBar__list-title'>
                        {dataList.title}
                    </View>
                )}
                <View className='pkIndexBar__list-content'>
                    {Array.isArray(dataList.items)
                        ? dataList.items.map((item, index) => (
                              <View
                                  key={item.name || index}
                                  className={itemClassName}
                                  onClick={this.handleClick.bind(this, item)}
                              >
                                  {item.render || item.name || null}
                              </View>
                          ))
                        : null}
                </View>
            </View>
        ));
    }

    public render(): JSX.Element {
        const { className, style, animation } = this.props;
        const {
            scrollTop,
            scrollIntoView,
            tipText,
            isShowToast,
            isWEB,
        } = this.state;
        const rootCls = classNames('pkIndexBar', className);
        return (
            <View className={rootCls} style={style}>
                <View
                    className='pkIndexBar__menu'
                    onTouchMove={this.handleTouchMove}
                    onTouchEnd={this.handleTouchEnd}
                >
                    {this.renderMenuList()}
                </View>
                <ScrollView
                    className='pkIndexBar__body'
                    id={this.listId}
                    scrollY
                    scrollWithAnimation={animation}
                    // eslint-disable-next-line no-undefined
                    scrollTop={isWEB ? scrollTop : undefined}
                    scrollIntoView={!isWEB ? scrollIntoView : ''}
                    onScroll={this.handleScroll}
                >
                    <View className='pkIndexBar__content' id='pkIndexBar__top'>
                        {this.props.children}
                    </View>
                    {this.renderIndexesList()}
                </ScrollView>
                <PkToast text={tipText} visible={isShowToast} />
            </View>
        );
    }
}

PkIndexBar.defaultProps = {
    animation: true,
    isVibrate: true,
    isShowToast: true,
    list: [],
};
