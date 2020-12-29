import React from 'react';
import { ScrollViewProps } from '@tarojs/components/types/ScrollView';
// import { PkComponent } from '../button/interface';
import { IpkBaseFunctionCompProps } from '../../common/types';
import { BaseEventOrigFunction } from '@tarojs/components';

export interface IscrollListProps
    extends ScrollViewProps,
        IpkBaseFunctionCompProps {
    onRefresherRefresh: (event: BaseEventOrigFunction<any>) => any;
}
