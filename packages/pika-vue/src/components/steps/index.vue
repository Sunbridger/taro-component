<template>
    <view
        :class="{
            'pk-steps': true,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <view v-for="(row, index) in items" :key="index" class="pk-steps-node">
            <image
                :class="{
                    'pk-steps-node-icon': true,
                }"
                :src="getIconSrc(index)"
                alt=""
                @tap="clickFn(index)"
            />
            <view
                @tap="clickFn(index)"
                :class="{
                    'pk-steps-normal-text': true,
                    'pk-steps-select-text': current === index,
                }"
                >{{ row.title }}</view
            >
        </view>

        <view
            class="pk-steps-line"
            :style="{
                width,
            }"
        >
        </view>
    </view>
</template>

<script>
import '../../style/components/steps.css';
import Common from '../../utils/commonMixin';
import Steps from './main';

export default {
    name: 'PkSteps',
    mixins: [Steps, Common],
};
</script>
