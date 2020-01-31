module.exports = {
  title: '凝弧',
  description: '理解了目标，方向自然就出现了',
  evergreen: true,
  dest: 'dist',
  locales: { '/': { lang: 'zh-cmn-Hans' } },
  head: [
    ['link', { rel: 'icon', href: '/icons/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'theme-color', content: '#222222' }],
  ],
  markdown: {
    // 代码显示行号
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3] },
    // markdown 插件
    extendMarkdown: md => {
      md.set({ html: true });
      md.use(require("@iktakahiro/markdown-it-katex"));
      md.use(require("markdown-it-mark"));
      md.use(require("markdown-it-task-lists"));
      md.use(require("markdown-it-vuepress-code-snippet-enhanced"));
    }
  },
  plugins: [
    '@vuepress-reco/extract-code',
    ['@vuepress/medium-zoom', true],
    // 开启 PWA
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    // 彩带背景
    [
      "ribbon",
      {
        size: 90,
        opacity: 0.8,
        zIndex: -1
      }
    ],
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    logo: '/images/avatar.png',
    autoHideNavbar: true,
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    sidebarDepth: 2,
    // 最后更新时间
    lastUpdated: '上次更新',
    // 作者
    author: '凝弧',
    // 项目开始时间，只填写年份
    startYear: '2019',
    // 备案号
    record: "暂无",
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
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
    },
    // https://github.com/yefz/blog
    // https://github.com/${owner}/${repo}
    vssueConfig: {
      platform: 'github',
      owner: 'yefz',
      repo: 'blog',
      clientId: '9aaec055b30d64139e6a',
      clientSecret: 'f0194b3a26d3a12ce64e4e3d465a8c6911e5f143'
    },
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    valineConfig: {
      appId: 'CgHo1Nf19RJc4dUzWTGACjwR-gzGzoHsz', // your appId
      appKey: 'of84Nx1usWBJBR3mXAcNzBV5',
      placeholder: '填写邮箱可以收到回复提醒哦！',
      notify: true,
      recordIP: true,
    },
  },
}
