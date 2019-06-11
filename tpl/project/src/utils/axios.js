/*
 * @Description: HTTP库
 * @Author: yb001
 * @Date: 2019-06-10 11:32:08
 * @LastEditTime: 2019-06-10 18:00:54
 * @LastEditors: yb001
 */

const defaultConfig = {
  base: "/",
  header: {
    "content-type": "application/json"
  },
  method: "GET",
  dataType: "json"
}

const dispatchRequest = function(config) {
  const { base, url, data, method, header, ...options } = config
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.base + config.url,
      data: config.data,
      method: config.method,
      header: config.header,
      ...options,
      complete: res => {
        resolve(res)
      }
    })
  })
}

/**
 * 拦截器实例
 */
class InterceptorManager {
  constructor() {
    this.fulfilled = null
    this.rejected = null
  }

  use(fulfilled, rejected) {
    this.fulfilled = fulfilled
    this.rejected = rejected
  }
}

/**
 * 请求实例
 */
class Axios {
  constructor(config) {
    this.config = config
    this.interceptors = {
      response: new InterceptorManager()
    }
  }

  create(instanceConfig) {
    this.config = {
      ...this.config,
      ...instanceConfig
    }
    return this
  }

  request(options) {
    const { config, interceptors } = this
    const requsetOptions = {
      ...config,
      ...options
    }
    const promise = dispatchRequest(requsetOptions).then(
      interceptors.response.fulfilled,
      interceptors.response.rejected
    )
    return promise
  }
}

function createInstance() {
  const instanse = new Axios(defaultConfig)
  return instanse
}

const axios = createInstance()

export default axios
