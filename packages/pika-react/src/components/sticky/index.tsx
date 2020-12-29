import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { View } from '@tarojs/components';
import { IstickyProps, IstickyState } from './interface.d';

let idn = 0;

export default class PkSticky extends Component<IstickyProps, IstickyState> {
    public static defaultProps: any = {};
    // 当前滚动定时监听
    public scrollListener: NodeJS.Timeout | null = null;

    // 定位组件信息
    // 定位组件距离顶部的高度
    private stickyTopDistance = 0;
    // 定位组件高度
    private stickyHeight = 0;
    // 定位组件宽度
    private stickyWidth = 0;
    // 定位组件距离左边距离
    private stickyLeft = 0;
    // 标识唯一
    private idn = idn++;

    constructor(props: IstickyProps) {
        super(props);
        this.state = {
            stickState: false,
            isStickPos: false,
        };
    }

    static getDerivedStateFromProps(
        props: Readonly<IstickyProps>,
        state: Readonly<IstickyState>
    ) {
        return {
            stickState: state.isStickPos && !props.noSticky,
        };
    }

    public componentDidMount(): void {
        const { compatibilityMode, noSticky } = this.props;
        if (compatibilityMode && !noSticky) {
            this.setScrollListen();
        }
    }

    public componentDidUpdate(): void {
        const { compatibilityMode, noSticky } = this.props;
        if (noSticky) {
            this.clearScrollListen();
        } else if (compatibilityMode) {
            this.setScrollListen();
        }
    }

    public componentWillUnmount(): void {
        this.clearScrollListen();
    }

    // 由于自定义组件无法监听页面滚动,用定时器代替
    public setScrollListen(): void {
        this.clearScrollListen();
        this.scrollListener = setInterval(() => {
            // const className = this.props.idKey
            //     ? `#${this.props.idKey}`
            //     : '.pkSticky-content';
            if (this.props.noSticky || !this.props.compatibilityMode) {
                this.clearScrollListen();
                return;
            }
            const query = Taro.createSelectorQuery();
            query.selectViewport().scrollOffset();
            query
                .select(`.pkSticky-content_${this.idn}`)
                .boundingClientRect()
                .exec(info => {
                    const res = {
                        ...info[0],
                        ...info[1],
                    };
                    this.stickyTopDistance = this.stickyTopDistance || res.top;
                    this.stickyHeight = this.stickyHeight || res.height;
                    this.stickyWidth = this.stickyWidth || res.width;
                    this.stickyLeft = this.stickyLeft || res.left;
                    // 只在临界状态下进行修改
                    if (
                        res.scrollTop >=
                        this.stickyTopDistance - this.props.top
                    ) {
                        if (!this.state.isStickPos) {
                            this.setState({
                                isStickPos: true,
                            });
                            this.props.onChange && this.props.onChange(true);
                        }
                    } else {
                        if (this.state.isStickPos) {
                            this.setState({
                                isStickPos: false,
                            });
                            this.props.onChange && this.props.onChange(false);
                        }
                    }
                });
        }, 300);
    }

    public clearScrollListen(): void {
        clearInterval(this.scrollListener as NodeJS.Timeout);
        this.scrollListener = null;
    }

    /**
     * 对外接口
     * 跳转到顶部
     * @param duration 持续时间
     */
    public onTop(duration = 300): void {
        Taro.pageScrollTo({
            scrollTop: this.stickyTopDistance,
            duration,
        });
    }

    public render(): JSX.Element {
        const { compatibilityMode, noSticky, top } = this.props;
        const { stickState } = this.state;
        const mainClass = classNames('pkSticky', {
            sticky: !compatibilityMode && !noSticky,
        });
        const mainStyle = {
            top: !compatibilityMode && !noSticky ? Taro.pxTransform(top) : 0,
        };
        const contentClass = classNames(
            `.pkSticky-content .pkSticky-content_${this.idn}`,
            {
                fixed: compatibilityMode && stickState,
            }
        );
        const stickStyle = this.stickyLeft &&
            this.stickyWidth && {
                left: this.stickyLeft + 'px',
                width: this.stickyWidth + 'px',
                top:
                    compatibilityMode && stickState ? Taro.pxTransform(top) : 0,
            };
        return (
            <View className={mainClass} style={mainStyle}>
                <View className={contentClass} style={stickStyle || {}}>
                    {this.props.children}
                </View>
                {compatibilityMode && stickState ? (
                    <View
                        className='placeholder-content'
                        style={{ padding: Taro.pxTransform(this.stickyHeight) }}
                    />
                ) : null}
            </View>
        );
    }
}

PkSticky.defaultProps = {
    compatibilityMode: false,
    noSticky: false,
};
