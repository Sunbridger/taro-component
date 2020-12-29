const fse = require('fs-extra');
const path = require('path');
const ora = require('ora');
const { toLetterFirstUpper } = require('./utils');

let spain;

const srcRoot = path.resolve(__dirname, '..', 'src');
const exportRoot = path.resolve(srcRoot, 'index.ts');
const componentJsonRecord = path.resolve(__dirname, '..', 'components.json');
const componentsFilePath = path.resolve(__dirname, '..', 'components.json');
const componentRootPathDir = {
    ui: path.resolve(srcRoot, 'components'),
    plugin: path.resolve(srcRoot, 'plugins'),
};
const styleRootPathDir = path.resolve(srcRoot, 'style');
const componentTemplate = {
    mainClass: path.resolve(__dirname, 'temp', 'component_class.text'),
    mainFunction: path.resolve(__dirname, 'temp', 'component_function.text'),
    mainExample: path.resolve(__dirname, 'temp', 'component_example.text'),
    interface: path.resolve(__dirname, 'temp', 'interface.d.text'),
    style: path.resolve(__dirname, 'temp', 'style.text'),
};

// function getComponentFromInput() {
//     const questions = [
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
//         {
//             type: 'list',
//             message: '选择组件模式',
//             name: 'mode',
//             choices: [
//                 {
//                     name: 'Class类组件',
//                     value: 'class',
//                     short: 'Class类组件',
//                 },
//                 {
//                     name: 'Function函数组件',
//                     value: 'function',
//                     short: 'Function函数组件',
//                 },
//             ],
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

function makeComponent(info) {
    spain = ora().warn('开始创建组件模板文件');
    try {
        makeComponentOfSelf(info.name, info.type, info.mode);
        // makeComponentOfExample(info);
        changeComponentConfig(info);
        spain.succeed('文件创建成功');
    } catch (e) {
        spain.fail('文件创建错误');
        // eslint-disable-next-line no-console
        console.log(e);
    }
}

function makeComponentOfSelf(name, type, mode) {
    const rootPath = componentRootPathDir[type];
    fse.mkdirpSync(path.resolve(rootPath, name));
    // components
    {
        let file = fse.readFileSync(
            mode === 'class'
                ? componentTemplate.mainClass
                : componentTemplate.mainFunction,
            'utf-8'
        );
        file = file.replace(/(_ComponentName_)|(_componentName_)/g, $0 => {
            if ($0 === '_ComponentName_') return toLetterFirstUpper(name);
            if ($0 === '_componentName_') return name;
        });
        fse.writeFileSync(path.resolve(rootPath, name, `index.tsx`), file);
    }

    // interface
    {
        let file = fse.readFileSync(componentTemplate.interface, 'utf-8');
        file = file.replace(/(_ComponentName_)|(_componentName_)/g, $0 => {
            if ($0 === '_ComponentName_') return toLetterFirstUpper(name);
            if ($0 === '_componentName_') return name;
        });
        fse.writeFileSync(path.resolve(rootPath, name, 'interface.d.ts'), file);
    }

    // style
    {
        const lastDir = type === 'ui' ? 'components' : 'plugins';
        const styleIndexPath = path.resolve(
            styleRootPathDir,
            lastDir,
            'index.scss'
        );
        let file = fse.readFileSync(componentTemplate.style, 'utf-8');
        let styleIndex = fse.readFileSync(styleIndexPath, 'utf-8');
        file = file.replace(/_ComponentName_/g, toLetterFirstUpper(name));
        styleIndex = styleIndex + `\n@import "./${name}";`;
        fse.writeFileSync(
            path.resolve(
                path.resolve(styleRootPathDir, lastDir),
                `${name}.scss`
            ),
            file
        );
        fse.writeFileSync(styleIndexPath, styleIndex);
    }
}

function changeComponentConfig({ name, chinese, type, mode, category }) {
    const lastDir = type === 'ui' ? 'components' : 'plugins';
    // index 修改
    {
        const exportContent = `export { default as Pk${toLetterFirstUpper(
            name
        )} } from './${lastDir}/${name}/index';\n`;
        let file = fse.readFileSync(exportRoot, 'utf-8');
        file += exportContent;
        fse.writeFileSync(exportRoot, file);
    }
    // json文件修改
    {
        let file = fse.readFileSync(componentJsonRecord, 'utf-8');
        const content = {
            name,
            chinese,
            mode,
            path: `/${lastDir}/${name}/index`,
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
