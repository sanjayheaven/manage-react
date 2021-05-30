import React from "react"
import { UserOutlined } from "@ant-design/icons"
import { OrderInfo, OrderDetail } from "../pages/order/index"
const routes = [
  {
    path: "/",
    name: "首页",
    exact: true,
    icon: <UserOutlined />,
    component: <OrderInfo />,
  },
  {
    path: "/order",
    name: "订单管理",
    icon: <UserOutlined />,
    // component: <UserOutlined />,
    children: [
      {
        path: "/order/orderInfo",
        name: "订单列表",
        icon: <UserOutlined />,
        component: <OrderInfo />,
      },
      {
        path: "/order/:id",
        name: "订单详情",
        hidden: true,
        icon: <UserOutlined />,
        component: <OrderDetail />,
      },
    ],
  },
]

export const rootSubmenuKeys = routes
  .map((item) => {
    return (item.children && item.children.length && item.path) || ""
  })
  .filter((i) => i)
export default routes
