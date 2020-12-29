const fs = require('fs');
const path = require('path');

const PREFIX = 'PK';

const firstUppercase = (str) => {
    return str.split('-').reduce((acc, cur) => {
        acc += cur.replace(cur[0], cur[0].toUpperCase());
        return acc;
    }, '');
};



const getTemplate = (name) => (`<template>
    <view></view>
</template>

<script>

import '../../style/components/${name}.css';
import ${PREFIX}${firstUppercase(name)} from './main';

export default {
    name: '${PREFIX}${firstUppercase(name)}',
    mixins: [${PREFIX}${firstUppercase(name)}],
    components: {}
}
</script>
`);

const getMainTs = () => (`export default {
    props: {},
    data() {
        return {}
    }
}`);

function init() {
    const name = process.argv.slice(2)[0];
    if (!name) return;
    creatVue(name);
    creatStyle(name);
}

function creatVue(name) {
    const dir = path.resolve(__dirname, '../src/components', name);
    fs.mkdir(dir, (error) => {
        if (!error) {
            fs.writeFile(`${dir}/index.vue`, getTemplate(name), 'utf8', () => {});
            fs.writeFile(`${dir}/main.ts`, getMainTs(), 'utf8', () => {});
        }
    });
}

function creatStyle(name) {
    const dir = path.resolve(__dirname, `../src/style/components/${name}.scss`);
    fs.writeFile(dir, '', 'utf8', (err) => {
        if (!err) {
            appendStyleIndex(name);
        }
    });
}

function appendStyleIndex(name) {
    const dir = path.resolve(__dirname, '../src/style/components/index.scss');
    fs.appendFile(dir, `\n@import './${name}.scss';`, () => {})
}

init();
