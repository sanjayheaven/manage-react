import { useState } from "react"

const useBoonlean = (init) => {
  const [state, setState] = useState(init)
  const toggle = () => setState(!state)
  const setTrue = () => setState(true)
  const setFalse = () => setState(false)
  return [state, { setTrue, setFalse, toggle }]
}
export default useBoonlean
