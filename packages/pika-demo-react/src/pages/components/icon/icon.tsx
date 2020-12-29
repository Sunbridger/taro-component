import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkIcon } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class IconExample extends Component<any, any> {
    render(): JSX.Element {
        return (
            <View className='iconExample'>
                <ShowCom title='基本使用'>
                    <PkIcon color='#ff1c24' size={48} type='loading' />
                </ShowCom>
                <ShowCom title='旋转 90 度的图标'>
                    <PkIcon
                        color='#ff1c24'
                        rotate={90}
                        size={48}
                        type='loading'
                    />
                </ShowCom>
                <ShowCom title='带旋转动画的图标'>
                    <PkIcon color='#ff1c24' size={48} spin type='loading' />
                </ShowCom>
                <ShowCom title='图标概览'>
                    <View
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='delete' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='thumbtack' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='sort-arrow-up' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='sort-arrow-down' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='directory' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='heart' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='edit' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='more' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='help' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='load' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='address' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='star' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='filter' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='information' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='check' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='loading' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='warning' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='arrow-down' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='arrow-up' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='arrow-left' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='circle' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='circle-check' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='arrow-right' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='caret-top' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='search' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='caret-bottom' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='calendar' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='close' />
                        </View>
                        <View
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 8px 8px 0',
                                backgroundColor: '#f7f8fa',
                            }}
                        >
                            <PkIcon type='circle-close' />
                        </View>
                    </View>
                </ShowCom>
            </View>
        );
    }
}
