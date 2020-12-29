const fs = require('fs-extra');
const path = require('path');
const ora = require('ora');
const { configTpl, indexTpl } = require('./template');
const { findIndex, firstUppercase } = require('./utils');

const resolve = (...args) => path.resolve(__dirname, '..', 'src', ...args);

const componentPath = (groupname, cptname) => resolve('pages', groupname, cptname);
const indexPath = (gn, name) => resolve('pages', gn, name, 'index.vue');
const configPath = (gn, name) => resolve('pages', gn, name, 'index.config.ts');
const componentJsonPath = resolve('components.json');
const componentJson = require(componentJsonPath);

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
    return fs.pathExistsSync(indexPath(name));
}

function makeComponent(info) {
    spain = ora('开始创建示例页面').start();
    try {
        let name = {
            en: info.name,
            zh: info.chinese
        };

        // save to components.json
        let index = findIndex(componentJson, 'name', info.group);
        if (index === -1) {
            spain.fail('组件所属组不存在');
            throw Error('group is not exist');
        }

        componentJson[index].items.push({
            name: `${firstUppercase(name.en)} (${name.zh})`,
            path: `${name.en}/index`
        });

        let groupName = componentJson[index].path;

        // write components.json
        fs.writeFileSync(componentJsonPath, JSON.stringify(componentJson, null, 4), 'utf8');
        // create component-demo dir exist
        fs.ensureDirSync(componentPath(groupName, name.en));

        fs.writeFileSync(indexPath(groupName, name.en), indexTpl(name), 'utf8');
        fs.writeFileSync(configPath(groupName, name.en), configTpl(name), 'utf8');
        spain.succeed('示例页面创建成功');
    } catch (error) {
        spain.fail('示例页面创建错误');
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

init().then(res => {
    if (res.name) {
        if (checkComponentExist(res.name)) {
            throw new Error('页面已存在');
        } else {
            makeComponent(res);
        }
    } else {
        throw new Error('输入页面名称为空');
    }
});
