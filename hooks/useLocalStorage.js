import { useState } from "react"

const useLocalStorage = (key, setValue) => {
  const [state, setState] = useState(setValue)

  const onChange = (e) => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange,
  }
}
export default useLocalStorage
