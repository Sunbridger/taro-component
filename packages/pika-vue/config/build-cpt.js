const fs = require('fs')
const path = require('path')
const prefix = 'Pk'

const componentsPath = path.resolve(__dirname, '../src/components/')
const indexPath = path.resolve(__dirname, '../src/index.ts')

function invert(dir) {
    const name = dir
        .split('-')
        .map((item) => item.replace(/\S/, (s) => s.toUpperCase()))
        .join('')
    let fullName = `${prefix}${name}`
    let path = `./components/${dir}/index.vue`
    return {
        name: fullName,
        path
    }
}

function generateImport(components) {
    let str = '';
    components.forEach((cpt) => str += `import ${cpt.name} from '${cpt.path}';\n`)
    return str;
}

function generateExport(components) {
    let str = 'export {\n';
    components.forEach((cpt) => str += `\t${cpt.name},\n`);
    str += '};\n'
    return str;
}

function generateArray(components) {
    let str = 'const components = [\n';
    components.forEach((cpt) => str += `\t${cpt.name},\n`);
    str += '];\n'
    return str;
}

function writeIndexFile(importStr, exportStr, arrayStr) {
    fs.writeFileSync(indexPath,
        `/* eslint-disable prettier/prettier */
/**
 * generate by ./config/build-cpt.js
 */
${importStr}
${exportStr}
${arrayStr}
const install: any = function (Vue: any): void {
    if (install.installed) return;
    components.map((component) => {
        Vue.component(component.name, component);
    });
}

export default { install };
`, { encoding: 'utf8' });
    console.log('generator index.js success')
}

function generateIndexFile() {
    try {
        let data = fs.readdirSync(componentsPath);
        let res = data.map(invert);
        let str1 = generateImport(res);
        let str2 = generateExport(res);
        let str3 = generateArray(res);
        writeIndexFile(str1, str2, str3);
    } catch (error) {
        console.error(error);
    }
}

generateIndexFile();