import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkIndexBar } from '@souche/pika-react';
import './index.scss';
// import ShowCom from '../../../components/showCom';

export default class IndexBarExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            list: [
                {
                    title: '自',
                    noTitle: true,
                    key: 'self',
                    items: [
                        {
                            render: <View>自定义内容</View>,
                        },
                    ],
                },
                {
                    title: '*',
                    key: 'all',
                    items: [
                        {
                            name: '全部',
                        },
                    ],
                },
                {
                    title: 'A',
                    key: 'A',
                    items: [
                        {
                            name: '阿坝',
                            // 此处可加其他业务字段
                        },
                        {
                            name: '阿拉善',
                        },
                    ],
                },
                {
                    title: 'B',
                    key: 'B',
                    items: [
                        {
                            name: '北京',
                        },
                        {
                            name: '保定',
                        },
                    ],
                },
                {
                    title: 'C',
                    key: 'C',
                    items: [
                        {
                            name: '北京',
                        },
                        {
                            name: '保定',
                        },
                    ],
                },
                {
                    title: 'D',
                    key: 'D',
                    items: [
                        {
                            name: '北京',
                        },
                        {
                            name: '保定',
                        },
                    ],
                },
                {
                    title: 'E',
                    key: 'E',
                    items: [
                        {
                            name: '北京',
                        },
                        {
                            name: '保定',
                        },
                    ],
                },
            ],
        };
    }
    render() {
        return (
            <View className='indexBarExample'>
                <PkIndexBar list={this.state.list} />
            </View>
        );
    }
}
