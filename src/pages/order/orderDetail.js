import React from "react"
import { useParams } from "react-router-dom"
export default () => {
  let { id } = useParams()
  console.log(111111111111, id)
  return <div>Now showing post {id}</div>
}
