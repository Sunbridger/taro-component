const fs = require('fs-extra');
const path = require('path');
const execa = require('execa');
const lodash = require('lodash');
const chalk = require('chalk');
const ora = require('ora');
const { callForNext } = require('./utils');

let spain;

const srcRoot = path.resolve(__dirname, '..', 'packages');
const componentsPath = path.resolve(
    srcRoot,
    'pika-demo-vue',
    'src',
    'components.json'
);

const components = require(componentsPath);

let groups = components.map(item => {
    return {
        name: item.name,
        value: item.name,
        short: item.name,
    };
});

function isExistGroup(name) {
    let index = lodash.findIndex(groups, {
        name,
    });
    return index !== -1;
}

function getComponentFromInput() {
    const questions = [
        {
            type: 'list',
            message: '选择你要创建的类型:',
            name: 'choose',
            choices: [
                {
                    name: '模块',
                    value: 'group',
                    short: '模块',
                },
                {
                    name: '组件',
                    value: 'components',
                    short: '组件',
                },
            ],
        },
    ];

    return callForNext(questions).then(res => {
        if (res.choose == 'group') {
            return createGroup();
        } else {
            return createComponent();
        }
    });
}

function createGroup() {
    const questions = [
        {
            type: 'input',
            message: '输入模块的中文名称:',
            name: 'name',
        },
        {
            type: 'input',
            message: '输入模块的英文名称:',
            name: 'path',
        },
    ];

    return callForNext(questions).then(res => {
        if (isExistGroup(res.name)) {
            console.error(ora.error`error: 模块已存在`);
            process.exit(1);
        } else {
            return createGroupFile(res);
        }
    });
}

function createGroupFile(res) {
    spain = ora('开始创建模块').start();
    try {
        let newData = [
            ...components,
            {
                name: res.name,
                path: res.path,
                items: [],
            },
        ];
        fs.writeFileSync(
            componentsPath,
            JSON.stringify(newData, null, 4),
            'utf8'
        );
        spain.succeed('创建模块成功');
        return true;
    } catch (error) {
        spain.fail('创建模块失败');
        console.error(error);
        return false;
    }
}

function createComponent() {
    const questions = [
        {
            type: 'list',
            message: '选择所属模块:',
            name: 'group',
            choices: groups,
        },
        {
            type: 'input',
            message: '输入组件名称(英文):',
            name: 'name',
        },
        {
            type: 'input',
            message: '输入组件名称(中文):',
            name: 'chinese',
        },
    ];

    return callForNext(questions).then(async res => {
        try {
            const args = [
                `name=${res.name}`,
                `chinese=${res.chinese}`,
                `group=${res.group}`,
            ];

            await execa(
                'node',
                [
                    path.resolve(srcRoot, 'pika-vue', 'config', 'new.js'),
                    ...args,
                ],
                {
                    stdio: ['inherit', 'inherit', 'inherit'],
                }
            );

            await execa(
                'node',
                [
                    path.resolve(srcRoot, 'pika-demo-vue', 'script', 'new.js'),
                    ...args,
                ],
                {
                    stdio: ['inherit', 'inherit', 'inherit'],
                }
            );

            console.log(
                chalk.green`🎉 Tada! 运行 yarn dev:vue 开始你的开发工作吧!`
            );
        } catch (error) {
            console.log(chalk.red(error));
        }
    });
}

getComponentFromInput();
