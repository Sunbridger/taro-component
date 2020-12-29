import React, { Component } from 'react';
import { View, Input } from '@tarojs/components';
import { PkSticky, PkList } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';
import './sticky.scss';

const { PkListItem } = PkList;

export default class StickyExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            compatibleWith: false,
            disTop: 0,
        };
    }
    handleChange(key, e) {
        this.setState({
            [key]: e.detail.value,
        });
    }
    render() {
        const { compatibleWith, disTop } = this.state;
        return (
            <View className='stickyExample'>
                <View className='stickyWrapper'>
                    <ShowCom title='基本使用'>
                        <View className='wrapper'>
                            <PkSticky
                                compatibilityMode={compatibleWith}
                                top={disTop}
                            >
                                <View className='content'>置顶内容</View>
                            </PkSticky>
                        </View>
                    </ShowCom>
                    <PkList>
                        <PkListItem
                            title='兼容模式(scrollView需要使用该模式)'
                            isSwitch
                            switchIsCheck={compatibleWith}
                            onSwitchChange={this.handleChange.bind(
                                this,
                                'compatibleWith'
                            )}
                        />
                        <PkListItem title='距离顶部距离'>
                            <Input
                                value={disTop}
                                type='number'
                                onInput={this.handleChange.bind(this, 'disTop')}
                            />
                        </PkListItem>
                    </PkList>
                </View>
            </View>
        );
    }
}
