/*
 * @Description: .json的解析文件，提供组件的按需加载功能
 * @Author: yb001
 * @Date: 2019-06-03 15:22:24
 * @LastEditTime: 2019-06-04 11:55:03
 * @LastEditors: yb001
 */
let fs = require("fs")
let fse = require("fs-extra")
let utils = require("../../utils/utils")
let config = utils.getProjectConfig().css.config
let log = utils.log
let Path = require('path')
let projectConfig = utils.getProjectConfig()

module.exports = async (path, walk) => {
  try {
    let result = await fs.readFileSync(path)
    let components = JSON.parse(result)["usingComponents"]
    if (components) {
      for (let files in components) {
        // 获取当前文件路径
        let _dirname = Path.join(path, "../") 
        let filesPath = Path.join(_dirname, components[files]).replace("/index", "")
        await walk(filesPath, true)
      }
    }
  } catch (err) {
    console.log(err)
  }
}
