<template>
    <layout title="Input 输入框">
        <item title="基础使用">
            <pk-input title="标准六个文字" placeholder="标准六个文字" clear />
            <pk-input title="标准六个文字再长就换下行" />
            <pk-input placeholder="无标题" />
            <pk-input
                title="自动聚焦"
                :focus="true"
                placeholder="自动聚焦请在实机中查看"
            />
            <pk-input v-model="value1" :title="value1"></pk-input>
        </item>
        <item title="输入框类型">
            <pk-input title="文本" type="text" placeholder="单行文本" />
            <pk-input title="数字" type="number" placeholder="数字" />
            <pk-input title="密码" type="password" placeholder="密码" />
            <pk-input title="身份证" type="idcard" placeholder="身份证号码" />
            <pk-input title="小数" type="digit" placeholder="小数" />
            <pk-input title="手机号码" type="phone" placeholder="手机号码" />
        </item>
        <item title="输入框状态">
            <pk-input
                @click="disabledClick"
                disabled
                title="禁用"
                type="text"
                placeholder="禁用"
            />
            <pk-input
                title="错误"
                type="text"
                placeholder="错误"
                error
                @error-click="errorClick"
            />
            <pk-input
                title="清除"
                type="text"
                placeholder="清除输入"
                clear
                value="清理这里的内容"
            />
            <pk-input
                title="必填项"
                type="text"
                placeholder="必填项"
                required
            />
            <pk-input
                @keyboard-height-change="onKeyboardHeightChange"
                title="键盘高度"
                type="text"
                placeholder="监听键盘高度变化"
            />
        </item>
        <item title="自定义右侧">
            <pk-input title="文本" type="text" placeholder="单行文本">
                <view class="custom-text">输入验证码</view>
            </pk-input>
        </item>
    </layout>
</template>

<script>
import { PkInput } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgInput',
    components: {
        PkInput,
        Layout,
        Item,
    },
    data() {
        return {
            value1: 'V-MODEL',
        };
    },
    methods: {
        onKeyboardHeightChange(val) {
            console.log(val);
        },
        errorClick() {
            console.log('error click !');
        },
        disabledClick() {
            console.log('input disabled');
        },
    },
};
</script>

<style lang="scss">
.custom-text {
    color: rgb(62, 130, 189);
}
</style>
