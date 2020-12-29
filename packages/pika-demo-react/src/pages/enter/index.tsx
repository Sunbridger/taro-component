import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';
import pkgConfig from '../../../package.json';

export default class Enter extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    title: 'UI',
                    desc: '普通ui组件,如按钮, 弹窗',
                    icon:
                        '//img.souche.com/f2e/4b3e29b0e428ba6511c94d087c688e54.png',
                    next: '/pages/ui/index',
                    status: true,
                },
                {
                    title: 'Plugin',
                    desc: '插件类组件,如城市选择,更多筛选',
                    icon:
                        '//img.souche.com/f2e/5e36907d31936728a31d726bfb98cb11.png',
                    next: '/pages/plugins/index',
                    status: false,
                },
            ],
        };
    }

    handleNext(router, status) {
        status
            ? Taro.navigateTo({
                  url: router,
              })
            : Taro.showToast({
                  title: '内容暂无,敬请期待',
                  icon: 'none',
              });
    }

    render() {
        return (
            <View className='enter'>
                <View className='version'>
                    {pkgConfig.dependencies['@souche/pika-react'].slice(1)}
                </View>
                <View className='enter_header'>
                    <View className='icon' />
                    <View className='desc'>Pika3.0 React UI</View>
                </View>
                <View className='enter_body'>
                    {this.state.list.map(item => {
                        return (
                            <View
                                className='enterBtn'
                                key={item.title}
                                onClick={this.handleNext.bind(
                                    this,
                                    item.next,
                                    item.status
                                )}
                            >
                                <View className='enterBtn-left'>
                                    <View
                                        className='enterBtn-left_icon'
                                        style={{
                                            backgroundImage: `url(${item.icon})`,
                                        }}
                                    />
                                    <View className='enterBtn-left_desc'>
                                        <View className='enterBtn-left_desc-title'>
                                            {item.title}
                                        </View>
                                        <View className='enterBtn-left_desc-content'>
                                            {item.desc}
                                        </View>
                                    </View>
                                </View>
                                <View className='enterBtn-right'></View>
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }
}
