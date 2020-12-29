<template>
    <view
        :class="{
            'pk-checkbox': true,
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
                    selected: selectedList.indexOf(option.value) !== -1,
                    disabled: option.disabled,
                }"
                :icon-info="
                    preSetIcon
                        ? {
                              type:
                                  selectedList.indexOf(option.value) !== -1
                                      ? checkIcon
                                      : unCheckIcon,
                              color:
                                  selectedList.indexOf(option.value) === -1
                                      ? 'rgba(0,0,0,0.3)'
                                      : undefined,
                              className:
                                  selectedList.indexOf(option.value) === -1
                                      ? 'pk-checkbox__pre-icon'
                                      : 'pk-checkbox__pre-icon pk-checkbox__pre-icon--selected',
                              size: 16,
                          }
                        : undefined
                "
                @click="changeSelected(option.value)"
            >
                <template #right>
                    <view
                        v-if="!preSetIcon"
                        :class="{
                            'pk-checkbox__right': true,
                            'pk-checkbox__right--disabled': option.disabled,
                        }"
                    >
                        <pk-icon
                            v-if="selectedList.indexOf(option.value) !== -1"
                            :type="checkIcon"
                            class="pk-checkbox__selected-icon"
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
import '../../style/components/checkbox.css';
import Common from '../../utils/commonMixin';
import Checkbox from './main';
import PkList from '../list';
import PkListItem from '../list-item';
import PkIcon from '../icon';

export default {
    name: 'PkCheckbox',
    components: {
        PkList,
        PkListItem,
        PkIcon,
    },
    mixins: [Checkbox, Common],
};
</script>
