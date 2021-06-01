import React, { useState } from "react"
import "./index.css"
import { Layout, Menu } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import routes, { rootSubmenuKeys } from "../routes"
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
      React 版后台 ©2021 Created by EBuy
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
      let children = createRoutesList(item.children || [])
      return [...acc, ...children]
    }, [])
    .concat([<Route key="*" path="*" children={<NoMatch />}></Route>])
}
const createRoutesMenu = (routes) => {
  return routes
    .map((item) => {
      if (item.hidden) return null
      if (item.children) {
        return (
          <Menu.SubMenu
            key={item.name}
            icon={item.icon}
            title={item.title}
            children={createRoutesMenu(item.children)}
          ></Menu.SubMenu>
        )
      }
      return (
        <Menu.Item key={item.name} icon={item.icon}>
          {/* <MenuLink {...item}></MenuLink> */}
          {item.title}
        </Menu.Item>
      )
    })
    .filter((i) => i)
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
  const [selectedKeys, setSelectedKeys] = useState([])
  const [openKeys, setOpenKeys] = useState([])
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key))
    if (!rootSubmenuKeys.includes(latestOpenKey)) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
    if (!latestOpenKey) return
    let lastOpenSubmenu = routes.find((i) => i.name === latestOpenKey)
    if (lastOpenSubmenu.children.length) {
      setSelectedKeys([lastOpenSubmenu.children[0].name])
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
      >
        {createRoutesMenu(routes)}
      </Menu>
    </Layout.Sider>
  )
}

export default () => {
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
