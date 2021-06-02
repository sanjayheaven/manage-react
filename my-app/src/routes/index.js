import React from "react"
import { UserOutlined } from "@ant-design/icons"
import { OrderInfo, OrderDetail } from "../pages/order/index"
import { Route } from "react-router-dom"
import NoMatch from "../pages/404"

const PageView = ({ children, ...props }) => {
  return (
    <div>
      hello
      {children}
    </div>
  )
}
const routes = [
  {
    path: "/",
    name: "index",
    title: "首页",
    icon: <UserOutlined />,
    component: PageView,
  },
  {
    path: "/order",
    name: "order",
    title: "订单管理",
    icon: <UserOutlined />,
    component: PageView,
    children: [
      {
        path: "/order/orderInfo",
        name: "orderInfo",
        title: "订单列表",
        icon: <UserOutlined />,
        component: OrderInfo,
      },
      {
        path: "/order/orderOther",
        name: "orderOther",
        title: "订单其他",
        icon: <UserOutlined />,
        component: UserOutlined,
      },
      {
        path: "/order/:id",
        name: "OrderDetail",
        title: "订单详情",
        hidden: true,
        icon: <UserOutlined />,
        component: OrderDetail,
      },
    ],
  },
  {
    path: "/product",
    name: "product",
    title: "产品管理",
    icon: <UserOutlined />,
    component: PageView,
    children: [
      {
        path: "/product/productInfo",
        name: "productInfo",
        title: "产品列表",
        icon: <UserOutlined />,
        component: UserOutlined,
      },
      {
        path: "/product/:id",
        name: "productDetail",
        title: "产品详情",
        hidden: true,
        icon: <UserOutlined />,
        component: PageView,
      },
    ],
  },
]

export const rootSubmenuKeys = routes
  .map((item) => {
    return (item.children && item.children.length && item.path) || ""
  })
  .filter((i) => i)

const createRoutesList = (routes) => {
  const normalRoutes = (items) => {
    return items.reduce((acc, item) => {
      acc.push(
        <Route
          key={item.path}
          path={item.path}
          exact
          children={(props) => {
            console.log(props, 1111)
            return <item.component />
          }}
        />
      )
      let children = normalRoutes(item.children || [])
      return [...acc, ...children]
    }, [])
  }
  return normalRoutes(routes).concat([
    <Route key="*" path="*" children={<NoMatch />}></Route>,
  ])
}
const createFlatRoutes = (routes) => {
  // 扁平化
  return routes.reduce((acc, item) => {
    acc.push(item)
    let children = createFlatRoutes(item.children || [])
    return [...acc, ...children]
  }, [])
}
export const routesList = createRoutesList(routes)
export const flatRoutes = createFlatRoutes(routes)
export const submenuRoutes = routes.map((item) => !item.children)

export default routes
