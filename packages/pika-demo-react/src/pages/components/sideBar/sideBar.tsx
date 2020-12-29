import React, { Component } from 'react';
import { View, Image } from '@tarojs/components';
import { PkSideBar } from '@souche/pika-react';
// import ShowCom from '../../../components/showCom';
import './sideBar.scss';

export default class SideBarExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            list: [
                {
                    title: '内容1',
                    titleRender: (active: boolean) => {
                        return this.renderTitle('内容1', active);
                    },
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    childRender: () => {},
                },
                {
                    title: '内容2',
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    childRender: () => {},
                },
            ],
        };
    }
    renderTitle(title: string, active: boolean) {
        return (
            <View className='self__title'>
                <View>{title}</View>
                {active ? (
                    <Image
                        className='label__image'
                        src='//img.souche.com/f2e/4dee8b668890eb527a5fd64e13c29c28.png'
                    />
                ) : null}
            </View>
        );
    }
    render() {
        const { list } = this.state;
        return (
            <View className='sideBarExample'>
                <PkSideBar list={list} />
            </View>
        );
    }
}
