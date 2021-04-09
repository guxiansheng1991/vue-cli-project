# vue-cli-project

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# app-dist 说明

> 项目中, 安卓或者 ios 包中直接加载 vue 项目打包的 dist 文件,省略了网络请求 html,js,css 等资源,改善了用户体验

## 要求

- 项目中所有的库和文件尽量打包到 dist 内
- 同时打包的 dist,应该是 APP 内仅需的几个页面(必须 APP 只需要本地加载首页和我的页面,则 dist 内只应该包含首页和我的页面资源,避免 APP 包体积过大)
- 同时支持本地 dist 包方式和 web 线上部署两种方式

本例 dist 包内只包含首页,我的页面相关资源
