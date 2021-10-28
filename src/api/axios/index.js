const axios = require("axios")
const config = require("../../config/env_config")

const instance = axios.create({
  baseURL: config.instance.baseURL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
})

instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    hideLoading()
    let { method } = response.config
    if (["post", "put"].includes(method)) {
      $u1_message.success((isEn && "Success!") || "操作成功!")
      // console.log(response, 2222222777171)
    }
    return response.data
  },
  function (error) {
    let info = {}
    if (!error.response) {
      info.code = 404
      info.message = "网络连接错误,请稍等"
      info.message_en = "Network Error"
    } else {
      info.code = error.response.code
      info.message = error.response.data.message
      info.message_en = error.response.data.message_en
    }
    return Promise.reject(info)
  }
)
module.export = instance
