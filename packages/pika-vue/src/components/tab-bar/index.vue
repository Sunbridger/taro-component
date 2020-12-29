<template>
    <view
        :class="{
            'pk-tab-bar': true,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <view :class="rootCls" :style="rootSty">
            <view
                v-for="(item, i) in tabList"
                :key="item.title"
                :class="
                    classNames('at-tab-bar__item', {
                        'at-tab-bar__item--active': current === i,
                    })
                "
                :style="current === i ? selectedStyle : defaultStyle"
                @tap="handleClick(i, $event)"
            >
                <pk-badge
                    v-if="item.iconType"
                    :dot="!!item.dot"
                    :value="item.text"
                    :max-value="Number(item.max)"
                >
                    <view class="at-tab-bar__icon">
                        <view
                            :class="
                                classNames(
                                    `${item.iconPrefixClass || 'pk-icon'}`,
                                    {
                                        [`${
                                            item.iconPrefixClass || 'pk-icon'
                                        }-${item.selectedIconType}`]:
                                            current === i &&
                                            item.selectedIconType,
                                        [`${
                                            item.iconPrefixClass || 'pk-icon'
                                        }-${item.iconType}`]: !(
                                            current === i &&
                                            item.selectedIconType
                                        ),
                                    }
                                )
                            "
                            :style="{
                                color: current === i ? selectedColor : color,
                                fontSize: iconSize ? `${iconSize}px` : '',
                            }"
                        />
                    </view>
                </pk-badge>

                <pk-badge
                    v-if="item.image"
                    :dot="!!item.dot"
                    :value="item.text"
                    :max-value="Number(item.max)"
                >
                    <view class="at-tab-bar__icon">
                        <image
                            :class="
                                classNames('at-tab-bar__inner-img', {
                                    'at-tab-bar__inner-img--inactive':
                                        current !== i,
                                })
                            "
                            mode="widthFix"
                            :src="item.selectedImage || item.image"
                            :style="imgStyle"
                        />
                        <image
                            :class="
                                classNames('at-tab-bar__inner-img', {
                                    'at-tab-bar__inner-img--inactive':
                                        current === i,
                                })
                            "
                            mode="widthFix"
                            :src="item.image"
                            :style="imgStyle"
                        />
                    </view>
                </pk-badge>

                <view>
                    <pk-badge
                        :dot="item.iconType || item.image ? false : !!item.dot"
                        :value="item.iconType || item.image ? '' : item.text"
                        :max-value="
                            item.iconType || item.image ? 0 : Number(item.max)
                        "
                    >
                        <view class="at-tab-bar__title" :style="titleStyle">
                            {{ item.title }}
                        </view>
                    </pk-badge>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import '../../style/components/tab-bar.css';
import Common from '../../utils/commonMixin';
import TabBar from './main';
import PkBadge from '../badge';

export default {
    name: 'PkTabBar',
    components: {
        PkBadge,
    },
    mixins: [TabBar, Common],
};
</script>
