import { CommonEvent } from '@tarojs/components';
import { enumValidate } from '../../utils/common';

enum TypeEnum {
    text = 'text',
    number = 'number',
    idcard = 'idcard',
    digit = 'digit',
}

export default {
    props: {
        value: {
            type: [String],
            default: '',
        },
        placeholder: {
            type: String,
            default: '搜索',
        },
        maxLength: {
            type: Number,
            default: 140,
        },
        focus: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        inputType: {
            type: String,
            validator: enumValidate(TypeEnum),
            default: TypeEnum.text,
        },
        // 左侧菜单的内容
        menuList: {
            type: Array,
            default: (): Array<{
                name: string;
                key: string;
            }> => [],
        },
        // 当前选中的菜单项
        selectedIndex: {
            type: Number,
            default: 0,
        },
    },
    data(): any {
        return {
            isFocus: false,
            inputValue: '',
            dropShow: false,
        };
    },
    computed: {},
    methods: {
        onFocus(event: CommonEvent): void {
            this.isFocus = true;
            this.$emit('focus', event);
        },
        onBlur(event: CommonEvent): void {
            this.isFocus = false;
            this.$emit('blur', event);
        },
        onInput(event: CommonEvent): void {
            this.inputValue = event.detail.value;
            this.$emit('input', event);
        },
        onClear(): void {
            this.inputValue = '';
        },
        confirm(event: CommonEvent): void {
            this.$emit('confirm', this.inputValue, event);
        },
        onKeyboardHeightChange(event: CommonEvent): void {
            this.$emit('keyboard-height-change', event);
        },

        onToggleDropShow(): void {
            this.dropShow = !this.dropShow;
        },
        onClickMenuItem(item, index): void {
            this.dropShow = !this.dropShow;
            this.$emit('menu-change', item, index);
        },
    },
};
