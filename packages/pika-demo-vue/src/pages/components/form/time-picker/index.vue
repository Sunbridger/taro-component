<template>
    <view class="pg-time-picker">
        <layout title="TimePicker 时间选择器">
            <item title="基础使用">
                <view class="item-box">
                    <pk-time-picker v-model="time">
                        选择时间: {{ time }}
                    </pk-time-picker>
                </view>
            </item>
            <item title="限定起始时间和结束时间">
                <view class="item-box">
                    <pk-time-picker start="10:20" end="16:50">
                        10:20 ~ 16:50
                    </pk-time-picker>
                </view>
            </item>
            <item title="基础使用">
                <view class="item-box">
                    <pk-time-picker disabled>
                        禁止选择
                    </pk-time-picker>
                </view>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkTimePicker } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgTimePicker',
    components: {
        PkTimePicker,
        Layout,
        Item,
    },
    data() {
        return {
            time: '08:00',
        };
    },
};
</script>

<style lang="scss">
.pg-time-picker {
    .item-box {
        padding-left: 25px;
        margin-top: 15px;
        font-size: 32px;
        color: #333;
    }
}
</style>
