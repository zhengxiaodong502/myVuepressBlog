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
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    /* ['meta', {
      name: 'keywords',
      content: 'vue组件,vue,开发工具'
    }] */
  ],
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
    vssueConfig: {
      platform: 'github',
      owner: 'OWNER_OF_REPO',
      repo: 'NAME_OF_REPO',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    },
    nav: [
      //  { text: 'Notes', link: '/note/', icon: 'reco-document' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
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
      { text: '链接',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/zhengxiaodong502', icon: 'reco-github' },
          { text: 'CSDN', link: 'https://blog.csdn.net/Gas_station', icon: 'reco-blog'}
        ]
      },
      {
        text: '常用工具',
        items: [
          { text: '在线便捷',
            items: [ 
              { text: '文件转换',link: 'https://convertio.co/zh/'},
              { text: '常用对照表',link: 'https://tool.oschina.net/commons'},
              { text: 'babel编译',link: 'https://www.babeljs.cn/repl'},
              { text: 'PDF编译器',link: 'https://smallpdf.com/cn/pdf-to-word'},
              { text: 'JSON编译器',link: 'https://www.bejson.com/jsoneditoronline'},
              { text: 'MD表格生成器',link: 'https://tableconvert.com/?output=text'},
              { text: '代码格式化',link: 'https://tool.oschina.net/codeformat/html'},
              { text: '二维码生成器',link: 'https://cli.im/'},
              { text: '编码转换器',link: 'http://tool.chinaz.com/tools/native_ascii.aspx'},
              { text: '公式编辑器',link: 'https://zh.numberempire.com/latexequationeditor.php'},
              { text: 'MD编辑器',link: 'https://www.zybuluo.com/mdeditor'}
            ]
          },
          {
            text: '工具指南',
            items: [ 
              { text: 'typora',link: '/devTools/typora'}
            ]
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
    },
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      }
    ]
  },
  plugins: [
    "screenfull",
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: 'Basketball',
            artist: 'JEAN MARIE',
            url: 'https://nc01-sycdn.kuwo.cn/0941dba7a1728d6c1af9a7c2afd65117/5e168096/resource/n1/71/88/3357805950.mp3',
            cover: 'http://img3.kuwo.cn/star/albumcover/700/16/83/365404609.jpg'
          },
          {
            name: '绝对无敌',
            artist: '倪子冈',
            url: 'https://ip-h5-ri01-sycdn.kuwo.cn/e6809c13febc970ba841fa38e26237f8/5e168310/resource/n2/66/52/401298525.mp3',
            cover: 'http://img3.kuwo.cn/star/albumcover/120/80/22/822226862.jpg'
          },
          {
            name: '真的，我没事',
            artist: '符致逸',
            url: 'https://ip-h5-rh01-sycdn.kuwo.cn/df9218edd3196c9408a2cacf9052a024/5e168601/resource/n3/37/29/1196593046.mp3',
            cover: 'http://img3.kuwo.cn/star/albumcover/120/80/22/822226862.jpg'
          }
        ]
      }
    ],
    /* [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ] */
  ]
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