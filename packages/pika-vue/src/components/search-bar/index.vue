<template>
    <view
        :class="{
            'pk-search-bar': true,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <view
            v-if="menuList.length"
            class="pk-search-bar__menu-list"
            @tap="onToggleDropShow"
        >
            <view class="pk-search-bar__menu-list__text"
                >{{ menuList[selectedIndex].name }}
                <pk-icon
                    type="sort-arrow-down"
                    :class="{
                        'pk-search-bar__menu-list__text__icon': true,
                        'pk-search-bar__menu-list__text__icon--show': dropShow,
                    }"
                    :size="16"
                ></pk-icon
            ></view>
            <view
                :class="{
                    'pk-search-bar__menu-list__drop-down': true,
                    'pk-search-bar__menu-list__drop-down--hidden': !dropShow,
                }"
            >
                <view
                    v-for="(item, index) in menuList"
                    :key="item.key"
                    class="drop-down__item"
                    @tap.stop="onClickMenuItem(item, index)"
                >
                    {{ item.name }}
                </view>
            </view>
        </view>
        <pk-icon
            v-else
            type="search"
            :class="{
                'pk-search-bar__placeholder__icon': true,
                'pk-search-bar__placeholder__icon--hidden': inputValue.length,
            }"
        ></pk-icon>
        <input
            v-model="inputValue"
            :placeholder="placeholder"
            class="pk-search-bar__input"
            placeholderClass="pk-search-bar__input__place-holder"
            :maxLength="maxLength"
            :focus="focus"
            :type="inputType"
            :disabled="disabled"
            @input="onInput"
            @focus="onFocus"
            @blur="onBlur"
            @confirm="confirm"
            @keyboardHeightChange="onKeyboardHeightChange"
        />
        <view
            :class="{
                'pk-search-bar__clear_icon': true,
                'pk-search-bar__clear_icon--hidden': !inputValue.length,
            }"
            @tap="onClear"
        >
            <pk-icon type="circle-close" color="#82838e"></pk-icon>
        </view>
    </view>
</template>

<script>
import PkIcon from '../icon';
import '../../style/components/search-bar.css';
import Common from '../../utils/commonMixin';
import SearchBar from './main';

export default {
    name: 'PkSearchBar',
    components: {
        PkIcon,
    },
    mixins: [SearchBar, Common],
};
</script>
