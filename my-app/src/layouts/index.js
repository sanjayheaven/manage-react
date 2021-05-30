import React, { useState } from "react"
import "./index.css"
import { Layout, Menu, Card } from "antd"

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons"

const Footer = () => {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      React 版后台 ©2021 Created by Sanjay
    </Layout.Footer>
  )
}

const Header = ({ collapsed, setCollapsed }) => {
  return (
    <Layout.Header className="site-layout-header" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: setCollapsed,
      })}
      {/* <div>
        <UserOutlined style={{ fontSize: 32 }} />
      </div> */}
    </Layout.Header>
  )
}
import routes from "../routes"

const createRoutesList = (routes) => {
  return routes.map(
    (item) =>
      (item.children && (
        <Route key={item.path} path={item.path} children={item.component}>
          {createRoutesList(item.children)}
        </Route>
      )) || (
        <Route
          key={item.path}
          path={item.path}
          exact={item.exact}
          children={item.component}
        ></Route>
      )
  )
}

const createRoutesMenu = (routes) => {
  return routes.map(
    (item) =>
      (item.children && (
        <Menu.SubMenu key={item.path} icon={item.icon} title={item.name}>
          {createRoutesMenu(item.children)}
        </Menu.SubMenu>
      )) || (
        <Menu.Item key={item.path} icon={item.icon}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      )
  )
}

const Sider = ({ collapsed = false }) => {
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">Sanjay</div>
      <Menu theme="dark" mode="inline">
        {createRoutesMenu(routes)}
      </Menu>
    </Layout.Sider>
  )
}

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

console.log(createRoutesList(routes), 111111)

export default (props) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout className="layout">
      <Router>
        <Sider collapsed={collapsed} />
        <Layout className="site-layout">
          <Header
            collapsed={collapsed}
            setCollapsed={() => setCollapsed(!collapsed)}
          />
          <Layout.Content>
            <div className="site-layout-content">
              <Switch>{createRoutesList(routes)}</Switch>
            </div>
          </Layout.Content>
          <Footer />
        </Layout>
      </Router>
    </Layout>
  )
}
