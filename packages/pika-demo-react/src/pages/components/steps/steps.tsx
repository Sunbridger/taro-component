import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkSteps } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';
import './steps.scss';

export default class StepsExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            current: 0,
        };
    }
    render() {
        const items = [
            {
                title: '步骤一',
                desc: '这里是额外的信息，最多两行',
                showIndex: true,
                // status: 'done',
            },
            {
                title: '步骤二',
                showIndex: true,
                desc: '这里是额外的信息，最多两行',
            },
            {
                title: '步骤三',
                desc: '这里是额外的信息，最多两行',
                showIndex: true,
                // status: 'disabled',
            },
        ];
        const itemsIcon = [
            {
                title: '步骤一',
                icon: {
                    type: 'heart',
                    activeColor: '#fff',
                    inactiveColor: '#999',
                    size: 12,
                },
            },
            {
                title: '步骤二',
                icon: {
                    type: 'close',
                    activeColor: '#fff',
                    inactiveColor: '#999',
                    size: 12,
                },
            },
            {
                title: '步骤三',
                icon: {
                    type: 'check',
                    activeColor: '#fff',
                    inactiveColor: '#999',
                    size: 12,
                },
            },
        ];
        const itemsStatus = [
            {
                title: 'success',
                status: 'success',
            },
            {
                title: 'done',
                status: 'done',
            },
            {
                title: 'failed',
                status: 'failed',
            },
            {
                title: 'disabled',
                status: 'disabled',
            },
            {
                title: '默认',
            },
        ];
        return (
            <View className='stepsExample'>
                <ShowCom title='基本使用' className='container'>
                    <PkSteps items={items} current={1} />
                </ShowCom>
                <ShowCom title='onChange改变当前步骤索引' className='container'>
                    <PkSteps
                        items={items}
                        current={this.state.current}
                        onChange={index => this.setState({ current: index })}
                    />
                </ShowCom>
                <ShowCom title='自定义图标' className='container'>
                    <PkSteps items={itemsIcon} current={2} />
                </ShowCom>
                <ShowCom title='状态步骤条' className='container'>
                    <PkSteps items={itemsStatus} />
                </ShowCom>
            </View>
        );
    }
}
