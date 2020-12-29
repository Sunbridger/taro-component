import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkUploader } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';

export default class UploaderExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            files: [
                {
                    url:
                        '//img.souche.com/93d71f6e-75ea-410d-9d05-ccc2f37a964c.jpg',
                },
                {
                    url:
                        '//img.souche.com/EE76CD06-9F95-4774-9515-8E759F3C1B2A.png',
                },
                {
                    url:
                        '//img.souche.com/f9ec9eb5-1901-4a05-ab5c-5417ab179f30.jpg',
                },
            ],
        };
    }
    onChange(files) {
        this.setState({
            files,
        });
    }
    render() {
        return (
            <View className='uploaderExample'>
                <ShowCom title='基本使用'>
                    <PkUploader
                        files={this.state.files}
                        onChange={this.onChange.bind(this)}
                    />
                </ShowCom>
            </View>
        );
    }
}
