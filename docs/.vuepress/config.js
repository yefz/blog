module.exports = {
  title: '凝弧',
  description: '理解了目标，方向自然就出现了',
  dest: 'dist',
  locales: { '/': { lang: 'zh-cmn-Hans' } },
  head: [
    ['link', { rel: 'icon', href: '/icons/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#000000' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],

  theme: 'reco',
  themeConfig: {
    type: 'blog',
    nav: [
      { text: '', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
      { text: '文档', link: '/docs/', icon: 'reco-document' },
      {
        text: '关于',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/yefz',
            icon: 'reco-github',
          },
          {
            text: 'CSDN',
            link: 'https://blog.csdn.net/wildye',
            icon: 'reco-csdn',
          },
          {
            text: '掘金',
            link: 'https://juejin.im/user/5cf0c6b2f265da1b667bc0fe',
            icon: 'reco-juejin',
          },
        ],
      },
    ],
    // 博客设置
    blogConfig: {
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认 “标签”
      },
      category: {
        location: 3, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认 “分类”
      },
      base: {
        location: 5, // 在导航栏菜单中所占的位置，默认2
        text: '文档', // 默认 “分类”
      },
    },
    logo: '/images/avatar.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '上次更新',
    // 作者
    author: '凝弧',
    // 项目开始时间
    startYear: '2018',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    valineConfig: {
      appId: '', // your appId
      appKey: '',
      placeholder: '填写邮箱可以收到回复提醒哦！',
      notify: true,
      recordIP: true,
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-125817360-1',
      },
    ],
  ],
  // evergreen: true
}
