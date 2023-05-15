import React from 'react'
import { useParams } from 'react-router-dom'

function PostDetail() {

    const { url } = useParams()

  return (
    <div className="container">
      <h1>Post Page = {url}</h1>
    </div>
  )
}

export default  PostDetail
