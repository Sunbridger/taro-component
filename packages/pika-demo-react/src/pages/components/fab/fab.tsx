import React, { Component } from 'react';
import { Image, View } from '@tarojs/components';
import { PkFab, PkIcon } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class FabExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render(): JSX.Element {
        return (
            <View className='fabExample'>
                <ShowCom title='自定义内容'>
                    <PkFab>
                        <Image
                            style={{ width: '24px', height: '24px' }}
                            src='//img.souche.com/f2e/a1e08a0b84f5a8dfeb150b31b64c7b82.png'
                        />
                        <View style={{ marginTop: '2px' }}>回顶部</View>
                    </PkFab>
                </ShowCom>
                <ShowCom title='自定义图标和内容'>
                    <PkFab
                        icon={<PkIcon type='heart' />}
                        style={{ bottom: '88px' }}
                    >
                        点赞
                    </PkFab>
                </ShowCom>
            </View>
        );
    }
}
