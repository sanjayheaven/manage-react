import React, { useState } from "react"

export default (init) => {
  const [value, setValue] = useState(init)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange,
  }
}
