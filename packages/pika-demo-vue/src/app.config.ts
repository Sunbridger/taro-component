import components from './components.json';

function flatten(allArr) {
  let resArr: any[] = [];
  for (let i = 0; i < allArr.length; i++) {
    const arr = allArr[i];
    for (let j = 0; j < arr.length; j++) {
      const page = arr[j];
      resArr.push(page);
    }
  }
  return resArr;
}

let subpackages = components.map(group => {
  if (group.items.length === 0) {
    return false
  }

  return {
    root: `pages/components/${group.path}`,
    name: group.name,
    pages: group.items.map(i => i.path)
  }
}).filter(i => i);

let defaultConfig: any = {
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  subpackages
}

if (process.env.TARO_ENV === "alipay" || process.env.TARO_ENV === "tt") {
  // 支付宝和字节不支持小程序分包
  let pagesDefault = components.map(group => {
    if (group.items.length === 0) {
      return false
    }
    return group.items.map(i => `pages/components/${group.path}/${i.path}`)
  }).filter(i => i);
  let pages = flatten(pagesDefault)
  pages.unshift('pages/index/index');
  defaultConfig = {
    pages: pages,
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'alipay',
      navigationBarTextStyle: 'black'
    },
  }
}

export default defaultConfig;
