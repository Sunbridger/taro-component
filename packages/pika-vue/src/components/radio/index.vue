<template>
    <view
        :class="{
            'pk-radio': true,
            [actualClassName]: actualClassName,
        }"
        :style="customStyle"
    >
        <pk-list>
            <pk-list-item
                v-for="(option, index) in options"
                :key="option.value"
                :has-border="index < options.length - 1"
                :title="option.label"
                :note="option.desc"
                :disabled="option.disabled"
                :class="{
                    selected: option.value === value,
                    disabled: option.disabled,
                }"
                :icon-info="
                    preSetIcon
                        ? {
                              type:
                                  option.value === value
                                      ? checkIcon
                                      : unCheckIcon,
                              color:
                                  option.value !== value
                                      ? 'rgba(0,0,0,0.3)'
                                      : undefined,
                              className:
                                  option.value !== value
                                      ? 'pk-radio__pre-icon'
                                      : 'pk-radio__pre-icon pk-radio__pre-icon--selected',
                              size: 16,
                          }
                        : undefined
                "
                @click="changeCheck(option.value)"
            >
                <template #right>
                    <view
                        v-if="!preSetIcon"
                        :class="{
                            'pk-radio__right': true,
                            'pk-radio__right--disabled': option.disabled,
                        }"
                    >
                        <pk-icon
                            v-if="value === option.value"
                            :type="checkIcon"
                            class="pk-radio__selected-icon"
                        ></pk-icon>
                        <pk-icon
                            v-else
                            :type="unCheckIcon"
                            color="rgba(0,0,0,0.3)"
                        ></pk-icon>
                    </view>
                </template>
            </pk-list-item>
        </pk-list>
    </view>
</template>

<script>
import '../../style/components/radio.css';
import Common from '../../utils/commonMixin';
import Radio from './main';
import PkList from '../list';
import PkListItem from '../list-item';
import PkIcon from '../icon';

export default {
    name: 'PkRadio',
    components: {
        PkList,
        PkListItem,
        PkIcon,
    },
    mixins: [Radio, Common],
};
</script>
