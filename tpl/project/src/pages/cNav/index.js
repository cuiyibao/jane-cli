/*
 * @Description: 文件描述
 * @Author: yb001
 * @Date: 2019-06-03 15:22:24
 * @LastEditTime: 2019-06-05 12:19:01
 * @LastEditors: yb001
 */
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    
  },
  handleBadge(event) {
    wx.showToast({
      icon: 'none',
      title: `切换至第${event.detail}项`
    });
  },
  onClickLeft() {
    wx.showToast({ title: '点击返回', icon: 'none' });
  },
  onClickRight() {
    wx.showToast({ title: '点击按钮', icon: 'none' });
  },
  handleTabChange() {
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  },
  handleTabbarChange(event) {
    console.log(event.detail);
  }
})
