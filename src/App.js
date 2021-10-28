import React from "react"
import "antd/dist/antd.css" // 引入ant design 样式
// 语言配置
import zhCN from "antd/lib/locale/zh_CN"
import { ConfigProvider } from "antd"

// 基本布局
import BasicLayout from "./layouts"

export default () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ height: "100vh" }}>
        <BasicLayout></BasicLayout>
      </div>
    </ConfigProvider>
  )
}
