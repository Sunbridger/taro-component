---
componentType: 'vue'
demoPath: '/#/pages/components/form/search-bar/index'
---

# Search Bar 搜索栏

如果需要按需引入, 则: 

```js
import { PkSearchBar } from '@souche/pika-vue';
```

## 使用案例

### 基础案例

```html
<pk-search-bar></pk-search-bar>
```

### 提供选项

```html
<pk-search-bar
    :menu-list="menuList"
    @menu-change="menuChange"
    :selected-index="selectedIndex"
></pk-search-bar>

<script>
export default {
    data() {
        return {
            menuList: [
                {
                    name: '新车',
                    key: 'new',
                },
                {
                    name: '二手车',
                    key: 'old',
                },
            ],
            selectedIndex: 0,
        };
    },
    methods: {
        menuChange(item, key) {
            this.selectedIndex = key;
        },
    },
};
</script>
```

## API

### Props

| 参数        | 说明           | 类型    | 可选值                              | 默认值 |
| ----------- | -------------- | ------- | ----------------------------------- | ------ |
| value       | 输入框的值     | String  | -                                   | -      |
| placeholder | 占位符         | String  | -                                   | -      |
| maxLength   | 最大长度       | Number  | -                                   | 140    |
| focus       | 是否聚焦       | Boolean | -                                   | false  |
| disabled    | 是否禁止输入   | Boolean | -                                   | false  |
| inputType   | 输入框输入类型 | String  | 'text', 'number', 'idcard', 'digit' | 'text' |



### Events

| 事件名称               | 说明                       | 返回参数    |
| ---------------------- | -------------------------- | ----------- |
| focus                  | 输入框聚焦的事件           | CommonEvent |
| blur                   | 输入框失焦的事件           | CommonEvent |
| input                  | 输入框内容变化的事件       | CommonEvent |
| confirm                | 键盘点击完成的事件         | CommonEvent |
| keyboard-height-change | 键盘高度发生变化触发的事件 | CommonEvent |


## 平台兼容

| 平台   | 微信 | 支付宝 | H5  | 百度 | 头条 |
| ------ | ---- | ------ | --- | ---- | ---- |
| 兼容性 | ✅    | ✅      | ✅   |      |      |


## 相关问题

- [Bug反馈](https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new)