import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkButton, PkOverlay } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class OverlayExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            visible1: false,
            visible2: false,
        };
    }
    handleOpenOverlay1 = (): void => {
        this.setState({
            visible1: true,
        });
    };
    handleOpenOverlay2 = (): void => {
        this.setState({
            visible2: true,
        });
    };
    handleHideOverlay1 = (): void => {
        this.setState({
            visible1: true,
        });
    };
    handleHideOverlay2 = (): void => {
        this.setState({
            visible2: true,
        });
    };
    render(): JSX.Element {
        return (
            <View>
                <ShowCom title='遮罩层'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible1: true });
                        }}
                    >
                        点击显示遮罩层
                    </PkButton>
                    <PkOverlay
                        visible={this.state.visible1}
                        onClick={(): void => {
                            this.setState({
                                visible1: false,
                            });
                        }}
                    />
                </ShowCom>
                <ShowCom title='自定义 children 的遮罩层'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible2: true });
                        }}
                    >
                        点击显示带自定义 children 的遮罩层
                    </PkButton>
                    <PkOverlay
                        visible={this.state.visible2}
                        onClick={(): void => {
                            this.setState({
                                visible2: false,
                            });
                        }}
                    >
                        <View
                            style={{
                                width: '200px',
                                height: '200px',
                                margin: '100px auto 0 auto',
                                backgroundColor: '#fff',
                            }}
                        />
                    </PkOverlay>
                </ShowCom>
            </View>
        );
    }
}
