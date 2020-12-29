const firstUppercase = str => {
    return str.split('-').reduce((acc, cur) => {
        acc += cur.replace(cur[0], cur[0].toUpperCase());
        return acc;
    }, '');
};

const PREFIX = 'Pk';

module.exports = {
    firstUppercase,
    PREFIX,
};
