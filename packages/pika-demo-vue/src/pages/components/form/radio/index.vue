<template>
    <view class="pg-radio">
        <layout title="Radio 单选框">
            <item title="基础使用">
                <pk-radio :options="options1" v-model="value1"></pk-radio>
            </item>
            <item title="自定义图标">
                <pk-radio
                    check-icon="circle-check"
                    un-check-icon="circle"
                    :options="options1"
                    v-model="value4"
                ></pk-radio>
            </item>
            <item title="前置ICON">
                <pk-radio
                    check-icon="circle-check"
                    un-check-icon="circle"
                    :options="options1"
                    pre-set-icon
                    v-model="value5"
                ></pk-radio>
            </item>
            <item title="含有描述">
                <pk-radio :options="options2" v-model="value2"></pk-radio>
            </item>
            <item title="单项禁用">
                <pk-radio
                    pre-set-icon
                    :options="options3"
                    check-icon="circle-check"
                    un-check-icon="circle"
                    v-model="value3"
                ></pk-radio>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkRadio } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgRadio',
    components: {
        PkRadio,
        Layout,
        Item,
    },
    data() {
        return {
            options1: [
                { label: '单选项一', value: 'option1' },
                { label: '单选项二', value: 'option2' },
                { label: '单选项三', value: 'option3' },
            ],
            options2: [
                { label: '单选项一', value: 'option1', desc: '单选项描述' },
                { label: '单选项二', value: 'option2', desc: '单选项描述' },
                { label: '单选项三', value: 'option3', desc: '单选项描述' },
            ],
            options3: [
                { label: '单选项一', value: 'option1', desc: '单选项描述' },
                { label: '单选项二', value: 'option2' },
                {
                    label: '单选项三禁用',
                    value: 'option3',
                    desc: '单选项描述',
                    disabled: true,
                },
            ],
            value1: 'option1',
            value2: 'option1',
            value3: 'option3',
            value4: 'option1',
            value5: 'option1',
        };
    },
};
</script>

<style lang="scss">
.pg-radio {
}
</style>
