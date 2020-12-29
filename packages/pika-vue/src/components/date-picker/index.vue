<template>
    <view :class="`pk-date-picker ${actualClassName}`" :style="customStyle">
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
import '../../style/components/date-picker.css';
import Common from '../../utils/commonMixin';
import PkPicker from '../picker';
import DatePicker from './main';

export default {
    name: 'PkDatePicker',
    components: {
        PkPicker,
    },
    mixins: [DatePicker, Common],
};
</script>
