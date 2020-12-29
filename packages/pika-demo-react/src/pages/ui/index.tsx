import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Button, ScrollView } from '@tarojs/components';
import componentsConfig from '../../../components.json';
import './index.scss';

export default class Ui extends Component<any, any> {
    constructor(props, states) {
        super(props, states);
        this.state = {
            list: componentsConfig,
        };
    }

    public onGoUiDetail(router: any): void {
        Taro.navigateTo({
            url: router,
        });
    }

    public render(): JSX.Element {
        const {
            list: { ui },
        } = this.state;
        return (
            <View className='ui_list'>
                <View className='ui_list_header'>
                    <View className='icon' />
                </View>
                <ScrollView className='ui_list_body' scrollY>
                    {ui.map(item => {
                        return (
                            <View
                                className='ui_list_content'
                                key={item.category}
                            >
                                <View className='ui_list_content_title'>
                                    <View
                                        className='ui_list_content_title_icon'
                                        style={{
                                            backgroundImage: `url(${item.icon})`,
                                        }}
                                    />
                                    <Text>{item.name}</Text>
                                </View>
                                {item.list
                                    .filter(item => !item.disable)
                                    .map(item => {
                                        return (
                                            <Button
                                                className='ui_list_btn'
                                                key={item.chinese}
                                                onClick={this.onGoUiDetail.bind(
                                                    this,
                                                    item.path
                                                )}
                                            >
                                                <Text>{item.chinese}</Text>
                                            </Button>
                                        );
                                    })}
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}
