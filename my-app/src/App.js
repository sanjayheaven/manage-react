import React, { useState } from "react"
// import logo from "./logo.svg";
// import "./App.css";
import "antd/dist/antd.css" // 引入ant design 样式
// import WelcomeFunc from "./components/welcomeFunc.js";
// import WelcomeClass from "./components/welcomeClass.js";

// 语言配置
import zhCN from "antd/lib/locale/zh_CN"
import { Button, ConfigProvider } from "antd"

// 基本布局
import BasicLayout from "./layouts"

// 路由菜单配置引入
import routes from "./routes/index"
export default () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div
        style={{
          height: "100vh",
        }}
      >
        <BasicLayout>
          <div>hello</div>
        </BasicLayout>
      </div>
    </ConfigProvider>
  )
}
