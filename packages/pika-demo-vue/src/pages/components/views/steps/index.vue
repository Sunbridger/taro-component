<template>
    <view class="pg-steps">
        <layout title="Steps 步骤条">
            <item title="基础使用"  contentStyle="group__content">
                <view class="mt20">
                    <pk-steps :items="items" :current.sync="current1"></pk-steps>
                </view>
                <view class="mt20">
                    <pk-steps :items="items2" :current.sync="current2"></pk-steps>
                </view>
                <view class="mt20">
                    <pk-steps :items="items3" :current.sync="current3"></pk-steps>
                </view>
            </item>
            <item title="交互式使用" contentStyle="group__content">
                <view class="mt20">
                    <pk-steps canClick :items="items4" :current.sync="current4"></pk-steps>
                </view>
               当前点击的索引 {{current4}}
            </item>
        </layout>
    </view>
</template>

<script>
import { PkSteps } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgSteps',
    components: {
        PkSteps,
        Layout,
        Item,
    },
    data() {
        return {
            current2: 0,
            current1: 0,
            current3: 1,
            current4: 1,
            items: [{
                title: '节点名称'
            }, {
                title: '节点名称'
            }, {
                title: '节点名称'
            }],
            items2: [
                {
                    title: '签署合同',
                }, {
                    title: '节点名称'
                },{
                    title: '节点名称'
                },{
                    title: '节点名称'
                }, {
                    title: '节点名称'
                }
            ],
            items3: [{
                    title: '节点名称',
                }, {
                    title: '签署合同'
                },{
                    title: '节点名称'
                },{
                    title: '节点名称'
            }],
            items4: [{
                    title: '节点名称',
                }, {
                    title: '签署合同'
                },{
                    title: '节点名称'
                },{
                    title: '节点名称'
            }],
        };
    },
    methods: {
        fn(r) {
            console.log(r, '--r');
        }
    }
};
</script>

<style lang="scss">
.pg-steps {
    .mt20 {
        margin-top: 50px;
    }
}
</style>
