import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkRange } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class RangeExample extends Component<any, any> {
    constructor () {
        // @ts-ignore
        super(...arguments)
        this.state = {
            isOpened: false,
            text: '',
            value: [20, 60]
        }
    }
    handleChange (value) {
        this.setState({
            isOpened: true,
            text: `${value[0]}~${value[1]}`,
            value
        })
    }
    render() {
        const { value } = this.state;
        return (
            <View className='rangeExample'>
                <ShowCom title='基本使用'>
                    <PkRange value={value}
                             unit='年'
                             min={0}
                             max={100}
                             onChange={this.handleChange.bind(this)}/>
                </ShowCom>
            </View>
        );
    }
}
