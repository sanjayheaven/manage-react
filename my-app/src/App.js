import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import "antd/dist/antd.css"; // 引入ant design 样式
// import WelcomeFunc from "./components/welcomeFunc.js";
// import WelcomeClass from "./components/welcomeClass.js";

// 语言配置
import zhCN from "antd/lib/locale/zh_CN";
import { Button, ConfigProvider } from "antd";

// 抽屉设置

// 布局
// vue的时候看到过这种布局，当时引入没用起来。
// 需要去看去理解这种布局 以后直接用这个布局
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
// 引入content组件
// import WelcomeClass from "./components/welcomeClass.js";

// 路由菜单配置引入
import routes from "./routes/index";
export default () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div
        style={{
          height: "100vh",
        }}
      >
        
      <ProLayout >
        <PageContainer content="欢迎使用 ProLayout 组件">
          Hello World
          <Button>按钮</Button>
        </PageContainer>
      </ProLayout>
      </div>
    </ConfigProvider>
  );
};
