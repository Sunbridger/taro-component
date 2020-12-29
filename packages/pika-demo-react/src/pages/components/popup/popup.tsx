import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkButton, PkPopup } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class PopupExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false,
        };
    }
    handleHidePopup1 = (): void => {
        this.setState({
            visible1: false,
        });
    };
    handleHidePopup2 = (): void => {
        this.setState({
            visible2: false,
        });
    };
    handleHidePopup3 = (): void => {
        this.setState({
            visible3: false,
        });
    };
    handleHidePopup4 = (): void => {
        this.setState({
            visible4: false,
        });
    };
    render(): JSX.Element {
        return (
            <View className='popupExample'>
                <ShowCom title='上弹出层'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible1: true });
                        }}
                    >
                        点击显示上弹出层
                    </PkButton>
                    <PkPopup
                        position='top'
                        visible={this.state.visible1}
                        onClose={this.handleHidePopup1}
                    />
                </ShowCom>
                <ShowCom title='右弹出层'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible2: true });
                        }}
                    >
                        点击显示右弹出层
                    </PkButton>
                    <PkPopup
                        position='right'
                        visible={this.state.visible2}
                        onClose={this.handleHidePopup2}
                    />
                </ShowCom>
                <ShowCom title='下弹出层'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible3: true });
                        }}
                    >
                        点击显示下弹出层
                    </PkButton>
                    <PkPopup
                        position='bottom'
                        visible={this.state.visible3}
                        onClose={this.handleHidePopup3}
                    />
                </ShowCom>
                <ShowCom title='左弹出层'>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible4: true });
                        }}
                    >
                        点击显示左弹出层
                    </PkButton>
                    <PkPopup
                        position='left'
                        visible={this.state.visible4}
                        onClose={this.handleHidePopup4}
                    />
                </ShowCom>
            </View>
        );
    }
}
