import React, { Component } from 'react';
import { Text, View } from '@tarojs/components';
import { PkButton, PkDateTimePicker, PkPopup } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class DateTimePickerExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            val: '2020-10-23',
            start: '2020-10-11 10:20',
            visible: false,
        };
    }
    handleChange1 = val => {
        this.setState({ visible: false, val: val });
    };
    render() {
        return (
            <View className='date-time-pickerExample'>
                <ShowCom title='基本使用'>
                    <PkDateTimePicker />
                </ShowCom>
                <ShowCom title='弹出形式'>
                    <Text>{this.state.val}</Text>
                    <View>start: 2020-05-10 / end: 2021-01-11</View>
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
                        <PkDateTimePicker
                            onConfirm={this.handleChange1}
                            onCancel={(): void => {
                                this.setState({ visible: false });
                            }}
                            value={this.state.val}
                            start={'2020-11-10'}
                            end={'2021-01-11'}
                        />
                    </PkPopup>
                </ShowCom>
                <ShowCom title='disabled'>
                    <PkDateTimePicker disabled={true} />
                </ShowCom>
                <ShowCom title='开始/结束'>
                    <View>start: 2020-11-10 / end: 2020-11-11</View>
                    <PkDateTimePicker start={'2020-11-10'} end={'2020-11-11'} />
                </ShowCom>
            </View>
        );
    }
}
