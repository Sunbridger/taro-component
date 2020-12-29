import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkButton, PkToast, PkIcon } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class ToastExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
            visible7: false,
            visible8: false,
        };
    }
    handleHideToast1 = (): void => {
        this.setState({ visible1: false });
    };
    handleHideToast2 = (): void => {
        this.setState({ visible2: false });
    };
    handleHideToast3 = (): void => {
        this.setState({ visible3: false });
    };
    handleHideToast4 = (): void => {
        this.setState({ visible4: false });
    };
    handleHideToast5 = (): void => {
        this.setState({ visible5: false });
    };
    handleHideToast6 = (): void => {
        this.setState({ visible6: false });
    };
    handleHideToast7 = (): void => {
        this.setState({ visible7: false });
    };
    handleHideToast8 = (): void => {
        this.setState({ visible8: false });
    };
    render(): JSX.Element {
        return (
            <View className='toastExample'>
                <ShowCom title='单行文本提示'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible1: true });
                        }}
                    >
                        点击显示单行文本提示
                    </PkButton>
                    <PkToast
                        text='这里是提示'
                        visible={this.state.visible1}
                        duration={2000}
                        onClose={this.handleHideToast1}
                    />
                </ShowCom>
                <ShowCom title='多行文本提示'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible2: true });
                        }}
                    >
                        点击显示多行文本提示
                    </PkButton>
                    <PkToast
                        text='这里是提示这里是提示这里是提示这里是提示'
                        visible={this.state.visible2}
                        duration={2000}
                        onClose={this.handleHideToast2}
                    />
                </ShowCom>
                <ShowCom title='加载中提示'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible3: true });
                        }}
                    >
                        点击显示加载中提示
                    </PkButton>
                    <PkToast
                        text='加载中...'
                        type='loading'
                        visible={this.state.visible3}
                        duration={2000}
                        onClose={this.handleHideToast3}
                    />
                </ShowCom>
                <ShowCom title='成功提示'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible4: true });
                        }}
                    >
                        点击显示成功提示
                    </PkButton>
                    <PkToast
                        text='保存成功'
                        type='succeed'
                        visible={this.state.visible4}
                        duration={2000}
                        onClose={this.handleHideToast4}
                    />
                </ShowCom>
                <ShowCom title='失败提示'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible5: true });
                        }}
                    >
                        点击显示失败提示
                    </PkButton>
                    <PkToast
                        text='保存失败'
                        type='failed'
                        visible={this.state.visible5}
                        duration={2000}
                        onClose={this.handleHideToast5}
                    />
                </ShowCom>
                <ShowCom title='自定义图标的提示'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible6: true });
                        }}
                    >
                        点击显示自定义图标的提示
                    </PkButton>
                    <PkToast
                        icon={<PkIcon type='heart' />}
                        text='点赞成功'
                        visible={this.state.visible6}
                        duration={2000}
                        onClose={this.handleHideToast6}
                    />
                </ShowCom>
                <ShowCom title='带图标的多行提示'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible7: true });
                        }}
                    >
                        点击显示带图标的多行提示
                    </PkButton>
                    <PkToast
                        icon={<PkIcon type='thumbtack' />}
                        text='这里是提示这里是提示'
                        visible={this.state.visible7}
                        duration={2000}
                        onClose={this.handleHideToast7}
                    />
                </ShowCom>
                <ShowCom title='字母提示'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible8: true });
                        }}
                    >
                        点击显示字母提示
                    </PkButton>
                    <PkToast
                        visible={this.state.visible8}
                        duration={2000}
                        onClose={this.handleHideToast8}
                    >
                        A
                    </PkToast>
                </ShowCom>
            </View>
        );
    }
}
