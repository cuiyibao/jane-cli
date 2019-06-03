/*
 * @Description: 文件描述
 * @Author: yb001
 * @Date: 2019-06-03 11:19:14
 * @LastEditTime: 2019-06-03 15:17:57
 * @LastEditors: yb001
 */
module.exports = {
  dest:'build',
  tpl:{
    page:'' // must be directory
  },
  css: {
    ext:'.less',
    compiler: require('jane-less'),
    config:{}
  },
  js: {
    ext:'.js',
    compiler: 'babel',
    // https://babeljs.io/docs/usage/api/
    config: {
      presets:['env'],
      plugins: ["transform-node-env-inline"]
    }
  },

  ignore:['node_modules','dist','.DB_store','.DS_Store']
}