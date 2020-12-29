<template>
    <view class="pg-switch">
        <layout title="Switch 滑动开关">
            <item title="基础使用">
                <pk-switch :title="checkText" :checked="checked" @change="change"></pk-switch>
                <pk-switch :title="checkText2" :checked="checked2" @change="change2"></pk-switch>
            </item>
            <item title="禁用状态使用">
                <pk-switch disabled title="禁用状态" checked></pk-switch>
                <pk-switch disabled title="禁用状态"></pk-switch>
            </item>
            <item title="自定义颜色">
                <pk-switch
                    color="#6190e8"
                    :title="checkText3"
                    :checked="checked3"
                    @change="change3"
                ></pk-switch>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkSwitch } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgSwitch',
    components: {
        PkSwitch,
        Layout,
        Item,
    },
    data() {
        return {
            checkText: '关闭了',
            checked: false,
            checkText2: '开启了',
            checked2: true,
            checkText3: '开启了',
            checked3: true,
        };
    },
    methods: {
        change(val) {
            if (val) {
                this.checkText = '开启中';
            } else {
                this.checkText = '关闭了';
            }

            this.checked = val;
        },
        change2(val) {
            if (val) {
                this.checkText2 = '开启中';
            } else {
                this.checkText2 = '关闭了';
            }

            this.checked2 = val;
        },
        change3(val) {
            if (val) {
                this.checkText3 = '开启中';
            } else {
                this.checkText3 = '关闭了';
            }

            this.checked3 = val;
        },
    },
};
</script>

<style lang="scss">
.pg-switch {
}
</style>
