<template>
    <view class="pg-date-picker">
        <layout title="DatePicker 日期选择器">
            <item title="基础使用">
                <view class="item-box">
                    <pk-date-picker :value="date" @change="getDate">
                        日期: {{ date }}
                    </pk-date-picker>
                </view>
            </item>
            <item title="限定起始时间和结束时间">
                <view class="item-box">
                    <pk-date-picker start="2019-02-03" end="2021-10-16">
                        2019/02/03 ~ 2021/10/16
                    </pk-date-picker>
                </view>
            </item>
            <item title="单独选取 年 / 月">
                <view class="item-box">
                    <pk-date-picker fields="year" v-model="pickYear">
                        选取年: {{ pickYear }}
                    </pk-date-picker>
                    <pk-date-picker fields="month" v-model="pickMonth">
                        选取月: {{ pickMonth }}
                    </pk-date-picker>
                </view>
            </item>
            <item title="禁用状态">
                <view class="item-box">
                    <pk-date-picker value="2020-01-01" disabled>
                        禁止选取: 2020-01-01
                    </pk-date-picker>
                </view>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkDatePicker } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';
import Taro from '@tarojs/taro';

export default {
    name: 'PgDatePicker',
    components: {
        PkDatePicker,
        Layout,
        Item,
    },
    data() {
        return {
            date: '2020-01-01',
            pickYear: '2020',
            pickMonth: '2020-09',
        };
    },
    methods: {
        getDate(value) {
            this.date = value;
        },
    },
};
</script>

<style lang="scss">
.pg-date-picker {
    .item-box {
        padding-left: 25px;
        margin-top: 15px;
        font-size: 32px;
        color: #333;
    }
}
</style>
