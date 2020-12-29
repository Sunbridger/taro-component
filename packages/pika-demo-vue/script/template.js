const { PREFIX, firstUppercase } = require('./utils');
const prefix = PREFIX.toLocaleLowerCase();

const configTpl = (name) => `export default {
    navigationBarTitleText: '${name.en}(${name.zh})'
}`

const indexTpl = (name) => `<template>
    <view class="pg-${name.en}">
        <layout title="${firstUppercase(name.en)} ${name.zh}">
            <item title="基础使用">
                <${prefix}-${name.en}></${prefix}-${name.en}>
            </item>
        </layout>
    </view>
</template>

<script>
import { ${PREFIX}${firstUppercase(name.en)} } from '@souche/pika-vue';
import Layout from '@/components/layout/index';
import Item from '@/components/layout/item';

export default {
    name: 'Pg${firstUppercase(name.en)}',
    components: {
        ${PREFIX}${firstUppercase(name.en)},
        Layout,
        Item,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss">
.pg-${name.en} {
}
</style>
`

module.exports = {
    configTpl, indexTpl
}