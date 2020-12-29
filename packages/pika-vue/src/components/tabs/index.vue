<template>
    <view
        ref="tabs"
        :class="{
            'pk-tabs': true,
            'pk-tabs--vertical': isVertical,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <!-- 标签栏 -->
        <scroll-view
            :scroll-x="scroll && !isVertical"
            :scroll-y="scroll && isVertical"
            :scroll-left="isVertical ? 0 : scrollLeft"
            :scroll-top="isVertical ? scrollTop : 0"
            :scroll-with-animation="true"
            :class="{
                'pk-tabs__scroll': true,
                'pk-tabs__scroll--vertical': isVertical,
            }"
            :style="{
                height: isVertical ? height + 'px' : undefined,
                padding: isVertical ? undefined : tabListMargin,
            }"
        >
            <view class="pk-tabs__list">
                <view
                    v-for="(item, index) in tabList"
                    :key="index"
                    :class="{
                        'pk-tabs__list-item': true,
                        'pk-tabs__list-item--selected': current === index,
                    }"
                    :style="{
                        height: itemHeight + 'px',
                        lineHeight: itemHeight + 'px',
                    }"
                    @tap="selectedItem(index)"
                >
                    {{ item.title }}
                </view>
                <view
                    :class="{
                        'pk-tabs__underline': !isVertical,
                        'pk-tabs__underline--vertical': isVertical,
                    }"
                    :style="underLineStyle"
                ></view>
            </view>
        </scroll-view>
        <view class="pk-tabs__content">
            <slot></slot>
        </view>
    </view>
</template>

<script>
import '../../style/components/tabs.css';
import Common from '../../utils/commonMixin';
import Tabs from './main';

export default {
    name: 'PkTabs',
    components: {},
    mixins: [Tabs, Common],
};
</script>
