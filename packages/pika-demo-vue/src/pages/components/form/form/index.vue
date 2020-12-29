<template>
    <view class="pg-form">
        <layout title="Form 表单">
            <item title="基础使用">
                <pk-form @submit="onSubmit" @reset="onReset">
                    <pk-input
                        title="用户名"
                        type="text"
                        v-model="username"
                    ></pk-input>
                    <pk-input
                        title="密码"
                        type="password"
                        v-model="password"
                    ></pk-input>
                    <view class="ctrl-group">
                        <pk-button form-type="submit">提交</pk-button>
                        <pk-button form-type="reset">重置</pk-button>
                    </view>
                </pk-form>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkForm, PkInput, PkButton } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgForm',
    components: {
        PkForm,
        PkInput,
        PkButton,
        Layout,
        Item,
    },
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        onSubmit() {
            console.log(this.username, this.password);
        },
        onReset() {
            this.username = '';
            this.password = '';
        },
    },
};
</script>

<style lang="scss">
.pg-form {
    .ctrl-group {
        text-align: center;
        margin-top: 20px;
    }
}
</style>
