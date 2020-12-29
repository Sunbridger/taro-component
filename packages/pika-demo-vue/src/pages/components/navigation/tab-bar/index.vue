<template>
    <view class="pg-tab-bar">
        <layout title="TabBar 底部标签栏">
            <item title="文本标签栏">
                <pk-tab-bar
                :tabList="tabList"
                :onClick="(e) => state = e"
                :current="state"></pk-tab-bar>
            </item>

            <item title="icon文本标签栏">
                <pk-tab-bar
                :iconSize="24"
                :tabList="tabList2"
                :onClick="(e) => state2 = e"
                :current="state2"></pk-tab-bar>
            </item>


            <item title="自定义颜色+icon文本标签栏">
                <pk-tab-bar
                backgroundColor='#ececec'
                color='#ea6bb8'
                :iconSize="24"
                :tabList="tabList3"
                :onClick="(e) => state3 = e"
                :current="state3"></pk-tab-bar>
            </item>

            <item title="图片作为图标">
                <pk-tab-bar
                :iconSize="24"
                :tabList="tabList4"
                :onClick="(e) => state4 = e"
                :current="state4"></pk-tab-bar>
            </item>


            <item title="固定于底部的">
                <pk-tab-bar
                fixed
                :iconSize="24"
                :tabList="tabList4"
                :onClick="(e) => state4 = e"
                :current="state4"></pk-tab-bar>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkTabBar } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgTabBar',
    components: {
        PkTabBar,
        Layout,
        Item,
    },
    data() {
        return {
            state: 0,
            state2: 0,
            state3: 0,
            state4: 0,
            tabList: [
                { title: '待办事项', text: 8 },
                { title: '拍照' },
                { title: '通讯录', dot: true }
            ],
            tabList2: [
                { title: '待办事项', iconType: 'heart', text: 'new' },
                { title: '拍照', iconType: 'close', text: '100' },
                { title: '文件夹', iconType: 'close', text: '100', max: 99 }
            ],
            tabList3: [
                { title: '待办事项', iconType: 'heart', text: 'new' },
                { title: '拍照', iconType: 'close', text: '100' },
                { title: '文件夹', iconType: 'close', text: '100', max: 99 }
            ],
            tabList4: [
                { title: '领取中心', image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png', selectedImage: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png', text: 'new' },
                { title: '找折扣', image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png' },
                { title: '领会员', image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png', text: '100', max: 99 }
            ]
        };
    },
    methods: {

    }
};
</script>

<style lang="scss">
.pg-tab-bar {
    height: 666Px;
}
</style>
