/*
 * @Description: 文件描述
 * @Author: yb001
 * @Date: 2019-06-03 15:22:24
 * @LastEditTime: 2019-06-04 17:43:52
 * @LastEditors: yb001
 */
import Toast from '../../components/vant-weapp/dist/toast/toast'

const app = getApp()

Page({
  data: {
    checked: false,
    minHour: 10,
    maxHour: 20,
    minDate: new Date(2018, 0, 1).getTime(),
    maxDate: new Date(2019, 10, 1).getTime(),
    currentDate: new Date(2018, 2, 31).getTime(),
    userName: '',
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    radio: 1,
    rate: 3,
    search: '',
    switchChecked: false,
    switchCellChecked: false
  },
  onLoad: function() {},
  onChangeCheck(event) {
    this.setData({ checked: event.detail })
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail
    })
  },
  handleUserChange(event) {
    this.setData({
      userName: event.detail
    })
  },
  handlePickerChange(event) {
    const { picker, value, index } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
  },
  handleRadioChange(event) {
    this.setData({
      radio: event.detail
    })
  },
  handleRateChange(event) {
    this.setData({
      rate: event.detail
    })
  },
  handleSliderChange(event) {
    wx.showToast({
      icon: 'none',
      title: `当前值：${event.detail}`
    })
  },
  handleSwitchChange(event) {
    this.setData({ switchChecked: event.detail });
  },
  handleSwitchCellChange(event) {
    this.setData({ switchCellChecked: event.detail });
  },
})
