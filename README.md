一:要求环境  node 6.0版本以上, cnpm

二:配置cnpm说明(参考http://npm.taobao.org/)
npm install -g cnpm --registry=https://registry.npm.taobao.org

三:安装步骤
1.先安装需要的包cnpm install

四:编译文件步骤
1.编译 cnpm run dllbuild
2.生产文件编译 cnpm run buildprodclean (编译生成的文件在 build/static, 把build/static的文件拷贝到web服务器上就可以了)



1.线上git项目

2.编译提交到线上git

3.服务器上clone， git pull origin 分支名

4.nginx 
/etc/nginx/nginx.conf



一.配置nginx vi /etc/nginx/nginx.conf //编辑nginx配置

sudo tail -fn 999 /var/log/nginx/error.log //查看nginx 错误日记
sudo tail -fn 999 /var/log/nginx/access.log //查看nginx 访问日记 
 //常用配置 
 配置 1
 server { listen 80; server_name fongwell.com www.fongwell.com; gzip on; gzip_static on; gzip_proxied any; gzip_min_length 1024; gzip_buffers 4 16k; gzip_comp_level 3; gzip_types text/plain text/css application/javascript application/xml application/json; gzip_vary on; gzip_http_version 1.1; location / { # add_header 'Cache-Control' 'no-cache,must-revalidate'; proxy_pass http://127.0.0.1:5501;
proxy_set_header Host $host:80; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; proxy_buffer_size 128k; proxy_buffers 32 32k; proxy_busy_buffers_size 128k; } }
 配置 2
server { listen 8000; server_name fongwell.com www.fongwell.com; location / { root html; index index.html; } }

sudo nginx -s reload //重启nginx

二.熟悉vi编辑器用法 vi 上下左右变ABCD问题解决方法 1.执行命令 sudo apt-get remove vim-common 2.执行命令 sudo apt-get install vim

三.安装nodejs ubuntu自带的nodejs都是老版本,安装nodejs建议参考官网,先更新nodej包,再执行安装命令

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - //下载最新6.x版本的nodejs包
sudo apt-get install -y nodejs //安装nodejs包 安装完有安装淘宝的cnpm镜像,安装参考cnpm官网 安装pm2,用全局安装 sudo cnpm install pm2 -g
四.代码部署到服务器上运行大概步骤
 1.代码先用git提交到线上的git服务器
  2.登陆服务器后用git克隆项目 大概命令是 git clone -b branch git地址 filedir (-b branch:拉取那个分支,默认为master. filedir:文件夹名字,默认为项目名字) 
  3.更新代码 git pull origin dev (dev:拉取的文件名,origin是原始的地址)
   4.cnpm install 安装依赖的包(统一用cnpm来安装包, 不要用npm, npm和cnpm安装出来的包的文件夹结构目录是不一样的)
    5.编译项目 
    6.测试运行项目 node index.js production(production:指定环境) 
    7.用pm2来运行项目 (熟悉pm2命令和用法,百度) 常用命令 pm2 list 查看运行的项目 pm2 start index.js --name name --watch -- production 启动项目(index.js:运行的文件, --name name:给这个项目一个别名, --watch:监控模式启动,代码改动会重启, -- production 传给node的参数) pm2 restart name 重启启项目 pm2 stop name 停止项目 pm2 monit 查看资源消耗