import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkButton, PkIcon } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class ButtonExample extends Component<any, any> {
    render(): JSX.Element {
        return (
            <View className='buttonExample'>
                <ShowCom title='小按钮'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        按钮最小宽度：96px，按钮高度：48px，文案边距：20px，字号：24px
                        medium
                    </View>
                    <PkButton size='small'>按钮</PkButton>
                </ShowCom>
                <ShowCom title='中按钮'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        按钮最小宽度：120px，按钮高度：64px，文案边距：24px，字号：28px
                        medium
                    </View>
                    <PkButton size='medium'>按钮</PkButton>
                </ShowCom>
                <ShowCom title='大按钮'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        按钮最小宽度：144px，按钮高度：80px，文案边距：32px，字号：32px
                        medium
                    </View>
                    <PkButton size='large'>按钮</PkButton>
                </ShowCom>
                <ShowCom title='主要按钮'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        背景颜色：主题色，文字颜色：#fff；按下时，背景颜色：主题色叠加
                        20% #000
                    </View>
                    <PkButton type='primary'>按钮</PkButton>
                </ShowCom>
                <ShowCom title='禁用状态下的主要按钮'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        背景色：主题色，透明度：40%，文字颜色：#fff，透明度：40%
                    </View>
                    <PkButton disabled type='primary'>
                        按钮
                    </PkButton>
                </ShowCom>
                <ShowCom title='loading 状态下的主要按钮'>
                    <PkButton loading type='primary'>
                        按钮
                    </PkButton>
                </ShowCom>
                <ShowCom title='disabled 和 loading 共同状态下的主要按钮'>
                    <PkButton disabled loading type='primary'>
                        按钮
                    </PkButton>
                </ShowCom>
                <ShowCom title='次要按钮'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        背景颜色：#f2f3f5，文字颜色：#000；按下时，背景颜色：#f2f3f5
                        叠加 20% #000
                    </View>
                    <PkButton type='secondary'>按钮</PkButton>
                </ShowCom>
                <ShowCom title='禁用状态下的次要按钮'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        背景颜色：#f2f3f5，透明度：40%，文字颜色：#000，透明度：40%
                    </View>
                    <PkButton disabled type='secondary'>
                        按钮
                    </PkButton>
                </ShowCom>
                <ShowCom title='loading 状态下的次要按钮'>
                    <PkButton loading type='secondary'>
                        按钮
                    </PkButton>
                </ShowCom>
                <ShowCom title='disabled 和 loading 共同状态下的次要按钮'>
                    <PkButton disabled loading type='secondary'>
                        按钮
                    </PkButton>
                </ShowCom>
                <ShowCom title='线性按钮'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        边框颜色：主题色，背景颜色：#fff，文字颜色：主题色；按下时，边框颜色：主题色叠加
                        20% #000，文字颜色叠加 20% #000
                    </View>
                    <PkButton type='linear'>按钮</PkButton>
                </ShowCom>
                <ShowCom title='禁用状态下的线性按钮'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        边框颜色：主题色，透明度：40%，文字颜色：主题色，透明度：40%
                    </View>
                    <PkButton disabled type='linear'>
                        按钮
                    </PkButton>
                </ShowCom>
                <ShowCom title='loading 状态下的线性按钮'>
                    <PkButton loading type='linear'>
                        按钮
                    </PkButton>
                </ShowCom>
                <ShowCom title='disabled 和 loading 共同状态下的线性按钮'>
                    <PkButton disabled loading type='linear'>
                        按钮
                    </PkButton>
                </ShowCom>
                <ShowCom title='文本按钮'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        文字颜色：主题色；按下时：文字颜色叠加 20% #000
                    </View>
                    <PkButton type='text'>按钮</PkButton>
                </ShowCom>
                <ShowCom title='禁用状态下的文本按钮'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        文字颜色：主题色，透明度：40%
                    </View>
                    <PkButton disabled type='text'>
                        按钮
                    </PkButton>
                </ShowCom>
                <ShowCom title='loading 状态下的文本按钮'>
                    <PkButton loading type='text'>
                        按钮
                    </PkButton>
                </ShowCom>
                <ShowCom title='disabled 和 loading 共同状态下的文本按钮'>
                    <PkButton disabled loading type='text'>
                        按钮
                    </PkButton>
                </ShowCom>
                <ShowCom title='带图标的按钮'>
                    <PkButton icon={<PkIcon type='heart' />}>按钮</PkButton>
                </ShowCom>
                <ShowCom title='镂空按钮'>
                    <PkButton plain type='linear'>
                        按钮
                    </PkButton>
                </ShowCom>
                <ShowCom title='固定宽度的按钮'>
                    <PkButton style={{ width: '200px' }}>按钮</PkButton>
                </ShowCom>
                <ShowCom title='扁平的按钮'>
                    <PkButton
                        size='large'
                        type='primary'
                        style={{
                            width: '100%',
                            height: '52px',
                            borderRadius: 0,
                            backgroundColor: '#f7f8fa',
                            fontSize: '16px',
                            color: '#000',
                        }}
                    >
                        按钮
                    </PkButton>
                </ShowCom>
            </View>
        );
    }
}
