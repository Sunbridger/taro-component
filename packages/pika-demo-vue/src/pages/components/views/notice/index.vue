
<template>
    <view class="pg-notice">
        <layout title="Notice 提示">

            <item title="基础样式" contentStyle="group__content">
                <view class="mt20">
                    <pk-notice>提示文案</pk-notice>
                </view>
            </item>

            <item title="" contentStyle="group__content">
                <view class="mt20">
                    <pk-notice >让我掉下眼泪的 不止昨夜的酒让我依依不舍的 不止你的温柔余路还要走多久 你攥着我的手</pk-notice>
                </view>
            </item>

            <item title="带跳转的" contentStyle="group__content">
                <view class="mt20">
                    <pk-notice icon="arrow-right">提示文案</pk-notice>
                </view>
                <view class="mt20">
                    <pk-notice icon="arrow-right">让我掉下眼泪的 不止昨夜的酒让我依依不舍的 不止你的温柔余路还要走多久 你攥着我的手</pk-notice>
                </view>
                <view class="mt20">
                    <pk-notice @click="fn" prefixIcon="close" icon="arrow-right">提示文案</pk-notice>
                </view>
                <view class="mt20">
                    <pk-notice @click="fn" prefixIcon="close">提示文案</pk-notice>
                </view>
                <view class="mt20">
                    <pk-notice @click="fn" prefixIcon="close" icon="arrow-right">让我掉下眼泪的 不止昨夜的酒让我依依不舍的 不止你的温柔余路还要走多久 你攥着我的手</pk-notice>
                </view>
            </item>
            <item title="自定义右侧文字" contentStyle="group__content">
                <view class="mt20">
                    <pk-notice @click="fn" text="好的" :textStyle="styleObj">自定义右侧文本style </pk-notice>
                </view>
                <view class="mt20">
                    <pk-notice @click="fn" text="好的">自定义右侧文本style </pk-notice>
                </view>
            </item>
            <item title="自定义右侧slot" contentStyle="group__content">

                <view class="mt20">
                    <pk-notice @click="fn">
                        让我掉下眼泪的 不止昨夜的酒让我依依不舍的 不止你的温柔余路还要走多久 你攥着我的手
                        <template v-slot:right>
                            <pk-button>按钮</pk-button>
                        </template>
                    </pk-notice>
                </view>

                <view class="mt20">
                    <pk-notice @click="fn" prefixIcon="close">
                        让我掉下眼泪的 不止昨夜的酒让我依
                        <template v-slot:right>
                            <pk-button>按钮</pk-button>
                        </template>
                    </pk-notice>
                </view>

                <view class="mt20">
                    <pk-notice @click="fn" prefixIcon="close">
                        让我掉下眼泪的 不止昨夜的酒让我依依不舍的 不止你的温柔余
                        <template v-slot:right>
                            <pk-button>按钮</pk-button>
                        </template>
                    </pk-notice>
                </view>
            </item>
            <item title="跑马灯效果" contentStyle="group__content">

                <view class="mt20">
                    <pk-notice @click="fn" :scroll="true" prefixIcon="close">
                        让我掉下眼泪的 不止昨夜的酒让我依让我掉下眼泪的 不止昨夜的酒让我依
                        <template v-slot:right>
                            <pk-button>按钮</pk-button>
                        </template>
                    </pk-notice>
                </view>

                <view class="mt20">
                    <pk-notice @click="fn" :scroll="true" icon="arrow-right">让我掉下眼泪的 不止昨夜的酒让我依依不舍的 不止你的温柔余路还要走多久 你攥着我的手</pk-notice>
                </view>
                <view class="mt20">
                    <pk-notice @click="fn" :scroll="true" text="点它" duration="20" :textStyle="styleObj">自定义右侧文本style 不止昨夜的酒让我依依不舍的 不止你的温柔余路还要走多久 你攥着我的手</pk-notice>
                </view>
                <view class="mt20">
                    <pk-notice @click="fn" @click-prefix="fn" :scroll="true" icon="circle-close">速度默认是10的让我掉下眼泪的 不止昨夜的酒让我依依不舍的 不止你的温柔余路还要走多久 你攥着我的手</pk-notice>
                </view>
            </item>

            <pk-dialog v-model="showDialog">
                <view slot="content">
                    这里是正文内容, 这里是正文内容, 这里是正文内容, 这里是正文内容.
                </view>
            </pk-dialog>
        </layout>
    </view>
</template>

<script>
import { PkNotice, PkButton, PkDialog } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgNotice',
    components: {
        PkNotice,
        PkButton,
        Layout,
        Item,
        PkDialog
    },
    data() {
        return {
            showDialog: false,
            styleObj: {
                color: 'green'
            }
        };
    },
    methods: {
        fn(e) {
            this.showDialog = true;
        }
    }
};
</script>

<style lang="scss">
.pg-notice {
    padding: 20px;
    .title {
        display: block;
        font-size: 32px;
        color: #1B1C33;
        font-weight: bold;
        margin: 30px 0;
    }
    .mt20 {
        margin-top: 40px;
    }
}
</style>
