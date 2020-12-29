import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkImage } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';
import {
    actions1,
    actions2,
    actions3,
    actions4,
    actions5,
    actions6,
    actions7,
    actions8,
    actions9,
    actions10,
} from './demo';

export default class ImageExample extends Component<any, any> {
    render(): JSX.Element {
        return (
            <View className='imageExample'>
                <ShowCom title='缩放模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取
                    </View>
                    <PkImage
                        mode='aspectFill'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                        }}
                    />
                </ShowCom>
                <ShowCom title='缩放模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来
                    </View>
                    <PkImage
                        mode='aspectFit'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                            overflow: 'hidden',
                        }}
                    />
                </ShowCom>
                <ShowCom title='裁剪模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        不缩放图片，只显示图片的底部区域
                    </View>
                    <PkImage
                        mode='bottom'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                            overflow: 'hidden',
                        }}
                    />
                </ShowCom>
                <ShowCom title='裁剪模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        不缩放图片，只显示图片的左下边区域
                    </View>
                    <PkImage
                        mode='bottom left'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                            overflow: 'hidden',
                        }}
                    />
                </ShowCom>
                <ShowCom title='裁剪模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        不缩放图片，只显示图片的右下边区域
                    </View>
                    <PkImage
                        mode='bottom right'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                            overflow: 'hidden',
                        }}
                    />
                </ShowCom>
                <ShowCom title='裁剪模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        不缩放图片，只显示图片的中间区域
                    </View>
                    <PkImage
                        mode='center'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                            overflow: 'hidden',
                        }}
                    />
                </ShowCom>
                <ShowCom title='缩放模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        高度不变，宽度自动变化，保持原图宽高比不变
                    </View>
                    <PkImage
                        mode='heightFix'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                            overflow: 'hidden',
                        }}
                    />
                </ShowCom>
                <ShowCom title='裁剪模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        不缩放图片，只显示图片的左边区域
                    </View>
                    <PkImage
                        mode='left'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                            overflow: 'hidden',
                        }}
                    />
                </ShowCom>
                <ShowCom title='裁剪模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        不缩放图片，只显示图片的右边区域
                    </View>
                    <PkImage
                        mode='right'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                            overflow: 'hidden',
                        }}
                    />
                </ShowCom>
                <ShowCom title='缩放模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image
                        元素
                    </View>
                    <PkImage
                        mode='scaleToFill'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                            overflow: 'hidden',
                        }}
                    />
                </ShowCom>
                <ShowCom title='裁剪模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        不缩放图片，只显示图片的顶部区域
                    </View>
                    <PkImage
                        mode='top'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                            overflow: 'hidden',
                        }}
                    />
                </ShowCom>
                <ShowCom title='裁剪模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        不缩放图片，只显示图片的左上边区域
                    </View>
                    <PkImage
                        mode='top left'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                            overflow: 'hidden',
                        }}
                    />
                </ShowCom>
                <ShowCom title='裁剪模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        不缩放图片，只显示图片的右上边区域
                    </View>
                    <PkImage
                        mode='top right'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                            overflow: 'hidden',
                        }}
                    />
                </ShowCom>
                <ShowCom title='缩放模式'>
                    <View style={{ marginBottom: '10px', color: '#8d8e99' }}>
                        宽度不变，高度自动变化，保持原图宽高比不变
                    </View>
                    <PkImage
                        mode='widthFix'
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                        style={{
                            width: '100px',
                            height: '100px',
                            overflow: 'hidden',
                        }}
                    />
                </ShowCom>
                <ShowCom title='action 为 action1 的格式'>
                    <PkImage
                        actions={actions1}
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                    />
                </ShowCom>
                <ShowCom title='action 为 action2 的格式'>
                    <PkImage
                        actions={actions2}
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                    />
                </ShowCom>
                <ShowCom title='action 为 action3 的格式'>
                    <PkImage
                        actions={actions3}
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                    />
                </ShowCom>
                <ShowCom title='action 为 action4 的格式'>
                    <PkImage
                        actions={actions4}
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                    />
                </ShowCom>
                <ShowCom title='action 为 action5 的格式'>
                    <PkImage
                        actions={actions5}
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1'
                    />
                </ShowCom>
                <ShowCom title='action 为 action6 的格式'>
                    <PkImage
                        actions={actions6}
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1&b=2'
                    />
                </ShowCom>
                <ShowCom title='action 为 action7 的格式'>
                    <PkImage
                        actions={actions7}
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1&b=2'
                    />
                </ShowCom>
                <ShowCom title='action 为 action8 的格式'>
                    <PkImage
                        actions={actions8}
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1&b=2'
                    />
                </ShowCom>
                <ShowCom title='action 为 action9 的格式'>
                    <PkImage
                        actions={actions9}
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1&b=2'
                    />
                </ShowCom>
                <ShowCom title='action 为 action10 的格式'>
                    <PkImage
                        actions={actions10}
                        src='http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?a=1&b=2'
                    />
                </ShowCom>
            </View>
        );
    }
}
