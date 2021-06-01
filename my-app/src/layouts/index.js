import React, { useState } from "react"
import "./index.css"
import { Layout, Menu } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import routes from "../routes"
import NoMatch from "../pages/404"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom"

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
    </Layout.Header>
  )
}

const createRoutesList = (routes) => {
  return routes
    .reduce((acc, item) => {
      acc.push(
        <Route
          key={item.path}
          path={item.path}
          exact={item.exact}
          children={item.component}
        ></Route>
      )
      if (item.children) {
        let children = createRoutesList(item.children)
        acc = [...acc, ...children]
        return acc
      }
      return acc
    }, [])
    .concat([<Route key="*" path="*" children={<NoMatch />}></Route>])
}
// console.log(createRoutesList(routes), 11111)
const createRoutesMenu = (routes) => {
  return routes.map(
    (item) =>
      (item.children && (
        <Menu.SubMenu key={item.path} icon={item.icon} title={item.name}>
          {createRoutesMenu(item.children)}
        </Menu.SubMenu>
      )) || (
        <Menu.Item key={item.path} icon={item.icon}>
          {/* <MenuLink {...item}></MenuLink> */}
          {item.name}
        </Menu.Item>
      )
  )
}
const MenuLink = (props) => {
  let match = useRouteMatch({
    path: props.path,
    exact: props.exact,
  })
  let { url } = useRouteMatch()
  return (
    <Link style={{ color: "white" }} to={props.path}>
      {props.name}
    </Link>
  )
}
console.log(createRoutesMenu(routes))
const Sider = ({ collapsed = false }) => {
  // let urlMatch = useRouteMatch()
  // 要高量菜单项
  // console.log("看看匹配的路由", urlMatch)
  const [selectedKeys, setSelectedKeys] = useState()
  const [openKeys, setOpenKeys] = useState()
  const onOpenChange = (value) => {
    console.log(value, 111)
    setOpenKeys(value[value.length - 1])
  }
  const onClick = (value) => {
    setSelectedKeys(value.key)
    console.log(value, 222)
  }
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">Sanjay</div>
      {/* <SideMenu></SideMenu> */}
      <Menu
        selectedKeys={selectedKeys}
        onClick={onClick}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        theme="dark"
        mode="inline"
      >
        {createRoutesMenu(routes)}
      </Menu>
    </Layout.Sider>
  )
}

export default (props) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    // <Router>
    <Layout className="layout">
      <Sider collapsed={collapsed} />
      <Layout className="site-layout">
        <Header
          collapsed={collapsed}
          setCollapsed={() => setCollapsed(!collapsed)}
        />
        <Layout.Content>
          <div className="site-layout-content">
            {/* <Switch>{createRoutesList(routes)}</Switch> */}
          </div>
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
    // </Router>
  )
}
