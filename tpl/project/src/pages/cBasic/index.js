/*
 * @Description: 文件描述
 * @Author: yb001
 * @Date: 2019-06-03 15:22:24
 * @LastEditTime: 2019-06-04 16:52:37
 * @LastEditors: yb001
 */
const app = getApp()

Page({
  data: {
    show: false,
    showTrans: false,
    name: "fade"
  },
  onLoad: function() {},
  togglePopup() {
    this.setData({ show: true })
  },
  onClose() {
    this.setData({ show: false })
  },
  onClickFade() {
    this.trigger('fade');
  },
  trigger(name) {
    this.setData({ name, showTrans: true });
    setTimeout(() => {
      this.setData({ showTrans: false });
    }, 500);
  },
})
