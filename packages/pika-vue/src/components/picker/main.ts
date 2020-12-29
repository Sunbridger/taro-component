import { enumValidate } from '../../utils/common';
import Taro from '@tarojs/taro';

enum MODE_CLASS {
    selector = 'selector',
    multiSelector = 'multiSelector',
}

export default {
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        mode: {
            type: String,
            validator: enumValidate(MODE_CLASS),
            default: MODE_CLASS.selector,
        },
        title: {
            type: String,
            default: '',
        },
        range: {
            type: Array,
            default: (): any[] => [],
        },
        rangeKey: {
            type: String,
            default: 'name',
        },
        value: {
            type: [Number, Array],
            default: 0,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data(): any {
        return {
            pickerShow: process.env.TARO_ENV === 'alipay' ? true : false,
            curValue: 0,
            initHidden: process.env.TARO_ENV === 'alipay' ? true : false,
        };
    },
    watch: {
        value: {
            handler(val): void {
                if (val !== undefined) {
                    this.curValue = val;
                }
            },
            immediate: true,
        },
    },
    methods: {
        triggerPicker(): void {
            if (!this.disabled) {
                this.pickerShow = true;
            }
        },
        getShowValue(item): string {
            if (typeof item === 'object') {
                return item[this.rangeKey] || '';
            } else {
                return item;
            }
        },
        onCancel(): void {
            this.pickerShow = false;
            this.$emit('cancel', false);
        },
        onOk(): void {
            this.pickerShow = false;
            this.$emit('change', this.curValue);
        },
        pickerViewChange(item): void {
            this.curValue = item.detail.value[0];
            this.$emit('column-change', this.curValue);
        },
        pickerViewChangeMult(itemList): void {
            this.curValue = itemList.detail.value;
            this.$emit('column-change', this.curValue);
        },
    },
    mounted(): void {
        if (process.env.TARO_ENV === 'alipay') {
            this.initHidden = true;
            Taro.nextTick(() => {
                this.pickerShow = false;
                this.initHidden = false;
            });
        }
    },
};
