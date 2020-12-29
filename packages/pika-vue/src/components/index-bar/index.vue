<template>
    <view
        ref="indexbar"
        :class="`pk-index-bar ${actualClassName}`"
        :style="customStyle"
    >
        <view
            class="pk-index-bar__indexes"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
            <view
                v-for="(key, index) in keys"
                :key="index"
                class="pk-index-bar__indexes__item"
                @tap="jumpClick(index)"
            >
                {{ key }}
            </view>
        </view>
        <scroll-view
            class="pk-index-bar__scroll"
            :scroll-y="true"
            :scroll-with-animation="animation"
            :scroll-top="topArr[currentIndex]"
        >
            <view class="pk-index-bar__custom">
                <slot></slot>
            </view>
            <view
                v-for="(group, index) in list"
                :key="index"
                class="pk-index-bar__group"
            >
                <view class="pk-index-bar__title">
                    {{ group.title }}
                </view>
                <view class="pk-index-bar__lists">
                    <view
                        v-for="(item, j) in group.items"
                        :key="j"
                        class="pk-index-bar__item"
                        @tap="onClick(item)"
                    >
                        <image
                            v-if="item.icon"
                            class="pk-index-bar__item__image"
                            :src="item.icon"
                        ></image>
                        <view>
                            {{ item.name }}
                        </view>
                    </view>
                </view>
            </view>
        </scroll-view>
        <view v-show="toastShow" v-if="isShowToast" class="pk-index-bar__toast">
            {{ keys[currentIndex] }}
        </view>
    </view>
</template>

<script>
import '../../style/components/index-bar.css';
import Common from '../../utils/commonMixin';
import IndexBar from './main';

export default {
    name: 'PkIndexBar',
    components: {},
    mixins: [IndexBar, Common],
};
</script>
