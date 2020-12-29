import React from 'react';
// import Taro from '@tarojs/taro';
import { View, Swiper, SwiperItem } from '@tarojs/components';
import { IswiperProps } from './interface.d';

export default function PkSwiper(props: IswiperProps) {
    const { height, width } = props;
    const handleOnChange = (event: any) => {
        typeof props.onChange === 'function' && props.onChange(event);
    };
    const wrapperStyle: any = {};
    height && (wrapperStyle.height = height);
    width && (wrapperStyle.width = width);

    return (
        <View className='pkSwiper'>
            <Swiper {...props} onChange={handleOnChange} style={wrapperStyle}>
                {Array.isArray(props.children)
                    ? props.children.map((item, index) => {
                          return <SwiperItem key={index}>{item}</SwiperItem>;
                      })
                    : null}
            </Swiper>
        </View>
    );
}
