import React from "react"
import { UserOutlined } from "@ant-design/icons"
import { OrderInfo, OrderDetail } from "../pages/order/index"
const routes = [
  {
    path: "/",
    name: "index",
    title: "首页",
    exact: true,
    icon: <UserOutlined />,
    component: <OrderInfo />,
  },
  {
    path: "/order",
    name: "order",
    title: "订单管理",
    icon: <UserOutlined />,
    component: <UserOutlined />,
    children: [
      {
        path: "/order/orderInfo",
        name: "orderInfo",
        title: "订单列表",
        icon: <UserOutlined />,
        component: <OrderInfo />,
      },
      {
        path: "/order/orderOther",
        name: "orderOther",
        title: "订单其他",
        icon: <UserOutlined />,
        component: <UserOutlined />,
      },
      {
        path: "/order/:id",
        name: "orderDetail",
        title: "订单详情",
        hidden: true,
        icon: <UserOutlined />,
        component: <OrderDetail />,
      },
    ],
  },
  {
    path: "/product",
    name: "product",
    title: "产品管理",
    icon: <UserOutlined />,
    component: <UserOutlined />,
    children: [
      {
        path: "/product/productInfo",
        name: "productInfo",
        title: "产品列表",
        icon: <UserOutlined />,
        component: <UserOutlined />,
      },
      {
        path: "/product/productOther",
        name: "productOther",
        title: "产品其他",
        icon: <UserOutlined />,
        component: <UserOutlined />,
      },
      {
        path: "/product/:id",
        name: "productDetail",
        title: "订单详情",
        hidden: true,
        icon: <UserOutlined />,
        component: <UserOutlined />,
      },
    ],
  },
]

export const rootSubmenuKeys = routes
  .map((item) => {
    return (item.children && item.children.length && item.name) || ""
  })
  .filter((i) => i)
export default routes
