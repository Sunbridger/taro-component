<template>
    <view class="pk-nav-bar">
        <view
            :class="rootCls"
            :style="{
                ...mainStyle,
                ...customStyle,
            }"
        >
            <view
                class="pk-nav-bar__left-view"
                :style="linkStyle"
                @tap="handleClickLeftView"
            >
                <view
                    v-if="leftIconType"
                    :class="leftIconClass"
                    :style="leftIconStyle"
                />
                <view v-if="leftText" class="pk-nav-bar__text">
                    {{ leftText }}
                </view>
                <view v-else>
                    <slot name="left"></slot>
                </view>
            </view>
            <view v-if="title" class="pk-nav-bar__title">
                {{ title }}
            </view>
            <view>
                <slot name="default"></slot>
            </view>
            <view v-if="!fixed" class="pk-nav-bar__right-view">
                <view
                    :class="
                        classNames({
                            'pk-nav-bar__container': true,
                            'pk-nav-bar__container--hide': !rightSecondIconType,
                        })
                    "
                    :style="linkStyle"
                    @tap="handleClickNd"
                >
                    <view
                        v-if="rightSecondIconType"
                        :class="rightSecondIconClass"
                        :style="rightSecondIconStyle"
                    />
                </view>
                <view
                    :class="
                        classNames({
                            'pk-nav-bar__container': true,
                            'pk-nav-bar__container--hide': !rightFirstIconType,
                        })
                    "
                    :style="linkStyle"
                    @tap="handleClickSt"
                >
                    <view
                        v-if="rightFirstIconType"
                        :class="rightFirstIconClass"
                        :style="rightFirstIconStyle"
                    />
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import '../../style/components/nav-bar.css';
import NavBar from './main';

export default {
    name: 'PkNavBar',
    components: {},
    mixins: [NavBar],
};
</script>
