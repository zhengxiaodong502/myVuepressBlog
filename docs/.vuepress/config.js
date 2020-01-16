const path = require('path')
const fs = require('fs')
module.exports = {
  theme: 'reco',
  title: '加油站的博客',
  description: '路曼曼其修远兮,吾将上下而求索',
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
    smoothScroll: true,
    sidebar: 'auto', //在所有页面中启用自动生成侧栏
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
      { text: '笔记', link: '/note/', icon: 'reco-document' },
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
      // '/note/': [
      //   {
      //     title: 'HTML5',
      //     collapsable: false,
      //     children: genSidebarConfig('note/html5', true)
          
      //   },
      //   {
      //     title: 'CSS',
      //     collapsable: false,
      //     children: genSidebarConfig('note/css', true)
      //   },
      //   {
      //     title: '前端单元测试',
      //     collapsable: false,
      //     children: genSidebarConfig('note/fe-unit-test', true)
      //     // children: [
      //     //   'fe-unit-test/chai',
      //     //   'fe-unit-test/mocha',
      //     //   'fe-unit-test/vueTestUtils'
      //     // ]
      //   }
      // ]
      '/views/': [
        {
          title: 'ES2019',
          collapsable: false,
          children: genSidebarConfig('views/前端/es9', true)
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
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          
          {
            name: '广东爱情故事',
            artist: 'sun.zheng(翻唱)',
            url: '/music/广东爱情故事.m4a',
            cover: '/music/guangdong.jpg'
          },
          {
            name: '三十岁的女人',
            artist: 'sun.zheng(翻唱)',
            url: '/music/三十岁的女人.m4a',
            cover: '/music/三十岁的女人.jpg'
          },
          {
            name: '你就不要想起我',
            artist: 'sun.zheng(翻唱)',
            url: '/music/你就不要想起我.m4a',
            cover: '/music/你就不要想起我.jpg'
          }
        ]
      }
    ],
    [
      "@vuepress/medium-zoom",
      {
        selector: 'img.zoom-custom-imgs',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16
        }
      }
    ]
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
  console.log(fs)
  console.log(files)
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