const firstUppercase = str => {
    return str.split('-').reduce((acc, cur) => {
        acc += cur.replace(cur[0], cur[0].toUpperCase());
        return acc;
    }, '');
};

const findIndex = (arr, key, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            return i;
        }
    }

    return -1;
}

const PREFIX = 'Pk';

module.exports = {
    firstUppercase,
    findIndex,
    PREFIX
};
