import React, { useState } from "react"
import "./index.css"
import { Layout, Menu } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import routes, { rootSubmenuKeys, routesList } from "../routes"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom"

console.log(routesList, 1111111111)
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
const Content = ({ children }) => (
  <Layout.Content children={children} className="site-layout-content" />
)

const Footer = () => {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      React 版后台 ©2021 Created by EBuy
    </Layout.Footer>
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
  let location = useLocation()

  /**
   * 页面刷新初始值,selectedKeys,openKeys
   */
  console.log(location, 44444444)
  let pathname = location.pathname
  // 怎么解决 /order/:id 这种路径的匹配  当然如果重新用name就没问题
  let route = routes.find(
    (i) =>
      i.path === pathname ||
      (i.children && i.children.find((c) => c.path === pathname))
  )
  const [selectedKeys, setSelectedKeys] = useState((route && [pathname]) || [])
  const [openKeys, setOpenKeys] = useState((route && [route.name]) || [])

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key))
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
  const onClick = (e) => {
    setSelectedKeys([e.key])
  }

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">EBuy</div>
      <Menu
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onClick={onClick}
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
