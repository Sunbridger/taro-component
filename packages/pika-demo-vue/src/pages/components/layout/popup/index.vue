<template>
    <view class="pg-popup">
        <layout title="Popup 弹出层">
            <item title="基础使用">
                <pk-button
                    class="popbutton"
                    size="medium"
                    @click="openPopup('center')"
                    >居中弹出</pk-button
                >
                <pk-button
                    class="popbutton"
                    size="medium"
                    @click="openPopup('bottom')"
                    >底部弹出</pk-button
                >
                <pk-button
                    class="popbutton"
                    size="medium"
                    @click="openPopup('top')"
                    >顶部弹出</pk-button
                >
                <pk-button
                    class="popbutton"
                    size="medium"
                    @click="openPopup('left')"
                    >左侧弹出</pk-button
                >
                <pk-button
                    class="popbutton"
                    size="medium"
                    @click="openPopup('right')"
                    >右侧弹出</pk-button
                >
                <pk-popup v-model="show" :position="position">
                    <view class="white-box">{{ position }}</view>
                </pk-popup>
            </item>
            <item title="不显示圆角">
                <pk-button class="popbutton" size="medium" @click="openPopup2"
                    >底部弹出</pk-button
                >
                <pk-popup v-model="show2" position="bottom" :round="false">
                    <view class="white-box">无圆角</view>
                </pk-popup>
            </item>
            <item title="自定义宽高">
                <pk-button
                    class="popbutton"
                    size="medium"
                    @click="openPopup3('bottom', 'height:300px;')"
                    >底部弹出</pk-button
                >
                <pk-button
                    class="popbutton"
                    size="medium"
                    @click="openPopup3('left', 'width:150px;')"
                    >左侧弹出</pk-button
                >
                <pk-button
                    class="popbutton"
                    size="medium"
                    @click="openPopup3('center', 'width:250px;height:250px;')"
                    >居中弹出</pk-button
                >
                <pk-popup
                    v-model="show3"
                    :position="position2"
                    :customStyle="cusStyle"
                >
                    <view class="white-box">{{ cusStyle }}</view>
                </pk-popup>
            </item>
        </layout>
    </view>
</template>

<script>
import { PkPopup, PkButton } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'PgPopup',
    components: {
        PkPopup,
        PkButton,
        Layout,
        Item,
    },
    data() {
        return {
            show: false,
            show2: false,
            show3: false,
            position: 'center',
            position2: 'bottom',
            cusStyle: '',
        };
    },
    methods: {
        openPopup(position) {
            console.log(position);

            this.position = position;
            this.show = true;
        },
        openPopup2() {
            this.show2 = true;
        },
        openPopup3(position, val) {
            this.cusStyle = val;
            this.position2 = position;
            this.show3 = true;
        },
    },
};
</script>

<style lang="scss">
.pg-popup {
    .popbutton {
        margin-top: 20px;
        width: 100%;
    }

    .white-box {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
