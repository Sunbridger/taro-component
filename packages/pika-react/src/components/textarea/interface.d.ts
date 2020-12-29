export interface ItextareaProps {
    type?: 'text' | 'number' | 'idcard' | 'digit';
    customStyle?: string; //自定义style
    className?: string; //自定义类名
    value?: string; //文本内容
    cursorSpacing?: number; // 指定光标与键盘的距离
    maxLength?: number; //最大长度
    placeholder?: string; //占位符
    placeholderStyle?: string;
    disabled?: boolean; //是否禁用
    autoFocus?: boolean; //是否自动聚焦
    focus?: boolean; //获取焦点
    showConfirmBar?: boolean; //是否显示键盘上方带有” 完成 “按钮那一栏
    selectionStart?: number; //光标起始位置，自动聚集时有效，需与 selection-end 搭配使用
    selectionEnd?: number; //光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用
    count?: boolean; //是否显示字数
    fixed?: boolean; //如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true
    height?: string; //boolean
    textOverflowForbidden?: boolean; //文字超出最大长度时是否禁止输入，若否，则还可以在 maxLength 的基础上输入500字符，并右下角红字提示
    isAdjustPosition?: boolean; //设置adjust-position属性
    onChange?: (value: string, event: MouseEvent) => void;
    onFocus?: (event: MouseEvent) => void;
    onBlur?: (event: MouseEvent) => void;
    onConfirm?: (event: MouseEvent) => void;
    onLinechange?: (event: MouseEvent) => void;
}

export interface ItextareaState {
    showTextArea?: boolean;
}
