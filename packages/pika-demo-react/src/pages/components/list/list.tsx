import React, { Component } from 'react';
import { CommonEvent, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { PkList } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

const { PkListItem } = PkList;

export default class ListExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    handleChange(e: CommonEvent) {
        Taro.showToast({
            title: `Change Switch: ${e.detail.value}`,
            icon: 'none',
        });
    }
    render() {
        return (
            <View className='_componentName_Example'>
                <ShowCom title='基本使用'>
                    <PkList>
                        <PkListItem title='标题文字' arrow='right' />
                        <PkListItem title='标题文字' extraText='详细信息' />
                        <PkListItem
                            title='禁用状态'
                            disabled
                            extraText='详细信息'
                        />
                    </PkList>
                </ShowCom>
                <ShowCom title='带描述信息'>
                    <PkList>
                        <PkListItem title='标题文字' note='描述信息' />
                        <PkListItem
                            title='标题文字'
                            note='描述信息'
                            arrow='right'
                        />
                        <PkListItem
                            arrow='right'
                            note='描述信息'
                            title='标题文字标题文字标题文字标题文字标题文字'
                            extraText='详细信息详细信息详细信息详细信息'
                        />
                    </PkList>
                </ShowCom>
                <ShowCom title='支持图标的 Item'>
                    <PkList>
                        <PkListItem
                            title='标题文字'
                            note='描述信息'
                            arrow='right'
                            iconInfo={{
                                size: 25,
                                color: '#78A4FA',
                                type: 'address',
                            }}
                        />
                        <PkListItem
                            title='标题文字'
                            note='描述信息'
                            extraText='详细信息'
                            arrow='right'
                            iconInfo={{
                                size: 25,
                                color: '#FF4949',
                                type: 'directory',
                            }}
                        />
                    </PkList>
                </ShowCom>
                <ShowCom title='包含图片'>
                    <PkList>
                        <PkListItem
                            title='标题文字'
                            arrow='right'
                            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                        />
                        <PkListItem
                            title='标题文字'
                            note='描述信息'
                            arrow='right'
                            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                        />
                        <PkListItem
                            title='标题文字'
                            note='描述信息'
                            extraText='详细信息'
                            arrow='right'
                            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                        />
                    </PkList>
                </ShowCom>
                <ShowCom title='无边框的 Item'>
                    <PkList hasBorder={false}>
                        <PkListItem
                            isSwitch
                            title='标题文字'
                            hasBorder={false}
                            onSwitchChange={this.handleChange}
                        />
                        <PkListItem
                            isSwitch
                            title='标题文字'
                            note='描述信息'
                            hasBorder={false}
                            onSwitchChange={this.handleChange}
                        />
                    </PkList>
                </ShowCom>
                <ShowCom title='带 Switch 的 Item'>
                    <PkList>
                        <PkListItem
                            title='标题文字'
                            isSwitch
                            onSwitchChange={this.handleChange}
                        />
                    </PkList>
                </ShowCom>
                <ShowCom title='带自定义内容的Item'>
                    <PkList>
                        <PkListItem
                            title='标题文字'
                            note='描述信息'
                            arrow='right'
                        >
                            <View>这是自定义内容</View>
                        </PkListItem>
                    </PkList>
                </ShowCom>
            </View>
        );
    }
}
