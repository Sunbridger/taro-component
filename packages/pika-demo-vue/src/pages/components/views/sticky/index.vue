<template>
    <view class="pg-sticky">
        <layout title="Sticky 粘性布局">
            <item title="基础使用">
                <view class="auotoheight">
                    <pk-sticky ref="PkSticky">
                        <view class="test-box" :offsetTop="200">置顶内容填充</view>
                    </pk-sticky>
                </view>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkSticky, PkButton } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgSticky',
    components: {
        PkSticky,
        Layout,
        Item,
        PkButton
    },
    data() {
        return {};
    },
    methods: {
        fn() {
            console.log(1);
        }
    }
};
</script>

<style lang="scss">
.pg-sticky {
    .auotoheight {
        height: 9999px;
        .test-box {
            width: 100vw;
            height: 88px;
            background-color: antiquewhite;
        }
    }
}
</style>
