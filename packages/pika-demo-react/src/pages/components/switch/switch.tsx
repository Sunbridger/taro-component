import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkSwitch } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class SwitchExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            switchVal: true,
            switchVal1: false,
            switchVal2: true,
            switchVal3: true,
        };
    }
    handleChange = (val: boolean) => {
        this.setState({
            switchVal: val,
        });
    };
    handleChange1 = (val: boolean) => {
        this.setState({
            switchVal1: val,
        });
    };
    handleChange2 = (val: boolean) => {
        this.setState({
            switchVal3: val,
        });
    };
    render() {
        const { switchVal, switchVal1, switchVal2, switchVal3 } = this.state;
        return (
            <View>
                <ShowCom title='单独使用'>
                    <PkSwitch
                        alone={true}
                        checked={switchVal}
                        onChange={this.handleChange}
                    />
                </ShowCom>
                <ShowCom title='基本使用'>
                    <PkSwitch
                        title={'开关'}
                        checked={switchVal1}
                        onChange={this.handleChange1}
                    />
                    <PkSwitch
                        title={'禁用'}
                        checked={switchVal2}
                        disabled={true}
                        color={'#ffc400'}
                        border={false}
                    />
                    <PkSwitch
                        title={'自定义'}
                        checked={switchVal3}
                        onChange={this.handleChange2}
                        color={'#ffc400'}
                        border={false}
                        customStyle={'backgroundColor: #6190e8; fontSize: 40px'}
                    />
                </ShowCom>
            </View>
        );
    }
}
