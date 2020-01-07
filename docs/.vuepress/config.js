const path = require('path')
const fs = require('fs')
module.exports = {
  theme: 'reco',
  title: '加油站的博客',
  description: '轻轻的你来了,留下你的痕迹',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/logo.png'
    }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ['meta', {
      name: 'keywords',
      content: '加油站,郑晓东,vue组件,vue,开发工具'
    }]
  ],
  // base: '/', // 这是部署到github相关的配置
  themeConfig: {
    // 密钥
    /* keyPage: {
      keys: ['111111'],
      color: '#42b983', // 登录页动画球的颜色
      lineColor: '#42b983' // 登录页动画线的颜色
    }, */
    author: 'Sun.zheng',
    type: 'blog',
    logo: '/logo.png',
    authorAvatar: '/logo.png',
    serviceWorker: true, // 是否开启 PWA
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebarDepth: 1,
    displayAllHeaders: false,
    // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类” Category
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签” Tag
      }
    },
    /* vssueConfig: {
      platform: 'github',
      owner: 'OWNER_OF_REPO',
      repo: 'NAME_OF_REPO',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    }, */
    nav: [
      { text: 'Notes', link: '/note/', icon: 'reco-document' },
      { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
      /* {
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
      }, */
      { text: 'Contact',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/zhengxiaodong502', icon: 'reco-github' },
          { text: 'CSDN', link: 'https://blog.csdn.net/Gas_station', icon: 'reco-blog'}
        ]
      },
      {
        text: '常用工具',
        items: [
          {
            text: 'typora',
            link: '/devTools/typora'
          }
        ]
      }
    ],
    sidebar: {
      '/note/': [
        {
          title: 'HTML5',
          collapsable: false,
          children: genSidebarConfig('note/html5', true)
          
        },
        {
          title: 'CSS',
          collapsable: false,
          children: genSidebarConfig('note/css', true)
        },
        {
          title: '前端单元测试',
          collapsable: false,
          children: genSidebarConfig('note/fe-unit-test', true)
          // children: [
          //   'fe-unit-test/chai',
          //   'fe-unit-test/mocha',
          //   'fe-unit-test/vueTestUtils'
          // ]
        }
      ]
    }
  }
}

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, '../', dir)
  let files = fs.readdirSync(p)
  let subDir = hasSub ?
    dir.split('/')[1] :
    dir.split('/')[1] + '/' + dir.split('/')[2]
  files = files.map(item => {
    item = subDir ?
      subDir + '/' + path.basename(item, '.md') :
      path.basename(item, '.md')
    return item
  })
  return files
}