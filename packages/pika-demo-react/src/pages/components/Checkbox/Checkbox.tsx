import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkCheckbox } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class CheckboxExample extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            checkedList: ['list1'],
            checkboxOption: [
                {
                    value: 'list1',
                    label: 'iPhone X',
                },
                {
                    value: 'list2',
                    label: 'HUAWEI P20',
                },
                {
                    value: 'list3',
                    label: 'OPPO Find X',
                    disabled: true,
                },
                {
                    value: 'list4',
                    label: 'vivo NEX',
                    desc:
                        '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
                    disabled: true,
                },
            ],
        };
    }
    handleChange(value) {
        this.setState({
            checkedList: value,
        });
    }
    render() {
        return (
            <View className='CheckboxExample'>
                <ShowCom title='基本使用'>
                    <PkCheckbox
                        options={this.state.checkboxOption}
                        selectedList={this.state.checkedList}
                        onChange={this.handleChange.bind(this)}
                    />
                </ShowCom>
            </View>
        );
    }
}
