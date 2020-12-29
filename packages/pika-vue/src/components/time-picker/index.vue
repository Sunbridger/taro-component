<template>
    <view
        :class="{
            'pk-time-picker': true,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <pk-picker
            v-model="indexs"
            mode="multiSelector"
            :range="range"
            :disabled="disabled"
            @column-change="dateChange"
            @change="change"
        >
            <slot></slot>
        </pk-picker>
    </view>
</template>

<script>
import '../../style/components/time-picker.css';
import Common from '../../utils/commonMixin';
import PkPicker from '../picker';
import TimePicker from './main';

export default {
    name: 'PkTimePicker',
    components: {
        PkPicker,
    },
    mixins: [TimePicker, Common],
};
</script>
