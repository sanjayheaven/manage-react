import React, { useState } from "react"
import "./index.css"
import { Layout, Menu } from "antd"
const { Header, Content, Footer, Sider } = Layout
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons"

const FooterNew = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      React 版后台 ©2021 Created by Sanjay
    </Footer>
  )
}

const HeaderNew = ({ collapsed, setCollapsed }) => {
  return (
    <Header className="site-layout-header" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: setCollapsed,
      })}
    </Header>
  )
}

const SiderMenu = ({ collapsed = false }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">Sanjay</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default (props) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout className="layout">
      <SiderMenu collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderNew
          collapsed={collapsed}
          setCollapsed={() => setCollapsed(!collapsed)}
        />
        <Content className="site-layout-content">{props.children}</Content>
        <FooterNew />
      </Layout>
    </Layout>
  )
}
