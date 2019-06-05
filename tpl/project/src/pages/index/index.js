/*
 * @Description: 文件描述
 * @Author: yb001
 * @Date: 2019-06-03 15:22:24
 * @LastEditTime: 2019-06-04 15:36:08
 * @LastEditors: yb001
 */
//index.js
import navList from '../../config';
//获取应用实例
const app = getApp()

Page({
  data: {
    navList
  },
  onLoad: function () {
    console.log(navList)
  }
})
