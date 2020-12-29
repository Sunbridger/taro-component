import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkAvatar } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';
import './avatar.scss';

export default class AvatarExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <View className='avatarExample'>
                <ShowCom title='基本使用'>
                    <View className='container'>
                        <PkAvatar
                            className='mr_20'
                            size='small'
                            image='//cdn.nlark.com/yuque/0/2020/png/268745/1599026954312-2ad8f0e2-2631-41a3-87af-298c64051693.png'
                        ></PkAvatar>
                        <PkAvatar
                            className='mr_20'
                            circle
                            image='//cdn.nlark.com/yuque/0/2020/png/268745/1599026954312-2ad8f0e2-2631-41a3-87af-298c64051693.png'
                        ></PkAvatar>
                        <PkAvatar
                            className='mr_20'
                            size='large'
                            image='//cdn.nlark.com/yuque/0/2020/png/268745/1599026954312-2ad8f0e2-2631-41a3-87af-298c64051693.png'
                        ></PkAvatar>
                    </View>
                </ShowCom>
                <ShowCom title='文字头像'>
                    <View className='container'>
                        <PkAvatar
                            className='mr_20'
                            size='small'
                            text='皮卡组件库'
                        ></PkAvatar>
                        <PkAvatar
                            className='mr_20'
                            circle
                            text='皮卡组件库'
                        ></PkAvatar>
                        <PkAvatar
                            className='mr_20'
                            size='large'
                            text='皮卡组件库'
                        ></PkAvatar>
                    </View>
                </ShowCom>
                <ShowCom title='openData'>
                    <PkAvatar
                        className='mr_20'
                        openData={{ type: 'userAvatarUrl' }}
                    ></PkAvatar>
                </ShowCom>
                <ShowCom title='自定义style'>
                    <View className='container'>
                        <PkAvatar
                            className='mr_20'
                            style={{ background: 'red' }}
                            text='皮卡组件库'
                        ></PkAvatar>
                        <PkAvatar
                            className={['test-class', 'mr_20']}
                            circle
                            text='皮卡组件库'
                        ></PkAvatar>
                    </View>
                </ShowCom>
            </View>
        );
    }
}
