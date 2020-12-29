import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkButton, PkDialog } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class DialogExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false,
        };
    }
    handleHideDialog1 = (): void => {
        this.setState({
            visible1: false,
        });
    };
    handleHideDialog2 = (): void => {
        this.setState({
            visible2: false,
        });
    };
    handleHideDialog3 = (): void => {
        this.setState({
            visible3: false,
        });
    };
    handleHideDialog4 = (): void => {
        this.setState({
            visible4: false,
        });
    };
    render(): JSX.Element {
        return (
            <View className='dialogExample'>
                <ShowCom title='基本使用'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible1: true });
                        }}
                    >
                        点击显示对话框
                    </PkButton>
                    <PkDialog
                        confirmText='我已阅读'
                        content='大风车规范协议是一个非常重要的协议，它关系到很多重要的规范和协议，请认真阅读，阅读完成后点击我已阅读按钮即可关闭对话框'
                        title='大风车规范协议'
                        visible={this.state.visible1}
                        onClose={this.handleHideDialog1}
                    />
                </ShowCom>
                <ShowCom title='没有标题的对话框'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible2: true });
                        }}
                    >
                        点击显示没有标题的对话框
                    </PkButton>
                    <PkDialog
                        confirmText='我已阅读'
                        content='大风车规范协议是一个非常重要的协议，它关系到很多重要的规范和协议，请认真阅读，阅读完成后点击我已阅读按钮即可关闭对话框'
                        visible={this.state.visible2}
                        onClose={this.handleHideDialog2}
                    />
                </ShowCom>
                <ShowCom title='没有内容的对话框'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible3: true });
                        }}
                    >
                        点击显示没有内容的对话框
                    </PkButton>
                    <PkDialog
                        confirmText='我已阅读'
                        title='大风车规范协议'
                        visible={this.state.visible3}
                        onClose={this.handleHideDialog3}
                    />
                </ShowCom>
                <ShowCom title='没有取消按钮的对话框'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible4: true });
                        }}
                    >
                        点击显示没有取消按钮的对话框
                    </PkButton>
                    <PkDialog
                        confirmText='我已阅读'
                        content='大风车规范协议是一个非常重要的协议，它关系到很多重要的规范和协议，请认真阅读，阅读完成后点击我已阅读按钮即可关闭对话框'
                        needCancel={false}
                        title='大风车规范协议'
                        visible={this.state.visible4}
                        onClose={this.handleHideDialog4}
                    />
                </ShowCom>
            </View>
        );
    }
}
