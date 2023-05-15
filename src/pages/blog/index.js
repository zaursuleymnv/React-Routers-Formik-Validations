import React from 'react'
import { Outlet } from 'react-router-dom'

function BlogLayout() {
  return (
    <div>
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  )
}

export default BlogLayout
