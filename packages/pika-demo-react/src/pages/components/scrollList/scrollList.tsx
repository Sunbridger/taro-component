import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkScrollList } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class ScrollListExample extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            startNumber: 0,
            list: [],
        };
        this.handleRefresherRefresh = this.handleRefresherRefresh.bind(this);
    }
    componentDidMount() {
        this.getList({
            a: 1,
        }).then(result => {
            if (Array.isArray(result)) {
                this.setState({
                    list: result,
                });
            }
        });
    }
    getList(params: any) {
        return new Promise((resolve, reject) => {
            const random = Math.random();
            const isSuccess = random >= 0.2;

            setTimeout(() => {
                const result: Array<number> = [];
                for (
                    let i = this.state.startNumber;
                    i < this.state.startNumber + 20;
                    i++
                ) {
                    result.push(i);
                }
                if (isSuccess && params) {
                    resolve(result);
                    this.setState({
                        startNumber: result[result.length - 1],
                    });
                } else {
                    reject({
                        code: 500,
                        success: false,
                        message: '未知异常',
                    });
                }
            }, 2000);
        });
    }
    handleRefresherRefresh() {
        return this.getList({
            a: 1,
        }).then(result => {
            if (Array.isArray(result)) {
                this.setState({
                    list: result,
                });
            }
        });
    }
    render() {
        return (
            <View className='listExample'>
                <ShowCom title='基本使用'>
                    <PkScrollList
                        style={{ height: '400px' }}
                        scrollY
                        refresherEnabled
                        onRefresherRefresh={this.handleRefresherRefresh}
                    >
                        {this.state.list.map(item => (
                            <View key={item} style={{ height: '50px' }}>
                                {item}
                            </View>
                        ))}
                    </PkScrollList>
                </ShowCom>
            </View>
        );
    }
}
