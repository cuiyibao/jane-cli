/*
 * @Description: 文件描述
 * @Author: yb001
 * @Date: 2019-06-03 15:22:24
 * @LastEditTime: 2019-06-05 11:29:12
 * @LastEditors: yb001
 */
import Dialog from "../../components/vant-weapp/dist/dialog/dialog"
import Notify from "../../components/vant-weapp/dist/notify/notify"
import Toast from "../../components/vant-weapp/dist/toast/toast"

const app = getApp()

const message = "代码是写出来给人看的，附带能在机器上运行"

Page({
  data: {
    actionSheet: false,
    actions: [
      {
        name: "选项"
      },
      {
        name: "分享",
        subname: "描述信息",
        openType: "share"
      },
      {
        loading: true
      },
      {
        name: "禁用选项",
        disabled: true
      }
    ]
  },
  onLoad: function() {},
  toggleActionSheet() {
    this.setData({ actionSheet: true })
  },
  handleActionClose() {
    this.setData({ actionSheet: false })
  },
  handleActionSelect(event) {
    console.log(event.detail)
  },
  handleAlert() {
    Dialog.alert({
      title: "标题",
      message
    })
  },
  handleNotify() {
    Notify({
      text: "通知内容",
      duration: 1000,
      selector: "#custom-selector",
      backgroundColor: "#1989fa"
    })
  },
  handleToast() {
    Toast("我是提示文案，建议不超过十五字~")
  }
})
