/*
 * @Description: 文件描述
 * @Author: yb001
 * @Date: 2019-06-03 15:22:24
 * @LastEditTime: 2019-06-03 17:17:58
 * @LastEditors: yb001
 */
let fs = require("fs")
let fse = require("fs-extra")
let utils = require("../../utils/utils")
let config = utils.getProjectConfig().css.config
let log = utils.log
let projectConfig = utils.getProjectConfig()

module.exports = async path => {
  let output = utils.getOutputFile(path.replace(projectConfig.css.ext, ".wxss"))
  let option = Object.assign({ file: path }, config)
  try {
    let result = await projectConfig.css.compiler(option)
    fse.outputFileSync(output, result.css)
    log.tag("写入css", `${utils.getOutputFile(output)}`)
  } catch (err) {
    console.log(err)
  }
}
