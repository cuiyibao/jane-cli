/*
 * @Description: 文件描述
 * @Author: yb001
 * @Date: 2019-06-03 15:22:24
 * @LastEditTime: 2019-06-05 11:42:14
 * @LastEditors: yb001
 */
import config from './config';
const app = getApp()

Page({
  data: {
    activeNames: ['1'],
    steps: [
      {
        text: '步骤一',
        desc: '描述信息'
      },
      {
        text: '步骤二',
        desc: '描述信息'
      },
      {
        text: '步骤三',
        desc: '描述信息'
      },
      {
        text: '步骤四',
        desc: '描述信息'
      }
    ],
    items: [
      {
        // 导航名称
        text: '所有城市',
        // 该导航下所有的可选项
        children: [...config.pro1, ...config.pro2]
      }, {
        // 导航名称
        text: config.pro1Name,
        // 该导航下所有的可选项
        children: config.pro1
      }, {
        text: config.pro2Name,
        children: config.pro2
      }, {
        text: config.pro3Name,
        disabled: true,
        children: config.pro3
      }
    ],
    mainActiveIndex: 0,
    activeId: 1
  },
  onLoad: function () {
    
  },
  handleCollChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  onClickNav({ detail }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },
  onClickItem({ detail }) {
    this.setData({
      activeId: detail.id
    });
  }
})
