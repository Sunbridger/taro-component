import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Switch, Text } from '@tarojs/components';
import { PkNavBar, PkIcon } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';
import './navBar.scss';

const defaultState = {
    showType: 1,
    leftText: '返回',
    leftRender: null,
    titleRender: null,
    backgroundColor: '#fff',
    textColor: '#000',
    listenClick: false,
    fixed: false,
    dbClickToTop: false,
};

export default class NavBarExample extends Component<any, any> {
    actionType = 1;
    constructor(props: any) {
        super(props);
        this.state = {
            ...defaultState,
        };
    }
    handleSwitchChange(type) {
        let state: any;
        this.actionType = type;
        switch (type) {
            case 1:
                state = {
                    ...defaultState,
                };
                break;
            case 2:
                state = {
                    ...defaultState,
                    leftText: '',
                };
                break;
            case 3:
                state = {
                    ...defaultState,
                    leftRender: this.renderSelfLeft,
                };
                break;
            case 4:
                state = {
                    ...defaultState,
                    titleRender: this.renderSelfTitle,
                };
                break;
            case 5:
                state = {
                    ...defaultState,
                    backgroundColor: '#000',
                    textColor: '#fff',
                };
                break;
            case 6:
                state = {
                    ...defaultState,
                    listenClick: true,
                };
                break;
            case 7:
                state = {
                    ...defaultState,
                    fixed: true,
                };
                break;
            case 8:
                state = {
                    ...defaultState,
                    fixed: true,
                    dbClickToTop: true,
                };
                break;
        }
        this.setState({
            ...state,
            showType: type,
        });
    }
    handleClick(info) {
        if (this.actionType === 6) {
            Taro.showToast({
                title: info,
            });
        } else {
            Taro.navigateBack();
        }
    }

    renderSelfLeft() {
        return (
            <View className='navBarExample-self-left'>
                <Text>省份</Text>
                <PkIcon
                    className='navBarExample-self-left-icon'
                    type='arrow-down'
                    size='14'
                />
            </View>
        );
    }
    renderSelfTitle() {
        return (
            <View className='navBarExample-self-title'>
                <PkIcon
                    className='navBarExample-self-title-icon'
                    type='search'
                    size='14'
                />
                <Text>想买什么车</Text>
            </View>
        );
    }
    render() {
        const {
            showType,
            leftText,
            leftRender,
            titleRender,
            backgroundColor,
            textColor,
            fixed,
            dbClickToTop,
        } = this.state;
        return (
            <View className='navBarExample'>
                <PkNavBar
                    title='导航栏'
                    leftText={leftText}
                    leftRender={leftRender}
                    titleRender={titleRender}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    fixed={fixed}
                    dbClickToTop={dbClickToTop}
                    onLeftClick={this.handleClick.bind(this, '左侧')}
                    onTitleClick={this.handleClick.bind(this, '标题')}
                />
                <ShowCom title='基本使用'>
                    <Switch
                        checked={showType === 1}
                        disabled={showType === 1}
                        onChange={this.handleSwitchChange.bind(this, 1)}
                    />
                </ShowCom>
                <ShowCom title='无返回文字'>
                    <Switch
                        checked={showType === 2}
                        disabled={showType === 2}
                        onChange={this.handleSwitchChange.bind(this, 2)}
                    />
                </ShowCom>
                <ShowCom title='自定义左侧内容'>
                    <Switch
                        checked={showType === 3}
                        disabled={showType === 3}
                        onChange={this.handleSwitchChange.bind(this, 3)}
                    />
                </ShowCom>
                <ShowCom title='自定义标题内容'>
                    <Switch
                        checked={showType === 4}
                        disabled={showType === 4}
                        onChange={this.handleSwitchChange.bind(this, 4)}
                    />
                </ShowCom>
                <ShowCom title='设置背景色和字体颜色'>
                    <Switch
                        checked={showType === 5}
                        disabled={showType === 5}
                        onChange={this.handleSwitchChange.bind(this, 5)}
                    />
                </ShowCom>
                <ShowCom title='点击事件监听'>
                    <Switch
                        checked={showType === 6}
                        disabled={showType === 6}
                        onChange={this.handleSwitchChange.bind(this, 6)}
                    />
                </ShowCom>
                <ShowCom title='置顶'>
                    <Switch
                        checked={showType === 7}
                        disabled={showType === 7}
                        onChange={this.handleSwitchChange.bind(this, 7)}
                    />
                </ShowCom>
                <ShowCom title='点击回到顶部'>
                    <Switch
                        checked={showType === 8}
                        disabled={showType === 8}
                        onChange={this.handleSwitchChange.bind(this, 8)}
                    />
                </ShowCom>
            </View>
        );
    }
}
