const fse = require('fs-extra');
const path = require('path');
// const ora = require('ora');
const execa = require('execa');
const { callForNext } = require('./utils');

const srcRoot = path.resolve(__dirname, '..', 'packages');
const makeComponentPath = dirname =>
    path.resolve(srcRoot, dirname, 'components.json');
const makeNewPath = dirname =>
    path.resolve(srcRoot, dirname, 'scripts', 'new.js');

const reactComponentPath = makeComponentPath('pika-react');
const reactPluginsPath = makeComponentPath('pika-react-plugins');
const reactComponentDemoPath = makeComponentPath('pika-demo-react');
const reactComponentNewPath = makeNewPath('pika-react');
const reactPluginsNewPath = makeNewPath('pika-react-plugins');
const reactComponentDemoNewPath = makeNewPath('pika-demo-react');

const componentCategory = [
    {
        name: '基础组件',
        value: 'basic',
        short: '基础组件',
    },
    {
        name: '布局组件',
        value: 'layout',
        short: '布局组件',
    },
    {
        name: '表单组件',
        value: 'form',
        short: '表单组件',
    },
    {
        name: '反馈组件',
        value: 'feedback',
        short: '反馈组件',
    },
    {
        name: '导航组件',
        value: 'navigate',
        short: '导航组件',
    },
    {
        name: '视图组件',
        value: 'visual',
        short: '视图组件',
    },
];

function getComponentFromInput() {
    const questions = [
        {
            type: 'input',
            message: '输入组件名称',
            name: 'name',
        },
        {
            type: 'input',
            message: '输入组件中文名称',
            name: 'chinese',
        },
        {
            type: 'list',
            message: '选择组件类型',
            name: 'type',
            choices: [
                {
                    name: '普通组件',
                    value: 'ui',
                    short: '普通UI组件',
                },
                {
                    name: '插件',
                    value: 'plugin',
                    short: '插件',
                },
            ],
        },
        {
            type: 'list',
            message: '选择组件归属',
            name: 'category',
            choices: componentCategory,
            when: value => {
                return value.type === 'ui';
            },
        },
        {
            type: 'list',
            message: '选择组件模式',
            name: 'mode',
            choices: [
                {
                    name: 'Class类组件',
                    value: 'class',
                    short: 'Class类组件',
                },
                {
                    name: 'Function函数组件',
                    value: 'function',
                    short: 'Function函数组件',
                },
            ],
        },
    ];

    return callForNext(questions).then(res => {
        return res;
    });
}

async function checkExistOrNot(configPath, name, type, category) {
    const compFile = JSON.parse(await fse.readFileSync(configPath, 'utf-8'));
    const list =
        type === 'ui'
            ? compFile[type].filter(item => item.category === category)[0].list
            : compFile[type];
    let exist = false;

    for (const file of list) {
        if (file.name === name) {
            exist = true;
        }
    }
    return exist;
}

getComponentFromInput()
    .then(async res => {
        const args = [
            `name=${res.name}`,
            `chinese=${res.chinese}`,
            `type=${res.type}`,
            `mode=${res.mode}`,
            `category=${res.category}`,
        ];
        const allCheckPromise = [
            checkExistOrNot(
                reactComponentDemoPath,
                res.name,
                res.type,
                res.category
            ),
        ];
        allCheckPromise.unshift(
            checkExistOrNot(
                res.type === 'ui' ? reactComponentPath : reactPluginsPath,
                res.name,
                res.type,
                res.category
            )
        );
        Promise.all(allCheckPromise).then(async ([hasReact, hasReactDemo]) => {
            if (!hasReact) {
                await execa(
                    'node',
                    [
                        res.type === 'ui'
                            ? reactComponentNewPath
                            : reactPluginsNewPath,
                        ...args,
                    ],
                    {
                        stdio: ['inherit', 'inherit', 'inherit'],
                    }
                );
            }
            if (!hasReactDemo) {
                await execa('node', [reactComponentDemoNewPath, ...args], {
                    stdio: ['inherit', 'inherit', 'inherit'],
                });
            }
        });
    })
    .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e.message);
    });
