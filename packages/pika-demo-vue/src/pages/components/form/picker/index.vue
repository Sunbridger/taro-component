<template>
    <view class="pg-picker">
        <layout title="Picker 选择器">
            <item title="基础使用">
                <pk-picker
                    mode="selector"
                    :range="array"
                    :value="index"
                    @change="change1"
                    @column-change="columnChange"
                    title="单选"
                >
                    <pk-button class="cus-button"
                        >单选: {{ array[index] }}</pk-button
                    >
                </pk-picker>
            </item>
            <item title="多项选择">
                <pk-picker
                    mode="multiSelector"
                    :range="multArray"
                    v-model="index2"
                    title="多选 多选 多选 多选多选多选多选多选多选"
                    @column-change="columnChange"
                >
                    <pk-button class="cus-button"
                        >多选:
                        {{
                            `${multArray[0][index2[0]]}年${
                                multArray[1][index2[1]]
                            }月${multArray[2][index2[2]]}日`
                        }}</pk-button
                    >
                </pk-picker>
            </item>
            <item title="Disabled">
                <pk-picker
                    mode="selector"
                    disabled
                    :range="array"
                    :value="index"
                    @change="change1"
                    title="单选"
                >
                    <pk-button class="cus-button">禁止选择</pk-button>
                </pk-picker>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkPicker, PkButton } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgPicker',
    components: {
        PkPicker,
        PkButton,
        Layout,
        Item,
    },
    data() {
        return {
            array: ['美国', '中国', '巴西', '日本'],
            multArray: [
                ['2017', '2018', '2019', '2020'],
                ['1', '2', '3', '4'],
                ['01', '02', '03', '04', '05'],
            ],
            index: 0,
            index2: [0, 0, 0],
        };
    },
    methods: {
        change1(index) {
            this.index = index;
        },
        columnChange(val) {
            console.log(val);
        },
    },
};
</script>

<style lang="scss">
.pg-picker {
    .cus-button {
        width: 100%;
        margin-top: 15px;
    }
}
</style>
