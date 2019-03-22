# test-taro-app

京东taro小程序试玩（redux+less）

# 使用

## 安装依赖

```
# 使用 yarn 安装依赖
$ yarn
# OR 使用 cnpm 安装依赖
$ cnpm install
# OR 使用 npm 安装依赖
$ npm install
```

## 微信小程序

编译预览及打包（去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包）

```
# yarn
$ yarn dev:weapp
$ yarn build:weapp
# npm script
$ npm run dev:weapp
$ npm run build:weapp
# 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp
# npx 用户也可以使用
$ npx taro build --type weapp --watch
$ npx taro build --type weapp
```