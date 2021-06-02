import React from "react"
import { Select, Input } from "antd"
import "./index.css"
export default ({ title = "", required = false, ...props }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {title && (
        <div className="title">
          {title}
          {required && <span style={{ color: "red" }}>*</span>}
        </div>
      )}
      <Input placeholder="请输入" {...props}></Input>
    </div>
  )
}
