import React, { Component } from 'react';
// import Taro from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import { IsideBarProps, IsideBarState } from './interface.d';
import classNames from 'classnames';

export default class PkSideBar extends Component<IsideBarProps, IsideBarState> {
    static scrollIdPrefix = 'pk-sideBar-identity-';

    constructor(props: IsideBarProps) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    private handleLabelClick(index: number) {
        this.setState({
            current: index,
        });
    }

    public renderLeftLabel(): JSX.Element {
        const { list } = this.props;
        const { current } = this.state;
        return (
            <View className='pkSideBar__left-label'>
                <ScrollView scroll-y>
                    {list.map((item, index) => {
                        const classnames = classNames(
                            'pkSideBar__left-label__item',
                            {
                                active: current === index,
                            }
                        );
                        return (
                            <View
                                className={classnames}
                                key={item.title}
                                onClick={this.handleLabelClick.bind(
                                    this,
                                    index
                                )}
                            >
                                {typeof item.titleRender === 'function'
                                    ? item.titleRender(current === index)
                                    : item.title}
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }

    public renderRightContent(): JSX.Element {
        const { list } = this.props;
        return (
            <ScrollView scroll-y className='pkSideBar__right-content'>
                {list.map((item, index) => {
                    const classname = classNames(
                        'pkSideBar__right-content__item',
                        {
                            [PkSideBar.scrollIdPrefix + index]: true,
                        }
                    );
                    return (
                        <View className={classname} key={item.title}>
                            {typeof item.childRender === 'function'
                                ? item.childRender()
                                : null}
                        </View>
                    );
                })}
            </ScrollView>
        );
    }

    public render(): JSX.Element {
        return (
            <View className='pkSideBar'>
                {this.renderLeftLabel()}
                {this.renderRightContent()}
            </View>
        );
    }
}
