const fs = require('fs-extra');
const execa = require('execa');
const path = require('path');
const ora = require('ora');

const vueDemoRootPath = path.resolve(__dirname, '..', '..', 'pika-demo-vue');
// const reactDemoRootPath = path.resolve(
//     __dirname,
//     '..',
//     '..',
//     'pika-demo-react'
// );
const docsRootPath = path.resolve(__dirname, '..');

async function build() {
    let spain = ora('开始打包文档').start();
    try {
        // build project
        await Promise.all([buildDocs(), buildDemo()]);
        // copt dist files
        await fs.copy(
            path.resolve(vueDemoRootPath, 'dist'),
            path.resolve(docsRootPath, 'dist', 'demo-vue')
        );
        // await fs.copy(
        //     path.resolve(reactDemoRootPath, 'dist'),
        //     path.resolve(docsRootPath, 'dist', 'demo-react')
        // );
        spain.succeed('打包成功');
        return true;
    } catch (error) {
        spain.fail('打包失败');
        console.error(error);
        return false;
    }
}

function buildDocs() {
    return execa('vuepress', ['build', 'docs']);
}

function buildDemo() {
    return Promise.all([
        execa('yarn', ['build:h5'], {
            cwd: vueDemoRootPath,
        }),
        // execa('yarn', ['build:h5'], {
        //     cwd: reactDemoRootPath,
        // }),
    ]);
}

build();
