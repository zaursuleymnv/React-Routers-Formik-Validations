import React from 'react'
import { Link } from 'react-router-dom'

function Blog404() {
  return (
    <div className="container">
      <div className="mt-5">
        <h1>Blog Page is not found!</h1>
        <Link to="/blog">
            <h2>Back to blog page</h2>
        </Link>
      </div>
    </div>
  )
}

export default Blog404
