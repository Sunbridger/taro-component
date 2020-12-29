---
componentType: 'vue'
demoPath: '/#/pages/components/navigation/tab-bar/index'
---

# TabBar 底部标签栏

如果需要按需引入, 则:

```js
import { TabBar } from '@souche/pika-vue';
```

## 使用案例

### 文本标签栏

```html
<pk-tab-bar
    :tabList="tabList"
    :onClick="(e) => state = e"
    :current="state"></pk-tab-bar>
```
### icon文本标签栏

```html
<pk-tab-bar
    :iconSize="24"
    :tabList="tabList2"
    :onClick="(e) => state2 = e"
    :current="state2"></pk-tab-bar>
```

### 自定义颜色+icon文本标签栏

```html
<pk-tab-bar
    backgroundColor='#ececec'
    color='#ea6bb8'
    :iconSize="24"
    :tabList="tabList3"
    :onClick="(e) => state3 = e"
    :current="state3"></pk-tab-bar>
```

### 图片作为图标

```html
<pk-tab-bar
    :iconSize="24"
    :tabList="tabList4"
    :onClick="(e) => state4 = e"
    :current="state4"></pk-tab-bar>
```
### 底部固定

```html
<pk-tab-bar
    fixed
    :iconSize="24"
    :tabList="tabList4"
    :onClick="(e) => state4 = e"
    :current="state4"></pk-tab-bar>
```
```js
data() {
    return {
        state: 0,
        state2: 0,
        state3: 0,
        state4: 0,
        tabList: [
            { title: '待办事项', text: 8 },
            { title: '拍照' },
            { title: '通讯录', dot: true }
        ],
        tabList2: [
            { title: '待办事项', iconType: 'heart', text: 'new' },
            { title: '拍照', iconType: 'close', text: '100' },
            { title: '文件夹', iconType: 'close', text: '100', max: 99 }
        ],
        tabList3: [
            { title: '待办事项', iconType: 'heart', text: 'new' },
            { title: '拍照', iconType: 'close', text: '100' },
            { title: '文件夹', iconType: 'close', text: '100', max: 99 }
        ],
        tabList4: [
            { title: '领取中心', image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png', selectedImage: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png', text: 'new' },
            { title: '找折扣', image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png' },
            { title: '领会员', image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png', text: '100', max: 99 }
        ]
    };
}
```
## API

| 属性 | 类型 | 默认值 | 必填 | 可选值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| customStyle | Object、String |  | 否 |  | 自定义样式 |
| className |  Array、String  |  | 否 |  | 自定义类名 |
| fixed | boolean | false | 否 |  | 是否固定于底部 |
| current | Number | 0 | 否 |  | 当前选中的索引 |
| iconSize | Number, String |  | 否 |  | icon大小 |
| fontSize | Number, String |  | 否 |  | 字体大小 |
| color | String |  | 否 |  | 文字颜色 |
| selectedColor | String |  | 否 |  | 选中文字颜色 |
| selectedImage | String |  | 否 |  | 选中图片url |
| image | String |  | 否 |  | 图片url |

| tabList | Array<Object> |  | 是 | Object = {title: '', iconType: '', text: '', max: '', image: '', selectedImage: ''} |  |

#### Events

| 事件 | 说明 | 返回参数 |
| --- | --- | --- |
| click | 点击触发 | index, event 对象 |

## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |

## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)
