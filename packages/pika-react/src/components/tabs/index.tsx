import React, { Component, CSSProperties } from 'react';
import Taro from '@tarojs/taro';
import { ScrollView, View } from '@tarojs/components';
import { Decorators } from '@souche/taro-helper';
import classNames from 'classnames';
import { EtabDirection, ItabsProps, ItabsState } from './interface.d';
import Sticky from '../sticky';
import TabContent from './tabContent';
import { zIndex } from '../../helper/common';

const { autoBind } = Decorators;
const ENV = Taro.getEnv();
const MIN_DISTANCE = 100;
const MAX_INTERVAL = 10;
let n = 0; // 单个组件标记

export default class PkTabs extends Component<ItabsProps, ItabsState> {
    public static defaultProps: Partial<ItabsProps> = {};
    private tabSticky = React.createRef<Sticky>();

    private tabClassPrefix = `pkTabs-header-item-${n++}-key__`;

    // 触摸时的原点
    private touchDot = 0;
    // 定时器
    private slideTimer: NodeJS.Timeout | null = null;
    // 滑动时间间隔
    private slideInterval = 0;
    // 是否已经在滑动
    private touchIsMoving = false;

    private hasRenderList: number[] = [];
    constructor(props: ItabsProps) {
        super(props);
        this.state = {
            tabsScrollLeft: 0,
            tabScrollIntoView: '',
        };
    }

    componentDidUpdate(prevProps: Readonly<ItabsProps>): void {
        if (prevProps.current !== this.props.current) {
            this.updateTabLayout(this.props.current);
        }
    }

    @autoBind
    public updateTabLayout(idx: number) {
        if (this.props.scrollable) {
            // 标签栏滚动
            switch (ENV) {
                case Taro.ENV_TYPE.WEAPP:
                case Taro.ENV_TYPE.ALIPAY:
                case Taro.ENV_TYPE.SWAN: {
                    const index = Math.max(idx - 1, 0);
                    this.scrollIntoView(index);
                    break;
                }
                case Taro.ENV_TYPE.WEB: {
                    // const index = Math.max(idx - 1, 0)
                    // const prevTabItem = this.tabHeaderRef.childNodes[index]
                    // prevTabItem && this.setState({
                    //     _scrollTop: prevTabItem.offsetTop,
                    //     _scrollLeft: prevTabItem.offsetLeft
                    // })
                    break;
                }

                default:
                    console.warn('scroll在该环境还未适配');
                    break;
            }
        }
    }

    // 需要将滑块移至中心
    public scrollIntoView(index: number): void {
        this.setState({
            tabScrollIntoView: this.tabClassPrefix + index,
        });
    }

    public onTabHeaderClick(index: number): void {
        this.props.sticky && this.tabSticky.current?.onTop();
        this.onTabChange(index);
    }

    public onTabChange(index: number): void {
        this.props.onChange && this.props.onChange(index);
    }

    @autoBind
    public onTabCTouchStart(e: any): void {
        if (
            !this.props.swipeable ||
            this.props.tabDirection === EtabDirection.vertical
        )
            return;
        // 获取触摸时的原点
        this.touchDot = e.touches[0].pageX;
        // 使用js计时器记录时间
        this.slideTimer = setInterval(() => {
            this.slideInterval++;
        }, 100);
    }

