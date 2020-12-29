<template>
    <view class="pg-dialog">
        <layout title="Dialog 对话框">
            <item title="基础使用">
                <pk-button @click="opendialog1">基础对话框</pk-button>
            </item>
            <item title="单个按钮">
                <pk-button @click="opendialog2">单个按钮</pk-button>
            </item>
            <item title="无标题有内容">
                <pk-button @click="opendialog3">无标题有内容</pk-button>
            </item>
            <item title="有标题无内容">
                <pk-button @click="opendialog4">有标题无内容</pk-button>
            </item>
        </layout>
        <pk-dialog v-model="show" :noCancel="noCancel">
            <view slot="title">标题</view>
            <view slot="content">
                这里是正文内容, 这里是正文内容, 这里是正文内容, 这里是正文内容.
            </view>
        </pk-dialog>
        <pk-dialog v-model="show2">
            <view slot="content">
                这里是正文内容, 这里是正文内容, 这里是正文内容, 这里是正文内容.
            </view>
        </pk-dialog>
        <pk-dialog v-model="show3">
            <view slot="title">这里是标题内容, 这里是标题内容</view>
        </pk-dialog>
    </view>
</template>

<script>
import { PkDialog, PkButton } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgDialog',
    components: {
        PkDialog,
        PkButton,
        Layout,
        Item,
    },
    data() {
        return {
            show: false,
            show2: false,
            show3: false,
            noCancel: false,
        };
    },
    methods: {
        opendialog1() {
            this.noCancel = false;
            this.show = true;
        },
        opendialog2() {
            this.noCancel = true;
            this.show = true;
        },
        opendialog3() {
            this.show2 = true;
        },
        opendialog4() {
            this.show3 = true;
        },
    },
};
</script>

<style lang="scss">
.pg-dialog {
}
</style>
