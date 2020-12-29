<template>
    <view class="pg-tabs">
        <layout title="Tabs 标签页">
            <item title="基础使用">
                
                <pk-tabs :tab-list="tabList4" v-model="current6">
                    <pk-tab-pane :index="0" class="panel-content">
                        标签内容1
                    </pk-tab-pane>
                    <pk-tab-pane :index="1" class="panel-content">
                        标签内容2
                    </pk-tab-pane>
                </pk-tabs>

                <pk-tabs :tab-list="tabList3" v-model="current5">
                    <pk-tab-pane :index="0" class="panel-content">
                        标签内容1
                    </pk-tab-pane>
                    <pk-tab-pane :index="1" class="panel-content">
                        标签内容2
                    </pk-tab-pane>
                    <pk-tab-pane :index="2" class="panel-content">
                        标签内容3
                    </pk-tab-pane>
                </pk-tabs>

                <pk-tabs :tab-list="tabList" v-model="current">
                    <pk-tab-pane :index="0" class="panel-content">
                        标签内容1
                    </pk-tab-pane>
                    <pk-tab-pane :index="1" class="panel-content">
                        标签内容2
                    </pk-tab-pane>
                    <pk-tab-pane :index="2" class="panel-content">
                        标签内容3
                    </pk-tab-pane>
                    <pk-tab-pane :index="3" class="panel-content">
                        标签内容4
                    </pk-tab-pane>
                </pk-tabs>
            </item>
            <item title="滚动标签栏">
                <pk-tabs :scroll="true" :tab-list="tabList2" v-model="current2">
                    <pk-tab-pane :index="0" class="panel-content">
                        标签内容1
                    </pk-tab-pane>
                    <pk-tab-pane :index="1" class="panel-content">
                        标签内容2
                    </pk-tab-pane>
                    <pk-tab-pane :index="2" class="panel-content">
                        标签内容3
                    </pk-tab-pane>
                    <pk-tab-pane :index="3" class="panel-content">
                        标签内容4
                    </pk-tab-pane>
                    <pk-tab-pane :index="4" class="panel-content">
                        标签内容5
                    </pk-tab-pane>
                    <pk-tab-pane :index="5" class="panel-content">
                        标签内容6
                    </pk-tab-pane>
                </pk-tabs>
            </item>
            <item title="垂直模式">
                <pk-tabs
                    :scroll="true"
                    tabDirection="vertical"
                    :tab-list="tabList2"
                    v-model="current3"
                >
                    <pk-tab-pane :index="0" class="panel-content">
                        标签内容1
                    </pk-tab-pane>
                    <pk-tab-pane :index="1" class="panel-content">
                        标签内容2
                    </pk-tab-pane>
                    <pk-tab-pane :index="2" class="panel-content">
                        标签内容3
                    </pk-tab-pane>
                    <pk-tab-pane :index="3" class="panel-content">
                        标签内容4
                    </pk-tab-pane>
                    <pk-tab-pane :index="4" class="panel-content">
                        标签内容5
                    </pk-tab-pane>
                    <pk-tab-pane :index="5" class="panel-content">
                        标签内容6
                    </pk-tab-pane>
                </pk-tabs>
            </item>
            <item title="禁止切换动画">
                <pk-tabs
                    :animated="false"
                    :tab-list="tabList"
                    v-model="current4"
                >
                    <pk-tab-pane :index="0" class="panel-content">
                        标签内容1
                    </pk-tab-pane>
                    <pk-tab-pane :index="1" class="panel-content">
                        标签内容2
                    </pk-tab-pane>
                    <pk-tab-pane :index="2" class="panel-content">
                        标签内容3
                    </pk-tab-pane>
                    <pk-tab-pane :index="3" class="panel-content">
                        标签内容4
                    </pk-tab-pane>
                </pk-tabs>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkTabs, PkTabPane } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgTabs',
    components: {
        PkTabs,
        PkTabPane,
        Layout,
        Item,
    },
    data() {
        return {
            tabList: [
                { title: '标签页1' },
                { title: '标签页2' },
                { title: '标签页3' },
                { title: '标签页4' },
            ],
            tabList2: [
                { title: '标签页1' },
                { title: '标签页2' },
                { title: '标签页3' },
                { title: '标签页4' },
                { title: '标签页5' },
                { title: '标签页6' },
            ],
            tabList3: [
                { title: '标签页1' },
                { title: '标签页2' },
                { title: '标签页3' },
            ],
            tabList4: [
                { title: '标签页1' },
                { title: '标签页2' },
            ],
            current: 0,
            current2: 0,
            current3: 0,
            current4: 2,
            current5: 0,
            current6: 0,
        };
    },
};
</script>

<style lang="scss">
.pg-tabs {
    .panel-content {
        background-color: #eee;
        padding: 25px;
        width: 100%;
        box-sizing: border-box;
    }
}
</style>
