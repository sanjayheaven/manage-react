import React from "react"
import { Card, Table, Button, Row, Col } from "antd"
import SelectName from "../../components/select/selectName"
import { Switch, Route, Link, useRouteMatch } from "react-router-dom"
const dataSource = [
  { key: "1", name: "胡彦斌", age: 32, address: "西湖区湖底公园1号" },
  { key: "2", name: "胡彦祖", age: 42, address: "西湖区湖底公园1号" },
]

const columns = [
  { title: "姓名", dataIndex: "name", key: "name" },
  { title: "年龄", dataIndex: "age", key: "age" },
  { title: "住址", dataIndex: "address", key: "address" },
  {
    title: "操作",
    dataIndex: "action",
    key: "action",
    render: (text, record) => {
      let { url } = useRouteMatch()
      console.log(url, "准备跳转详情", record.key)
      return (
        <div>
          <Link to={`/order/${record.key}`}>
            <Button type="primary">Detail</Button>
          </Link>
        </div>
      )
    },
  },
]
import Info from "../../components/layout/listInfo/index.js"
export default () => {
  const Top = () => {
    return (
      <Row gutter={[24, 24]}>
        <Col span="6">
          <SelectName title="单号"></SelectName>
        </Col>
      </Row>
    )
  }
  return <Info Top={Top} tableProps={{ dataSource, columns }}></Info>
}
