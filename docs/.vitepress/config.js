export default {
  title: 'GQcraft Docs',
  description: 'GQcraft 团队与文档',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/gqcraftteam/gqcraftdocs' }
    ],
    sidebar: [
      {
        text: '文档',
        items: [
          { text: '快速开始', link: '/guide/' }
        ]
      }
    ]
  }
}

