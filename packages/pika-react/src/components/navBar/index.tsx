import React, { Component } from 'react';
import classNames from 'classnames';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Decorators } from '@souche/taro-helper';
import PkIcon from '../icon';
import PkSticky from '../sticky';
import zIndex from '../../helper/common/zIndex';
import { InavBarProps, InavBarState, InavBarInfo } from './interface.d';

const { autoBind } = Decorators;

export default class PkNavBar extends Component<InavBarProps, InavBarState> {
    public static defaultProps: any = {};

    private static iosBarHeight = 48; // ios的顶部原生bar高度
    private static androidBarHeight = 44; // android的顶部原生bar高度
    private static offsetLeaveCapsule = 6; // 距离胶囊的偏移值
    private static offsetLeaveTop = 4; // 距离顶部的高度偏移值

    public touchStartTime = 0; // 顶部点击时间记录

    constructor(props: InavBarProps) {
        super(props);
        const { top, height, menuCovering } = this.setCustomNavigationBarInfo();
        this.state = {
            navBarInfo: {
                top,
                height,
                menuCovering,
            },
        };
    }

    /**
     * 获取胶囊按钮的相关信息
     * 用于确认顶部高度
     * 这边对于支付宝和抖音还要单独测试
     * todo 支付宝/抖音区分
     */
    public setCustomNavigationBarInfo(): InavBarInfo {
        const menuInfo = Taro.getMenuButtonBoundingClientRect?.() || {
            top: 0,
            height: 0,
        };
        const sysInfo = Taro.getSystemInfoSync();
        if (!menuInfo.top) {
            menuInfo.top = sysInfo.statusBarHeight + PkNavBar.offsetLeaveTop;
            if (sysInfo.platform.toLowerCase() === 'android') {
                menuInfo.top += PkNavBar.offsetLeaveTop;
            }
        }
        if (!menuInfo.height) {
            menuInfo.height =
                sysInfo.platform.toLowerCase() === 'android'
                    ? PkNavBar.androidBarHeight
                    : PkNavBar.iosBarHeight;
        }
        return {
            ...menuInfo,
            menuCovering: sysInfo.windowWidth - menuInfo.left,
        };
    }

    @autoBind
    public handleLeftClick() {
        if (typeof this.props.onLeftClick === 'function') {
            this.props.onLeftClick();
        }
    }

    @autoBind
    public handleTitleClick() {
        if (typeof this.props.onTitleClick === 'function') {
            this.props.onTitleClick();
        }
    }

    @autoBind
    public handleBarClick(e) {
        const { dbClickToTop } = this.props;
        const handle = () => {
            if (typeof dbClickToTop === 'function') {
                this.props.onTitleClick();
            }
        };

        // 判断两次点击的时间间隔小于300
        if (e.timeStamp - this.touchStartTime < 300) {
            if (dbClickToTop) {
                Taro.pageScrollTo({ scrollTop: 0 }).then(() => {
                    handle();
                });
            }
        }

        this.touchStartTime = e.timeStamp;
    }

    public renderLeft(prefixCls: string): JSX.Element {
        const { leftText, leftRender } = this.props;
        return (
            <View
                className={classNames(`${prefixCls}-left`)}
                onClick={this.handleLeftClick}
            >
                {leftRender ? (
                    <View
                        className={classNames(`${prefixCls}-left-leftRender`)}
                    >
                        {leftRender()}
                    </View>
                ) : (
                    <View className={classNames(`${prefixCls}-left-content`)}>
                        <PkIcon
                            type='arrow-left'
                            size='28'
                            className={classNames(
                                `${prefixCls}-left-content_arrow`
                            )}
                        />
                        <View
                            className={classNames(
                                `${prefixCls}-left-content_text`
                            )}
                        >
                            {leftText}
                        </View>
                    </View>
                )}
            </View>
        );
    }

    public renderMiddle(prefixCls: string): JSX.Element {
        const { title, titleRender } = this.props;
        const {
            navBarInfo: { top },
        } = this.state;
        const middleStyle = {
            // 需要减去顶部和底部的高度的一半
            marginTop: `${(-PkNavBar.offsetLeaveCapsule + top) / 2}px`,
        };
        return (
            <View
                className={classNames(`${prefixCls}-middle`)}
                style={middleStyle}
                onClick={this.handleTitleClick}
            >
                {titleRender ? (
                    <View
                        className={classNames(
                            `${prefixCls}-middle-titleRender`
                        )}
                    >
                        {titleRender()}
                    </View>
                ) : (
                    <View className={classNames(`${prefixCls}-middle-title`)}>
                        {title}
                    </View>
                )}
            </View>
        );
    }

    render(): JSX.Element {
        const {
            navBarInfo: { top, height, menuCovering },
        } = this.state;
        const {
            prefixCls,
            backgroundColor,
            textColor,
            zIndex,
            fixed,
        } = this.props;
        const mainStyle = {
            paddingTop: `${top}px`,
            paddingRight: `${menuCovering}px`,
            paddingBottom: `${PkNavBar.offsetLeaveCapsule}px`,
            height: `${height}px`,
            color: textColor,
            backgroundColor,
            zIndex,
        };
        return (
            <PkSticky noSticky={!fixed}>
                <View
                    className={classNames(`${prefixCls}`)}
                    style={mainStyle}
                    onClick={this.handleBarClick}
                >
                    {this.renderLeft(prefixCls)}
                    {this.renderMiddle(prefixCls)}
                </View>
            </PkSticky>
        );
    }
}

PkNavBar.defaultProps = {
    prefixCls: 'pkNavBar',
    title: '',
    titleRender: null,
    leftText: '返回',
    leftRender: null,
    fixed: false,
    dbClickToTop: true,
    zIndex: zIndex.getIndex(),
    showBackArrow: true,
    backgroundColor: '#fff',
    textColor: '#000',
    onLeftClick: null,
    onTitleClick: null,
};
