<!--
 * @Description: 文件描述
 * @Author: yb001
 * @Date: 2019-06-03 11:19:14
 * @LastEditTime: 2019-06-05 18:41:53
 * @LastEditors: yb001
 -->
## jane
+ [https://github.com/lin-hun/jane](https://github.com/lin-hun/jane)

## install
+ npm install -g git+ssh://git@github.com:cuiyibao/jane-cli.git#master

## usage
+ jane --help

## 插件机制
+ css 
```javascript
let less = require('less')
let fs = require('fs')
// {file:'path'}
module.exports = (option)=>{
	return new Promise((resolve,rej)=>{
	less.render(fs.readFileSync(option.file,'utf8'))
    .then(function(output) {
    	resolve(output)
     },
     function(error) {
     	rej(error)
    })
})
}
```
+ js 基于babel
[babel插件文档](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

## 改动记录（by xb）

* create.js, 删除创建模板后下载依赖的操作

* tpl, 修改默认预处理方式为less

* build.js, 文件编译添加按需引入依赖处理 (按需引入方式待优化)

* compiler, 添加.json, .wxml, .wxs, .wxss的文件编译处理方法

* tpl-project, 引入components组件库vant-weapp, pages添加组件模板

* tpl-page, 添加index.json

* jane.config.js, 变更ignore的dist为vant-weapp (2019-06-05)

## TODO (by xb)

* 按需引入方式优化

* 页面按需引入，分离组件模板

* tpl添加工具、拦截器（api管理）

* tpl组件封装，定制化

* 打包提供env环境识别