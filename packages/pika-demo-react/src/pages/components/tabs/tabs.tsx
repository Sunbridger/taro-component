import React, { Component } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { PkTabs } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class TabsExample extends Component<any, any> {
    public tabList1 = [{ title: 'Tab1' }, { title: 'Tab2' }, { title: 'Tab3' }];
    public tabList2 = [
        { title: 'Tab1' },
        { title: 'Tab2' },
        { title: 'Tab3' },
        { title: 'Tab4' },
        { title: 'Tab5' },
        { title: 'Tab6' },
        { title: 'Tab7' },
    ];
    constructor(props: any) {
        super(props);
        this.state = {
            current1: 0,
            current2: 0,
            current3: 0,
            current4: 0,
            current5: 0,
            current6: 0,
            current7: 0,
            current8: 0,
        };
    }

    onTabChange(key, index) {
        this.setState({
            [key]: index,
        });
    }
    render() {
        return (
            <View className='tabsExample'>
                <ShowCom title='基本使用'>
                    <PkTabs
                        tabList={this.tabList1}
                        current={this.state.current1}
                        onChange={index => {
                            this.onTabChange('current1', index);
                        }}
                    >
                        <View>111</View>
                        <View>222</View>
                        <View>333</View>
                    </PkTabs>
                </ShowCom>
                <ShowCom title='固定'>
                    <PkTabs
                        tabList={this.tabList2}
                        current={this.state.current2}
                        sticky
                        onChange={this.onTabChange.bind(this, 'current2')}
                    >
                        <View>111</View>
                        <View>222</View>
                        <View>333</View>
                        <View>444</View>
                        <View>555</View>
                        <View>666</View>
                        <View>777</View>
                    </PkTabs>
                </ShowCom>
                <ShowCom title='多列'>
                    <PkTabs
                        tabList={this.tabList2}
                        current={this.state.current3}
                        animated={false}
                        onChange={this.onTabChange.bind(this, 'current3')}
                    >
                        <View>111</View>
                        <View>222</View>
                        <View>333</View>
                        <View>444</View>
                        <View>555</View>
                        <View>666</View>
                        <View>777</View>
                    </PkTabs>
                </ShowCom>
                <ShowCom title='禁止滑动切换'>
                    <PkTabs
                        tabList={this.tabList2}
                        current={this.state.current4}
                        swipeable={false}
                        onChange={this.onTabChange.bind(this, 'current4')}
                    >
                        <View>111</View>
                        <View>222</View>
                        <View>333</View>
                        <View>444</View>
                        <View>555</View>
                        <View>666</View>
                        <View>777</View>
                    </PkTabs>
                </ShowCom>
                <ShowCom title='懒加载'>
                    <PkTabs
                        tabList={this.tabList2}
                        current={this.state.current5}
                        lazyRender
                        onChange={this.onTabChange.bind(this, 'current5')}
                    >
                        <View>111</View>
                        <View>222</View>
                        <View>333</View>
                        <View>444</View>
                        <View>555</View>
                        <View>666</View>
                        <View>777</View>
                    </PkTabs>
                </ShowCom>
                <ShowCom title='自定义颜色边距等样式'>
                    <PkTabs
                        tabList={this.tabList2}
                        current={this.state.current6}
                        color={'#efc71c'}
                        activeColor={'#8d8e99'}
                        lineColor={'#b8961d'}
                        activeStyle={{ fontSize: Taro.pxTransform(32) }}
                        betweenPadding={Taro.pxTransform(56)}
                        onChange={this.onTabChange.bind(this, 'current6')}
                    >
                        <View>111</View>
                        <View>222</View>
                        <View>333</View>
                        <View>444</View>
                        <View>555</View>
                        <View>666</View>
                        <View>777</View>
                    </PkTabs>
                </ShowCom>
                <ShowCom title='禁止动画'>
                    <PkTabs
                        tabList={this.tabList2}
                        current={this.state.current7}
                        animated={false}
                        onChange={this.onTabChange.bind(this, 'current7')}
                    >
                        <View>111</View>
                        <View>222</View>
                        <View>333</View>
                        <View>444</View>
                        <View>555</View>
                        <View>666</View>
                        <View>777</View>
                    </PkTabs>
                </ShowCom>
                <ShowCom title='垂直模式'>
                    <PkTabs
                        tabDirection={1}
                        height={'400px'}
                        tabList={this.tabList2}
                        current={this.state.current8}
                        onChange={this.onTabChange.bind(this, 'current8')}
                    >
                        <View>111</View>
                        <View>222</View>
                        <View>333</View>
                        <View>444</View>
                        <View>555</View>
                        <View>666</View>
                        <View>777</View>
                    </PkTabs>
                </ShowCom>
            </View>
        );
    }
}
