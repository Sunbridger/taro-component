import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { View } from '@tarojs/components';
import { ItabContentProps } from './interface';

export default function TabContent(
    props: ItabContentProps & { children: ReactNode }
) {
    const isActive = props.active;
    const className = classNames('pkTabs-body-content', {
        'pkTabs-body-content_active': isActive,
        'pkTabs-body-content_inactive': !isActive,
    });

    return <View className={className}>{props.children}</View>;
}
