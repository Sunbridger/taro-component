<template>
    <view class="pg-textarea">
        <layout title="Textarea 文本域">
            <item title="基础使用">
                <pk-textarea v-model="value"></pk-textarea>
            </item>
            <item title="自定义高度">
                <pk-textarea :height="120" placeholder="自定义内容高度120" :count="false"></pk-textarea>
            </item>
            <item title="自定义提示">
                <pk-textarea v-model="value" max-length="140">
                    <view class="cus_tip" slot="tip">车况描述包含以下敏感词，请修改：发票发票贩毒毒品，贩毒</view>
                </pk-textarea>
            </item>
            <item title="自定义按钮">
                <pk-textarea v-model="value" :count="false">
                    <view slot="ctrl" class="cus_ctrl">
                        <pk-button type="text">清除</pk-button>
                        <pk-button>识别</pk-button>
                    </view>
                </pk-textarea>
            </item>
            <item title="禁止状态">
                <pk-textarea disabled v-model="value"></pk-textarea>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkTextarea, PkButton } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgTextarea',
    components: {
        PkTextarea,
        PkButton,
        Layout,
        Item,
    },
    data() {
        return {
            value: '默认高度98, 开启字数统计, 默认字数上限140',
        };
    },
};
</script>

<style lang="scss">
.pg-textarea {
    .cus_tip {
        font-size: 24px;
        color: red;
    }

    .cus_ctrl {
        text-align: right;
    }
}
</style>
