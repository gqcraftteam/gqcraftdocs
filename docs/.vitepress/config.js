export default {
  themeConfig: {
    navbar: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '工具箱', link: '/toolbox/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            { text: '安装', link: '/guide/install' },
            { text: '快速入门', link: '/guide/quickstart' },
          ]
        }
      ]
    }
  }
}
