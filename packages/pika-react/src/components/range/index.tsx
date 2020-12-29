import React, { Component } from 'react';
import { View, Text, Image } from '@tarojs/components';
import { getEventDetail, delayQuerySelector } from '../../helper/common';
import { IrangeProps, IrangeState } from './interface';

const sliderImg =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAqtJREFUWAntmb9u1EAQh+378wB0KKWfASlBClTpTtCRt0jLS9CkhVdApIiUF0gKOIlnSJmjgv6OO/P7jL1MHNvYvnXwSow0t3u7OzOf5/Zs724c7SFpmsYyP5QupIn0wGiq+kp6l+utyivpMo5j+h5PBHoifS9dSbsKNtieDE6sIEfSa6kvwdeRd3A5TaSffFFW+ME3U2p/kSN+/u8VQXw3EWO/aSIHZ9Kfvska/BHrrFeaZXje4HjorvNO0Fzl0EQt/LfLtBwxZx9zGtSxw/BgTnPjd6IB/FO/Sp+4xn9b+aHwz/Sg4aGTyaSo5OU7lWOBBQkWmJy4DCu73MA/u56eld1uF202m8x6Pp9Hk0k5J70cP1eWv2Bpvd27kr+53W63EXBloU0Xn2ldP7YdxbFlwPnkPm7rhIBkcb1eR+XgwBZi67QxFhtsy3aFTU15nDO6DJ/WDKxstpkrQ1Ua5I12rPXRZGP63lCfyAnz+JXpGGv1NaxMCd5nn46V0nDBeAjwwjSOvboAOBk7peFLAGZZE4oc/Ace+KfKMvznTj9wNA/uU6YES/FQZAUw+wahyF2QwO7lOIA035Jhto9CkSuAl9JvARDDuJzkG3OXAQBfwkqGkY+/i3afdtkjJ+2MNMqOtT5aOsgYXTS9a17L8EVL42zFAEA5sF1NTKfTiHWdlWIJRV8HuVGsl4wvMkz9LR9thYBlWGxtFm298ItNR1hMHZsDlnNWpReF477lbDbLLgQw6h7kImfLXLkpwTdNi0RFOBspuhIeIixIO6/DZeNbYDjNmZp9K9PhbAYWlyLocLZbDXQ4G9oGOpwjAwMdzqFMAU2pec2x143Ul+DL/7GXhc7BmSYfpH0PFrF9sLtejlP1/d6Do2pAU5uCYl93dItpcWxLyT1+76PbX8W4EKjWmmtvAAAAAElFTkSuQmCC';
export default class PkRange extends Component<IrangeProps, IrangeState> {
    public static defaultProps: {
        trackStyle: '';
        value: [0, 0];
        min: 0;
        max: 100;
        name: '';
        unit: '';
        scale: '';
    };

    private width: number;
    private left: number;
    private deltaValue: number;
    private currentSlider: string;

