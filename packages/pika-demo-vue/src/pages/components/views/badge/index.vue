<template>
    <view class="pg-badge">
        <!-- <view class="title flex mt40">
            Badge徽标
        </view> -->
        <layout title="Badge 徽标">
            <item title="基础样式" contentStyle="group__content">
                <view class="title flex flex-just mt40">
                    <pk-badge dot />
                    <pk-badge value="29" maxValue="99" />
                    <pk-badge value="1234" maxValue="99" />
                    <pk-badge value="1234" maxValue="999" />
                </view>
            </item>
            <item title="红点badge" contentStyle="group__content">
                <view class="title flex mt40">
                    <pk-badge dot>
                        <pk-button type="linear">按钮</pk-button>
                    </pk-badge>
                </view>
            </item>
            <item title="99+ Badge" contentStyle="group__content">
                <view class="title flex mt40">
                    <pk-badge value="1234" maxValue="99">
                        <pk-button type="linear">按钮</pk-button>
                    </pk-badge>
                </view>
            </item>
            <item title="正常数字 Badge" contentStyle="group__content">
                <view class="title flex mt40">
                    <pk-badge value="99">
                        <pk-button type="linear">按钮</pk-button>
                    </pk-badge>
                </view>
            </item>
            <item title="自定义slot" contentStyle="group__content">
                <view class="title flex mt40">
                    <pk-badge value="1234" maxValue="999">
                        <view class="test-box">自定义</view>
                    </pk-badge>
                    <pk-badge value="14" maxValue="99">
                        <view class="test-box">自定义</view>
                    </pk-badge>
                    <pk-badge value="140" maxValue="99">
                        <view class="test-box">自定义</view>
                    </pk-badge>
                    <pk-badge dot>
                        <view class="test-box">自定义</view>
                    </pk-badge>
                </view>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkBadge, PkButton } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgBadge',
    components: {
        PkBadge,
        PkButton,
        Layout,
        Item,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss">
.pg-badge {
    .pk-badge {
        margin-right: 88px;
    }
    .mt40 {
        margin-top: 40px;
    }
    .title {
        display: block;
        font-size: 32px;
        color: #1b1c33;
        font-weight: bold;
        margin: 30px 0;
        margin-left: 30px;
    }
    .flex {
        display: flex;
        button {
            margin: 0;
        }
    }
    .flex-just {
        justify-content: space-around;
    }
    .test-box {
        width: 100px;
        height: 100px;
        background-color: rgba(128, 128, 128, 0.411);
        line-height: 100px;
        font-size: 22px;
        text-align: center;
        border-radius: 5px;
    }
}
</style>
