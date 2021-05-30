import React from "react"
export default () => {
  let { id } = useParams()
  return <div>Now showing post {id}</div>
}
