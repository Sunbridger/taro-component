<template>
    <view
        :class="{
            'pk-switch': true,
            'pk-switch--border': border,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <view class="pk-switch__text">{{ title }}</view>
        <view>
            <checkbox
                :checked="checked"
                :disabled="disabled"
                style="display: none"
            ></checkbox>
            <view
                :class="{
                    'pk-switch__switch': true,
                    'pk-switch__switch--checked': checked,
                    'pk-switch__switch--disabled': disabled,
                }"
                @tap="change"
            >
                <view
                    :style="{
                        backgroundColor: color,
                    }"
                    class="pk-switch__switch__back"
                ></view>
            </view>
        </view>
    </view>
</template>

<script>
import '../../style/components/switch.css';
import Common from '../../utils/commonMixin';
import Switch from './main';

export default {
    name: 'PkSwitch',
    components: {},
    mixins: [Switch, Common],
};
</script>
