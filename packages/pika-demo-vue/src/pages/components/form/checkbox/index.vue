<template>
    <view class="pg-checkbox">
        <layout title="Checkbox 多选框">
            <item title="基础使用">
                <pk-checkbox
                    check-icon="circle-check"
                    un-check-icon="circle"
                    pre-set-icon
                    :options="options1"
                    v-model="value1"
                ></pk-checkbox>
            </item>
            <item title="补充说明">
                <pk-checkbox :options="options2" v-model="value2"></pk-checkbox>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkCheckbox } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgCheckbox',
    components: {
        PkCheckbox,
        Layout,
        Item,
    },
    data() {
        return {
            value1: [],
            options1: [
                {
                    value: 'list1',
                    label: 'iPhone X',
                },
                {
                    value: 'list2',
                    label: 'HUAWEI P20',
                },
                {
                    value: 'list3',
                    label: 'OPPO Find X',
                },
                {
                    value: 'list4',
                    label: 'vivo NEX',
                },
            ],

            value2: ['list1'],
            options2: [
                {
                    value: 'list1',
                    label: 'iPhone X',
                    desc:
                        '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
                },
                {
                    value: 'list2',
                    label: 'HUAWEI P20',
                    desc:
                        '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
                },
                {
                    value: 'list3',
                    label: 'OPPO Find X',
                    desc:
                        '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
                },
                {
                    value: 'list4',
                    label: 'vivo NEX',
                    desc:
                        '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
                    disabled: true,
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.pg-checkbox {
}
</style>
