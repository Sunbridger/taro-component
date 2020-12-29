import React, { Component } from 'react';
import { View, Image } from '@tarojs/components';
import { PkSwiper, PkList } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';
import Taro from '@tarojs/taro';
import './swiper.scss';

const { PkListItem } = PkList;

export default class SwiperExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            current: 1,
            duration: 500,
            interval: 5000,
            isCircular: false,
            isAutoplay: false,
            hasIndicatorDots: true,
            imgUrls: [
                'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
                'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
                'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180',
            ],
        };
    }
    handleChange(key, value) {
        this.setState({
            [key]: value,
        });
    }
    render() {
        const {
            current,
            isAutoplay,
            duration,
            isCircular,
            interval,
            hasIndicatorDots,
            imgUrls,
        } = this.state;
        return (
            <View className='swiperExample'>
                <ShowCom title='基本使用'>
                    <PkSwiper
                        height={Taro.pxTransform(360)}
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        current={current}
                        duration={duration}
                        interval={interval}
                        circular={isCircular}
                        autoplay={isAutoplay}
                        indicatorDots={hasIndicatorDots}
                        previousMargin='20'
                    >
                        {imgUrls.map(item => {
                            return (
                                <Image
                                    className='slide-image'
                                    src={item}
                                    key={item}
                                />
                            );
                        })}
                    </PkSwiper>
                </ShowCom>
                <PkList>
                    <PkListItem
                        title='指示点'
                        isSwitch
                        switchIsCheck={hasIndicatorDots}
                        onSwitchChange={e =>
                            this.handleChange.call(
                                this,
                                'hasIndicatorDots',
                                e.detail.value
                            )
                        }
                    />
                    <PkListItem
                        title='自动播放'
                        isSwitch
                        switchIsCheck={isAutoplay}
                        onSwitchChange={e =>
                            this.handleChange.call(
                                this,
                                'isAutoplay',
                                e.detail.value
                            )
                        }
                    />
                    <PkListItem
                        title='循环播放'
                        isSwitch
                        switchIsCheck={isCircular}
                        onSwitchChange={e =>
                            this.handleChange.call(
                                this,
                                'isCircular',
                                e.detail.value
                            )
                        }
                    />
                </PkList>
            </View>
        );
    }
}
