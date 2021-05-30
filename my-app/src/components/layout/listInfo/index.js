import React from "react"
import { Card, Table, Button, Row, Col } from "antd"
import SelectName from "../../select/selectName"

export default ({ Top, tableProps }) => {
  return (
    <div>
      <Card style={{ marginBottom: 20 }}>{<Top />}</Card>
      <Card>
        <Table {...tableProps} />
      </Card>
    </div>
  )
}
