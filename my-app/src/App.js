import React from "react"
import "antd/dist/antd.css" // 引入ant design 样式

// 语言配置
import zhCN from "antd/lib/locale/zh_CN"
import { ConfigProvider } from "antd"

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
