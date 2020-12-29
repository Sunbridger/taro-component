import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { PkPicker, PkPopup, PkButton } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

const customItem = () => <Text>hallo</Text>;
const customList = Array(10).fill(customItem);
export default class PickerExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            range: [1, 2, 3, 4, 5],
            val: [1],
            val1: [0, 2],
            val2: [2, 2],
            val3: [3, 3],
            visible: false,
        };
    }
    onConfirm = (val: number[]) => {
        this.setState({ visible: false, val });
    };
    onChange1 = (val1: number[]) => {
        this.setState({
            val1,
        });
    };
    render() {
        return (
            <View className='pickerExample'>
                <ShowCom title='弹出'>
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
                        <PkPicker
                            range={this.state.range}
                            value={this.state.val}
                            onCancel={(): void => {
                                this.setState({ visible: false });
                            }}
                            onConfirm={this.onConfirm}
                        />
                    </PkPopup>
                </ShowCom>
                <ShowCom title='禁用'>
                    <PkPicker
                        range={[1, 2, 3, 4, 5, 6]}
                        value={this.state.val}
                        disabled={true}
                    />
                </ShowCom>
                <ShowCom title='多列'>
                    <PkPicker
                        mode={'multiSelector'}
                        range={[
                            [1, 2, 3, 4, 5, 6],
                            [1, 2, 3, 4, 5, 6],
                        ]}
                        value={this.state.val1}
                        onColumnChange={this.onChange1}
                    />
                </ShowCom>
                <ShowCom title='多列 对象数组'>
                    <PkPicker
                        mode={'multiSelector'}
                        range={[
                            [
                                { code: 1, desc: 'a' },
                                { code: 2, desc: 'b' },
                                { code: 3, desc: 'c' },
                                { code: 4, desc: 'd' },
                                { code: 5, desc: 'e' },
                            ],
                            [
                                { code: 1, desc: 'a' },
                                { code: 2, desc: 'b' },
                                { code: 3, desc: 'c' },
                                { code: 4, desc: 'd' },
                                { code: 5, desc: 'e' },
                            ],
                        ]}
                        rangeKey={'desc'}
                        value={this.state.val2}
                    />
                </ShowCom>
                <ShowCom title='多列 自定义item'>
                    <PkPicker range={customList} value={this.state.val3} />
                </ShowCom>
            </View>
        );
    }
}
