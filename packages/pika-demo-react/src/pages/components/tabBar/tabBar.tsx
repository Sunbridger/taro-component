import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Switch } from '@tarojs/components';
import { PkTabBar } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';
import './tabBar.scss';

const typeOneList = [
    {
        name: 'Home',
        showIconImg: false,
        dot: false,
    },
    {
        name: 'Buy',
        showIconImg: false,
        dot: false,
    },
    {
        name: 'User',
        showIconImg: false,
        dot: false,
    },
];

const typeTwoList = [
    {
        name: 'Customer',
        icon: 'directory',
        iconActive: 'directory',
        showIconImg: true,
        image: '',
        dot: false,
        info: '',
    },
    {
        name: 'Buy',
        icon: 'directory',
        iconActive: 'directory',
        showIconImg: true,
        dot: false,
        info: '222',
    },
    {
        name: 'User',
        icon: 'edit',
        iconActive: 'edit',
        showIconImg: true,
        dot: true,
        info: '',
    },
];

const typeTwoListOfImage = [
    {
        name: 'Home',
        icon: '',
        iconActive: '',
        showIconImg: true,
        image: '//img.souche.com/f2e/42076a6c10b5e59a90418c8b4bfc60dc.png',
        dot: false,
    },
    {
        name: 'Buy',
        icon: '',
        iconActive: '',
        showIconImg: true,
        image: '//img.souche.com/f2e/42076a6c10b5e59a90418c8b4bfc60dc.png',
        dot: false,
        info: '222',
    },
    {
        name: 'User',
        icon: '',
        iconActive: '',
        showIconImg: true,
        image: '//img.souche.com/f2e/42076a6c10b5e59a90418c8b4bfc60dc.png',
        dot: true,
        info: '',
    },
];

const defaultState = {
    showType: 1,
    fixed: false, // 是否固定在底部
    shadow: true, // 是否展示阴影
    // zIndex: 100, // 元素 z-index
    activeColor: '', // 选中标签的颜色
    inactiveColor: '', // 未选中标签的颜色
    backgroundColor: '', // 背景色
    layoutMode: 'normal',
    list: typeOneList,
    current: 'Customer',
};

export default class TabBarExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            ...defaultState,
        };
    }
    handleSwitchChange(type) {
        let state = {};
        switch (type) {
            case 1:
                state = {
                    ...defaultState,
                    showType: type,
                    list: typeOneList,
                    fixed: false,
                };
                break;
            case 2:
                state = {
                    ...defaultState,
                    showType: type,
                    list: typeTwoList,
                    fixed: false,
                };
                break;
            case 3:
                state = {
                    ...defaultState,
                    showType: type,
                    list: typeTwoListOfImage,
                    fixed: false,
                };
                break;
            case 4:
                state = {
                    ...defaultState,
                    showType: type,
                    list: typeTwoList,
                    fixed: false,
                    activeColor: '#1989fa',
                    inactiveColor: '#fff',
                    backgroundColor: '#999',
                };
                break;
            case 5:
                state = {
                    ...defaultState,
                    showType: type,
                    list: typeTwoList,
                    fixed: true,
                };
                break;
            case 6:
                state = {
                    ...defaultState,
                    showType: type,
                    list: typeTwoList,
                    layoutMode: 'hump',
                    fixed: false,
                };
                break;
        }
        this.setState({
            ...state,
            showType: type,
        });
    }
    handleChange(item) {
        Taro.showToast({
            title: item.name,
            icon: 'none',
        });
        this.setState({
            current: item.name,
        });
    }
    render() {
        const {
            showType,
            list,
            activeColor,
            inactiveColor,
            backgroundColor,
            fixed,
            layoutMode,
            current,
        } = this.state;
        return (
            <View className='tabBarExample'>
                <ShowCom title='文本标签'>
                    <Switch
                        checked={showType === 1}
                        disabled={showType === 1}
                        onChange={this.handleSwitchChange.bind(this, 1)}
                    />
                </ShowCom>
                <ShowCom title='带icon标签'>
                    <Switch
                        checked={showType === 2}
                        disabled={showType === 2}
                        onChange={this.handleSwitchChange.bind(this, 2)}
                    />
                </ShowCom>
                <ShowCom title='带Image标签'>
                    <Switch
                        checked={showType === 3}
                        disabled={showType === 3}
                        onChange={this.handleSwitchChange.bind(this, 3)}
                    />
                </ShowCom>
                <ShowCom title='自定义图片, 字体颜色, 背景'>
                    <Switch
                        checked={showType === 4}
                        disabled={showType === 4}
                        onChange={this.handleSwitchChange.bind(this, 4)}
                    />
                </ShowCom>
                <ShowCom title='固定底部'>
                    <Switch
                        checked={showType === 5}
                        disabled={showType === 5}
                        onChange={this.handleSwitchChange.bind(this, 5)}
                    />
                </ShowCom>
                <ShowCom title='驼峰布局模式'>
                    <Switch
                        checked={showType === 6}
                        disabled={showType === 6}
                        onChange={this.handleSwitchChange.bind(this, 6)}
                    />
                </ShowCom>
                <PkTabBar
                    current={current}
                    tabList={list}
                    fixed={fixed}
                    layoutMode={layoutMode}
                    activeColor={activeColor}
                    inactiveColor={inactiveColor}
                    backgroundColor={backgroundColor}
                    onChange={this.handleChange.bind(this)}
                />
            </View>
        );
    }
}
