import React from 'react';
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common';
import { View, Image, Switch } from '@tarojs/components';
import classNames from 'classnames';
import { IpkListItemProps } from '../interface';
import PkIcon from '../../icon';

export default function PkListItem(props: IpkListItemProps): JSX.Element {
    const {
        note,
        arrow,
        thumb,
        iconInfo,
        disabled,
        isSwitch,
        hasBorder,
        extraThumb,
        switchColor,
        switchIsCheck,
        extraText,
        title,
    } = props;

    const rootClass = classNames(
        'pk-list__item',
        {
            'pk-list__item--thumb': thumb,
            'pk-list__item--multiple': note,
            'pk-list__item--disabled': disabled,
            'pk-list__item--no-border': !hasBorder,
        },
        props.className
    );
    const handleClick = (event: ITouchEvent): void => {
        if (typeof props.onClick === 'function' && !props.disabled) {
            props.onClick(event);
        }
    };
    const handleSwitchClick = (e: CommonEvent): void => {
        e.stopPropagation();
    };

    const handleSwitchChange = (event: CommonEvent): void => {
        if (typeof props.onSwitchChange === 'function' && !props.disabled) {
            props.onSwitchChange(event);
        }
    };

    return (
        <View className={rootClass} onClick={handleClick}>
            <View className='pk-list__item-container'>
                {thumb && (
                    <View className='pk-list__item-thumb item-thumb'>
                        <Image
                            className='item-thumb__info'
                            mode='scaleToFill'
                            src={thumb}
                        />
                    </View>
                )}
                {iconInfo && iconInfo.type && (
                    <View className='pk-list__item-icon item-icon'>
                        <PkIcon {...iconInfo} />
                    </View>
                )}
                <View
                    className={classNames(
                        'pk-list__item-content item-content',
                        {
                            hasCustom: props.children,
                        }
                    )}
                >
                    <View className={'item-content__info'}>
                        <View className='item-content__info-title'>
                            {title}
                        </View>
                        {note && (
                            <View className='item-content__info-note'>
                                {note}
                            </View>
                        )}
                    </View>
                    <View className='item-content__custom'>
                        {props.children}
                    </View>
                </View>
                <View className='pk-list__item-extra item-extra'>
                    {extraText ? (
                        <View className={'item-extra__info'}>{extraText}</View>
                    ) : null}

                    {extraThumb && !extraText ? (
                        <View className='item-extra__image'>
                            <Image
                                className='item-extra__image-info'
                                mode='aspectFit'
                                src={extraThumb}
                            />
                        </View>
                    ) : null}

                    {isSwitch && !extraThumb && !extraText ? (
                        <View
                            className='item-extra__switch'
                            onClick={handleSwitchClick}
                        >
                            <Switch
                                color={switchColor}
                                disabled={disabled}
                                checked={switchIsCheck}
                                onChange={handleSwitchChange}
                            />
                        </View>
                    ) : null}

                    {arrow ? (
                        <View className='item-extra__icon'>
                            <PkIcon
                                className='item-extra__icon-arrow'
                                size={14}
                                type={`arrow-${arrow}`}
                            />
                        </View>
                    ) : null}
                </View>
            </View>
        </View>
    );
}

PkListItem.defaultProps = {
    hasBorder: true,
};
