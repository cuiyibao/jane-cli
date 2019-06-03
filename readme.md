<!--
 * @Description: 文件描述
 * @Author: yb001
 * @Date: 2019-06-03 11:19:14
 * @LastEditTime: 2019-06-03 15:19:31
 * @LastEditors: yb001
 -->
## jane
+ [https://github.com/lin-hun/jane](https://github.com/lin-hun/jane)

## install
+ npm install -g @linhun/jane-cli

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