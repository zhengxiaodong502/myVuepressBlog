##此文件用于自动动部署

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
#yarn run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.zxdblog.net' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:zhengxiaodong502/zhengxiaodong502.github.io.git master
git push -f git@gitee.com:coding_zxd/myVuepressBlog.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -