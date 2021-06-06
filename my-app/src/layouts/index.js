import React, { useState } from "react"
import "./index.css"
import { Layout, Menu, Avatar, Dropdown } from "antd"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons"
import routes, { rootSubmenuKeys, routesList, flatRoutes } from "../routes"
import {
  BrowserRouter as Router,
  Switch,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom"

const AvatarMenu = () => {
  return (
    <div>
      <Dropdown
        trigger={["click"]}
        overlay={
          <Menu>
            <Menu.Item key="1">退出登录</Menu.Item>
          </Menu>
        }
      >
        <Avatar size="large" icon={<UserOutlined />}></Avatar>
      </Dropdown>
    </div>
  )
}
const Header = ({ collapsed, setCollapsed }) => {
  return (
    <Layout.Header className="site-layout-header" style={{ padding: 0 }}>
      <div className="header">
        <div>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: setCollapsed,
            }
          )}
        </div>
        <AvatarMenu />
      </div>
    </Layout.Header>
  )
}
const Content = ({ children }) => (
  <Layout.Content children={children} className="site-layout-content" />
)

const Footer = () => {
  return (
    <Layout.Footer
      style={{ textAlign: "center" }}
      children="React 版后台 ©2021 Created by EBuy"
    />
  )
}

const createRoutesMenu = (routes) => {
  return routes
    .map((item) => {
      if (item.hidden) return null
      return (
        (item.children && (
          <Menu.SubMenu
            key={item.name}
            icon={item.icon}
            title={item.title}
            children={createRoutesMenu(item.children)}
          />
        )) || (
          <Menu.Item
            key={item.name}
            icon={item.icon}
            children={<MenuLink {...item} />}
          />
        )
      )
    })
    .filter((i) => i)
}

const MenuLink = (props) => {
  return (
    <Link style={{ color: "white" }} to={props.path} children={props.title} />
  )
}

const Sider = ({ collapsed = false }) => {
  let history = useHistory()
  console.log(history, 222382883828382)
  let location = useLocation()
  /**
   * 页面刷新初始值,selectedKeys,openKeys
   */
  let pathname = location.pathname
  // 怎么解决 /order/:id 这种路径的匹配  当然如果重新用name就没问题
  // 要为selectKey找到name
  let route = flatRoutes.find((i) => i.path == pathname) || {}
  let subRoute =
    routes.find(
      (i) =>
        i.path == pathname ||
        (i.children && i.children.find((ch) => ch.path == pathname))
    ) || {}
  // 怎么解决 order/:id 这种样子的 动态路由
  console.log(pathname, route, subRoute, 222333)
  const [selectedKeys, setSelectedKeys] = useState([route.name])
  const [openKeys, setOpenKeys] = useState([subRoute.name])

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key))
    console.log("openooooo", 11233, latestOpenKey, rootSubmenuKeys)
    if (!rootSubmenuKeys.includes(latestOpenKey)) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
    if (!latestOpenKey) return
    let lastOpenSubmenu = routes.find((i) => i.name === latestOpenKey)
    if (lastOpenSubmenu && lastOpenSubmenu.children) {
      let name = lastOpenSubmenu.children[0].name
      let path = lastOpenSubmenu.children[0].path
      setSelectedKeys([name]) // 高亮第一个
      history.push(path) // 跳转第一个
    }
  }
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">EBuy</div>
      <Menu
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onClick={(e) => setSelectedKeys([e.key])}
        onOpenChange={onOpenChange}
        theme="dark"
        mode="inline"
        children={createRoutesMenu(routes)}
      />
    </Layout.Sider>
  )
}

export default () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Router>
      <Layout className="layout">
        <Sider collapsed={collapsed} />
        <Layout className="site-layout">
          <Header
            collapsed={collapsed}
            setCollapsed={() => setCollapsed(!collapsed)}
          />
          <Content children={<Switch children={routesList} />} />
          <Footer />
        </Layout>
      </Layout>
    </Router>
  )
}
