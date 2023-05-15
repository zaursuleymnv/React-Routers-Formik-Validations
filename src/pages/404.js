import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div>
      <div className="mt-5">
        <h1>Page is not found!</h1>
        <Link to="/">
            <h2>Back to main page</h2>
        </Link>
      </div>
    </div>
  )
}

export default Page404
