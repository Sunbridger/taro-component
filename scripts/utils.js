const inquirer = require('inquirer');

function callForNext(promptList) {
    return inquirer.prompt(promptList).then(res => {
        return res;
    });
}

function toLetterFirstUpper(str) {
    return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    });
}

module.exports = {
    callForNext,
    toLetterFirstUpper,
};
