import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkForm, PkInput, PkButton } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class FormExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    onSubmit() {
        console.log(this.state.username, this.state.password);
    }
    onReset() {
        this.setState({
            username: '',
            password: '',
        });
    }
    render() {
        return (
            <View className='formExample'>
                <ShowCom title='基本使用'>
                    <PkForm
                        onSubmit={this.onSubmit.bind(this)}
                        onReset={this.onReset.bind(this)}
                        customStyle={''}
                    >
                        <PkInput
                            name='username'
                            title='用户名'
                            type='text'
                            value={this.state.username}
                            onChange={val => this.setState({ username: val })}
                        />
                        <PkInput
                            name='password'
                            title='密码'
                            type='password'
                            value={this.state.password}
                            onChange={val => this.setState({ password: val })}
                        />
                        <PkButton formType='submit'>提交</PkButton>
                        <PkButton formType='reset'>重置</PkButton>
                    </PkForm>
                </ShowCom>
            </View>
        );
    }
}
