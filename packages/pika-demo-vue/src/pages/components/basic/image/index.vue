<template>
    <view class="pg-image">
        <layout title="Image 图片">
            <item title="" contentStyle="group__content">
                <view v-for="item in array" :key="item.mode">
                    <text class="title">{{item.text}}</text>
                    <pk-image
                        :mode="item.mode"
                        :src="src"></pk-image>
                </view>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkImage } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgImage',
    components: {
        PkImage,
        Layout,
        Item
    },
    data() {
        return {
            array: [{
                mode: 'scaleToFill',
                text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
                }, {
                mode: 'aspectFit',
                text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
                }, {
                mode: 'aspectFill',
                text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
                }, {
                mode: 'top',
                text: 'top：不缩放图片，只显示图片的顶部区域'
                }, {
                mode: 'bottom',
                text: 'bottom：不缩放图片，只显示图片的底部区域'
                }, {
                mode: 'center',
                text: 'center：不缩放图片，只显示图片的中间区域'
                }, {
                mode: 'left',
                text: 'left：不缩放图片，只显示图片的左边区域'
                }, {
                mode: 'right',
                text: 'right：不缩放图片，只显示图片的右边边区域'
                }, {
                mode: 'top left',
                text: 'top left：不缩放图片，只显示图片的左上边区域'
                }, {
                mode: 'top right',
                text: 'top right：不缩放图片，只显示图片的右上边区域'
                }, {
                mode: 'bottom left',
                text: 'bottom left：不缩放图片，只显示图片的左下边区域'
                }, {
                mode: 'bottom right',
                text: 'bottom right：不缩放图片，只显示图片的右下边区域'
            }],
            src: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g3/M09/0D/07/Cg-4V1RlZlqIEQbjAB1HhjZXh1IAARShAA8dyEAHUee795.jpg'
        }
    }
};
</script>

<style lang="scss">
.pg-image {
    .title {
        display: block;
        font-size: 32px;
        color: #1B1C33;
        font-weight: bold;
        margin: 30px 0;
    }
    .flex {
        display: flex;
        button {
            margin: 0;
        }
    }
    .flex-just {
        justify-content: space-between;
    }
}
</style>
