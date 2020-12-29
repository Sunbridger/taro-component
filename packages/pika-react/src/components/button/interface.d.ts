import { CSSProperties } from 'react';
import { ButtonProps } from '@tarojs/components/types/Button';

export interface PkComponent {
    className?: string;
    style?: React.CSSProperties;
}
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'primary' | 'secondary' | 'linear' | 'text';
export interface PkButtonProps
    extends PkComponent,
        Omit<
            ButtonProps,
            | 'disabled'
            | 'hoverClass'
            | 'hoverStyle'
            | 'loading'
            | 'size'
            | 'type'
        > {
    // appParameter?: string; // 打开 app 时，向 app 传递的参数。生效时机：open-type="launchApp"
    children?: React.ReactNode;
    disabled?: boolean; // 是否禁用
    // formType?: 'reset' | 'submit'; // 用于 <form /> 组件，点击分别会触发 <form /> 组件的 submit/reset 事件
    hoverClass?: string; // 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果
    // hoverStartTime?: number; // 按住后多久出现点击态，单位毫秒
    // hoverStayTime?: number; // 手指松开后点击态保留时间，单位毫秒
    // hoverStopPropagation?: boolean; // 指定是否阻止本节点的祖先节点出现点击态
    hoverStyle?: string; // 由于 rn 不支持 class，故 rn 端的 button 组件实现了 hoverStyle 属性，写法和 style 类似，只不过 hoverStyle 的样式是指定按下去的样式
    icon?: React.ReactNode; // 图标的类型
    // lang?: 'en' | 'zh_CN' | 'zh_TW'; // 指定返回用户信息的语言，en 英文，zh_CN 简体中文，zh_TW 繁体中文。生效时机：open-type="getUserInfo"
    loading?: boolean; // 名称前是否带 loading 图标
    // openType?:
    //     | 'contact'
    //     | 'contactShare'
    //     | 'feedback'
    //     | 'getAuthorize'
    //     | 'getPhoneNumber'
    //     | 'getRealnameAuthInfo'
    //     | 'getUserInfo'
    //     | 'launchApp'
    //     | 'lifestyle'
    //     | 'openSetting'
    //     | 'share'; // 微信开放能力
    plain?: boolean; // 按钮是否镂空，背景色透明
    // scope?: 'phoneNumber' | 'userInfo'; // 支付宝小程序 scope。生效时机：open-type="getAuthorize"
    // sendMessageImg?: string; // 会话内消息卡片图片。生效时机：open-type="contact"
    // sendMessagePath?: string; // 会话内消息卡片点击跳转小程序路径。生效时机：open-type="contact"
    // sendMessageTitle?: string; // 会话内消息卡片标题。生效时机：open-type="contact"
    // sessionFrom?: string; // 会话来源。生效时机：open-type="contact"
    // showMessageCard?: boolean; // 显示会话内消息卡片。生效时机：open-type="contact"
    size?: ButtonSize; // 按钮的大小
    type?: ButtonType; // 按钮的样式类型
    onClick?: (e: CommonEvent) => void; // 点击事件
}
