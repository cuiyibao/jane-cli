/*
 * @Description: 文件描述
 * @Author: yb001
 * @Date: 2019-06-03 11:19:14
 * @LastEditTime: 2019-06-04 14:35:07
 * @LastEditors: yb001
 */
let fs = require("fs-extra")
let Path = require("path")
let jsCompile = require("./compiler/compile-js")
let cssCompile = require("./compiler/compile-css")
let jsonCompile = require("./compiler/compile-json")
let wxmlCompile = require("./compiler/compile-wxml")
let wxsCompile = require("./compiler/compile-wxs")
let wxssCompile = require("./compiler/compile-wxss")
let utils = require("../utils/utils")
let log = utils.log
let projectConfig = utils.getProjectConfig()

function ignoreMatch(target) {
  let result = false
  utils.getProjectConfig().ignore.find(v => {
    if (v === Path.parse(target).base) {
      result = true
    }
  })
  return result
}

async function walk(target, isIgnore) {
  // ignore check
  if (!isIgnore && ignoreMatch(target)) {
    return
  }
  const Copy = function() {
    let destPath = utils.getOutputFile(target)
    fs.copySync(target, destPath)
    log.tag("复制文件", `${destPath}`)
  }
  if (fs.lstatSync(target).isFile()) {
    if (Path.extname(target) === (projectConfig.css.ext || ".css")) {
      let a = await Promise.resolve(cssCompile(target))
    } else if (Path.extname(target) === (projectConfig.js.ext || ".js")) {
      jsCompile.compiler(target)
      await Promise.resolve(wxsCompile(target, walk))
    } else {
      switch (
        Path.extname(target) // 按需引入依赖
      ) {
        case ".json":
          await Promise.resolve(jsonCompile(target, walk))
          break
        case ".wxml":
          await Promise.resolve(wxmlCompile(target, walk))
          break
        case ".wxs":
          await Promise.resolve(wxsCompile(target, walk))
          break
        case ".wxss":
          await Promise.resolve(wxssCompile(target, walk))
          break
      }
      Copy()
    }
    return
  }
  if (fs.lstatSync(target).isDirectory()) {
    let dirs = fs.readdirSync(target)
    for (let value of dirs) {
      await walk(Path.join(target, value))
    }
  }
}

module.exports = async function(callback) {
  if (!utils.getProjectConfig()) {
    log.error("未检测到配置文件，无法编译")
    return
  }
  await walk(utils.getSrcPath())
  if (callback) callback()
}
