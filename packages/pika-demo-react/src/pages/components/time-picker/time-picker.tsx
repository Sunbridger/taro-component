import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { PkTimePicker, PkButton, PkPopup } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class TimePickerExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: '20:59',
            visible: false,
        };
    }
    handleChange = (val: string) => {
        this.setState({
            value: val,
            visible: false,
        });
    };
    render() {
        return (
            <View className='time-pickerExample'>
                <ShowCom title='基本使用'>
                    <Text>start = 21:58/{this.state.value}</Text>
                    <PkButton
                        onClick={(): void => {
                            this.setState({ visible: true });
                        }}
                    >
                        弹出
                    </PkButton>
                    <PkPopup
                        visible={this.state.visible}
                        onClickMask={(): void => {
                            this.setState({ visible: false });
                        }}
                    >
                        <PkTimePicker
                            value={this.state.value}
                            start='21:58'
                            onConfirm={this.handleChange}
                            title='时间'
                            onCancel={(): void => {
                                this.setState({ visible: false });
                            }}
                        />
                    </PkPopup>
                </ShowCom>
                <ShowCom title='禁用'>
                    <PkTimePicker disabled={true} />
                </ShowCom>
            </View>
        );
    }
}
