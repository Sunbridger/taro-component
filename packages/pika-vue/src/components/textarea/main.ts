export default {
    model: {
        prop: 'value',
        event: 'input',
    },
    props: {
        value: {
            type: String,
        },
        placeholder: {
            type: String,
            default: '请输入',
        },
        // 是否显示字数统计
        count: {
            type: Boolean,
            default: true,
        },
        placeholderStyle: {
            type: String,
            default: '',
        },
        placeholderClass: {
            type: String,
            default: 'pk-textarea__placeholder',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        maxLength: {
            type: [Number, String],
            default: 140,
        },
        autoFocus: {
            type: Boolean,
            default: false,
        },
        focus: {
            type: Boolean,
            default: false,
        },
        height: {
            type: Number,
            default: 98,
        },
        autoHeight: {
            type: Boolean,
            default: false,
        },
        fixed: {
            type: Boolean,
            default: false,
        },
        cursorSpacing: {
            type: Number,
            default: 50,
        },
        cursor: {
            type: Number,
        },
        showConfirmBar: {
            type: Boolean,
            default: false,
        },
        selectionStart: {
            type: Number,
            default: -1,
        },
        selectionEnd: {
            type: Number,
            default: -1,
        },
        adjustPosition: {
            type: Boolean,
            default: true,
        },
        holdKeyboard: {
            type: Boolean,
            default: false,
        },
        disableDefaultPadding: {
            type: Boolean,
            default: false,
        },
    },
    data(): any {
        return {
            localValue: '',
            controlled: false, // 当前组件是否受控
            isAlipay: process.env.TARO_ENV === 'alipay',
        };
    },
    mounted(): void {
        if (this.value === undefined) {
            this.controlled = false;
        } else {
            this.controlled = true;
        }
    },
    computed: {
        factValue(): string {
            if (this.controlled) {
                return this.value;
            } else {
                return this.localValue;
            }
        },
        placeHolderClassString(): string {
            return ['pk-textarea__placeholder', this.placeholderClass].join(
                ' '
            );
        },
        textAreaHeight(): number {
            if (this.count) {
                return this.height - 17;
            } else {
                return this.height;
            }
        },
    },
    methods: {
        onFocus(e: any): void {
            this.$emit('focus', e);
        },
        onBlur(e: any): void {
            this.$emit('blur', e);
        },
        onLineChange(e: any): void {
            this.$emit('line-change', e);
        },
        onInput(e: any): void {
            this.localValue = e.detail.value;
            this.$emit('input', e.detail.value, e);
        },
        onConfirm(e: any): void {
            this.$emit('confirm', e);
        },
        onKeyboardHeightChange(e: any): void {
            this.$emit('keyboard-height-change', e);
        },
    },
};
