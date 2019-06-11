/*
 * @Description: 文件描述
 * @Author: yb001
 * @Date: 2019-06-03 15:22:24
 * @LastEditTime: 2019-06-11 17:53:24
 * @LastEditors: yb001
 */
//index.js
import navList from '../../config';
import { httpGet } from "../../utils/request"

//获取应用实例
const app = getApp()

Page({
  data: {
    navList
  },
  onLoad: function () {
    httpGet({
      url: "/v2/api-docs",
      data: {
        group: "前端api接口文档"
      },
      success: res => {
        console.log("success", res)
      }
    })
  }
})
