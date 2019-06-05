/*
 * @Description: 文件描述
 * @Author: yb001
 * @Date: 2019-06-03 15:22:24
 * @LastEditTime: 2019-06-05 17:14:01
 * @LastEditors: yb001
 */
const app = getApp()

Page({
  data: {
    areaList: {
      province_list: {
        110000: '北京市',
        120000: '天津市'
      },
      city_list: {
        110100: '北京市',
        110200: '县',
        120100: '天津市',
        120200: '县'
      },
      county_list: {
        110101: '东城区',
        110102: '西城区',
        110105: '朝阳区',
        110106: '丰台区',
        120101: '和平区',
        120102: '河东区',
        120103: '河西区',
        120104: '南开区',
        120105: '河北区'
      }
    },
    imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
  },
  onLoad: function () {
    
  },
  onSubmit(event) {
    console.log(event.detail)
  },
  onClickIcon(event) {
    console.log(event.detail)
  },
  onClickButton(event) {
    console.log(event.detail)
  }
})
