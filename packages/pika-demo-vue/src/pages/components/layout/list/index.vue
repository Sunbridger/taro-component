<template>
    <view class="pg-list">
        <layout title="List 列表">
            <item title="基础使用">
                <pk-list>
                    <pk-list-item
                        title="标题文字标题文字标题文字标题文字标题文字"
                    ></pk-list-item>
                    <pk-list-item title="标题文字" arrow="right"></pk-list-item>
                    <pk-list-item
                        title="标题文字"
                        extraText="详细信息详细信息详细信息详细信息详细信息详细信息"
                        arrow="right"
                    ></pk-list-item>
                    <pk-list-item
                        title="禁用状态"
                        :disabled="true"
                        :has-border="false"
                        extraText="详细信息"
                    ></pk-list-item>
                </pk-list>
            </item>
            <item title="包含描述信息">
                <pk-list>
                    <pk-list-item
                        title="标题文字"
                        note="描述信息"
                    ></pk-list-item>
                    <pk-list-item
                        title="标题文字"
                        note="描述信息"
                        arrow="right"
                    ></pk-list-item>
                    <pk-list-item
                        title="这是一个很长很长很长很长很长很长很长很长很长很长很长很长的标题文字"
                        note="描述信息描述信息描述信息描述信息"
                        arrow="right"
                        extraText="详细信息详细信息详细信息详细信息详细信息"
                        :has-border="false"
                    ></pk-list-item>
                </pk-list>
            </item>
            <item title="包含图片">
                <pk-list>
                    <pk-list-item
                        title="标题文字"
                        thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                    ></pk-list-item>
                    <pk-list-item
                        title="标题文字"
                        note="描述信息"
                        arrow="right"
                        thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                    ></pk-list-item>
                    <pk-list-item
                        title="标题文字"
                        note="描述信息"
                        arrow="right"
                        thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                        extraText="详细信息"
                        :has-border="false"
                    ></pk-list-item>
                </pk-list>
            </item>
            <item title="无边框">
                <pk-list :has-border="false">
                    <pk-list-item
                        title="标题文字"
                        :has-border="false"
                    ></pk-list-item>
                    <pk-list-item
                        title="标题文字"
                        :has-border="false"
                    ></pk-list-item>
                </pk-list>
            </item>
            <item title="使用图标">
                <pk-list>
                    <pk-list-item
                        title="标题文字"
                        :icon-info="{
                            type: 'star',
                            color: 'red',
                        }"
                    ></pk-list-item>
                    <pk-list-item
                        title="标题文字"
                        note="说明文字"
                        :icon-info="{
                            type: 'star',
                            color: 'blue',
                        }"
                        :has-border="false"
                    ></pk-list-item>
                </pk-list>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkList, PkListItem } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgList',
    components: {
        PkList,
        Layout,
        Item,
        PkListItem,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss">
.pg-list {
    .co-layout-item__content {
        padding: 32px;
    }
}
</style>
