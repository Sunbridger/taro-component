import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkRadio } from '@souche/pika-react';
import './radio.scss';

export default class RadioExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: '',
        };
    }
    handleChange(value) {
        this.setState({
            value,
        });
    }
    render() {
        return (
            <View className='radio-example'>
                <View className='title'>基本使用</View>
                <View className='radio-example-container'>
                    <PkRadio
                        options={[
                            {
                                label: '单选项一',
                                value: 'option1',
                                // desc: '单选项描述',
                            },
                            { label: '单选项二', value: 'option2' },
                            {
                                label: '单选项三禁用',
                                value: 'option3',
                                // desc: '单选项描述',
                                disabled: true,
                            },
                        ]}
                        title='是否换置新车'
                        value={this.state.value}
                        onClick={this.handleChange.bind(this)}
                    />
                </View>
            </View>
        );
    }
}
