<template>
    <view class="pg-button">
        <layout title="Button 按钮">
            <item title="主按钮" contentStyle="group__content">
                <view class="flex flex-just">
                    <pk-button @click="showDialog = true" size="medium">default</pk-button>
                    <pk-button @click="showDialog = true" size="medium" disabled>default</pk-button>
                </view>
            </item>
            <item title="线性按钮" contentStyle="group__content">
                <view class="flex flex-just">
                    <pk-button @click="showDialog = true" size="medium" type="linear">linear</pk-button>
                    <pk-button @click="showDialog = true" size="medium" type="linear" disabled>linear</pk-button>
                </view>
            </item>
            <item title="幽灵按钮" contentStyle="group__content">
                <view class="flex flex-just">
                    <pk-button @click="showDialog = true" size="medium" type="hollow">hollow</pk-button>
                    <pk-button @click="showDialog = true" size="medium" type="hollow" disabled>hollow</pk-button>
                </view>
            </item>
            <item title="次要按钮" contentStyle="group__content">
                <view class="flex flex-just">
                    <pk-button @click="showDialog = true" size="medium" type="secondary">secondary</pk-button>
                    <pk-button @click="showDialog = true" size="medium" type="secondary" disabled>secondary</pk-button>
                </view>
            </item>
            <item title="文字按钮" contentStyle="group__content">
                <view class="flex flex-just">
                    <pk-button @click="showDialog = true" size="medium" type="text">text</pk-button>
                    <pk-button @click="showDialog = true" size="medium" type="text" disabled>text</pk-button>
                </view>
            </item>
            <item title="禁用按钮" contentStyle="group__content">
                <view class="flex flex-just">
                    <pk-button @click="showDialog = true" size="medium" disabled>disabled</pk-button>
                    <pk-button @click="showDialog = true" size="medium" type="secondary" disabled>disabled</pk-button>
                </view>
            </item>
            <item title="自定义通栏、圆角" contentStyle="group__content">

                <view class="flex flex-just">
                    <pk-button @click="showDialog = true" full size="large">full</pk-button>
                </view>
                <view class="flex flex-just">
                    <pk-button @click="showDialog = true" full :circle="false"  size="medium">full</pk-button>
                </view>
                <view class="flex flex-just">
                    <pk-button @click="showDialog = true" full>full</pk-button>
                </view>

            </item>

            <item title="自定义大小" contentStyle="group__content">
                <view class="flex flex-just">
                    <pk-button @click="showDialog = true" size="large">large</pk-button>
                    <pk-button @click="showDialog = true" size="medium">medium</pk-button>
                    <pk-button @click="showDialog = true" size="small">small</pk-button>
                </view>
            </item>

            <item title="其他按钮" contentStyle="group__content group__content4">
                <view class="flex flex-just">
                    <pk-button @click="showDialog = true" type="other">other</pk-button>
                </view>
                <view class="flex flex-just">
                    <pk-button @click="showDialog = true" type="other" size="large">other</pk-button>
                </view>
            </item>

            <item title="按钮组 非flex" contentStyle="group__content">
                <pk-button group>
                    <pk-button @click="showDialog = true" size="medium" type="secondary">次要按钮</pk-button>
                    <pk-button @click="showDialog = true" size="medium">主要按钮</pk-button>
                </pk-button>
            </item>
            <item title="按钮组 flex" contentStyle="group__content">
                <pk-button group flex>
                    <pk-button @click="showDialog = true" size="medium">重要按钮</pk-button>
                    <pk-button @click="showDialog = true" size="medium">主要按钮</pk-button>
                </pk-button>
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

import Taro from '@tarojs/taro';
import { PkButton, PkDialog } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PkButton',
    components: {
        PkButton,
        PkDialog,
        Layout,
        Item
    },
    data() {
        return {
            showDialog: false
        };
    },
    mounted() {
        if (Taro.getEnv() === 'WEB') {
            document.querySelectorAll('.pk-button').forEach((button) => {
                button.classList.add('pk-button-web');
            })
        }
    }
};
</script>

<style lang="scss">
.pg-button {
    .title {
        display: block;
        font-size: 32px;
        color: #1B1C33;
        font-weight: bold;
        margin: 30px 0;
    }
    .flex {
        margin-top: 30px;
        display: flex;
        button {
            margin: 0;
        }
    }
    .flex-just {
        justify-content: space-between;
        align-items: center;
    }
    .group__content {
        margin-top: 30px;
    }
    .group__content4 {
        background-color: #F7F8FA;
        padding: 35px;
    }
    .group__content5 {
        background-color: #F7F8FA;
    }
}
.pk-button-web {
    width: 25%;
}
.pk-button--full, .pk-button--other {
    width: 100%;
}
</style>
