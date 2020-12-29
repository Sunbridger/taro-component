import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkTextarea } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class TextareaExample extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            value1: '',
            value2: '',
            value3: ''
        }
    }

    handleChange1 (value) {
        this.setState({
            value1: value
        })
    }

    handleChange2 (value) {
        this.setState({
            value2: value
        })
    }

    handleChange3 (value) {
        this.setState({
            value3: value
        })
    }

    render() {
        return (
            <View className='textareaExample'>
                <ShowCom title='基本使用'>
                    <PkTextarea value={this.state.value1}
                                onChange={this.handleChange1.bind(this)}
                                maxLength={200}
                                placeholder='你的问题是...'/>
                </ShowCom>

                <ShowCom title='不显示字数'>
                    <PkTextarea value={this.state.value2}
                                onChange={this.handleChange2.bind(this)}
                                count={false}
                                maxLength={200}
                                placeholder='你的问题是...'/>
                </ShowCom>

                <ShowCom title='文字超出仍可以输入'>
                    <PkTextarea value={this.state.value3}
                                onChange={this.handleChange3.bind(this)}
                                maxLength={200}
                                textOverflowForbidden={false}
                                placeholder='你的问题是...'/>
                </ShowCom>
            </View>
        );
    }
}