    @autoBind
    public onTabCTouchMove(e: any): void {
        if (
            !this.props.swipeable ||
            this.props.tabDirection === EtabDirection.vertical
        )
            return;

        const { current, tabList } = this.props;
        const touchMove = e.touches[0].pageX;
        const moveDistance = touchMove - this.touchDot;
        const maxIndex = tabList.length;

        if (
            !this.touchIsMoving &&
            this.slideInterval < MAX_INTERVAL &&
            this.touchDot > 20
        ) {
            // 向左滑动
            if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
                this.touchIsMoving = true;
                this.onTabChange(current + 1);

                // 向右滑动
            } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
                this.touchIsMoving = true;
                this.onTabChange(current - 1);
            }
        }
    }

    @autoBind
    public onTabCTouchEnd(): void {
        if (!this.props.swipeable) return;

        clearInterval(this.slideTimer as NodeJS.Timeout);
        this.slideInterval = 0;
        this.touchIsMoving = false;
    }

    public renderTabHeader(): JSX.Element {
        const {
            tabDirection,
            tabList,
            current,
            color,
            activeColor,
            commonStyle,
            activeStyle,
            // lineHeight,
            // lineWidth,
            lineColor,
            sticky,
            height,
            betweenPadding,
        } = this.props;
        const { tabScrollIntoView } = this.state;
        // const headStyle =
        //     tabDirection === EtabDirection.vertical ? { height } : {};
        const scrollX = tabDirection === EtabDirection.horizontal;
        const scrollY = tabDirection === EtabDirection.vertical;

        const wrapperStyle: CSSProperties = {};
        const customLineStyle: CSSProperties = {};
        const scrollStyle: CSSProperties = {};

        if (lineColor) {
            customLineStyle.backgroundColor = lineColor;
        }

        if (tabDirection === EtabDirection.horizontal) {
            // lineHeight &&
            //     (customLineStyle.height = Taro.pxTransform(lineHeight));
            // if (lineWidth) {
            //     customLineStyle.width = Taro.pxTransform(lineWidth);
            //     customLineStyle.left = `calc(50% - ${Taro.pxTransform(
            //         lineWidth / 2
            //     )})`;
            // }
            wrapperStyle.padding = `0 ${betweenPadding}`;
        } else {
            // lineHeight &&
            //     (customLineStyle.width = Taro.pxTransform(lineHeight));
            // if (lineWidth) {
            //     customLineStyle.height = Taro.pxTransform(lineWidth);
            //     customLineStyle.top = `calc(50% - ${Taro.pxTransform(
            //         lineWidth / 2
            //     )})`;
            // }
            wrapperStyle.borderBottom = 'none';
            scrollStyle.padding = `${betweenPadding} 0`;
            scrollStyle.height = height;
            scrollStyle.boxSizing = 'border-box';
        }
        const child = tabList.map((item, index) => {
            const isActive = index === current;
            const className = classNames('pkTabs-header-item', {
                active: isActive,
            });
            const id = this.tabClassPrefix + index;
            const customStyle = Object.assign(
                {},
                {
                    color: isActive ? activeColor : color,
                },
                isActive ? activeStyle : commonStyle
            );
            return (
                <View
                    id={id}
                    className={className}
                    key={item.title}
                    style={customStyle}
                    onClick={this.onTabHeaderClick.bind(this, index)}
                >
                    {item.title}
                    <View
                        className='pkTabs-header-item__underline'
                        style={customLineStyle}
                    />
                </View>
            );
        });
        return (
            <Sticky noSticky={!sticky} ref={this.tabSticky}>
                <View className='pkTabs-wrapper' style={wrapperStyle}>
                    <ScrollView
                        style={scrollStyle}
                        scrollX={scrollX}
                        scrollY={scrollY}
                        scroll-with-animation
                        // scroll-left={tabsScrollLeft}
                        scrollIntoView={tabScrollIntoView}
                    >
                        <View className='pkTabs-header'>{child}</View>
                    </ScrollView>
                </View>
            </Sticky>
        );
    }

    public renderTabContent(): JSX.Element | JSX.Element[] {
        let transformStyle = {};
        const {
            tabDirection,
            current,
            lazyRender,
            animated,
            height,
        } = this.props;
        const bodyStyle = { height };
        const bodyClass = classNames('pkTabs-body-wrapper', {
            animation: animated,
        });
        const transformStyleMake = current =>
            tabDirection === EtabDirection.vertical
                ? `translate3d(0px, -${current * 100}%, 0px)`
                : `translate3d(-${current * 100}%, 0px, 0px)`;

        // 对懒加载模式做偏移处理
        if (
            lazyRender &&
            Array.isArray(this.props.children) &&
            this.hasRenderList.length < this.props.children.length
        ) {
            if (!this.hasRenderList.includes(current)) {
                this.hasRenderList.push(current);
                transformStyle = transformStyleMake(
                    this.hasRenderList.length - 1
                );
            } else {
                const index = this.hasRenderList
                    .sort((a, b) => a - b)
                    .indexOf(current);
                transformStyle = transformStyleMake(index);
            }
        } else {
            transformStyle = transformStyleMake(current);
        }

        Object.assign(bodyStyle, {
            transform: transformStyle,
            '-webkit-transform': transformStyle,
        });
        return (
            <View className='pkTabs-body'>
                <View
                    className={bodyClass}
                    style={bodyStyle}
                    onTouchStart={this.onTabCTouchStart}
                    onTouchEnd={this.onTabCTouchEnd}
                    onTouchMove={this.onTabCTouchMove}
                >
                    {Array.isArray(this.props.children) ? (
                        this.props.children.map((item: any, index) => {
                            return !lazyRender ||
                                this.hasRenderList.includes(index) ? (
                                <TabContent
                                    key={index}
                                    active={this.props.current === index}
                                >
                                    {item}
                                </TabContent>
                            ) : null;
                        })
                    ) : (
                        <TabContent active={true}>
                            {this.props.children}
                        </TabContent>
                    )}
                </View>
            </View>
        );
    }

    public render(): JSX.Element {
        const { zIndex, tabDirection } = this.props;
        const customStyle = {
            zIndex,
        };
        const rootCls = classNames('pkTabs', {
            [`pkTabs__direction-${tabDirection}`]: true,
        });
        return (
            <View className={rootCls} style={customStyle}>
                {this.renderTabHeader()}
                {this.renderTabContent()}
            </View>
        );
    }
}

PkTabs.defaultProps = {
    tabList: [],
    tabDirection: 0,
    current: 0,
    color: '#8d8e99',
    activeColor: '#000',
    commonStyle: {},
    activeStyle: {},
    betweenPadding: '0',
    zIndex: zIndex.getIndex(),
    scrollable: true,
    swipeable: true,
    animated: true,
    sticky: false,
    lazyRender: false,
};
