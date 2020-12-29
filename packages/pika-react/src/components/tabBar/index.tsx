import React, { Component, CSSProperties } from 'react';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { View, Image } from '@tarojs/components';
import { ItabBarProps, ItabBarState, ItabList } from './interface.d';
import { platform, zIndex } from '../../helper/common';
import PkIcon from '../icon';
import PkBadge from '../badge';

export default class PkTabBar extends Component<ItabBarProps, ItabBarState> {
    public static defaultProps: any = {};
    constructor(props: ItabBarProps) {
        super(props);
        this.state = {
            bottomBlackHeight: platform.getBottomBlackHeight(),
        };
    }

    private onChangeTab(tab: ItabList): void {
        const { onChange } = this.props;
        typeof onChange === 'function' && onChange(tab);
    }

    public renderIcon(item: ItabList): JSX.Element {
        const { current } = this.props;
        const isActive = current === item.name;

        return (
            <View className={classNames('pkTabBar-item-icon')}>
                <PkBadge dot={item.dot} value={item.info} maxValue={item.max}>
                    {item.image ? (
                        <Image
                            src={
                                isActive
                                    ? item.imageActive || item.image
                                    : item.image
                            }
                            style={{
                                width: Taro.pxTransform(48),
                                height: Taro.pxTransform(48),
                                marginBottom: Taro.pxTransform(12),
                            }}
                        />
                    ) : (
                        <PkIcon
                            type={
                                isActive
                                    ? item.iconActive || item.icon
                                    : item.icon
                            }
                            style={{
                                marginBottom: Taro.pxTransform(8),
                            }}
                            size={item.iconSize || 28}
                        />
                    )}
                </PkBadge>
            </View>
        );
    }

    public renderTabItem(item: ItabList): JSX.Element {
        const { activeColor, inactiveColor, current } = this.props;
        const isActive = current === item.name;
        const customActiveStyle = activeColor ? { color: activeColor } : {};
        const customInactiveStyle = inactiveColor
            ? { color: inactiveColor }
            : {};
        return (
            <View
                className={classNames('pkTabBar-item')}
                key={item.name}
                onClick={this.onChangeTab.bind(this, item)}
            >
                {item.showIconImg && this.renderIcon(item)}
                <View
                    className={classNames('pkTabBar-item-name', {
                        noIcon: !item.showIconImg,
                        active: isActive,
                    })}
                    style={isActive ? customActiveStyle : customInactiveStyle}
                >
                    {item.name}
                </View>
            </View>
        );
    }

    public renderNormalLayout(tabList): JSX.Element {
        return (
            <View className={classNames('pkTabBar-normalLayout')}>
                {tabList.map(item => this.renderTabItem(item))}
            </View>
        );
    }

    public renderHumpLayout(): JSX.Element {
        const { tabList, current } = this.props;

        const middle = Math.floor(tabList.length / 2);
        const leftList = tabList.slice(0, middle);
        const middleTab = tabList[middle];
        const rightList = tabList.slice(middle + 1);

        let midStyle = {};
        if (middleTab.image) {
            midStyle = {
                backgroundImage: `url(${
                    current === middleTab.name
                        ? middleTab.imageActive || middleTab.image
                        : middleTab.image
                })`,
            };
        }
        if (middleTab.boxShadow) {
            midStyle = {
                ...midStyle,
                boxShadow: middleTab.boxShadow,
            };
        }
        return (
            <View className={classNames('pkTabBar-HumpLayout')}>
                <View className='pkTabBar-HumpLayout_left'>
                    {this.renderNormalLayout(leftList)}
                </View>
                <View
                    className='pkTabBar-HumpLayout_middle'
                    onClick={this.onChangeTab.bind(this, middleTab)}
                >
                    <View className='pkTabBar-HumpLayout_middle-item'>
                        <View
                            className='pkTabBar-HumpLayout_middle-item-content'
                            style={midStyle}
                        >
                            {middleTab.image ? '' : middleTab.name}
                        </View>
                    </View>
                </View>
                <View className='pkTabBar-HumpLayout_right'>
                    {this.renderNormalLayout(rightList)}
                </View>
            </View>
        );
    }

    public render(): JSX.Element {
        const {
            layoutMode,
            fixed,
            backgroundColor,
            shadow,
            zIndex,
            tabList,
        } = this.props;
        const { bottomBlackHeight } = this.state;
        const pkTabBarStyle: CSSProperties = {
            backgroundColor,
            zIndex,
        };
        if (fixed && bottomBlackHeight) {
            pkTabBarStyle.paddingBottom = Taro.pxTransform(bottomBlackHeight);
        }
        return (
            <View
                className={classNames('pkTabBar', {
                    fixed,
                    shadow,
                })}
                style={pkTabBarStyle}
            >
                {layoutMode === 'hump' && tabList.length % 2
                    ? this.renderHumpLayout()
                    : this.renderNormalLayout(tabList)}
            </View>
        );
    }
}

PkTabBar.defaultProps = {
    tabList: [],
    current: '', // 当前选中标签的索引
    shadow: true, // 是否展示阴影
    zIndex: zIndex.getIndex(), // 元素 z-index
    backgroundColor: '#fff', // 背景色
    layoutMode: 'normal', // 布局模式
    showIconImg: true,
    onChange: () => {
        void 0;
    },
};
