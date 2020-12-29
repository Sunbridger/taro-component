// util.js
function concat(...allArr: any[][]) {
    let resArr: any[] = [];
    allArr.forEach((item) => {
        resArr = [...resArr, ...item];
    })
    return resArr;
}