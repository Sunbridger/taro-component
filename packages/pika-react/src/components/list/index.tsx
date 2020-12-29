import React from 'react';
import classNames from 'classnames';
import { IpkListProps } from './interface';
import { View } from '@tarojs/components';
import PkListItem from './listItem/listItem';

export default function PkList(props: IpkListProps): JSX.Element {
    const rootClass = classNames(
        'pk-list',
        {
            'pk-list--no-border': !props.hasBorder,
        },
        props.className
    );

    return <View className={rootClass}>{props.children}</View>;
}

PkList.PkListItem = PkListItem;

PkList.defaultProps = {
    hasBorder: true,
};
