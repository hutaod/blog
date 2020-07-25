module.exports = {
  title: '一剑霜寒十四州',
  description: '前端 nodejs blog',
  dest: 'dist',
  serviceWorker: false,
  configureWebpack: {
    resolve: {
      alias: {},
    },
  },
  themeConfig: {
    repo: 'ht1131589588/blog',
    repoLabel: 'GitHub',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '为该章节纠错',
    lastUpdated: '上次更新',
    nav: [],
    sidebar: ['/', '/blog/nextjs命令行解析工具-arg'],
  },
  base: '',
}
