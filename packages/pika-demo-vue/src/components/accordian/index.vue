<template>
    <view class="accordian">
        <view class="accordian__title" @tap="toggleList">
            <view class="accordian__title__text">{{ title }}</view>
            <image
                class="accordian__title__icon"
                :class="listShow ? '' : 'accordian_icon__revert'"
                :src="ArrawDown"
                mode="widthFix"
            />
        </view>
        <view
            :class="{
                accordian__content: true,
                'accordian__content--hidden': !listShow,
            }"
        >
            <view
                class="accordian__item"
                v-for="(item, index) in items"
                :key="index"
                @tap="goSandBox(item)"
                >{{ item.name }}</view
            >
        </view>
    </view>
</template>

<script>
import ArrawDown from '@/assets/arrow_down.png';
import Taro from '@tarojs/taro';

export default {
    name: 'accordian',
    model: {
        prop: 'listShow',
        event: 'change',
    },
    props: {
        title: {
            type: String,
        },
        prePath: {
            type: String,
        },
        items: {
            type: Array,
            default: () => [],
        },
        listShow: {
            type: Boolean,
        },
    },
    data() {
        return {
            ArrawDown,
        };
    },
    methods: {
        toggleList() {
            this.$emit('change', !this.listShow);
        },
        goSandBox(item) {
            if (!item.path) {
                return;
            }

            Taro.navigateTo({
                url: `/pages/components/${this.prePath}/${item.path}`,
            });
        },
    },
};
</script>

<style lang="scss">
.accordian {
    margin: 30px 15px;
    background-color: #fff;
    border-radius: 24px;

    .accordian__title {
        font-size: 36px;
        padding: 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .accordian__title__text {
            display: flex;
            align-items: center;

            &::before {
                content: '';
                display: inline-block;
                width: 12px;
                border-radius: 12px;
                height: 40px;
                margin-right: 25px;
                background-color: #f01d24;
            }
        }

        .accordian__title__icon {
            width: 36px;
            height: 36px;
            transition: all 0.4s ease-in-out;
        }

        .accordian_icon__revert {
            transform: rotate(180deg);
        }
    }

    .accordian__content {
        padding-left: 35px;
        transition: all 0.2s;
        max-height: 2000px;
        overflow: hidden;

        .accordian__item {
            padding: 30px;
            font-size: 32px;
            box-sizing: border-box;
            border-bottom: 1px solid #eee;

            &:last-child {
                border-bottom: 0;
            }
        }

        &--hidden {
            max-height: 0;
        }
    }
}
</style>