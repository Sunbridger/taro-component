---
componentType: 'react'
demoPath: '/pages/components/sticky/sticky'
---

# Sticky(React)

### 说明
#### 组件说明
用于元素置顶

#### 开发人员
章政

### 引入
#### 组件
import {PkSticky} from '@souche/pika-react';
**组件依赖的样式文件（仅按需引用时需要）**
@import "~@souche/pika-react/dist/style/components/sticky.scss";


### 代码演示
#### 基本使用
```jsx
import React, { Component } from 'react';
import { ScrollView, View } from '@tarojs/components';
import { PkSticky } from '@souche/pika-react';
import ShowCom from '../../../components/showCom';
import './sticky.scss';

export default class StickyExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <ScrollView className='stickyExample' scrollY>
                <View className='stickyWrapper'>
                    <ShowCom title='基本使用'>
                        <View className='wrapper'>
                            <PkSticky>
                                <View className='content'>置顶内容</View>
                            </PkSticky>
                        </View>
                        再滑就没了...
                    </ShowCom>
                </View>
            </ScrollView>
        );
    }
}

```




### API
#### PkSticky Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| noSticky | 取消置顶 | boolean | false/true | `true` |
| top | 到顶部距离 | number | - | 0 |
| compatibilityMode | 兼容模式, 用定时器监听代替sticky属性,  | boolean | false/true | `true` |

#### Pksticky Events
| 事件 | 说明 | 返回参数 |
| --- | --- | --- |
| onChange | 兼容模式下置顶和非置顶时的通知事件 |  |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      | ✅    |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)



