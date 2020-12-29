<template>
    <view class="pg-toast">
        <layout title="Toast 轻提示">
            <item title="基础使用">
                <pk-button @click="setText('toast')">基础使用</pk-button>
                <pk-button
                    @click="setText('这是文案这是文案这是这个已经是最宽的情况')"
                    >最宽的文本</pk-button
                >
                <pk-toast
                    :show="toastShow"
                    :text="text"
                    @close="onClose"
                ></pk-toast>
            </item>
            <item title="自定义图片">
                <pk-button @click="toastShow2 = true">自定义图片</pk-button>
                <pk-toast
                    v-model="toastShow2"
                    image="http://img.souche.com/f2e/ed44375c983a6c2cdd5d662ef3850fa4.png"
                    text="自定义图片"
                ></pk-toast>
            </item>
            <item title="使用图标">
                <pk-button @click="toastShow3 = true">使用图标</pk-button>
                <pk-toast
                    v-model="toastShow3"
                    icon="heart"
                    text="使用图标"
                ></pk-toast>
            </item>
            <item title="状态">
                <pk-button @click="showStatus('success')">成功</pk-button>
                <pk-button @click="showStatus('error')">失败</pk-button>
                <pk-button @click="showStatus('loading')">加载中</pk-button>
                <pk-toast
                    v-model="toastShow4"
                    :status="toastStatus"
                    :text="toastStatus"
                ></pk-toast>
            </item>
            <item title="遮罩层">
                <pk-button @click="toastShow5 = true">添加遮罩层</pk-button>
                <pk-toast
                    v-model="toastShow5"
                    text="显示遮罩"
                    :has-mask="true"
                ></pk-toast>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkToast, PkButton } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgToast',
    components: {
        PkToast,
        PkButton,
        Layout,
        Item,
    },
    data() {
        return {
            toastShow: false,
            toastShow2: false,
            toastShow3: false,
            toastShow4: false,
            toastShow5: false,
            toastStatus: undefined,
            text: '',
        };
    },
    methods: {
        setText(text) {
            this.text = text;
            this.show();
        },
        show() {
            this.toastShow = true;
        },
        onClose() {
            this.toastShow = false;
        },
        showStatus(status) {
            this.toastStatus = status;
            this.toastShow4 = true;
        },
    },
};
</script>

<style lang="scss">
.pg-toast {
}
</style>
