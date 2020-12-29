import { enumValidate } from '../../utils/common';

enum TypeEnum {
    text = 'text',
    number = 'number',
    idcard = 'idcard',
    digit = 'digit',
    password = 'password',
    phone = 'phone',
}

enum ConfirmTypeEnum {
    send = 'send',
    search = 'search',
    next = 'next',
    go = 'go',
    done = 'done',
}

export default {
    model: {
        prop: 'value',
        event: 'input',
    },
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        name: {
            type: String,
        },
        type: {
            type: String,
            validator: enumValidate(TypeEnum),
            default: TypeEnum.text,
        },
        maxlength: {
            type: Number,
            default: 140,
        },
        placeholder: {
            type: String,
            default: '请输入',
        },
        placeholderStyle: {
            type: String,
            default: 'color: #b0b1b8;',
        },
        placeholderClass: {
            type: String,
            default: 'pk-inpit-default-placeholder-class',
        },
        title: {
            type: String,
        },
        // 键盘的右下角按钮
        confirmType: {
            type: String,
            validator: enumValidate(ConfirmTypeEnum),
            default: ConfirmTypeEnum.done,
        },
        selectionStart: {
            type: Number,
            default: -1,
        },
        selectionEnd: {
            type: Number,
            default: -1,
        },
        cursor: {
            type: Number,
        },
        cursorSpacing: {
            type: Number,
            default: 50,
        },
        adjustPosition: {
            type: Boolean,
            default: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        border: {
            type: Boolean,
            default: true,
        },
        error: {
            type: Boolean,
            default: false,
        },
        clear: {
            type: Boolean,
            default: false,
        },
        focus: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        holdKeyboard: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        actualProps(): any {
            const props = {
                type: this.type,
                maxlength: this.maxlength,
                password: false,
            };

            switch (props.type) {
                case TypeEnum.phone:
                    props.type = TypeEnum.number;
                    props.maxlength = 11;
                    break;
                case TypeEnum.password:
                    props.type = TypeEnum.text;
                    props.password = true;
                    break;
                default:
                    break;
            }

            return props;
        },
    },
    methods: {
        onInput(e): void {
            this.$emit('input', e.target.value, e);
        },
        onFocus(e): void {
            this.$emit('focus', e);
        },
        onBlur(e): void {
            this.$emit('blur', e);
        },
        onConfirm(e): void {
            this.$emit('confirm', e);
        },
        clearInput(): void {
            this.$emit('input', '');
            this.localValue = '';
        },
        onKeyboardHeightChange(e): void {
            this.$emit('keyboard-height-change', e);
        },
        errorClick(): void {
            this.$emit('error-click');
        },
        click(): void {
            if (this.disabled) {
                this.$emit('click');
            }
        },
    },
    data(): any {
        return {
            localValue: '',
            isAlipay: process.env.TARO_ENV === 'alipay',
        };
    },
    mounted(): void {
        this.localValue = this.value;
    },
};
