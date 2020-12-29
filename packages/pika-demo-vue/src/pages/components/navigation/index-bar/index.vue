<template>
    <view class="pg-index-bar">
        <layout title="IndexBar 索引栏">
            <item title="基础使用">
                <pk-button @click="showIndexes">
                    打开索引页
                </pk-button>
            </item>
        </layout>
        <pk-index-bar
            ref="indexBar"
            v-if="indexShow"
            :list="itemList"
            topKey="*"
        >
            <view class="indexes-custom">
                <view class="indexes-custom__close" @tap="closeIndexes">
                    <pk-icon type="arrow-left"></pk-icon>
                </view>
                <view class="indexed-custom__search">
                    <pk-search-bar @confirm="onConfirm"></pk-search-bar>
                </view>
            </view>
        </pk-index-bar>
    </view>
</template>

<script>
import { PkIndexBar, PkButton, PkSearchBar, PkIcon } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgIndexBar',
    components: {
        PkIndexBar,
        PkButton,
        PkSearchBar,
        PkIcon,
        Layout,
        Item,
    },
    data() {
        return {
            indexShow: false,
            itemList: [
                {
                    title: 'A',
                    key: 'A',
                    items: [
                        {
                            name: 'A1',
                            icon:
                                'http://img.souche.com/f2e/0575f63d559166d200884a741dd490d4.png',
                        },
                        {
                            name: 'A2',
                            icon:
                                'http://img.souche.com/f2e/0575f63d559166d200884a741dd490d4.png',
                        },
                    ],
                },
                {
                    title: 'B',
                    key: 'B',
                    items: [
                        {
                            name: 'B1',
                        },
                        {
                            name: 'B2',
                        },
                        {
                            name: 'B3',
                        },
                        {
                            name: 'B4',
                        },
                    ],
                },
                {
                    title: 'C',
                    key: 'C',
                    items: [
                        {
                            name: 'C1',
                        },
                        {
                            name: 'C2',
                        },
                        {
                            name: 'C3',
                        },
                        {
                            name: 'C4',
                        },
                    ],
                },
                {
                    title: 'D',
                    key: 'D',
                    items: [
                        {
                            name: 'D1',
                        },
                        {
                            name: 'D2',
                        },
                        {
                            name: 'D3',
                        },
                        {
                            name: 'D4',
                        },
                    ],
                },
                {
                    title: 'E',
                    key: 'E',
                    items: [
                        {
                            name: 'E1',
                        },
                        {
                            name: 'E2',
                        },
                        {
                            name: 'E3',
                        },
                        {
                            name: 'E4',
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        showIndexes() {
            this.indexShow = true;
        },
        onConfirm(val) {
            this.$refs.indexBar.$emit('jumpToKey', val);
        },
        closeIndexes() {
            this.indexShow = false;
        },
    },
};
</script>

<style lang="scss">
.pg-index-bar {
    .indexes-custom {
        .indexes-custom__close {
            padding: 15px;
            text-align: left;
            background-color: #fff;
        }

        .indexed-custom__search {
            padding: 15px 10px;
            background-color: #efefef;
        }
    }
}
</style>
