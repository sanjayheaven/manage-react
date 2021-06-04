import React from "react"
import { Card, Table, Button, Row, Col } from "antd"
import SelectName from "../../select/selectName"

const FilterArea = ({ children }) => {
  return (
    <Card style={{ marginBottom: 20 }}>
      <Row gutter={[24, 24]}>
        <Col span="6">{children}</Col>
      </Row>
    </Card>
  )
}
const TableArea = (props) => {
  return (
    <Card>
      <Table {...props} />
    </Card>
  )
}
export default ({ filterProps, tableProps }) => {
  return (
    <div>
      <FilterArea style={{ marginBottom: 20 }} {...filterProps} />
      <TableArea {...tableProps} />
    </div>
  )
}
