<template>
    <view class="pg-search-bar">
        <layout title="SearchBar 搜索框">
            <item title="基础使用">
                <pk-search-bar></pk-search-bar>
            </item>
            <item title="提供选项">
                <pk-search-bar
                    :menu-list="menuList"
                    @menu-change="menuChange"
                    :selected-index="selectedIndex"
                ></pk-search-bar>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkSearchBar } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgSearchBar',
    components: {
        PkSearchBar,
        Layout,
        Item,
    },
    data() {
        return {
            menuList: [
                {
                    name: '新车',
                    key: 'new',
                },
                {
                    name: '二手车',
                    key: 'old',
                },
            ],
            selectedIndex: 0,
        };
    },
    methods: {
        menuChange(item, key) {
            this.selectedIndex = key;
        },
    },
};
</script>

<style lang="scss">
.pg-search-bar {
}
</style>
