import React, { Component } from 'react';
import { View } from '@tarojs/components';

export default class PkCommonComponent<P, S> extends Component<P, S> {
    public static options = {
        addGlobalClass: true,
    };

    constructor(props: P) {
        super(props);
    }

    public render(): JSX.Element {
        return <View>{null}</View>;
    }
}
