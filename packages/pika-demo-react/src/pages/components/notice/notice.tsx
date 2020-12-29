import React, { Component } from 'react';
import { View, Text, Button } from '@tarojs/components';
import { PkNotice } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class NoticeExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <View className='noticeExample'>
                <ShowCom title='基本使用' className='container'>
                    <PkNotice text='default'></PkNotice>
                    <PkNotice type='info' text='info'></PkNotice>
                    <PkNotice type='success' text='success'></PkNotice>
                    <PkNotice type='warn' text='warn'></PkNotice>
                </ShowCom>
                <ShowCom title='跑马灯' className='container'>
                    <PkNotice
                        duration={8}
                        scroll
                        text='这是 Notice 提示文字，这是 Notice 提示文字，这是 Notice
                        提示文字这是 Notice 提示文字，这是 Notice 提示文字，这是
                        Notice 提示文字'
                    ></PkNotice>
                    <PkNotice
                        type='info'
                        icon='heart'
                        duration={12}
                        scroll
                        text='这是 Notice 提示文字，这是 Notice 提示文字，这是 Notice
                        提示文字这是 Notice 提示文字，这是 Notice 提示文字，这是
                        Notice 提示文字'
                    ></PkNotice>
                </ShowCom>
                <ShowCom title='图标' className='container'>
                    <PkNotice
                        icon='heart'
                        single
                        text='[单行]这是 Notice 提示文字，这是 Notice 提示文字，这是 Notice
                        提示文字这是 Notice 提示文字，这是 Notice 提示文字，这是
                        Notice 提示文字'
                    ></PkNotice>
                    <PkNotice
                        type='info'
                        icon='heart'
                        text='[多行]这是 Notice 提示文字，这是 Notice 提示文字，这是
                        Notice 提示文字这是 Notice 提示文字，这是 Notice
                        提示文字，这是 Notice 提示文字'
                    ></PkNotice>
                </ShowCom>
                <ShowCom title='关闭' className='container'>
                    <PkNotice
                        single
                        close
                        text='[单行]这是 Notice 提示文字，这是 Notice 提示文字，这是
                        Notice 提示文字这是 Notice 提示文字，这是 Notice
                        提示文字，这是 Notice 提示文字'
                    ></PkNotice>
                    <PkNotice
                        type='info'
                        close
                        text='[多行]这是 Notice 提示文字，这是 Notice 提示文字，这是
                        Notice 提示文字这是 Notice 提示文字，这是 Notice
                        提示文字，这是 Notice 提示文字'
                    ></PkNotice>
                </ShowCom>
                <ShowCom title='更多操作' className='container'>
                    <PkNotice
                        icon='heart'
                        close
                        single
                        text='[单行]这是 Notice 提示文字，这是 Notice 提示文字，这是
                        Notice 提示文字这是 Notice 提示文字，这是 Notice
                        提示文字，这是 Notice 提示文字'
                    >
                        <Button
                            style={{
                                width: '56px',
                                height: '24px',
                                fontSize: '10px',
                                lineHeight: '24px',
                            }}
                        >
                            按钮
                        </Button>
                    </PkNotice>
                    <PkNotice
                        icon='heart'
                        type='info'
                        close
                        text='[多行]这是 Notice 提示文字，这是 Notice 提示文字，这是
                        Notice 提示文字这是 Notice 提示文字，这是 Notice
                        提示文字，这是 Notice 提示文字'
                    >
                        <Text
                            style={{
                                fontSize: '12px',
                                lineHeight: 1.5,
                                verticalAlign: 'middle',
                            }}
                        >
                            更多
                        </Text>
                    </PkNotice>
                </ShowCom>
            </View>
        );
    }
}
