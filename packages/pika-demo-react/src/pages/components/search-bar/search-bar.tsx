import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkSearchBar } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class SearchBarExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: '',
        };
    }
    onChange(value) {
        this.setState({
            value: value,
        });
    }
    onActionClick() {
        Taro.showToast({
            title: '开始搜索',
        });
    }
    render() {
        return (
            <View className='search-barExample'>
                <ShowCom title='基本使用'>
                    <PkSearchBar
                        value={this.state.value}
                        onChange={this.onChange.bind(this)}
                    />
                </ShowCom>
                <ShowCom title='自定义按钮文字和点击事件'>
                    <PkSearchBar
                        value={this.state.value}
                        actionName='搜一下'
                        onActionClick={this.onActionClick.bind(this)}
                        onChange={this.onChange.bind(this)}
                    />
                </ShowCom>
                <ShowCom title='自定义按钮文字和点击事件'>
                    <PkSearchBar
                        value={this.state.value}
                        showActionButton
                        onActionClick={this.onActionClick.bind(this)}
                        onChange={this.onChange.bind(this)}
                    />
                </ShowCom>
                <ShowCom title='自定义输入框类型'>
                    <PkSearchBar
                        value={this.state.value}
                        inputType='number'
                        onActionClick={this.onActionClick.bind(this)}
                        onChange={this.onChange.bind(this)}
                    />
                </ShowCom>
            </View>
        );
    }
}
