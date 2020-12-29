const fs = require('fs-extra');
const path = require('path');
const execa = require('execa');
const inquirer = require('inquirer');
const { spawnSync } = require('child_process');

const pkgSign = 'pika';
const pkgRoot = path.resolve(__dirname, '../packages');

class PkgMeta {
    constructor(name) {
        this.name = name;
        this.oldVer = null;
        this.newVer = null;
        this.pkgPath = path.resolve(__dirname, `../packages/${name}`);
    }
}

function isPkgFile(name) {
    return name.toString().indexOf(pkgSign) === 0;
}

function isPrivatePkg(pkgPath) {
    const packageJson = fs.readFileSync(
        path.resolve(pkgPath, 'package.json'),
        'utf-8'
    );
    return JSON.parse(packageJson).private;
}

function readPkg(pkgRoot) {
    return fs.readdir(pkgRoot).then(res => {
        return res
            .filter(name => isPkgFile(name))
            .map(name => new PkgMeta(name))
            .filter(pkg => !isPrivatePkg(pkg.pkgPath));
    });
}

function getPkgVersion(pkgPath) {
    return JSON.parse(
        fs.readFileSync(path.resolve(pkgPath, 'package.json'), 'utf-8')
    ).version;
}

function callForNext(mes) {
    const promptList = [
        {
            type: 'confirm',
            message: mes,
            name: 'next',
            default: true,
        },
    ];
    return inquirer.prompt(promptList).then(res => {
        return res.next;
    });
}

function versionUpdate() {
    const promptList = [
        {
            type: 'list',
            name: 'mode',
            message: `选择版本升级方式`,
            choices: ['根据commit自动生成', '手动生成'],
        },
    ];
    return inquirer.prompt(promptList).then(async ans => {
        const { mode } = ans;
        try {
            if (mode === '根据commit自动生成') {
                spawnSync(
                    './node_modules/.bin/lerna',
                    ['version', '--conventional-commits'],
                    {
                        stdio: ['inherit', 'inherit', 'inherit'],
                    }
                );
            } else {
                spawnSync('./node_modules/.bin/lerna', ['version'], {
                    stdio: ['inherit', 'inherit', 'inherit'],
                });
            }
        } catch (e) {
            endProcess(e);
        }
    });
}

async function snpmPublish(pkgDir) {
    return await execa('snpm', ['publish'], {
        cwd: pkgDir,
    });
}

function endProcess(e) {
    e && console.log(e);
    process.exit(0);
}

async function updatePkgVersion() {
    return readPkg(pkgRoot).then(async res => {
        res.forEach(pkg => {
            pkg.oldVer = getPkgVersion(pkg.pkgPath);
        });
        const isUpdateVersion = await callForNext('version需要更新吗');
        if (isUpdateVersion) {
            await versionUpdate();
        }
        res.forEach(pkg => {
            pkg.newVer = getPkgVersion(pkg.pkgPath);
        });
        const publishPromise = res
            .filter(pkg => !isUpdateVersion || pkg.oldVer !== pkg.newVer)
            .map(async pkg => {
                try {
                    return await snpmPublish(pkg.pkgPath);
                } catch (e) {
                    return Promise.reject(e);
                }
            });
        return Promise.all(publishPromise)
            .then(
                res => {
                    const newRes = {
                        failed: false,
                        all: [],
                    };
                    res.forEach(item => {
                        newRes.all.push(item.stdout);
                    });
                    newRes.all = newRes.all.join('\n');
                    return newRes;
                },
                err => {
                    endProcess(err);
                }
            )
            .catch(err => {
                endProcess(err);
            });
    });
}

updatePkgVersion();
