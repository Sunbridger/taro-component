import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import PropTypes, { InferProps } from 'prop-types';
import { View } from '@tarojs/components';
import { CommonEvent } from '@tarojs/components/types/common';
import PkIcon from '../icon';
import { InoticeProps, InoticeState } from './interface.d';

export default class AtNoticebar extends Component<InoticeProps, InoticeState> {
    public static defaultProps: InoticeProps;
    public static propTypes: InferProps<InoticeProps>;

    private timeout: NodeJS.Timeout | null;
    private interval: NodeJS.Timer;

    public constructor(props: InoticeProps) {
        super(props);
        const animElemId = `J_${Math.ceil(Math.random() * 10e5).toString(36)}`;
        this.state = {
            show: true,
            animElemId,
            animationData: {
                actions: [{}],
            },
            isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
            isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
            isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
        };
    }

    private onClose(event: CommonEvent): void {
        this.setState({
            show: false,
        });
        this.props.onClose && this.props.onClose(event);
    }

    public UNSAFE_componentWillReceiveProps(): void {
        if (!this.timeout) {
            this.interval && clearInterval(this.interval);
            this.initAnimation();
        }
    }

    public componentDidMount(): void {
        if (!this.props.scroll) return;
        this.initAnimation();
    }

    private initAnimation(): void {
        const { isWEAPP, isALIPAY } = this.state;
        this.timeout = setTimeout(() => {
            this.timeout = null;
            const { duration = 10 } = this.props;
            if (isWEAPP || isALIPAY) {
                const query = Taro.createSelectorQuery();
                query
                    .select(`.${this.state.animElemId}`)
                    .boundingClientRect()
                    .exec(res => {
                        const queryRes = res[0];
                        if (!queryRes) return;
                        const { width } = queryRes;
                        const animation = Taro.createAnimation({
                            duration: duration * 1000,
                            timingFunction: 'linear',
                        });
                        const resetAnimation = Taro.createAnimation({
                            duration: 0,
                            timingFunction: 'linear',
                        });
                        const resetOpacityAnimation = Taro.createAnimation({
                            duration: 0,
                            timingFunction: 'linear',
                        });
                        const animBody = (): void => {
                            resetOpacityAnimation.opacity(0).step();
                            this.setState({
                                animationData: resetOpacityAnimation.export(),
                            });

                            setTimeout(() => {
                                resetAnimation.translateX(0).step();
                                this.setState({
                                    animationData: resetAnimation.export(),
                                });
                            }, 300);

                            setTimeout(() => {
                                resetOpacityAnimation.opacity(1).step();
                                this.setState({
                                    animationData: resetOpacityAnimation.export(),
                                });
                            }, 600);

                            setTimeout(() => {
                                animation.translateX(-width).step();
                                this.setState({
                                    animationData: animation.export(),
                                });
                            }, 900);
                        };
                        animBody();
                        this.interval = setInterval(
                            animBody,
                            duration * 1000 + 1000
                        );
                    });
            }
        }, 1000);
    }

    public render(): JSX.Element | boolean {
        const {
            text,
            single,
            icon,
            type,
            scroll,
            style: customStyle,
            className,
        } = this.props;
        let { close } = this.props;
        const { duration } = this.props;
        const {
            show,
            animElemId,
            animationData,
            isWEAPP,
            isALIPAY,
        } = this.state;
        const rootClassName = ['pk-notice'];

        const style = {};
        const innerClassName = ['pk-notice__content-inner'];
        if (scroll) {
            close = false;
            style['animation-duration'] = `${duration}s`;
            innerClassName.push(animElemId);
        }

        const classObject = {
            'pk-notice--scroll': scroll,
            'pk-notice--weapp': scroll && (isWEAPP || isALIPAY),
            'pk-notice--single': !scroll && single,
            [`pk-notice--${type}`]: type,
        };

        return (
            show && (
                <View
                    className={classNames(
                        rootClassName,
                        classObject,
                        className
                    )}
                    style={customStyle}
                >
                    {close && (
                        <View
                            className='pk-notice__close'
                            onClick={this.onClose.bind(this)}
                        >
                            <PkIcon size={12} type='close' />
                        </View>
                    )}
                    <View className='pk-notice__content'>
                        {icon && (
                            <View className='pk-notice__content-icon'>
                                <PkIcon size={12} type={icon} />
                            </View>
                        )}
                        <View className='pk-notice__content-text'>
                            <View
                                id={animElemId}
                                animation={animationData}
                                className={classNames(innerClassName)}
                                style={style}
                            >
                                {text}
                            </View>
                        </View>
                    </View>
                    <View className='pk-notice__action'>
                        {this.props.children}
                    </View>
                </View>
            )
        );
    }
}

AtNoticebar.defaultProps = {
    text: '',
    close: false,
    single: false,
    scroll: false,
    type: 'default',
    icon: '',
    style: {},
    className: '',
};

AtNoticebar.propTypes = {
    text: PropTypes.string,
    close: PropTypes.bool,
    single: PropTypes.bool,
    scroll: PropTypes.bool,
    icon: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    onClose: PropTypes.func,
};
