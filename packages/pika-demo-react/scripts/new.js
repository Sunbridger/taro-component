const { toLetterFirstUpper } = require('./utils');
const fse = require('fs-extra');
const path = require('path');
const ora = require('ora');

let spain;

const srcRoot = path.resolve(__dirname, '..', 'src');
const componentJsonRecord = path.resolve(__dirname, '..', 'components.json');
const componentsFilePath = path.resolve(__dirname, '..', 'components.json');
const componentExampleRootPathDir = path.resolve(
    srcRoot,
    'pages',
    'components'
);
// const componentPageApp = path.resolve(srcRoot, 'app.config.ts');
const componentTemplate = {
    mainExample: path.resolve(__dirname, 'temp', 'component_example.text'),
    mainConfig: path.resolve(__dirname, 'temp', 'component_config.text'),
};
// const componentPageRelative = {
//     ui: path.resolve(srcRoot, 'pages', 'ui', 'index.tsx'),
//     plugin: path.resolve(srcRoot, 'pages', 'plugins', 'index.tsx'),
// };

// function getComponentFromInput() {
//     const questions = [
//         {
//             type: 'list',
//             message: '选择组件类型',
//             name: 'type',
//             choices: [
//                 {
//                     name: '基础组件',
//                     value: 'ui',
//                     short: '基础组件',
//                 },
//                 {
//                     name: '插件',
//                     value: 'plugin',
//                     short: '插件',
//                 },
//             ],
//         },
//         {
//             type: 'input',
//             message: '输入组件名称',
//             name: 'name',
//         },
//         {
//             type: 'input',
//             message: '输入组件中文名称',
//             name: 'chinese',
//         },
//     ];
//
//     return callForNext(questions).then(res => {
//         return res;
//     });
// }

function getComponentFromArgs() {
    const argvs = {};
    process.argv.slice(2).forEach(item => {
        const arr = item.split('=');
        argvs[arr[0]] = arr[1];
    });
    return Promise.resolve(argvs);
}

async function checkExistOrNot(name, type, category) {
    const compFile = JSON.parse(
        await fse.readFileSync(componentsFilePath, 'utf-8')
    );
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

function makeComponentOfExample({ name, chinese }) {
    fse.mkdirpSync(path.resolve(componentExampleRootPathDir, name));
    let file = fse.readFileSync(componentTemplate.mainExample, 'utf-8');
    let fileConfig = fse.readFileSync(componentTemplate.mainConfig, 'utf-8');
    file = file.replace(/(_ComponentName_)|(_componentName_)/g, $0 => {
        if ($0 === '_ComponentName_') return toLetterFirstUpper(name);
        if ($0 === '_componentName_') return name;
    });
    fileConfig = fileConfig.replace(/_componentCNName_/g, () => {
        return `'${chinese}'`;
    });
    fse.writeFileSync(
        path.resolve(componentExampleRootPathDir, name, `${name}.config.js`),
        fileConfig
    );
    fse.writeFileSync(
        path.resolve(componentExampleRootPathDir, name, `${name}.tsx`),
        file
    );
}

function changeComponentConfig({ type, name, chinese, category }) {
    // const splitRep = /(\/\/\sPAGE_LIST->start)((.|\n)*)(\/\/\sPAGE_LIST->end)/;
    // 3.0+直接导入本地json配置文件 不需要硬编
    // app 修改
    // {
    //     let file = fse.readFileSync(componentPageApp, 'utf-8');
    //     file = file.replace(splitRep, function ($0, $1, $2, $3, $4) {
    //         // eslint-disable-next-line no-console
    //         return (
    //             $1 +
    //             $2 +
    //             `'pages/components/${name}/${name}',` +
    //             '\n        ' +
    //             $4
    //         );
    //     });
    //     fse.writeFileSync(componentPageApp, file);
    // }
    // // 对应tab列表修改
    // {
    //     let file = fse.readFileSync(componentPageRelative[type], 'utf-8');
    //     file = file.replace(splitRep, function ($0, $1, $2, $3, $4) {
    //         const content = `{
    //                 name: '${chinese}',
    //                 router: '/pages/components/${name}/${name}',
    //             },
    //         `;
    //         return $1 + $2 + content + $3 + '   ' + $4;
    //     });
    //     fse.writeFileSync(componentPageRelative[type], file);
    // }
    // json文件修改
    {
        let file = fse.readFileSync(componentJsonRecord, 'utf-8');
        const content = {
            name,
            type,
            chinese,
            path: `/pages/components/${name}/${name}`,
        };
        file = JSON.parse(file);
        if (type === 'ui') {
            file[type]
                .filter(item => item.category === category)[0]
                .list.push(content);
        } else {
            file[type].push(content);
        }
        fse.writeFileSync(componentJsonRecord, JSON.stringify(file, null, 4));
    }
}

function makeComponent(info) {
    spain = ora().warn('开始创建Demo模板文件');
    // eslint-disable-next-line no-console
    try {
        // makeComponentOfSelf(info.name, info.mode);
        makeComponentOfExample(info);
        changeComponentConfig(info);
        spain.succeed('文件创建成功');
    } catch (e) {
        spain.fail('文件创建错误');
        // eslint-disable-next-line no-console
        console.log(e);
    }
}
getComponentFromArgs()
    .then(res => {
        if (res.name) {
            checkExistOrNot(res.name, res.type, res.category)
                .then(exist => {
                    if (exist) {
                        throw new Error('组件名已存在,请尝试其他名称');
                    } else {
                        makeComponent(res);
                    }
                })
                .catch(e => {
                    // eslint-disable-next-line no-console
                    console.log(e.message);
                });
        } else {
            throw new Error('输入组件名称为空');
        }
    })
    .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e.message);
    });
