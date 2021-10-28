const pro = {
  instance: { baseURL: "" },
}

const dev = {
  instance: { baseURL: "http://localhost:3098/api/v1/manage" }, // 批发
}

const test = {
  instance: { baseURL: "" },
  manulUrl: "https://test.onlinefood.sg/pos/manual/index.html",
}

const env = process.env.NODE_ENV

module.exports = (() => {
  console.log(env, "启动环境")
  if (env == "development") {
    return dev
  } else if (env == "test") {
    return test
  } else {
    return pro
  }
})()
