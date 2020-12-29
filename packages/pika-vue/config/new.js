const fs = require('fs-extra');
const path = require('path');
const ora = require('ora');
const { vueTemplate, tsTemplate, styleTemplate } = require('./template');

const resolve = (...args) => path.resolve(__dirname, '..', 'src', ...args);
const componentPath = name => resolve('components', name);
const vuePath = name => resolve('components', name, 'index.vue');
const mainPath = name => resolve('components', name, 'main.ts');
const stylePath = name => resolve('style', 'components', `${name}.scss`);

let spain;

function init() {
    const argvs = {};
    process.argv.slice(2).forEach(item => {
        const arr = item.split('=');
        argvs[arr[0]] = arr[1];
    });
    return Promise.resolve(argvs);
}

// 检查同名组件是否存在
function checkComponentExist(name) {
    return fs.pathExistsSync(vuePath(name));
}

function makeComponent(info) {
    spain = ora('开始创建组件').start();
    try {
        let name = info.name;
        fs.ensureDirSync(componentPath(name));
        fs.writeFileSync(vuePath(name), vueTemplate(name), 'utf8');
        fs.writeFileSync(mainPath(name), tsTemplate(name), 'utf8');
        fs.writeFileSync(stylePath(name), styleTemplate(name), 'utf8');
        spain.succeed('组件创建成功');
    } catch (error) {
        spain.fail('组件创建失败');
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

init().then(res => {
    if (res.name) {
        if (checkComponentExist(res.name)) {
            throw new Error('组件已存在');
        } else {
            makeComponent(res);
        }
    } else {
        throw new Error('输入组件名称为空');
    }
});
