import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { PkBadge } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class BadgeExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <View className='badgeExample'>
                <ShowCom title='小红点'>
                    <PkBadge dot>
                        <Button>按钮</Button>
                    </PkBadge>
                </ShowCom>
                <ShowCom title='数字'>
                    <PkBadge value={80}>
                        <Button>按钮</Button>
                    </PkBadge>
                </ShowCom>
                <ShowCom title='最大数字'>
                    <PkBadge value={180} maxValue={100}>
                        <Button>按钮</Button>
                    </PkBadge>
                    <PkBadge value={90} maxValue={100}>
                        <Button style={{ marginLeft: '40px' }}>按钮</Button>
                    </PkBadge>
                </ShowCom>
                <ShowCom title='自定义偏移值'>
                    <PkBadge
                        value={90}
                        x={Taro.pxTransform(10)}
                        y={Taro.pxTransform(10)}
                    >
                        <Button>按钮</Button>
                    </PkBadge>
                </ShowCom>
            </View>
        );
    }
}
