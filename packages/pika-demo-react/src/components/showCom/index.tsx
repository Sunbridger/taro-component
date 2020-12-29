import React, { Component } from "react";
import {View, Text} from "@tarojs/components";

import './showCom.scss';

export default class ShowCom extends Component<any, any>{
    static defaultProps = {
        title: '样例名称'
    };
    render() {
        const {title} = this.props;
        return (
            <View className='showCom'>
                <Text className='showCom-title'>{title}</Text>
                <View className='showCom-content'>
                    {this.props.children}
                </View>
            </View>
        )
    }
}
