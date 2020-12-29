import classNames from 'classnames';
import PropTypes, { InferProps } from 'prop-types';
import React, { Component } from 'react';
import { View } from '@tarojs/components';
import PkIcon from '../icon';
import { CommonEvent } from '@tarojs/components/types/common';
import { PkTagProps, PkTagState } from './interface.d';

const SIZE_CLASS = {
    normal: 'normal',
    small: 'small',
};

const TYPE_CLASS = {
    primary: 'primary',
};

export default class PkTag extends Component<PkTagProps, PkTagState> {
    public static defaultProps: PkTagProps;
    public static propTypes: InferProps<PkTagProps>;

    constructor(props: PkTagProps) {
        super(props);
        this.state = {
            show: true,
        };
    }

    private onClick(event: CommonEvent): void {
        const { name = '', disabled, onClick } = this.props;
        if (!disabled) {
            typeof onClick === 'function' && onClick(name, event);
        }
    }

    private onClose(event: CommonEvent): void {
        const { name = '', disabled, onClose } = this.props;
        if (!disabled) {
            this.setState({ show: false });
            typeof onClose === 'function' && onClose(name, event);
        }
    }

    public render(): JSX.Element | boolean {
        const {
            size = 'normal',
            type = '',
            circle = false,
            disabled = false,
            filled = false,
            close,
            icon,
            active,
            style,
        } = this.props;
        const { show } = this.state;
        const rootClassName = ['pk-tag'];

        const classObject = {
            [`pk-tag--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
            [`pk-tag--${type}`]: TYPE_CLASS[type],
            'pk-tag--disabled': disabled,
            'pk-tag--circle': circle,
            'pk-tag--filled': filled,
            'pk-tag--active': active,
        };

        return (
            show && (
                <View
                    className={classNames(
                        rootClassName,
                        classObject,
                        this.props.className
                    )}
                    style={style}
                    onClick={this.onClick.bind(this)}
                >
                    {icon && (
                        <View className='pk-tag__icon'>
                            <PkIcon size={12} type={icon} />
                        </View>
                    )}
                    {this.props.children}
                    {close && (
                        <View
                            className='pk-tag__close'
                            onClick={this.onClose.bind(this)}
                        >
                            <PkIcon size={12} type='close' />
                        </View>
                    )}
                </View>
            )
        );
    }
}

PkTag.defaultProps = {
    size: 'normal',
    type: '',
    name: '',
    circle: false,
    filled: false,
    disabled: false,
    close: false,
    active: false,
    style: {},
    className: '',
};

PkTag.propTypes = {
    size: PropTypes.oneOf(['normal', 'small']),
    type: PropTypes.oneOf(['', 'primary']),
    name: PropTypes.string,
    circle: PropTypes.bool,
    filled: PropTypes.bool,
    disabled: PropTypes.bool,
    close: PropTypes.bool,
    active: PropTypes.bool,
    icon: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
