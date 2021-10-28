import React, { useState } from "react"
import { Card, Table, Button, Row, Col } from "antd"
import SelectName from "../../components/select/selectName"
import { Switch, Route, Link, useRouteMatch } from "react-router-dom"
import { Counter } from '../../store/counter'

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
      return (
        <Link to={`/order/${record.key}`}>
          <Button type="primary">Detail</Button>
        </Link>
      )
    },
  },
]

export default () => {
  const Filter = () => {
    return (
      <Card style={{ marginBottom: 20 }}>
        <Row gutter={[24, 24]}>
          <Col span="6">
            <SelectName title="单号" />
          </Col>
        </Row>
      </Card>
    )
  }
  return (
    <div>
      <Counter></Counter>
      <Filter></Filter>
      <Card>
        <Table dataSource={dataSource} columns={columns}></Table>
      </Card>
    </div>
  )
}
