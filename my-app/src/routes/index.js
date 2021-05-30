import React from "react"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons"
import { OrderInfo, OrderDetail } from "../pages/order/index"
const routes = [
  {
    path: "/",
    name: "首页",
    icon: <UserOutlined />,
    component: <VideoCameraOutlined />,
  },
  {
    path: "/order",
    name: "订单管理",
    icon: <UserOutlined />,
    component: <VideoCameraOutlined />,
    children: [
      {
        path: "/order/orderInfo",
        name: "订单列表",
        icon: <OrderInfo />,
      },
      {
        path: "/order/:id",
        name: "订单详情",
        icon: <UserOutlined />,
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
