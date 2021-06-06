import { useState } from "react"

const useBind = (init) => {
  const [value, setValue] = useState(init)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange,
  }
}
export default useBind
