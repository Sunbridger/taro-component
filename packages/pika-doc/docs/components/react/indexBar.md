---
componentType: 'react'
demoPath: '/pages/components/indexBar/indexBar'
---

# IndexBar(React)

### 说明
#### 组件说明
索引列表组件，可以通过点击索引导航，快速定位到列表处
#### 开发人员
章政

### 引入
#### 组件
import {PkIndexBar} from '@souche/pika-react';
**组件依赖的样式文件（仅按需引用时需要）**
@import "~@souche/pika-react/dist/style/components/indexBar.scss";


### 代码演示
```jsx
import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { PkIndexBar } from '@souche/pika-react';

export default class IndexBarExample extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            list: [
                {
                    title: '自',
                    noTitle: true,
                    key: 'self',
                    items: [
                        {
                            render: <View>自定义内容</View>,
                        },
                    ],
                },
                {
                    title: '*',
                    key: 'all',
                    items: [
                        {
                            name: '全部',
                        },
                    ],
                },
                {
                    title: 'A',
                    key: 'A',
                    items: [
                        {
                            name: '阿坝',
                            // 此处可加其他业务字段
                        },
                        {
                            name: '阿拉善',
                        },
                    ],
                },
                {
                    title: 'B',
                    key: 'B',
                    items: [
                        {
                            name: '北京',
                        },
                        {
                            name: '保定',
                        },
                    ],
                },
                {
                    title: 'C',
                    key: 'C',
                    items: [
                        {
                            name: '北京',
                        },
                        {
                            name: '保定',
                        },
                    ],
                },
                {
                    title: 'D',
                    key: 'D',
                    items: [
                        {
                            name: '北京',
                        },
                        {
                            name: '保定',
                        },
                    ],
                },
                {
                    title: 'E',
                    key: 'E',
                    items: [
                        {
                            name: '北京',
                        },
                        {
                            name: '保定',
                        },
                    ],
                },
            ],
        };
    }
    render() {
        return (
            <View className='indexBarExample'>
                <PkIndexBar list={this.state.list} />
            </View>
        );
    }
}

```




### API
#### PkIndexBar Props
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| list | 详见list部分 | array | - |
| zIndex | z-index 层级 | number | 1 |
| highlightColor | 索引字符高亮颜色 | string | #07c160 |
| isVibrate | 索引切换是否震动(微信) | boolean | true |
| isShowToast | 索引切换是否显示toast | boolean | true |
| animation | 是否开启动画 | boolean | true |

##### list部分
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 列表标题 | string | - |
| noTitle | 是否显示标题 | boolean | false |
| key | 用于右侧显示栏 | string | - |
| items | 列表项（详见listItems部分） | array | - |


##### items部分
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| name | 内容名称 | string | '' |
| render | 自定义内容，存在该参数时，不显示name值 | JSX.Element | null |


#### PkIndexBar Events
| 事件 | 说明 | 返回参数 |
| --- | --- | --- |
| onClick | 列表点击 | 当前items属性 |


## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      | ✅    |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)



