import componentsConfig from '../components.json';

let pages = ['pages/enter/index', 'pages/ui/index', 'pages/plugins/index'];
['ui', 'plugin'].forEach(type => {
    componentsConfig[type].forEach(category => {
        const list = type === 'ui' ? category.list : [category];
        pages = pages.concat(
            list.map(item => item.path.split('/').slice(1).join('/'))
        );
    });
});

export default {
    // pages: [
    //     // PAGE_LIST->start
    //     'pages/ui/index',
    //     'pages/plugins/index',
    //     'pages/components/navBar/navBar',
    //     'pages/components/button/button',
    //     'pages/components/icon/icon',
    //     'pages/components/image/image',
    //     'pages/components/fab/fab',
    //     // PAGE_LIST->end
    // ],
    pages,
    // tabBar: {
    //     list: [
    //         {
    //             text: 'UI',
    //             pagePath: 'pages/ui/index',
    //             iconPath: './images/icon_component.png',
    //             selectedIconPath: './images/icon_component_HL.png',
    //         },
    //         {
    //             text: 'Plugins',
    //             pagePath: 'pages/plugins/index',
    //             iconPath: './images/icon_API.png',
    //             selectedIconPath: './images/icon_API_HL.png',
    //         },
    //     ],
    // },
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'Pika UI',
        navigationBarTextStyle: 'black',
    },
};
