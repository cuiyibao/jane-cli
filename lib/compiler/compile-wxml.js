/*
 * @Description: .wxml的解析文件，提供wxs的引入
 * @Author: yb001
 * @Date: 2019-06-03 15:22:24
 * @LastEditTime: 2019-06-04 12:28:36
 * @LastEditors: yb001
 */
let fs = require("fs")
let fse = require("fs-extra")
let utils = require("../../utils/utils")
let config = utils.getProjectConfig().css.config
let log = utils.log
let Path = require("path")
let projectConfig = utils.getProjectConfig()

module.exports = async (path, walk) => {
  try {
    let result = await fs.readFileSync(path)
    result
      .toString()
      .replace(
        /wxs(\s)src=(['"]([\w\d_\-\.\/\@]+)['"])/gi,
        async (match, lib) => {
          // 获取当前文件路径
          let relaPath = match
            .replace(/wxs(\s)src=/gi, "")
            .replace(/['"]/gi, "")
          let _dirname = Path.join(path, "../")
          let filesPath = Path.join(_dirname, relaPath)
          await walk(filesPath, true)
        }
      )
  } catch (err) {
    console.log(err)
  }
}
