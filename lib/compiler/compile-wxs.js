/*
 * @Description: .wxs,.js的解析文件，提供依赖包的引入
 * @Author: yb001
 * @Date: 2019-06-03 15:22:24
 * @LastEditTime: 2019-06-04 12:35:35
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
    // require加载方式解析
    result
      .toString()
      .replace(
        /require\(['"]([\w\d_\-\.\/\@]+)['"]\)/gi,
        async (match, lib) => {
          let _dirname = Path.join(path, "../")
          let filesPath = Path.join(_dirname, lib).replace("/index", "")
          await walk(filesPath, true)
        }
      )

    // import&from加载方式解析
    result
      .toString()
      .replace(/from\s(['"]([\w\d_\-\.\/\@]+)['"])/gi, async (match, lib) => {
        let _dirname = Path.join(path, "../")
        let filesPath = Path.join(_dirname, lib.replace(/(['"])/gi, "")) + ".js"
        await walk(filesPath, true)
      })
  } catch (err) {
    console.log(err)
  }
}