    constructor(props: IrangeProps) {
        super(props);
        const { max, min } = props;
        // range 宽度
        this.width = 0;
        // range 到屏幕左边的距离
        this.left = 0;
        this.deltaValue = max! - min!;
        this.currentSlider = '';
        this.state = {
            aX: 0,
            bX: 0,
            showValue: '',
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps: Readonly<IrangeProps>): void {
        const { value } = nextProps;
        this.computeShowValue(value[0], value[1]);
        this.setValue(value);
    }

    componentDidMount(): void {
        const { value } = this.props;
        delayQuerySelector('.range-container', 500).then((rect: any) => {
            this.width = Math.round(rect[0].width);
            this.left = Math.round(rect[0].left);
            this.setValue(value);
            this.initShowValue();
        });
    }

    handleClick(event): void {
        if (this.currentSlider && !this.props.disabled) {
            let sliderValue = 0;
            const detail = getEventDetail(event);
            sliderValue = detail.x - this.left;
            this.setSliderValue(this.currentSlider, sliderValue, 'onChange');
        }
    }

    handleTouchMove(sliderName, event): void {
        event.stopPropagation();
        const { max } = this.props;
        const clientX = event.touches[0].clientX;
        this.setSliderValue(sliderName, clientX - this.left, 'onChange');
        this.computeShowValue(
            Math.round((this.state.aX / 100) * max!),
            Math.round((this.state.bX / 100) * max!)
        );
    }

    handleTouchEnd(sliderName): void {
        if (this.props.disabled) return;

        this.currentSlider = sliderName;
        this.triggerEvent('onAfterChange');
    }

    setSliderValue(
        sliderName: string,
        targetValue: number,
        funcName: string
    ): void {
        const distance = Math.min(Math.max(targetValue, 0), this.width);
        const sliderValue = Math.floor((distance / this.width) * 100);
        if (funcName) {
            this.setState(
                {
                    [sliderName]: sliderValue,
                },
                () => this.triggerEvent(funcName)
            );
        } else {
            this.setState({
                [sliderName]: sliderValue,
            });
        }
    }

    setValue(value): void {
        const aX = Math.round(
            ((value[0] - this.props.min!) / this.deltaValue) * 100
        );
        const bX = Math.round(
            ((value[1] - this.props.min!) / this.deltaValue) * 100
        );
        this.setState({ aX, bX });
    }

    triggerEvent(funcName: string): void {
        const { aX, bX } = this.state;
        const a = Math.round((aX / 100) * this.deltaValue) + this.props.min!;
        const b = Math.round((bX / 100) * this.deltaValue) + this.props.min!;
        const result = [a, b].sort((x, y) => x - y) as [number, number];

        if (funcName === 'onChange') {
            this.props.onChange && this.props.onChange(result);
        } else if (funcName === 'onAfterChange') {
            this.props.onAfterChange && this.props.onAfterChange(result);
        }
    }

    renderScale() {
        const { scale } = this.props;
        if (scale && scale.length > 0) {
            return scale.map((item, index) => {
                return (
                    <Text className='range-footer-item' key={index}>
                        {item}
                    </Text>
                );
            });
        }
    }

    initShowValue(): void {
        const { name, unit, value, min, max } = this.props;
        if (value && value.length > 0) {
            if (value[0] === min && value[1] === max) {
                this.setState({
                    showValue: `不限${name}`,
                });
            } else if (value[0] !== min && value[1] === max) {
                this.setState({
                    showValue: `${value[0] + unit}以上`,
                });
            } else {
                value[0] <= value[1]
                    ? this.setState({
                          showValue: `${value[0]}-${value[1] + unit}`,
                      })
                    : this.setState({
                          showValue: `${value[1]}-${value[0] + unit}`,
                      });
            }
        }
    }

    computeShowValue(aX, bX): void {
        const { name, unit = 0, min, max } = this.props;
        let left, right;
        if (aX <= bX) {
            left = aX;
            right = bX;
        } else {
            left = bX;
            right = aX;
        }
        if (left === min && right === max) {
            this.setState({
                showValue: `不限${name}`,
            });
        } else if (left !== min && right === max) {
            this.setState({
                showValue: `${left + unit}以上`,
            });
        } else {
            this.setState({
                showValue: `${left}-${right + unit}`,
            });
        }
    }

    render(): JSX.Element {
        const { name, unit } = this.props;

        const { aX, bX } = this.state;
        const sliderAStyle = {
            left: `${aX}%`,
        };
        const sliderBStyle = {
            left: `${bX}%`,
        };
        const smallerX = Math.min(aX, bX);
        const deltaX = Math.abs(aX - bX);
        const atTrackStyle = {
            left: `${smallerX}%`,
            width: `${deltaX}%`,
        };
        return (
            <View className='pk-range' onClick={this.handleClick}>
                <View className='range-header'>
                    <View>
                        <Text className='range-header-name'>自定义{name}</Text>
                        <Text className='range-header-unit'>（{unit}）</Text>
                    </View>
                    <Text className='range-header-show'>
                        {this.state.showValue}
                    </Text>
                </View>
                <View className='range-container'>
                    <View className='range-rail'></View>
                    <View className='range-track' style={atTrackStyle}></View>
                    <View
                        className='range-slider'
                        style={sliderAStyle}
                        onTouchMove={this.handleTouchMove.bind(this, 'aX')}
                        onTouchEnd={this.handleTouchEnd.bind(this, 'aX')}
                    >
                        <Image className='slider-img' src={sliderImg} />
                    </View>
                    <View
                        className='range-slider'
                        style={sliderBStyle}
                        onTouchMove={this.handleTouchMove.bind(this, 'bX')}
                        onTouchEnd={this.handleTouchEnd.bind(this, 'bX')}
                    >
                        <Image className='slider-img' src={sliderImg} />
                    </View>
                </View>
                <View className='range-footer'>{this.renderScale()}</View>
            </View>
        );
    }
}
