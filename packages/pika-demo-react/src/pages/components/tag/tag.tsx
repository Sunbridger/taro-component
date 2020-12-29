import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkTag } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';
import './tag.scss';

export default class TagExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <View className='tagExample'>
                <ShowCom title='基本使用'>
                    <View className='container'>
                        <PkTag>小圆角标签</PkTag>
                        <PkTag circle>大圆角标签</PkTag>
                        <PkTag active>选中状态</PkTag>
                        <PkTag disabled>禁用状态</PkTag>
                    </View>
                </ShowCom>
                <ShowCom title='小标签'>
                    <View className='container'>
                        <PkTag size='small'>标签 --</PkTag>
                        <PkTag type='primary' size='small'>
                            标签 --
                        </PkTag>
                        <PkTag size='small' circle>
                            标签 --
                        </PkTag>
                    </View>
                </ShowCom>
                <ShowCom title='实心标签'>
                    <View className='container'>
                        <PkTag filled>标签 ++</PkTag>
                        <PkTag type='primary' filled>
                            标签 ++
                        </PkTag>
                        <PkTag circle filled>
                            标签 ++
                        </PkTag>
                    </View>
                </ShowCom>
                <ShowCom title='带icon的标签'>
                    <View className='container'>
                        <PkTag icon='warning' type='primary'>
                            icon 标签
                        </PkTag>
                    </View>
                </ShowCom>
                <ShowCom title='可关闭的标签'>
                    <View className='container'>
                        <PkTag close>closable</PkTag>
                    </View>
                </ShowCom>
                <ShowCom title='三等分'>
                    <View className='container flexable'>
                        <PkTag>标签++</PkTag>
                        <PkTag>标签++</PkTag>
                        <PkTag>标签++</PkTag>
                        <PkTag>标签++</PkTag>
                    </View>
                </ShowCom>
                <ShowCom title='超长标签'>
                    <View className='container'>
                        <PkTag circle>这里是超大长度的字段</PkTag>
                    </View>
                </ShowCom>
                <ShowCom title=' 自定义样式'>
                    <View className='container'>
                        <PkTag className='test-tag' type='primary'>
                            直降500
                        </PkTag>
                        <PkTag className='test-tag1'>库存紧张</PkTag>
                    </View>
                </ShowCom>
            </View>
        );
    }
}
