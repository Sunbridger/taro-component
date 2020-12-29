module.exports = {
    title: 'Pokemon',
    description: '搜车全流程小程序解决方案',
    dest: 'dist',
    themeConfig: {
        iframeLocal: 'http://localhost:10086',
        logo: '/assets/img/pika-logo.png',
        lastUpdated: 'Last Updated',
        repo: 'https://git.souche-inc.com/souhce-Taro',
        repoLabel: '项目地址',
        smoothScroll: true,
        nav: [
            {
                text: '组件库',
                ariaLabel: '组件库',
                items: [
                    { text: 'React 版本', link: '/components/react/' },
                    { text: 'Vue 版本', link: '/components/vue/' }
                ]
            },
            { text: '脚手架', link: '/cli/', target: '_self' },
            { text: '工具', link: '/lib/', target: '_self' },
        ],
        sidebar: {
            '/components/react/': [
                'introduce',
                {
                    title: '基础组件',
                    children: [
                        'button',
                        'tag',
                        'notice',
                        'avatar',
                        'steps'
                    ]
                },
            ],
            '/components/vue/': [
                'introduce',
                {
                    title: '基础组件',
                    children: [
                        'button',
                        'icon',
                        'fab',
                        'image'
                    ]
                },
                {
                    title: '布局组件',
                    children: [
                        'popup',
                        'list'
                    ]
                },
                {
                    title: '视图组件',
                    children: [
                        'avatar',
                        'badge',
                        'tag',
                        'notice',
                        'swiper',
                        'steps',
                        'skeleton',
                        'sticky'
                    ]
                },
                {
                    title: '表单组件',
                    children: [
                        'input',
                        'switch',
                        'textarea',
                        'slider',
                        'picker',
                        'time-picker',
                        'date-picker',
                        'search-bar',
                        'form',
                        'radio',
                        'checkbox'
                    ]
                },
                {
                    title: '反馈组件',
                    children: [
                        'toast',
                        'dialog',
                        'overlay'
                    ]
                },
                {
                    title: '导航组件',
                    children: [
                        'tabs',
                        'nav-bar',
                        'side-bar',
                        'tab-bar',
                        'index-bar'
                    ]
                }
            ],
            '/lib/': [
                ''
            ],
            '/cli/': [
                ''
            ]
        }
    }
}
