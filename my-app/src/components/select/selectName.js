import React from "react"
import { Select, Input } from "antd"
import "./index.css"
export default ({ title = "", ...props }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {title && <div className="title">{title}</div>}
      <Input placeholder="请输入" {...props}></Input>
    </div>
    
  )
}