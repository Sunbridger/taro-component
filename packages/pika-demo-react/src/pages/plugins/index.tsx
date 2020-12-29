import React, { Component } from 'react';
import { Button, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import componentsConfig from '../../../components.json';
import './index.scss';

export default class Plugins extends Component<any, any> {
    constructor(props, states) {
        super(props, states);
        this.state = {
            list: componentsConfig,
        };
    }
    public onGoUiDetail(router: any) {
        Taro.navigateTo({
            url: router,
        });
    }

    public render(): JSX.Element {
        const {
            list: { plugin },
        } = this.state;
        return (
            <View className='plugin_list'>
                {plugin.map(item => {
                    return (
                        <Button
                            className='plugin_list_btn'
                            key={item.chinese}
                            onClick={this.onGoUiDetail.bind(this, item.path)}
                        >
                            <Text>{item.chinese}</Text>
                        </Button>
                    );
                })}
            </View>
        );
    }
}
