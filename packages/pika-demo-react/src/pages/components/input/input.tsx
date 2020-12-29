import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkInput } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class InputExample extends Component<any, any> {
    constructor() {
        // @ts-ignore
        super(...arguments);
        this.state = {
            value: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
        };
    }

    handleChange (value) {
        this.setState({
            value: value,
            value1: value,
            value2: value,
            value3: value,
            value4: value,
            value5: value,
        });
        // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
        return value
    }
    handleClick () {
        console.log(123);
    }

    render() {
        return (
            <View className='inputExample'>
                <ShowCom title='基本使用'>
                    <PkInput name='value'
                             title='标准五个字'
                             type='text'
                             maxLength={5}
                             placeholder='请输入5个字'
                             value={this.state.value}
                             onChange={this.handleChange.bind(this)}/>
                </ShowCom>
                <ShowCom title='不同输入框类型'>
                    <PkInput
                        name='value1'
                        title='文本'
                        type='text'
                        placeholder='单行文本'
                        value={this.state.value1}
                        onChange={this.handleChange.bind(this)}
                    />
                    <PkInput
                        name='value2'
                        title='数字'
                        type='number'
                        placeholder='请输入数字'
                        value={this.state.value2}
                        onChange={this.handleChange.bind(this)}
                    />
                    <PkInput
                        name='value3'
                        title='密码'
                        type='password'
                        placeholder='密码不能少于10位数'
                        value={this.state.value3}
                        onChange={this.handleChange.bind(this)}
                    />
                    <PkInput
                        name='value4'
                        title='身份证'
                        type='idcard'
                        placeholder='身份证号码'
                        value={this.state.value4}
                        onChange={this.handleChange.bind(this)}
                    />
                    <PkInput
                        name='value5'
                        title='小数'
                        type='digit'
                        placeholder='请输入小数'
                        value={this.state.value5}
                        onChange={this.handleChange.bind(this)}
                    />
                    <PkInput
                        name='value6'
                        border={false}
                        title='手机号码'
                        type='phone'
                        placeholder='手机号码'
                        value={this.state.value6}
                        onChange={this.handleChange.bind(this)}
                    />

                </ShowCom>
                <ShowCom title='不同状态'>
                    <PkInput
                        name='value6'
                        disabled
                        title='禁用'
                        type='text'
                        placeholder='禁止输入'
                        value={this.state.value1}
                        onChange={this.handleChange.bind(this)}
                    />
                    <PkInput
                        error
                        title='出现错误'
                        type='text'
                        placeholder='点击按钮触发回调'
                        value={this.state.value2}
                        onChange={this.handleChange}
                        onErrorClick={this.handleClick.bind(this)}
                    />
                    <PkInput
                        editable={false}
                        title='不可编辑'
                        type='text'
                        placeholder='不可编辑'
                        value={this.state.value3}
                        onChange={this.handleChange.bind(this)}
                    />
                    <PkInput
                        clear
                        border={false}
                        title='清除按钮'
                        placeholder='点击清除按钮清空内容'
                        type='text'
                        value={this.state.value4}
                        onChange={this.handleChange.bind(this)}
                    />
                    <PkInput
                        required
                        border={false}
                        title='必填项'
                        type='text' placeholder='必填项'
                        value={this.state.value5}
                        onChange={this.handleChange.bind(this)} />
                </ShowCom>
            </View>
        );
    }
}
