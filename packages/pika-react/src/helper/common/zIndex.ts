let index = 10;

export default {
    getIndex(add = 10) {
        return (index += add);
    },
    getIndexOfNotIncrease() {
        return index;
    },
};
