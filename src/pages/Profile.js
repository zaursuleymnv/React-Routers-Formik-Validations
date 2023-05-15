import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

function Profile() {

    const {setUser, user} = useAuth()

    const logoutHandle = () => {
        setUser(false)
    }
    
  return (
    <div className='container'>
       <div className="mt-5">
        <h1>Profile Page</h1>
        {!user && <Link to={'/auth/login'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Log in</Link>}
        {user && <button onClick={logoutHandle} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Log out</button>}
      </div>
    </div>
  )
}

export default Profile
