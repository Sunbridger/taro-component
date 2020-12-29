import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { PkDatePicker, PkButton, PkPopup } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class DatePickerExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            val: '2020-10-23',
            start: '2020-10-11',
            visible: false,
        };
    }

    handleChange = date => {
        this.setState({
            val: date,
        });
    };

    handleChange1 = val => {
        this.setState({ visible: false, val: val });
    };

    render() {
        return (
            <View className='date-pickerExample'>
                <ShowCom title='基本使用'>
                    <Text>{this.state.val}</Text>
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
                        <PkDatePicker
                            onConfirm={this.handleChange1}
                            onCancel={(): void => {
                                this.setState({ visible: false });
                            }}
                            value={this.state.val}
                            start={this.state.start}
                        />
                    </PkPopup>
                </ShowCom>
                <ShowCom title='start=2021-10-30'>
                    <PkDatePicker start='2021-10-30' end='2030-11-10' />
                </ShowCom>
                <ShowCom title='disabled'>
                    <PkDatePicker fields='year' disabled={true} />
                </ShowCom>
                <ShowCom title='年'>
                    <PkDatePicker fields='year' start='1994' end='2020' />
                </ShowCom>
                <ShowCom title='年/月'>
                    <PkDatePicker fields='month' />
                </ShowCom>
            </View>
        );
    }
}
