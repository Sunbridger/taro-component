import React, { Component } from 'react';
import classNames from 'classnames';
import Taro from '@tarojs/taro';
import PropTypes, { InferProps } from 'prop-types';
import { View, Image, OpenData, Text } from '@tarojs/components';
import { IavatarProps, IavatarState } from './interface.d';

export default class PkAvatar extends Component<IavatarProps, IavatarState> {
    public static defaultProps: IavatarProps;
    public static propTypes: InferProps<IavatarProps>;

    constructor(props: IavatarProps) {
        super(props);
        this.state = {
            isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
        };
    }
    render(): JSX.Element {
        const {
            size,
            circle,
            image,
            text,
            openData,
            style,
            className,
        } = this.props;
        const classObject = {
            [`pk-avatar--${size}`]: size,
            'pk-avatar--circle': circle,
        };

        let letter = '';
        if (text) letter = text[0];

        let elem: React.ReactNode;
        if (
            openData &&
            openData.type === 'userAvatarUrl' &&
            this.state.isWEAPP
        ) {
            elem = <OpenData type={openData.type}></OpenData>;
        } else if (image) {
            elem = <Image className='pk-avatar__img' src={image} />;
        } else {
            elem = <Text className='pk-avatar__text'>{letter}</Text>;
        }
        return (
            <View
                className={classNames('pk-avatar', classObject, className)}
                style={style}
            >
                {elem}
            </View>
        );
    }
}
PkAvatar.defaultProps = {
    size: 'normal',
    circle: false,
    text: '',
    image: '',
    style: {},
    className: '',
};

PkAvatar.propTypes = {
    size: PropTypes.oneOf(['large', 'normal', 'small']),
    circle: PropTypes.bool,
    text: PropTypes.string,
    image: PropTypes.string,
    openData: PropTypes.object,
    style: PropTypes.object,
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
