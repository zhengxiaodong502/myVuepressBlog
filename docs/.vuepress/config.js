module.exports = {
  title: 'Gas_Station的博客',
  description: '轻轻的你来了,留下你的痕迹',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    // ['link', { rel: 'icon', href: 'public/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: 'public/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: 'public/logo.png' }],
  ],
  base: '/', // 这是部署到github相关的配置
  themeConfig: {
    nav: [{
        text: "Home",
        link: "/"
      },
      {text: '前端基础', link: '/accumulate/' },
      {
        text: '指南',
        link: '/guide/install/install'
      },
      {
        text: '多语言',
        items: [{
            text: 'Chinese',
            link: '/language/chinese/'
          },
          {
            text: 'Japanese',
            link: '/language/japanese/'
          }
        ]
      },
      {
        text: "GitHub",
        link: "https://github.com/mtobeiyf/vuepress-homepage"
      },
      {
        text: "常用工具",
        items: [{
          text: 'typora',
          link: '/devTools/typora'
        }
      ]
      }
    ],
    sidebar: [
      {
        title: '开发指南',
        collaplsable: true // 是否展开
      },
      ['./guide/install/install','安装'],
      ['./guide/started/started','快速上手'],
      {
        title: '组件',
        collaplsable: false
      },
      ['./guide/icon/icon','icon 图标']
    ],
    // sidebar: 'auto', // 侧边栏配置
    // sidebarDepth: 1, // 侧边栏显示2级
  }
}